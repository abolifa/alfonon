import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-black"
    >
      <div
        className="absolute inset-0 bg-center bg-cover scale-105 blur-[2px]"
        style={{
          backgroundImage: "url('/images/hero.png')",
        }}
      />

      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/60 to-black/80" />

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(0,0,0,0.9),transparent_70%)]" />
      </div>

      <motion.svg
        viewBox="0 0 1200 600"
        className="absolute inset-0 w-full h-full opacity-[0.12]"
        fill="none"
      >
        <motion.path
          d="M100 100 H1100 M100 300 H1100 M100 500 H1100"
          stroke="#c9a86a"
          strokeWidth="1"
          strokeDasharray="1200"
          initial={{ strokeDashoffset: 1200 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 2.8, ease: "easeOut" }}
        />
      </motion.svg>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          <div className="relative inline-block">
            <div className="absolute inset-0 rounded-full blur-2xl bg-[#c9a86a]/20 -z-10" />
            <motion.img
              src="/meta/logo.png"
              className="relative mx-auto mb-10 w-72 drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] filter brightness-110"
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
            />
          </div>

          <motion.h1
            className="text-4xl md:text-6xl font-extrabold tracking-wide text-[#f5f1e8]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            شركة الفنون
          </motion.h1>

          <motion.h2
            className="mt-4 text-xl md:text-2xl font-semibold tracking-wide text-[#c9a86a]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            لصناعة الكراسات والمنتجات الورقية
          </motion.h2>

          <motion.p
            className="mx-auto mt-8 max-w-2xl text-base md:text-lg leading-loose text-neutral-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
          >
            خبرة صناعية في إنتاج الكراسات والمنتجات الورقية وفق أعلى معايير
            الجودة والدقة، لخدمة المؤسسات والأسواق المحلية.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
