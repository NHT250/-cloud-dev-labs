import paracetamolImg from "../assets/paracetamol-500.png";
import ibuprofenImg from "../assets/ibuprofen-400.png";
import omega3Img from "../assets/omega-3.jpg";
import aspirinImg from "../assets/aspirin-325.jpg";
import coldFluImg from "../assets/cold-flu-relief.jpg";
import multivitaminImg from "../assets/multivitamin.jpg";
import vitaminCImg from "../assets/vitamin-c.jpg";
import calciumDImg from "../assets/calcium-d.jpg";
import skinRepairImg from "../assets/skin-repair.jpg";
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
    image: paracetamolImg,
    badge: "Bestseller",
    isPrescription: false,
    usage: [
      "Giảm đau nhẹ đến trung bình như đau đầu, đau răng, đau cơ.",
      "Hạ sốt hiệu quả trong các trường hợp cảm cúm.",
    ],
    ingredients: ["Paracetamol 500mg", "Tá dược vừa đủ 1 viên"],
    indications: [
      "Người lớn và trẻ em trên 12 tuổi cần giảm đau nhanh.",
      "Bệnh nhân có triệu chứng sốt do cảm cúm, nhiễm khuẩn.",
    ],
    dosage: [
      "Người lớn: 1 viên mỗi 4-6 giờ khi cần thiết, tối đa 4 viên/ngày.",
      "Trẻ em 12-17 tuổi: 1/2 đến 1 viên mỗi 6 giờ theo hướng dẫn bác sĩ.",
    ],
    contraindications: [
      "Bệnh nhân mẫn cảm với Paracetamol hoặc thành phần của thuốc.",
      "Người mắc bệnh gan nặng hoặc suy gan.",
    ],
    sideEffects: [
      "Hiếm gặp: phát ban da, mẩn ngứa.",
      "Rất hiếm: phản ứng quá mẫn, giảm bạch cầu.",
    ],
    storage: ["Bảo quản nơi khô ráo, dưới 30°C.", "Tránh ánh sáng trực tiếp và để xa tầm tay trẻ em."],
    warnings: [
      "Không dùng chung với thuốc chứa Paracetamol khác.",
      "Tham khảo ý kiến bác sĩ nếu triệu chứng kéo dài hơn 3 ngày.",
    ],
    customerReviews: [
      {
        author: "Nguyễn Thanh",
        rating: 5,
        date: "12/03/2024",
        comment:
          "Thuốc hạ sốt rất nhanh, chỉ sau 30 phút là dễ chịu hơn. Đóng gói chắc chắn.",
      },
      {
        author: "Lê Mai",
        rating: 4,
        date: "02/04/2024",
        comment: "Dễ uống, ít tác dụng phụ. Giá hợp lý cho gia đình.",
      },
    ],
  },
  {
    name: "Vitamin C 1000mg",
    description: "Boost your immunity with natural antioxidants.",
    price: "$12.40",
    rating: 4.9,
    image: vitaminCImg,
    isPrescription: false,
    usage: ["Bổ sung vitamin C giúp tăng cường miễn dịch.", "Hỗ trợ chống oxy hóa và làm đẹp da."],
    ingredients: ["Vitamin C 1000mg", "Hương cam tự nhiên"],
    indications: ["Người cần nâng cao sức đề kháng", "Người hút thuốc, làm việc căng thẳng"],
    dosage: ["Uống 1 viên sau bữa ăn sáng"],
    contraindications: [
      "Không dùng cho người mẫn cảm với vitamin C.",
      "Thận trọng với người có tiền sử sỏi thận.",
    ],
    sideEffects: ["Buồn nôn nhẹ nếu uống khi đói", "Tiêu chảy khi dùng liều cao"],
    storage: ["Đậy kín nắp, tránh ẩm"],
    warnings: [],
    customerReviews: [
      {
        author: "Minh Châu",
        rating: 5,
        date: "28/02/2024",
        comment: "Vị cam dễ uống, uống đều đặn thấy khỏe hơn hẳn.",
      },
    ],
  },
  {
    name: "Ibuprofen 400mg",
    description: "Quick relief for pain and inflammation.",
    price: "$9.60",
    rating: 4.6,
    image: ibuprofenImg,
    isPrescription: true,
    usage: [
      "Giảm đau và kháng viêm trong các bệnh lý cơ xương khớp.",
      "Hạ sốt khi các thuốc khác không đáp ứng.",
    ],
    ingredients: ["Ibuprofen 400mg"],
    indications: ["Đau viêm khớp", "Đau răng, đau sau phẫu thuật"],
    dosage: ["Người lớn: 1 viên mỗi 6-8 giờ, tối đa 3 viên/ngày"],
    contraindications: [
      "Không dùng cho bệnh nhân loét dạ dày tiến triển.",
      "Chống chỉ định cho phụ nữ mang thai 3 tháng cuối.",
    ],
    sideEffects: ["Đau thượng vị", "Chóng mặt, buồn nôn"],
    storage: ["Bảo quản nơi mát, tránh ẩm"],
    warnings: ["Sử dụng theo chỉ định bác sĩ", "Không dùng cùng NSAID khác"],
    customerReviews: [
      {
        author: "Hữu Lộc",
        rating: 4,
        date: "08/01/2024",
        comment: "Giảm đau nhanh nhưng cần uống sau ăn để tránh đau dạ dày.",
      },
    ],
  },
  {
    name: "Omega-3 Fish Oil",
    description: "Supports heart and brain health.",
    price: "$18.90",
    rating: 4.7,
    image: omega3Img,
    isPrescription: false,
    usage: ["Hỗ trợ tim mạch", "Cải thiện trí nhớ và thị lực"],
    ingredients: ["Dầu cá tinh khiết 1000mg", "EPA 300mg", "DHA 200mg"],
    indications: ["Người có nhu cầu bổ sung omega-3", "Người ít ăn cá biển"],
    dosage: ["Uống 1-2 viên sau bữa ăn"],
    contraindications: ["Không dùng cho người dị ứng hải sản"],
    sideEffects: ["Ợ mùi cá nhẹ"],
    storage: ["Tránh ánh nắng trực tiếp"],
    warnings: [],
    customerReviews: [],
  },
  {
    name: "Calcium + Vitamin D",
    description: "Bone strength support for all ages.",
    price: "$16.50",
    rating: 4.5,
    image: calciumDImg,
    isPrescription: false,
    usage: ["Bổ sung canxi cho người lớn tuổi", "Hỗ trợ phát triển xương cho trẻ em"],
    ingredients: ["Canxi carbonat", "Vitamin D3"],
    indications: ["Người loãng xương", "Phụ nữ mang thai"],
    dosage: ["Người lớn: 1 viên x 2 lần/ngày"],
    contraindications: ["Không dùng cho bệnh nhân tăng canxi máu"],
    sideEffects: ["Đầy bụng nếu uống khi đói"],
    storage: ["Để nơi khô ráo"],
    warnings: [],
    customerReviews: [
      {
        author: "Thu Hà",
        rating: 5,
        date: "05/03/2024",
        comment: "Uống 2 tháng thấy giảm đau mỏi lưng rõ rệt.",
      },
    ],
  },
  {
    name: "Cold & Flu Relief",
    description: "Multi-symptom relief day and night.",
    price: "$11.20",
    rating: 4.6,
    image: coldFluImg,
    isPrescription: false,
    usage: ["Giảm ho, sổ mũi, nghẹt mũi"],
    ingredients: ["Paracetamol", "Dextromethorphan", "Phenylephrine"],
    indications: ["Cảm lạnh, cảm cúm"],
    dosage: ["Người lớn: 2 viên mỗi 6 giờ"],
    contraindications: ["Không dùng cho bệnh nhân cao huyết áp chưa kiểm soát"],
    sideEffects: ["Buồn ngủ nhẹ"],
    storage: ["Để tránh ánh sáng"],
    warnings: ["Đọc kỹ hướng dẫn trước khi dùng"],
    customerReviews: [],
  },
  {
    name: "Daily Multivitamin",
    description: "Complete nutrition for busy lifestyles.",
    price: "$14.80",
    rating: 4.8,
    image: multivitaminImg,
    isPrescription: false,
    usage: ["Bổ sung vitamin tổng hợp hằng ngày"],
    ingredients: ["Vitamin nhóm B", "Vitamin A", "Khoáng chất thiết yếu"],
    indications: ["Người bận rộn, ăn uống thất thường"],
    dosage: ["Uống 1 viên sau bữa sáng"],
    contraindications: ["Không dùng cho trẻ dưới 12 tuổi"],
    sideEffects: ["Nước tiểu vàng đậm là bình thường"],
    storage: ["Đậy kín nắp sau khi sử dụng"],
    warnings: [],
    customerReviews: [],
  },
  {
    name: "Aspirin 325mg",
    description: "Trusted relief for pain and fever.",
    price: "$6.40",
    rating: 4.4,
    image: aspirinImg,
    isPrescription: true,
    usage: ["Giảm đau, hạ sốt", "Chống kết tập tiểu cầu theo chỉ định"],
    ingredients: ["Aspirin 325mg"],
    indications: ["Đau nhẹ", "Phòng ngừa huyết khối theo kê đơn"],
    dosage: ["1 viên mỗi 4-6 giờ khi cần, tối đa 6 viên/ngày"],
    contraindications: [
      "Không dùng cho trẻ em mắc thủy đậu hoặc cúm.",
      "Chống chỉ định trong loét dạ dày.",
    ],
    sideEffects: ["Kích ứng dạ dày", "Chảy máu cam"],
    storage: ["Bảo quản nơi khô, thoáng"],
    warnings: ["Chỉ sử dụng theo hướng dẫn bác sĩ"],
    customerReviews: [
      {
        author: "Quốc Vinh",
        rating: 4,
        date: "10/02/2024",
        comment: "Giảm đau tốt nhưng cần uống kèm thức ăn để bảo vệ dạ dày.",
      },
    ],
  },
  {
    name: "Skin Repair Cream",
    description: "Dermatologist-approved soothing formula.",
    price: "$21.50",
    rating: 4.9,
    image: skinRepairImg,
    isPrescription: false,
    usage: ["Phục hồi da kích ứng", "Giữ ẩm cho da khô"],
    ingredients: ["Ceramide", "Panthenol", "Niacinamide"],
    indications: ["Da khô nứt nẻ", "Da kích ứng sau điều trị"],
    dosage: ["Thoa lớp mỏng 2-3 lần/ngày"],
    contraindications: ["Không dùng trên vết thương hở"],
    sideEffects: ["Châm chích nhẹ lúc mới thoa"],
    storage: ["Đóng nắp sau khi dùng, bảo quản nơi mát"],
    warnings: [],
    customerReviews: [
      {
        author: "Bảo Anh",
        rating: 5,
        date: "15/04/2024",
        comment: "Da hồi phục nhanh, chất kem thấm tốt không nhờn rít.",
      },
    ],
  },
];

