import { useEffect, useMemo, useState } from "react";
import supportIcon from "../assets/icons/support.png.png";
import gearIcon from "../assets/icons/gear.png.png";
import truckIcon from "../assets/icons/truck.png.png";

const featureHighlights = [
  {
    title: "Fast Delivery",
    description:
      "Medication delivered swiftly right to your doorstep without delays.",
    icon: truckIcon,
  },
  {
    title: "Certified Quality",
    description:
      "Only certified pharmacies and licensed professionals are part of our network.",
    icon: gearIcon,
  },
  {
    title: "24/7 Support",
    description:
      "Dedicated care team on standby to answer questions around the clock.",
    icon: supportIcon,
  },
];

const loginFields = [
  {
    id: "email",
    type: "email",
    label: "Email Address",
    placeholder: "Enter your email",
  },
  {
    id: "password",
    type: "password",
    label: "Password",
    placeholder: "Enter your password",
  },
];

const registerFields = [
  {
    id: "fullName",
    type: "text",
    label: "Full Name",
    placeholder: "Enter your full name",
  },
  {
    id: "email",
    type: "email",
    label: "Email Address",
    placeholder: "Enter your email",
  },
  {
    id: "password",
    type: "password",
    label: "Create Password",
    placeholder: "Create a secure password",
  },
  {
    id: "confirmPassword",
    type: "password",
    label: "Confirm Password",
    placeholder: "Re-enter your password",
  },
];

const noop = () => {};

