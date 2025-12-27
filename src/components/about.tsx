import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-[#f4f3ef] py-40"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(201,168,106,0.12),transparent_45%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.05))]" />

      <svg
        viewBox="0 0 1400 800"
        className="absolute inset-0 w-full h-full opacity-[0.06]"
        fill="none"
      >
        <path
          d="M100 600 Q700 200 1300 400"
          stroke="#000"
          strokeWidth="1"
          strokeDasharray="12 10"
        />
        <circle cx="700" cy="200" r="120" stroke="#000" />
        <circle cx="700" cy="200" r="240" stroke="#000" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          <motion.div
            className="relative lg:col-span-6"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="absolute -top-12 -left-12 w-72 h-72 rounded-full bg-[#c9a86a]/15 blur-3xl" />

            <span className="block text-xs tracking-[0.4em] text-[#c9a86a] font-semibold mb-8">
              COMPANY PROFILE
            </span>

            <h2 className="text-5xl font-extrabold leading-tight text-neutral-900">
              من نحن
            </h2>

            <h3 className="mt-2 text-2xl font-bold text-neutral-700">
              شركة <span className="text-rose-600">الفنون</span> لصناعة الكراسات
              والمنتجات الورقية
            </h3>

            <div className="mt-10 flex items-center gap-6">
              <div className="h-px w-28 bg-[#c9a86a]" />
              <div className="h-2 w-2 rounded-full bg-[#c9a86a]" />
              <div className="h-px w-10 bg-neutral-400" />
            </div>

            <p className="mt-12 text-lg leading-loose text-neutral-700 max-w-xl">
              تمثل شركة الفنون كيانًا صناعيًا متخصصًا في إنتاج الكراسات
              والمنتجات الورقية، مع التزام صارم بمعايير الجودة والدقة في جميع
              مراحل التصنيع.
            </p>

            <p className="mt-6 text-lg leading-loose text-neutral-700 max-w-xl">
              نعتمد على تقنيات طباعة وتجليد حديثة تجمع بين الصلابة العملية
              واللمسة الفنية، لتقديم منتجات تخدم القطاعات التعليمية والمؤسسية
              بكفاءة واعتمادية.
            </p>
          </motion.div>

          <motion.div
            className="relative lg:col-span-6"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="absolute -inset-8 border border-[#c9a86a]/40" />
            <div className="absolute -inset-16 bg-[#c9a86a]/10 blur-3xl" />

            <div className="relative">
              <svg
                viewBox="0 0 500 700"
                className="absolute inset-0 w-full h-full opacity-[0.12]"
                fill="none"
              >
                <rect x="20" y="20" width="460" height="660" stroke="#000" />
                <line x1="20" y1="120" x2="480" y2="120" stroke="#000" />
                <line x1="20" y1="580" x2="480" y2="580" stroke="#000" />
              </svg>

              <img
                src="/images/about.png"
                className="relative w-full aspect-5/4 object-cover shadow-[0_40px_80px_rgba(0,0,0,0.25)]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
