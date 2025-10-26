const MODE_LOGIN = 'login';
const MODE_REGISTER = 'register';
const CAPTCHA_LENGTH = 6;
const CAPTCHA_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

const state = {
  mode: MODE_LOGIN,
  captcha: {
    [MODE_LOGIN]: { value: '', verified: false },
    [MODE_REGISTER]: { value: '', verified: false },
  },
};

const forms = Array.from(document.querySelectorAll('.auth-form'));
const toggleButtons = Array.from(document.querySelectorAll('.mode-toggle__btn'));
const switchButtons = Array.from(document.querySelectorAll('[data-switch]'));
const captions = Array.from(document.querySelectorAll('[data-mode-text]'));
const captchaSections = new Map();

function createCaptchaValue() {
  return Array.from({ length: CAPTCHA_LENGTH }, () => {
    const index = Math.floor(Math.random() * CAPTCHA_CHARS.length);
    return CAPTCHA_CHARS[index];
  }).join('');
}

function drawCaptcha(canvas, value) {
  const context = canvas.getContext('2d');
  if (!context) return;

  const deviceScale = window.devicePixelRatio || 1;
  const logicalWidth = canvas.width;
  const logicalHeight = canvas.height;

  canvas.width = logicalWidth * deviceScale;
  canvas.height = logicalHeight * deviceScale;
  canvas.style.width = `${logicalWidth}px`;
  canvas.style.height = `${logicalHeight}px`;

  context.setTransform(deviceScale, 0, 0, deviceScale, 0, 0);
  context.clearRect(0, 0, logicalWidth, logicalHeight);

  context.fillStyle = '#0f172a';
  context.fillRect(0, 0, logicalWidth, logicalHeight);

  context.font = '28px "Inter", sans-serif';
  context.fillStyle = '#38bdf8';
  context.textAlign = 'center';
  context.textBaseline = 'middle';

  const characters = value.split('');
  characters.forEach((character, index) => {
    const jitterX = (Math.random() - 0.5) * 12;
    const jitterY = (Math.random() - 0.5) * 10;
    context.save();
    context.translate(logicalWidth / 2 + jitterX - ((characters.length - 1) * 18) / 2 + index * 18, logicalHeight / 2 + jitterY);
    const angle = (Math.random() - 0.5) * 0.4;
    context.rotate(angle);
    context.fillText(character, 0, 0);
    context.restore();
  });

  context.lineWidth = 1.1;
  context.strokeStyle = 'rgba(148, 163, 184, 0.45)';
  for (let i = 0; i < 3; i += 1) {
    context.beginPath();
    context.moveTo(Math.random() * logicalWidth, Math.random() * logicalHeight);
    context.lineTo(Math.random() * logicalWidth, Math.random() * logicalHeight);
    context.stroke();
  }
}

function updateCaptchaStatus(mode, status, message) {
  const section = captchaSections.get(mode);
  if (!section) return;
  section.status.textContent = message || '';
  if (status) {
    section.status.dataset.status = status;
  } else {
    delete section.status.dataset.status;
  }
}

function resetCaptcha(mode) {
  const section = captchaSections.get(mode);
  if (!section) return;

  const newValue = createCaptchaValue();
  state.captcha[mode].value = newValue;
  state.captcha[mode].verified = false;
  section.input.value = '';
  updateCaptchaStatus(mode, null, '');
  drawCaptcha(section.canvas, newValue);
}

function verifyCaptcha(mode) {
  const section = captchaSections.get(mode);
  if (!section) return;

  const typed = section.input.value.trim();
  if (!typed) {
    state.captcha[mode].verified = false;
    updateCaptchaStatus(mode, 'error', 'Vui lòng nhập chuỗi ký tự.');
    return;
  }

  if (typed === state.captcha[mode].value) {
    state.captcha[mode].verified = true;
    updateCaptchaStatus(mode, 'success', 'CAPTCHA hợp lệ. Cảm ơn bạn!');
  } else {
    state.captcha[mode].verified = false;
    updateCaptchaStatus(mode, 'error', 'Chuỗi không khớp, hãy thử lại.');
  }
}

function syncModeText() {
  captions.forEach((element) => {
    const { modeText } = element.dataset;
    element.style.display = modeText === state.mode ? 'block' : 'none';
  });
}

function setActiveMode(newMode) {
  if (state.mode === newMode) return;
  state.mode = newMode;

  toggleButtons.forEach((button) => {
    const isActive = button.dataset.mode === newMode;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-selected', String(isActive));
  });

  forms.forEach((form) => {
    const isActive = form.dataset.mode === newMode;
    form.classList.toggle('is-active', isActive);
    if (isActive) {
      const firstInput = form.querySelector('input');
      if (firstInput) {
        firstInput.focus({ preventScroll: true });
      }
    }
    const feedback = form.querySelector('.auth-form__feedback');
    if (feedback) {
      feedback.textContent = '';
      delete feedback.dataset.status;
    }
  });

  syncModeText();
  resetCaptcha(newMode);
}

function attachFormHandlers() {
  forms.forEach((form) => {
    const { mode } = form.dataset;
    const feedback = form.querySelector('.auth-form__feedback');

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      if (!state.captcha[mode].verified) {
        feedback.textContent = 'Vui lòng hoàn thành CAPTCHA trước khi tiếp tục.';
        feedback.dataset.status = 'error';
        return;
      }

      feedback.dataset.status = 'success';
      feedback.textContent = mode === MODE_LOGIN ? 'Đăng nhập thành công! (minh họa)' : 'Tạo tài khoản thành công! (minh họa)';

      form.reset();
      resetCaptcha(mode);
    });
  });
}

function attachToggleHandlers() {
  toggleButtons.forEach((button) => {
    button.addEventListener('click', () => {
      setActiveMode(button.dataset.mode);
    });
  });

  switchButtons.forEach((button) => {
    button.addEventListener('click', () => {
      setActiveMode(button.dataset.switch);
    });
  });
}

function initializeCaptchaSections() {
  document.querySelectorAll('.captcha').forEach((section) => {
    const mode = section.dataset.mode;
    const canvas = section.querySelector('.captcha__canvas');
    const input = section.querySelector('.captcha__input');
    const status = section.querySelector('.captcha__status');
    const verifyButton = section.querySelector('[data-action="verify"]');
    const refreshButton = section.querySelector('[data-action="refresh"]');

    captchaSections.set(mode, { canvas, input, status });

    verifyButton.addEventListener('click', () => {
      verifyCaptcha(mode);
    });

    refreshButton.addEventListener('click', () => {
      resetCaptcha(mode);
      input.focus();
    });

    input.addEventListener('input', () => {
      if (state.captcha[mode].verified) {
        state.captcha[mode].verified = false;
        updateCaptchaStatus(mode, null, '');
      }
    });

    input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        verifyCaptcha(mode);
      }
    });

    resetCaptcha(mode);
  });
}

function init() {
  attachFormHandlers();
  attachToggleHandlers();
  initializeCaptchaSections();
  syncModeText();
}

init();
