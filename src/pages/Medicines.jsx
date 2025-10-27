const categories = [
  { name: "Pain Relief", count: 24 },
  { name: "Vitamins", count: 18 },
  { name: "Skin Care", count: 12 },
  { name: "Mental Health", count: 9 },
  { name: "Heart Health", count: 14 },
  { name: "Digestive", count: 11 },
  { name: "Immune Support", count: 7 },
  { name: "Personal Care", count: 6 },
];

const filters = {
  categories: [
    "All Categories",
    "Pain Relief",
    "Vitamins",
    "Skin Care",
    "Mental Health",
    "Heart Health",
    "Digestive",
  ],
  purposes: [
    "All Purposes",
    "Daily Wellness",
    "Immunity",
    "Heart Health",
    "Energy",
    "Stress Relief",
  ],
  sorts: [
    "Sort by Popularity",
    "Price: Low to High",
    "Price: High to Low",
    "Customer Rating",
    "Newest Arrivals",
  ],
};

const productCards = [
  {
    name: "Paracetamol 500mg",
    description: "Effective relief from headaches and fever.",
    price: "$7.99",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=400&q=80",
    badge: "Bestseller",
  },
  {
    name: "Vitamin C 1000mg",
    description: "Boost your immunity with natural antioxidants.",
    price: "$12.40",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Ibuprofen 400mg",
    description: "Quick relief for pain and inflammation.",
    price: "$9.60",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Omega-3 Fish Oil",
    description: "Supports heart and brain health.",
    price: "$18.90",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1612277799201-ccb5f9e4e02b?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Calcium + Vitamin D",
    description: "Bone strength support for all ages.",
    price: "$16.50",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Cold & Flu Relief",
    description: "Multi-symptom relief day and night.",
    price: "$11.20",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Daily Multivitamin",
    description: "Complete nutrition for busy lifestyles.",
    price: "$14.80",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1584308972272-8eba5fe9d4be?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Aspirin 325mg",
    description: "Trusted relief for pain and fever.",
    price: "$6.40",
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1583947215259-38e31be8758a?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Skin Repair Cream",
    description: "Dermatologist-approved soothing formula.",
    price: "$21.50",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=400&q=80",
    badge: "New",
  },
];

const ratingLabel = (rating) => `${rating}★`;

function Medicines({ onNavigateHome, onLoginClick, onRegisterClick }) {
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
              <p className="text-sm text-slate-500">Browse and find the right medicine</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-slate-600">
            <button
              type="button"
              onClick={onNavigateHome}
              className="transition hover:text-primary"
            >
              Home
            </button>
            <span className="text-primary">Medicines</span>
            <a href="#support" className="transition hover:text-primary">
              Support
            </a>
            <a href="#faq" className="transition hover:text-primary">
              FAQ
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onLoginClick}
              className="rounded-xl border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-600 transition hover:border-primary hover:text-primary"
            >
              Login
            </button>
            <button
              type="button"
              onClick={onRegisterClick}
              className="rounded-xl bg-primary px-5 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-primary-dark"
            >
              Register
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col gap-10 lg:flex-row">
          <aside className="lg:w-64">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">Categories</h2>
              <p className="mt-1 text-sm text-slate-500">
                Browse and find the right medicine for you
              </p>

              <ul className="mt-6 space-y-3 text-sm text-slate-600">
                {categories.map((category) => (
                  <li key={category.name} className="flex items-center justify-between rounded-2xl px-4 py-2 transition hover:bg-primary/5">
                    <span>{category.name}</span>
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-500">
                      {category.count}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-2xl bg-primary/5 p-5 text-sm text-slate-600">
                <p className="font-semibold text-slate-900">Need help?</p>
                <p className="mt-1">
                  Chat with our pharmacists for personalized recommendations.
                </p>
                <button className="mt-4 w-full rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-primary-dark">
                  Start Consultation
                </button>
              </div>
            </div>
          </aside>

          <section className="flex-1 space-y-8">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h1 className="font-display text-3xl font-semibold text-slate-900">All Medicines</h1>
                  <p className="mt-1 text-sm text-slate-500">Browse and find the right medicine for you</p>
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-slate-100 px-4 py-2 text-sm text-slate-600">
                  <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                  96 products found
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {filters.categories.map((option) => (
                  <button
                    key={option}
                    className={`rounded-2xl border px-4 py-2 text-sm font-semibold transition ${
                      option === "All Categories"
                        ? "border-primary bg-primary text-white shadow-soft"
                        : "border-slate-200 text-slate-600 hover:border-primary hover:text-primary"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">
              <div className="flex flex-1 flex-col gap-3 md:flex-row md:items-center">
                <div className="relative flex-1">
                  <input
                    type="search"
                    placeholder="Search medicines..."
                    className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-5 text-sm text-slate-700 shadow-inner focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">⌕</span>
                </div>
                <select className="h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-600 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30">
                  {filters.purposes.map((purpose) => (
                    <option key={purpose}>{purpose}</option>
                  ))}
                </select>
              </div>
              <select className="h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-600 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30">
                {filters.sorts.map((sort) => (
                  <option key={sort}>{sort}</option>
                ))}
              </select>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {productCards.map((product) => (
                <article
                  key={product.name}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-white to-slate-50 p-5 shadow-sm transition hover:-translate-y-1 hover:border-primary/50 hover:shadow-soft"
                >
                  {product.badge ? (
                    <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                      {product.badge}
                    </span>
                  ) : null}
                  <div className="flex justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="h-32 w-32 rounded-2xl object-cover shadow-inner"
                    />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-slate-900">{product.name}</h3>
                  <p className="mt-2 text-sm text-slate-500">{product.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-semibold text-primary">{product.price}</span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-600">
                      {ratingLabel(product.rating)}
                    </span>
                  </div>
                  <button className="mt-5 w-full rounded-xl border border-primary bg-white px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white">
                    Add to Cart
                  </button>
                </article>
              ))}
            </div>

            <div className="flex flex-col items-center justify-between gap-4 rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-600 md:flex-row">
              <p>Showing 1-9 of 96 results</p>
              <div className="flex items-center gap-2">
                <button className="h-10 w-10 rounded-full border border-slate-200 text-slate-500 transition hover:border-primary hover:text-primary">
                  1
                </button>
                <button className="h-10 w-10 rounded-full border border-slate-200 text-slate-500 transition hover:border-primary hover:text-primary">
                  2
                </button>
                <button className="h-10 w-10 rounded-full border border-slate-200 text-slate-500 transition hover:border-primary hover:text-primary">
                  3
                </button>
                <button className="h-10 w-10 rounded-full border border-slate-200 text-slate-500 transition hover:border-primary hover:text-primary">
                  →
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 text-sm text-slate-500 md:grid-cols-4">
          <div>
            <p className="font-display text-lg font-semibold text-slate-900">Medicare</p>
            <p className="mt-2">Trusted online pharmacy for your family's wellbeing.</p>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Customer Support</p>
            <ul className="mt-3 space-y-2">
              <li>FAQ</li>
              <li>Live Chat</li>
              <li>Returns & Refunds</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Resources</p>
            <ul className="mt-3 space-y-2">
              <li>Shipping Info</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Stay Connected</p>
            <p className="mt-3">support@medicare.com</p>
            <p>+800-MEDICARE</p>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-slate-400">© 2024 Medicare. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Medicines;
