const heroImage = "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80";

const navigationLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Medicines", href: "#featured" },
  { label: "About", href: "#about" },
  { label: "Support", href: "#support" },
];

const noop = () => {};

const categories = [
  { name: "Pain Relief", description: "Analgesics & anti-inflammatory", icon: "💊" },
  { name: "Vitamins", description: "Daily multivitamin essentials", icon: "🧬" },
  { name: "Skin Care", description: "Dermatologist recommended", icon: "🧴" },
  { name: "Heart Health", description: "Cardio support & monitoring", icon: "❤️" },
  { name: "Digestive", description: "Gut health & probiotics", icon: "🦠" },
  { name: "Baby Care", description: "Gentle formula for infants", icon: "🍼" },
];

const featuredMedicines = [
  {
    name: "Paracetamol 500mg",
    description: "Fast relief for mild to moderate pain.",
    price: "$12.99",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Vitamin D3 1000IU",
    description: "Supports bone health and immunity.",
    price: "$24.99",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1612277799201-ccb5f9e4e02b?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Omega-3 Fish Oil",
    description: "Promotes heart and brain health.",
    price: "$32.99",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Antiseptic Cream",
    description: "Protects cuts from infection.",
    price: "$18.40",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=400&q=80",
  },
];

function Homepage({
  onLoginClick = noop,
  onRegisterClick = noop,
  onNavigateMedicines = noop,
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100">
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-5">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-xl font-semibold text-white shadow-soft">
              M
            </div>
            <div>
              <p className="font-display text-xl font-semibold text-slate-900">Medicare</p>
              <p className="text-sm text-slate-500">Your trusted online pharmacy</p>
            </div>
          </div>

          <nav className="flex flex-wrap items-center gap-6 text-sm font-medium text-slate-600">
            {navigationLinks.map((link) => {
              if (link.label === "Medicines") {
                return (
                  <button
                    key={link.label}
                    type="button"
                    onClick={onNavigateMedicines}
                    className="transition hover:text-primary"
                  >
                    {link.label}
                  </button>
                );
              }

              return (
                <a key={link.label} href={link.href} className="transition hover:text-primary">
                  {link.label}
                </a>
              );
            })}
          </nav>

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

      <main>
        <section className="relative overflow-hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 md:flex-row md:items-center">
            <div className="md:w-1/2">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                <span className="h-2 w-2 rounded-full bg-primary"></span>
                Trusted by 100k+ patients
              </div>
              <h1 className="mt-5 font-display text-4xl font-semibold text-slate-900 sm:text-5xl">
                Search, consult, and order medicines from home.
              </h1>
              <p className="mt-4 text-lg text-slate-600">
                Fast delivery, expert advice, and genuine products guaranteed. Get the care you need without leaving your home.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <div className="relative flex-1">
                  <input
                    type="search"
                    placeholder="Search medicines, pharmacies..."
                    className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-5 text-sm text-slate-700 shadow-inner shadow-slate-200/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">⌕</span>
                </div>
                <button
                  type="button"
                  onClick={onNavigateMedicines}
                  className="h-12 rounded-2xl bg-primary px-6 text-sm font-semibold text-white shadow-soft transition hover:bg-primary-dark"
                >
                  Shop Now
                </button>
              </div>

              <div className="mt-10 grid gap-6 sm:grid-cols-3">
                {["Fast Delivery", "Certified Quality", "24/7 Support"].map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 bg-white px-4 py-5 text-center shadow-sm">
                    <p className="text-sm font-semibold text-slate-900">{item}</p>
                    <p className="mt-1 text-xs text-slate-500">Reliable services you can count on.</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="relative overflow-hidden rounded-[28px] bg-white shadow-soft">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/10"></div>
                <img src={heroImage} alt="Modern pharmacy shelves" className="h-full w-full object-cover" loading="lazy" />
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/90 p-4 shadow-lg backdrop-blur">
                  <p className="text-sm font-semibold text-slate-900">On-call Pharmacists</p>
                  <p className="text-xs text-slate-500">Chat with licensed experts instantly for personal recommendations.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="flex flex-col items-center text-center">
              <span className="rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">Shop by Category</span>
              <h2 className="mt-4 font-display text-3xl font-semibold text-slate-900">Your health needs, sorted for you</h2>
              <p className="mt-2 max-w-2xl text-slate-600">
                Explore our curated range of medicines, supplements, and care products tailored for every member of your family.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => (
                <article
                  key={category.name}
                  className="group rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-white to-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/60 hover:shadow-soft"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-2xl text-primary transition group-hover:bg-primary group-hover:text-white">
                    {category.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{category.name}</h3>
                  <p className="mt-2 text-sm text-slate-600">{category.description}</p>
                  <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition group-hover:gap-3">
                    Explore
                    <span aria-hidden>→</span>
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="bg-gradient-to-r from-primary/5 via-white to-primary/5 py-16">
          <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 md:flex-row md:items-center">
            <div className="md:w-1/2 space-y-4">
              <span className="rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">Why choose Medicare</span>
              <h2 className="font-display text-3xl font-semibold text-slate-900">Personalized care with modern convenience</h2>
              <p className="text-base text-slate-600">
                We bring together experienced pharmacists, certified partners, and cutting-edge telehealth technology to ensure
                every prescription is handled with care. From remote consultations to doorstep delivery, your wellbeing is our
                mission.
              </p>
              <ul className="mt-6 grid gap-4 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">✓</span>
                  Licensed pharmacists available 24/7 for live consultations.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">✓</span>
                  Seamless insurance coordination and automatic refills.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">✓</span>
                  Temperature-controlled packaging ensures product integrity.
                </li>
              </ul>
            </div>

            <div className="md:w-1/2 grid gap-6 sm:grid-cols-2">
              {["4.9/5 satisfaction", "3k+ partner clinics", "<30m avg delivery", "120+ cities served"].map((stat) => (
                <div key={stat} className="rounded-3xl border border-primary/20 bg-white px-6 py-8 text-center shadow-soft">
                  <p className="text-lg font-semibold text-primary">{stat}</p>
                  <p className="mt-2 text-xs uppercase tracking-wide text-slate-500">and growing</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="featured" className="bg-slate-900 py-16 text-white">
          <div className="mx-auto max-w-6xl px-4">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <span className="rounded-full bg-white/10 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-white/80">
                  Featured medicines
                </span>
                <h2 className="mt-4 font-display text-3xl font-semibold">Clinically tested & patient approved</h2>
              </div>
              <button className="inline-flex items-center gap-2 rounded-2xl border border-white/30 px-5 py-2 text-sm font-semibold transition hover:border-white hover:bg-white hover:text-slate-900">
                View All Medicines
                <span aria-hidden>→</span>
              </button>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {featuredMedicines.map((medicine) => (
                <article key={medicine.name} className="flex h-full flex-col overflow-hidden rounded-3xl bg-white text-slate-900 shadow-xl">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={medicine.image}
                      alt={medicine.name}
                      className="h-full w-full object-cover transition duration-300 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-semibold">{medicine.name}</h3>
                    <p className="mt-2 text-sm text-slate-600">{medicine.description}</p>
                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-lg font-semibold text-primary">{medicine.price}</span>
                      <span className="flex items-center gap-1 text-sm text-slate-500">
                        <span aria-hidden>⭐</span>
                        {medicine.rating}
                      </span>
                    </div>
                    <button className="mt-6 w-full rounded-2xl bg-primary px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-primary-dark">
                      Add to Cart
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="support" className="bg-slate-950 py-12 text-slate-200">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 md:grid-cols-4">
            <div>
              <p className="text-lg font-semibold text-white">Medicare</p>
              <p className="mt-3 text-sm text-slate-400">
                Your trusted online pharmacy for all your healthcare needs. Quality medicines, expert advice, and secure delivery.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-white">About Us</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-400">
                <li>Our Story</li>
                <li>Mission & Vision</li>
                <li>Careers</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-white">Customer Support</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-400">
                <li>FAQs</li>
                <li>Returns & Refunds</li>
                <li>Shipping Policy</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-white">Contact</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-400">
                <li>12 Healthcare St, Medical City, MC 12345</li>
                <li>(555) 123-4567</li>
                <li>support@medicare.com</li>
              </ul>
              <button className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-primary px-5 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-primary-dark">
                Ask our Pharmacist
              </button>
            </div>
          </div>
          <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-slate-500">
            © {new Date().getFullYear()} Medicare. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;
