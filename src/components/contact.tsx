"use client";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSent(false);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("to", "info@alfunon.com.ly");

    try {
      const response = await fetch("https://relay.eratech.com.ly/send", {
        method: "POST",
        body: formData,
      });

      const text = await response.text();
      if (text.includes("OK")) {
        setSent(true);
        form.reset();
      } else {
        setError("حدث خطأ أثناء الإرسال");
      }
    } catch {
      setError("فشل الاتصال بالخادم");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="relative w-full py-40 overflow-hidden bg-[#0c0c0c]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,168,106,0.18),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.04),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <span className="text-xs tracking-[0.35em] text-[#c9a86a] font-semibold">
            CONTACT
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-[#f5f1e8]">
            تواصل معنا
          </h2>
          <p className="text-neutral-400 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            نحن على استعداد للتواصل، الاستفسارات، وشراكات التوريد المؤسسية.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative bg-[#141414] rounded-3xl border border-[#c9a86a]/20 p-10 space-y-12 shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
          >
            <div className="flex gap-5 items-start">
              <Phone className="w-7 h-7 text-[#c9a86a] shrink-0" />
              <div>
                <h4 className="text-xl font-bold text-[#f5f1e8] mb-2">
                  الهاتف
                </h4>
                <a
                  href="tel:+218912135345"
                  dir="ltr"
                  className="text-neutral-400 hover:text-[#c9a86a] transition"
                >
                  +218 91 213 5345
                </a>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <Mail className="w-7 h-7 text-[#c9a86a] shrink-0" />
              <div>
                <h4 className="text-xl font-bold text-[#f5f1e8] mb-2">
                  البريد الإلكتروني
                </h4>
                <a
                  href="mailto:info@alfunon.com.ly"
                  className="text-neutral-400 hover:text-[#c9a86a] transition"
                >
                  info@alfunon.com.ly
                </a>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <MapPin className="w-7 h-7 text-[#c9a86a] shrink-0" />
              <div>
                <h4 className="text-xl font-bold text-[#f5f1e8] mb-2">
                  العنوان
                </h4>
                <p className="text-neutral-400">
                  السكيرات - طريق الفوار - مصراتة | ليبيا
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden h-[300px] border border-[#c9a86a]/20">
              <iframe
                src="https://maps.google.com/maps?q=32.35530691070605,15.124854267526304&z=15&output=embed"
                className="w-full h-full contrast-125"
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative bg-[#141414] rounded-3xl border border-[#c9a86a]/20 p-10 flex flex-col gap-6 shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
          >
            <input
              name="name"
              placeholder="الاسم بالكامل"
              required
              className="p-4 rounded-xl bg-[#0f0f0f] text-[#f5f1e8] border border-[#c9a86a]/30 focus:ring-2 focus:ring-[#c9a86a] outline-none"
            />

            <input
              name="email"
              type="email"
              placeholder="البريد الإلكتروني"
              required
              className="p-4 rounded-xl bg-[#0f0f0f] text-[#f5f1e8] border border-[#c9a86a]/30 focus:ring-2 focus:ring-[#c9a86a] outline-none"
            />

            <input
              name="phone"
              placeholder="رقم الهاتف"
              className="p-4 rounded-xl bg-[#0f0f0f] text-[#f5f1e8] border border-[#c9a86a]/30 focus:ring-2 focus:ring-[#c9a86a] outline-none"
            />

            <input
              name="subject"
              placeholder="الموضوع"
              className="p-4 rounded-xl bg-[#0f0f0f] text-[#f5f1e8] border border-[#c9a86a]/30 focus:ring-2 focus:ring-[#c9a86a] outline-none"
            />

            <textarea
              name="message"
              rows={6}
              placeholder="اكتب رسالتك..."
              required
              className="p-4 rounded-xl bg-[#0f0f0f] text-[#f5f1e8] border border-[#c9a86a]/30 focus:ring-2 focus:ring-[#c9a86a] outline-none"
            />

            {sent && (
              <p className="text-green-500 text-sm text-center">
                تم إرسال الرسالة بنجاح
              </p>
            )}
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-4 py-4 rounded-xl bg-[#c9a86a] hover:bg-[#b8965c] transition text-black font-bold text-lg disabled:opacity-50"
            >
              {loading ? "جارٍ الإرسال..." : "إرسال الرسالة"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
