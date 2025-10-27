function Section({ title, children }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="font-display text-xl font-semibold text-slate-900">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-slate-600">{children}</div>
    </section>
  );
}

function Badge({ children }) {
  return (
    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
      {children}
    </span>
  );
}

function ProductDetail({
  product,
  onNavigateBack,
  onNavigateHome,
  onLoginClick,
  onRegisterClick,
}) {
  const {
    name,
    image,
    description,
    price,
    rating,
    isPrescription,
    usage = [],
    ingredients = [],
    indications = [],
    dosage = [],
    contraindications = [],
    sideEffects = [],
    storage = [],
    warnings = [],
    customerReviews = [],
  } = product;

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-5">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onNavigateHome}
              className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-xl font-semibold text-white shadow-soft"
            >
              M
            </button>
            <div>
              <p className="font-display text-xl font-semibold text-slate-900">Medicare</p>
              <p className="text-sm text-slate-500">Trusted pharmacy at your fingertips</p>
            </div>
          </div>

          <nav className="flex flex-wrap items-center gap-6 text-sm font-medium text-slate-600">
            <button type="button" onClick={onNavigateHome} className="transition hover:text-primary">
              Trang chủ
            </button>
            <button type="button" onClick={onNavigateBack} className="transition hover:text-primary">
              Thuốc
            </button>
            <a href="#thong-tin" className="transition hover:text-primary">
              Thông tin
            </a>
            <a href="#danh-gia" className="transition hover:text-primary">
              Đánh giá
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onLoginClick}
              className="rounded-xl border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-600 transition hover:border-primary hover:text-primary"
            >
              Đăng nhập
            </button>
            <button
              type="button"
              onClick={onRegisterClick}
              className="rounded-xl bg-primary px-5 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-primary-dark"
            >
              Đăng ký
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12">
        <button
          type="button"
          onClick={onNavigateBack}
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary-dark"
        >
          <span aria-hidden>←</span>
          Quay lại danh sách thuốc
        </button>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex flex-col gap-6 lg:flex-row">
              <div className="flex items-center justify-center rounded-2xl bg-slate-100 p-6 lg:w-1/2">
                <img src={image} alt={name} className="max-h-72 w-full object-contain" />
              </div>
              <div className="flex flex-1 flex-col justify-between gap-4">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-3">
                    {isPrescription ? <Badge>Thuốc kê đơn</Badge> : <Badge>OTC</Badge>}
                    <span className="text-sm font-semibold text-amber-500">Đánh giá {rating}★</span>
                  </div>
                  <h1 className="font-display text-3xl font-semibold text-slate-900">{name}</h1>
                  <p className="text-sm leading-relaxed text-slate-600">{description}</p>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <p className="text-3xl font-semibold text-primary">{price}</p>
                  <button className="flex-1 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-primary-dark">
                    Thêm vào giỏ hàng
                  </button>
                  <button className="flex-1 rounded-xl border border-primary px-5 py-3 text-sm font-semibold text-primary transition hover:bg-primary/10">
                    Mua ngay
                  </button>
                </div>
              </div>
            </div>
            {warnings && warnings.length > 0 && (
              <div className="mt-8 rounded-2xl border border-amber-300 bg-amber-50 p-6 text-sm text-amber-900">
                <h2 className="font-semibold">Cảnh báo</h2>
                <ul className="mt-3 list-disc space-y-2 pl-4">
                  {warnings.map((warning) => (
                    <li key={warning}>{warning}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="space-y-6" id="thong-tin">
            <Section title="Công dụng">
              {usage.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </Section>
            <Section title="Thành phần">
              {ingredients.map((ingredient) => (
                <p key={ingredient}>{ingredient}</p>
              ))}
            </Section>
            <Section title="Chỉ định">
              {indications.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </Section>
            <Section title="Liều dùng">
              {dosage.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </Section>
            <Section title="Chống chỉ định">
              {contraindications.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </Section>
            <Section title="Tác dụng phụ">
              {sideEffects.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </Section>
            <Section title="Bảo quản">
              {storage.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </Section>
          </div>
        </div>

        <section id="danh-gia" className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="font-display text-2xl font-semibold text-slate-900">Đánh giá từ khách hàng</h2>
              <p className="text-sm text-slate-500">Tổng quan đánh giá {rating}★</p>
            </div>
            <button className="rounded-xl border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-600 transition hover:border-primary hover:text-primary">
              Viết đánh giá
            </button>
          </div>

          <div className="mt-6 space-y-5">
            {customerReviews.length > 0 ? (
              customerReviews.map((review) => (
                <article key={review.author} className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{review.author}</p>
                      <p className="text-xs text-slate-500">{review.date}</p>
                    </div>
                    <span className="text-sm font-semibold text-amber-500">{review.rating}★</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{review.comment}</p>
                </article>
              ))
            ) : (
              <p className="text-sm text-slate-500">Chưa có đánh giá nào cho sản phẩm này.</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default ProductDetail;
