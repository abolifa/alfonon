import { motion } from "framer-motion";

const products = [
  {
    title: "الكراسات المدرسية",
    text: "كراسات مخصصة للاستخدام التعليمي اليومي، بمقاسات وتغليفات متعددة تلبي احتياجات مختلف المراحل الدراسية.",
    image: "/products/1.png",
  },
  {
    title: "الدفاتر",
    text: "دفاتر عالية الجودة للاستخدام المكتبي والشخصي، بتصاميم متنوعة وأوراق متينة تناسب جميع الأغراض.",
    image: "/products/2.png",
  },
  {
    title: "دفاتر الرسم والسكتش",
    text: "دفاتر للرسم والتلوين، صنعت بجودة عالية ومتانة. لتلبي الحس الفني لدى الأطفال.",
    image: "/products/3.png",
  },
  {
    title: "منتجات حسب الطلب",
    text: "تنفيذ منتجات ورقية مخصصة وفق متطلبات المؤسسات والعلامات التجارية.",
    image: "/products/4.png",
  },
];

const Products = () => {
  return (
    <section
      id="products"
      className="relative w-full bg-white py-40 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(201,168,106,0.08),transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-32 text-center">
          <span className="text-xs tracking-[0.35em] text-[#c9a86a] font-semibold">
            PRODUCT LINES
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-neutral-900">
            المنتجات
          </h2>
        </div>

        <div className="space-y-40">
          {products.map((item, i) => (
            <motion.div
              key={i}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-20 items-center ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="relative lg:col-span-6">
                <div className="absolute -inset-12 bg-[#c9a86a]/10 blur-3xl" />
                <img
                  src={item.image}
                  className="relative w-full aspect-5/4 object-contain"
                />
              </div>

              <div className="relative lg:col-span-6">
                <h3 className="text-3xl md:text-4xl font-extrabold text-neutral-900">
                  {item.title}
                </h3>

                <div className="mt-6 flex items-center gap-4">
                  <div className="h-px w-20 bg-[#c9a86a]" />
                  <div className="h-2 w-2 rounded-full bg-[#c9a86a]" />
                </div>

                <p className="mt-8 text-lg leading-loose text-neutral-700 max-w-xl">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