function Auth({ initialMode = "login", onNavigateHome = noop }) {
  const [mode, setMode] = useState(initialMode);

  useEffect(() => {
    setMode(initialMode);
  }, [initialMode]);

  const fields = useMemo(
    () => (mode === "login" ? loginFields : registerFields),
    [mode],
  );

  return (
    <div className="min-h-screen bg-slate-100 font-body text-slate-700">
      <div className="mx-auto flex max-w-5xl flex-col items-center px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex w-full items-center justify-between">
          <button
            type="button"
            onClick={onNavigateHome}
            className="text-sm font-semibold text-primary transition hover:text-primary-dark"
          >
            ← Back to homepage
          </button>
          <div className="flex items-center gap-2 text-primary text-2xl font-semibold">
            <div className="grid h-11 w-11 place-items-center rounded-full bg-primary text-lg font-bold text-white shadow-lg shadow-primary/30">
              M
            </div>
            Medicare
          </div>
        </div>

        <div className="mt-10 flex w-full flex-col overflow-hidden rounded-[32px] bg-white shadow-xl ring-1 ring-black/5 md:flex-row">
          {/* LEFT */}
          <div className="w-full max-w-md p-10">
            <div className="flex rounded-full border border-slate-200 bg-slate-50 p-1 text-sm font-medium text-slate-500">
              <button
                type="button"
                onClick={() => setMode("login")}
                className={`flex-1 rounded-full px-6 py-2 transition ${
                  mode === "login"
                    ? "bg-primary text-white shadow-sm shadow-primary/40 hover:bg-primary-dark"
                    : "text-slate-500 hover:text-primary"
                }`}
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => setMode("register")}
                className={`flex-1 rounded-full px-6 py-2 transition ${
                  mode === "register"
                    ? "bg-primary text-white shadow-sm shadow-primary/40 hover:bg-primary-dark"
                    : "text-slate-500 hover:text-primary"
                }`}
              >
                Register
              </button>
            </div>

            <div className="mt-10 text-center">
              <p className="text-xl font-bold tracking-[0.15em] text-black">
                {mode === "login" ? "Welcome Back!" : "Join Medicare"}
              </p>
              <h1 className="mt-2 text-lg font-display font-semibold text-slate-600">
                {mode === "login"
                  ? "Sign in to your Medicare account"
                  : "Create your account to start receiving care"}
              </h1>
            </div>

            <form className="mt-8 space-y-6">
              {fields.map((field) => (
                <div className="space-y-1" key={`${mode}-${field.id}`}>
                  <label
                    htmlFor={`${mode}-${field.id}`}
                    className="text-sm font-medium text-slate-600"
                  >
                    {field.label}
                  </label>
                  <input
                    id={`${mode}-${field.id}`}
                    type={field.type}
                    placeholder={field.placeholder}
                    className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 shadow-inner shadow-slate-200/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                </div>
              ))}

              {mode === "login" ? (
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <label className="inline-flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary/40"
                    />
                    Remember me
                  </label>
                  <button
                    type="button"
                    className="text-xs font-semibold text-primary hover:text-primary-dark"
                  >
                    Forgot password?
                  </button>
                </div>
              ) : (
                <div className="rounded-xl bg-slate-50 px-4 py-3 text-left text-xs text-slate-500">
                  <p>
                    By creating an account you agree to our{" "}
                    <a
                      href="#terms"
                      className="font-semibold text-primary hover:text-primary-dark"
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      href="#privacy"
                      className="font-semibold text-primary hover:text-primary-dark"
                    >
                      Privacy Policy
                    </a>
                    .
                  </p>
                </div>
              )}

              <button
                type="submit"
                className="w-full rounded-xl bg-primary py-3 text-sm font-semibold text-white shadow-lg shadow-primary/40 transition hover:bg-primary-dark"
              >
                {mode === "login" ? "Login" : "Create account"}
              </button>

              {mode === "login" ? (
                <p className="text-center text-sm text-slate-500">
                  Don&apos;t have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setMode("register")}
                    className="font-semibold text-primary hover:text-primary-dark"
                  >
                    Register here
                  </button>
                </p>
              ) : (
                <p className="text-center text-sm text-slate-500">
                  Already registered?{" "}
                  <button
                    type="button"
                    onClick={() => setMode("login")}
                    className="font-semibold text-primary hover:text-primary-dark"
                  >
                    Login instead
                  </button>
                </p>
              )}
            </form>
          </div>

          {/* RIGHT */}
          <div className="flex flex-1 flex-col justify-between bg-gradient-to-br from-primary via-primary-dark to-primary-light p-10 text-white">
            <div className="space-y-6">
              <div className="relative mx-auto w-50 sm:mx-15 sm:w-60">
                <div className="aspect-square w-full rounded-full bg-white/20"></div>
                <div className="absolute inset-6 rounded-3xl bg-white/90 p-6 shadow-xl">
                  <div className="h-full rounded-2xl bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWhvheeM9tmnDHjS0f-PdpwBZka70JtZEwD6LzUB0X0lHWrdN8')] bg-cover bg-center" />
                </div>
              </div>

              <div className="mx-auto text-center">
                <h2 className="text-2xl font-display font-semibold">
                  Your Health, Our Priority
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-sky-100">
                  Join thousands of satisfied customers who trust Medicare for
                  their pharmaceutical needs. Fast delivery, quality medicines,
                  and professional customer support.
                </p>
              </div>
            </div>

            {/* FEATURES with image icons */}
            <dl className="mt-10 grid gap-6 sm:grid-cols-3">
              {featureHighlights.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl bg-white/10 p-4 text-center shadow-inner shadow-black/10"
                >
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="mx-auto h-12 w-12"
                    loading="lazy"
                  />
                  <dt className="mt-3 text-sm font-semibold text-white">
                    {feature.title}
                  </dt>
                  <dd className="mt-1 text-xs text-sky-100">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4 text-xs text-slate-400 sm:flex-row">
          <span>© 2025 MediCare. All rights reserved.</span>
          <div className="flex items-center gap-3 text-slate-300">
            <a
              href="https://facebook.com"
              className="transition hover:text-primary"
              aria-label="Facebook"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-4 w-4 fill-current"
              >
                <path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.2l-.3 3h-1.9v7A10 10 0 0 0 22 12Z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              className="transition hover:text-primary"
              aria-label="Twitter"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-4 w-4 fill-current"
              >
                <path d="M20.4 6.4c.8-.5 1.4-1.2 1.7-2-.7.4-1.5.8-2.2 1-1.4-1.5-3.8-1.6-5.3-.2-.7.7-1.1 1.6-1.1 2.6v.7c-3.1-.2-6-1.7-7.9-4.2-.3.6-.5 1.3-.5 2 0 1.3.7 2.4 1.7 3.1-.6 0-1.2-.2-1.7-.5v.1c0 1.8 1.3 3.4 3 3.8-.3.1-.7.1-1 .1-.2 0-.5 0-.7-.1.5 1.5 1.9 2.6 3.6 2.6-1.3 1-2.9 1.5-4.5 1.5H4c1.7 1.1 3.8 1.8 6 1.8 7.2 0 11.1-6 11.1-11.2v-.5c.8-.6 1.4-1.2 1.9-2Z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              className="transition hover:text-primary"
              aria-label="Instagram"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-4 w-4 fill-current"
              >
                <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm0 2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3zm11 1.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
