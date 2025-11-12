import React from "react";
import { motion } from "framer-motion";
import assets from "../assets/assets";
import {
  ShieldCheck,
  Lightbulb,
  Users,
  HeartHandshake,
  ArrowRight,
  Globe,
  Zap,
  Target,
  Building2,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function AboutUs() {
  const timeline = [
    {
      year: "2007",
      title: "A Vision Takes Shape",
      desc: "Nitin Chopra, driven to create jobs for India’s youth, co-founds Konexions with Shivani Chopra. What begins in their home basement soon evolves into one of India’s most trusted BPM brands.",
      icon: <Sparkles className="w-6 h-6" />,
    },
    {
      year: "2010",
      title: "Momentum Builds",
      desc: "Konexions secures five major client logos and scales to a 500-employee organization.",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      year: "2015",
      title: "Global Partnerships",
      desc: "Serving 10 international clients and expanding into new sectors with precision and agility.",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      year: "2019",
      title: "Tech Expansion",
      desc: "Acquisition of Tech Soft Corporation, marking entry into the IT, software, and automation domain.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      year: "2021",
      title: "Next-Gen Workspaces",
      desc: "Launch of ultra-premium delivery centers in Delhi, Gurgaon, Pune, Mumbai, and Bangalore, setting new benchmarks for culture and operational excellence.",
      icon: <Building2 className="w-6 h-6" />,
    },
    {
      year: "2024",
      title: "Going Global",
      desc: "Becomes one of the first privately held Indian BPMs to open an international office in Dubai, signaling global scale.",
      icon: <Target className="w-6 h-6" />,
    },
    {
      year: "2025+",
      title: "Fyntegra Is Born",
      desc: "With a ₹500 Cr+ foundation and a bold vision to scale to ₹2,500 Cr, Fyntegra emerges as the AI-driven extension of Konexions — fusing human expertise with automation, analytics, and voicebots to redefine outsourcing for the next decade.",
      highlight: true,
      badge: "AI-Led Future",
    },
  ];

  return (
    <div className="bg-white text-black min-h-screen mt-20 overflow-hidden">
      {/* HERO SECTION */}
      <header className="relative bg-gradient-to-br from-black via-red-900 to-red-700 text-white py-32 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-3xl"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-4xl md:text-6xl font-extrabold leading-tight"
          >
            Our Journey
            <br />
            <span className="text-red-400 text-3xl md:text-5xl block mt-2">
              The Konexions Legacy → Fyntegra Future
            </span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-gray-200 max-w-4xl mx-auto font-light"
          >
            From a living-room vision to AI-driven, enterprise-scale delivery.
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.5 }}
            className="mt-8 flex justify-center gap-4 flex-wrap"
          >
            <Link
              to="/contact"
              className="px-8 py-4 bg-red-600 text-white rounded-full font-bold shadow-lg hover:bg-red-700 hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              Get in Touch <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="https://jumbokonexions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-white/60 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Visit Konexions
            </a>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </header>

      {/* FYntegra IS BORN */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-6">
              Fyntegra is Born
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Farooq Patel and Nitin Chopra come together to grow an international,{" "}
              <span className="text-red-600 font-semibold">AI-led BPO</span> with{" "}
              <span className="underline decoration-red-500">360° solutions</span>.
            </p>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              Fyntegra is built at the intersection of enterprise-grade BPM scale and AI-native operations — uniting Konexions’ legacy with a productized, automation-first future.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            {[
              "Konexions foundation and rapid scale",
              "Global clients and tech expansion",
              "Premium delivery centers and Dubai office",
              "Fyntegra: AI-led BPO embedded credit launching soon",
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="p-5 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-xl hover:border-red-300 transition-all duration-300 text-left"
              >
                <div className="w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-3">
                  <span className="font-bold text-sm">{i + 1}</span>
                </div>
                <p className="text-sm text-gray-700 font-medium">{item}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-10 flex justify-center items-center gap-3 text-sm text-gray-600"
          >
            <span className="px-4 py-2 bg-red-50 text-red-700 rounded-full font-medium">
              Embedded Credit Launching Soon
            </span>
            <ArrowRight className="w-5 h-5 text-red-600 animate-pulse" />
          </motion.div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-center mb-16"
          >
            From Vision to Global Scale
          </motion.h2>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-red-200 via-red-400 to-red-600 h-full hidden md:block"></div>

            {timeline.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 md:mb-16 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col`}
              >
                {/* Timeline Item */}
                <div
                  className={`w-full md:w-1/2 ${
                    i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <div
                    className={`p-6 rounded-2xl shadow-lg border ${
                      item.highlight
                        ? "bg-gradient-to-r from-red-600 to-red-700 text-white border-red-800"
                        : "bg-white border-gray-200"
                    } hover:shadow-2xl transition-all duration-300`}
                  >
                    {item.badge && (
                      <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-bold rounded-full mb-3">
                        {item.badge}
                      </span>
                    )}
                    <h3 className="text-xl md:text-2xl font-bold flex items-center gap-3 justify-end md:justify-start">
                      <span className="text-red-400">{item.year}</span>
                      {item.title}
                    </h3>
                    <p
                      className={`mt-3 text-sm md:text-base leading-relaxed ${
                        item.highlight ? "text-white/90" : "text-gray-600"
                      }`}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full border-4 border-red-600 flex items-center justify-center shadow-xl z-10 hidden md:flex">
                  <div className="text-red-600">{item.icon}</div>
                </div>

                {/* Mobile Year */}
                <div className="md:hidden text-center mt-4">
                  <span className="text-2xl font-bold text-red-600">{item.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT THIS MEANS FOR CUSTOMERS */}
      <section className="py-20 px-6 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold mb-6"
          >
            What This Means for Customers
          </motion.h2>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          >
            {[
              {
                title: "AI-Led International BPO",
                desc: "360° solutions powered by intelligent automation and global delivery.",
                icon: <Zap className="w-10 h-10" />,
              },
              {
                title: "Fyntegra Dialogue: VTI Platform",
                desc: "Voice, Text, and Intent-driven AI for seamless customer interactions.",
                icon: <Users className="w-10 h-10" />,
              },
              {
                title: "Fyntegra Shield & Stream",
                desc: "Real-time compliance, fraud detection, and streamlined operations.",
                icon: <ShieldCheck className="w-10 h-10" />,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.03 }}
                className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:border-red-300 hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-red-600 mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-black mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-12"
          >
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full font-bold shadow-xl animate-pulse">
              <Sparkles className="w-6 h-6" />
              Embedded Credit Rails via Platform — Launching Soon
              <Sparkles className="w-6 h-6" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-center mb-16"
          >
            Visionary Leadership
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Nitin Chopra */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="group p-8 bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-200 shadow-xl hover:shadow-2xl hover:border-red-300 transition-all duration-500"
            >
              <div className="flex items-center gap-5 mb-6">
                <img
                  src={assets.nitin}
                  alt="Nitin Chopra"
                  className="w-24 h-24 rounded-2xl object-cover shadow-md border-2 border-white"
                />
                <div>
                  <h3 className="text-2xl font-bold text-black">Nitin Chopra</h3>
                  <p className="text-red-600 font-semibold">
                    Chairman, Konexions • Strategic Advisor, Fyntegra
                  </p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Founder of <strong>Konexions</strong> — a ₹500 Cr+ BPM powerhouse with a roadmap to ₹2,500 Cr. With 20+ years in customer lifecycle, collections, and digital transformation, he has built trust with India’s top banks and fintechs.
              </p>
              <p className="text-gray-700 mt-4 leading-relaxed">
                As <strong>Strategic Advisor at Fyntegra</strong>, he drives enterprise governance, multi-site delivery, and AI-integrated compliance.
              </p>
              <a
                href="https://www.linkedin.com/in/nitin-chopra-7b60a380/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-full font-bold hover:bg-red-700 transition-all duration-300"
              >
                Connect on LinkedIn <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>

            {/* Farooq Patel */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="group p-8 bg-gradient-to-br from-red-50 to-white rounded-3xl border border-gray-200 shadow-xl hover:shadow-2xl hover:border-red-300 transition-all duration-500"
            >
              <div className="flex items-center gap-5 mb-6">
                <img
                  src={assets.farooq}
                  alt="Farooq Patel"
                  className="w-24 h-24 rounded-2xl object-cover shadow-md border-2 border-white"
                />
                <div>
                  <h3 className="text-2xl font-bold text-black">Farooq Patel</h3>
                  <p className="text-red-600 font-semibold">
                    Founder & CEO, Fyntegra
                  </p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Leading <strong>Fyntegra</strong> — the AI-native evolution of Konexions. Previously at <strong>Fibe</strong>, scaled CX, Sales, and BNPL from 2x to 10x growth through automation and operational excellence.
              </p>
              <p className="text-gray-700 mt-4 leading-relaxed">
                Former <strong>JP Morgan</strong> leader with deep expertise in global banking, recruiting, and large-scale execution.
              </p>
              <a
                href="https://www.linkedin.com/in/farooq-patel-b2182524a/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-full font-bold hover:bg-red-700 transition-all duration-300"
              >
                Connect on LinkedIn <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-gradient-to-r from-black via-red-900 to-red-700 text-white p-12 rounded-3xl shadow-2xl text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Scale with AI. Deliver with Trust.
            </h2>
            <p className="mt-4 text-lg text-white/90 max-w-3xl mx-auto">
              Partner with Fyntegra to unlock AI-led BPO, embedded credit, and 360° financial solutions — backed by Konexions’ proven legacy.
            </p>
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-red-600 rounded-full font-bold shadow-lg hover:scale-105 transition-all duration-300"
              >
                Start the Conversation
              </Link>
              <Link
                to="/partner-with-us"
                className="px-8 py-4 border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition-all duration-300"
              >
                Request Demo
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}