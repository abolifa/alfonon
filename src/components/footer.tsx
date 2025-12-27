"use client";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[#0a0a0a] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(201,168,106,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_100%,rgba(255,255,255,0.03),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 py-28">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-20"
        >
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-3xl font-extrabold text-[#f5f1e8]">
              شركة <span className="text-[#c9a86a]">الفنون</span>
            </h3>

            <p className="text-neutral-400 leading-loose max-w-md">
              كيان صناعي متخصص في صناعة الكراسات والمنتجات الورقية، نلتزم
              بالجودة والدقة لتقديم حلول موثوقة تخدم القطاعات التعليمية
              والمؤسسية.
            </p>

            <div className="flex items-center gap-4">
              <div className="h-px w-16 bg-[#c9a86a]" />
              <div className="h-2 w-2 rounded-full bg-[#c9a86a]" />
            </div>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-xl font-bold text-[#f5f1e8]">روابط</h4>

            <ul className="space-y-4 text-neutral-400">
              <li>
                <a href="#about" className="hover:text-[#c9a86a] transition">
                  من نحن
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#c9a86a] transition">
                  المنتجات
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#c9a86a] transition">
                  تواصل معنا
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <h4 className="text-xl font-bold text-[#f5f1e8]">
              معلومات التواصل
            </h4>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <Phone className="w-6 h-6 text-[#c9a86a]" />
                <a
                  href="tel:+218912135345"
                  dir="ltr"
                  className="text-neutral-400 hover:text-[#c9a86a] transition"
                >
                  +218 91 213 5345
                </a>
              </div>

              <div className="flex gap-4 items-start">
                <Mail className="w-6 h-6 text-[#c9a86a]" />
                <a
                  href="mailto:info@alfunon.com.ly"
                  className="text-neutral-400 hover:text-[#c9a86a] transition"
                >
                  info@alfunon.com.ly
                </a>
              </div>

              <div className="flex gap-4 items-start">
                <MapPin className="w-6 h-6 text-[#c9a86a]" />
                <p className="text-neutral-400">
                  السكيرات - طريق الفوار - مصراتة | ليبيا
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-24 border-t border-white/10 pt-10 flex flex-col md:flex-row items-center justify-center gap-6">
          <p className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} شركة الفنون لصناعة الكراسات. جميع
            الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
