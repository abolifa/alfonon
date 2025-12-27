import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    title: "اختيار المواد الخام",
    text: "نبدأ باختيار أوراق عالية الجودة مطابقة لمعايير الاستخدام التعليمي والمؤسسي.",
  },
  {
    title: "الطباعة الدقيقة",
    text: "استخدام تقنيات طباعة حديثة تضمن وضوح الألوان وثباتها على المدى الطويل.",
  },
  {
    title: "التجليد والمعالجة",
    text: "معالجة وتجليد احترافي يحقق المتانة وسهولة الاستخدام اليومي.",
  },
  {
    title: "الفحص وضبط الجودة",
    text: "مراجعة دقيقة لكل منتج وفق معايير جودة صارمة قبل اعتماده.",
  },
  {
    title: "التغليف والتوزيع",
    text: "تجهيز المنتجات للتوريد للأسواق والمؤسسات بكفاءة وانتظام.",
  },
];

const Process = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={ref}
      id="process"
      className="relative w-full bg-[#f6f5f1] py-40 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(201,168,106,0.12),transparent_45%)]" />

      <div className="relative mx-auto max-w-5xl px-6">
        <div className="mb-32 text-center">
          <span className="text-xs tracking-[0.35em] text-[#c9a86a] font-semibold">
            PRODUCTION FLOW
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-neutral-900">
            مراحل الإنتاج
          </h2>
        </div>

        <div className="relative flex">
          <div className="relative w-16 flex justify-center">
            <div className="absolute top-0 bottom-0 w-px bg-neutral-300" />
            <motion.div
              className="absolute top-0 w-px bg-[#c9a86a]"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="flex-1 space-y-32">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative"
              >
                <div className="absolute -right-10 top-2">
                  <div className="w-4 h-4 rounded-full bg-[#c9a86a] shadow-[0_0_0_6px_rgba(201,168,106,0.15)]" />
                </div>

                <h3 className="text-2xl font-bold text-neutral-900">
                  {step.title}
                </h3>

                <p className="mt-4 text-lg leading-loose text-neutral-700 max-w-xl">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