const ratingLabel = (rating) => `${rating}★`;

function Medicines({
  onNavigateHome,
  onLoginClick,
  onRegisterClick,
  onSelectProduct = () => {},
}) {
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
              <p className="font-display text-xl font-semibold text-slate-900">
                Medicare
              </p>
              <p className="text-sm text-slate-500">
                Browse and find the right medicine
              </p>
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
              <h2 className="text-lg font-semibold text-slate-900">
                Categories
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Browse and find the right medicine for you
              </p>

              <ul className="mt-6 space-y-3 text-sm text-slate-600">
                {categories.map((category) => (
                  <li
                    key={category.name}
                    className="flex items-center justify-between rounded-2xl px-4 py-2 transition hover:bg-primary/5"
                  >
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
                  <h1 className="font-display text-3xl font-semibold text-slate-900">
                    All Medicines
                  </h1>
                  <p className="mt-1 text-sm text-slate-500">
                    Browse and find the right medicine for you
                  </p>
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
                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                    ⌕
                  </span>
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
                  onClick={() => onSelectProduct(product)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      onSelectProduct(product);
                    }
                  }}
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
                  <h3 className="mt-6 text-lg font-semibold text-slate-900">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500">
                    {product.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-semibold text-primary">
                      {product.price}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-600">
                      {ratingLabel(product.rating)}
                    </span>
                  </div>
                  <button
                    type="button"
                    className="mt-5 w-full rounded-xl border border-primary bg-white px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
                  >
                    Xem chi tiết
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
            <p className="font-display text-lg font-semibold text-slate-900">
              Medicare
            </p>
            <p className="mt-2">
              Trusted online pharmacy for your family's wellbeing.
            </p>
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
        <p className="mt-8 text-center text-xs text-slate-400">
          © 2024 Medicare. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Medicines;
