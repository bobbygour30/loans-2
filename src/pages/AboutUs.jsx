import React from "react";
import { motion } from "framer-motion";
import assets from "../assets/assets";
import {
  ShieldCheck,
  Lightbulb,
  Users,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function AboutUs() {
  return (
    <div className="bg-white text-black min-h-screen mt-20">
      {/* HERO */}
      <header className="relative bg-gradient-to-r from-black to-red-600 text-white py-28 px-6 md:px-12 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-3xl md:text-5xl font-extrabold leading-tight"
          >
            About <span className="underline decoration-white/60">Fyntegra</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.3 }}
            className="mt-4 text-gray-200 max-w-2xl mx-auto"
          >
            Transforming financial services by integrating cutting-edge AI, robust compliance, and empathetic human expertise to empower lenders and borrowers alike.
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.5 }}
            className="mt-6 flex justify-center gap-3 flex-wrap"
          >
            <Link
              to="/contact"
              className="px-6 py-3 bg-white text-red-600 rounded-full font-semibold shadow hover:scale-105 transition-all duration-300"
            >
              Get in Touch
            </Link>
            <Link
              to="/partner-with-us"
              className="px-6 py-3 border border-white/50 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Request a Demo
            </Link>
          </motion.div>
        </div>
      </header>

      {/* OUR STORY */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-16 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-6">Our Story</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Fyntegra was born to revolutionize lending by bridging technology and trust. Our journey combines innovation, compliance, and customer focus to redefine financial experiences.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <img
              src={assets.team}
              alt="Our Team"
              className="rounded-2xl shadow-xl w-full object-cover max-h-96"
            />
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                Founded in 2018, Fyntegra started with a vision to simplify lending processes for banks, NBFCs, and fintechs across India. By leveraging AI-driven automation and human expertise, we tackled inefficiencies in loan disbursals, compliance, and customer experience.
              </p>
              <p className="text-gray-600">
                Today, we partner with over 120 financial institutions, processing thousands of loans with an average disbursal time of 24 hours and an NPS of 85%. Our commitment to compliance and innovation drives us to deliver seamless, scalable solutions.
              </p>
            </div>
          </div>
          {/* Timeline */}
          <div className="mt-12 flex flex-col items-center">
            <h3 className="text-xl font-semibold text-center mb-6">Our Journey</h3>
            <div className="space-y-6">
              {[
                { year: 2018, milestone: "Fyntegra founded with a mission to transform lending." },
                { year: 2020, milestone: "Launched AI-driven KYC and verification modules." },
                { year: 2022, milestone: "Partnered with 50+ banks and NBFCs across India." },
                { year: 2024, milestone: "Achieved 85% NPS and processed 5000+ loans monthly." },
                { year: 2025, milestone: "Expanded to offer omnichannel collections and analytics." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-semibold">
                    {item.year}
                  </div>
                  <div className="text-gray-600">{item.milestone}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* MISSION + VISION */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-16 px-6 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="p-8 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-xl hover:border-red-200 transition">
            <h3 className="text-xl font-semibold mb-3 text-red-600">Our Mission</h3>
            <p className="text-gray-600">
              To empower financial institutions with compliant, technology-driven solutions that streamline lending, enhance customer experiences, and ensure trust and transparency.
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-xl hover:border-red-200 transition">
            <h3 className="text-xl font-semibold mb-3 text-red-600">Our Vision</h3>
            <p className="text-gray-600">
              To become India’s leading lending solutions partner, delivering AI-powered, human-centric platforms that redefine speed, compliance, and empathy in financial services.
            </p>
          </div>
        </div>
      </motion.section>

      {/* VALUES */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-16 px-6"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6">
            Our Core Values
          </h2>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
            Our principles define how we innovate, collaborate, and deliver
            value to our partners and customers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: "Integrity",
                desc: "Upholding the highest standards of compliance and transparency in all operations.",
                icon: <ShieldCheck className="w-8 h-8 text-red-600" />,
              },
              {
                title: "Innovation",
                desc: "Pioneering AI-driven solutions while maintaining human oversight for precision.",
                icon: <Lightbulb className="w-8 h-8 text-red-600" />,
              },
              {
                title: "Customer Centricity",
                desc: "Prioritizing the needs of lenders and borrowers to create seamless experiences.",
                icon: <Users className="w-8 h-8 text-red-600" />,
              },
              {
                title: "Collaboration",
                desc: "Fostering partnerships to drive mutual success and innovation in lending.",
                icon: <HeartHandshake className="w-8 h-8 text-red-600" />,
              },
            ].map((v, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6, scale: 1.02 }}
                className="p-6 rounded-xl bg-gradient-to-tr from-white to-red-50 shadow-md border border-gray-100 hover:shadow-xl hover:border-red-200 transition-all duration-300"
              >
                <div className="flex justify-center mb-3">{v.icon}</div>
                <h3 className="text-lg font-semibold text-black mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* LEADERSHIP - UPDATED */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-16 px-6 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-6">Our Leadership</h2>
          <p className="text-gray-600 text-center mb-10 max-w-3xl mx-auto leading-relaxed">
            Meet the visionaries driving Fyntegra’s mission to transform lending with technology and trust.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Nitin Chopra */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-8 bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl hover:border-red-200 transition"
            >
              <div className="flex items-center gap-5 mb-6">
                <img
                  className="w-20 h-20 bg-gray-200 border-2 border-dashed rounded-xl object-cover"
                  src={assets.nitin}
                  alt="Nitin Chopra"
                />
                <div>
                  <h3 className="text-2xl font-bold text-black">
                    Nitin Chopra
                  </h3>
                  <p className="text-gray-600 font-medium">
                    Chairman, Konexions • Strategic Advisor, Fyntegra
                  </p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Nitin Chopra is the Founder & Chairman of{" "}
                <strong>Konexions</strong>, one of India’s most established BPM
                networks — now clocking{" "}
                <strong>₹500 Cr+ in annual revenue</strong> with a clear roadmap
                to <strong>₹2,500 Cr</strong> through its strategic merger with
                Fyntegra.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                With over two decades of leadership experience across customer
                lifecycle management, collections, and digital transformation,
                he has scaled Konexions into a trusted partner for India’s top
                banks, NBFCs, and fintechs.
              </p>
              <p className="text-gray-700 leading-relaxed">
                At <strong>Fyntegra</strong>, he serves as Strategic Advisor &
                Chairman, guiding enterprise governance, multi-site delivery,
                and compliance frameworks that blend traditional operational
                depth with AI-driven automation.
              </p>
              <div className="mt-8">
                <a
                  href="https://www.linkedin.com/in/nitin-chopra-7b60a380/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-red-600 text-white rounded-full font-medium hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
                >
                  Connect on LinkedIn
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Farooq Patel */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-8 bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl hover:border-red-200 transition"
            >
              <div className="flex items-center gap-5 mb-6">
                <img
                  className="w-20 h-20 bg-gray-200 border-2 border-dashed rounded-xl object-cover"
                  src={assets.farooq}
                  alt="Farooq Patel"
                />
                <div>
                  <h3 className="text-2xl font-bold text-black">
                    Farooq Patel
                  </h3>
                  <p className="text-gray-600 font-medium">
                    Founder & CEO, Fyntegra (Backed by Konexions)
                  </p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Farooq Patel is the Founder & CEO of <strong>Fyntegra</strong>,
                an AI-driven BPO platform backed by Konexions. Fyntegra is
                redefining how banks, NBFCs, and fintechs scale collections,
                sales, and customer experience through a seamless blend of human
                expertise and intelligent automation.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Before founding Fyntegra, Farooq held leadership roles at{" "}
                <strong>Fibe (EarlySalary)</strong>, where he led CX, Sales,
                BNPL, and Cards — helping the business achieve{" "}
                <strong>2x to 10x growth</strong>
                through operational efficiency, automation, and people
                excellence.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Earlier at <strong>JP Morgan</strong>, he played multiple roles
                across customer experience, recruiting, and operations, gaining
                deep exposure to global banking processes and large-scale
                execution.
              </p>
              <div className="mt-8">
                <a
                  href="https://www.linkedin.com/in/farooq-patel-b2182524a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-red-600 text-white rounded-full font-medium hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
                >
                  Connect on LinkedIn
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* OUR IMPACT */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-16 px-6"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6">Our Impact</h2>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
            We’re proud to make a difference in the financial ecosystem through innovation and partnerships.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-xl hover:border-red-200 transition">
              <div className="text-3xl font-bold text-red-600">120+</div>
              <p className="text-gray-600 mt-2">Banks & NBFCs partnered</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-xl hover:border-red-200 transition">
              <div className="text-3xl font-bold text-red-600">85%</div>
              <p className="text-gray-600 mt-2">Average NPS score</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-16 px-6"
      >
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-black to-red-600 text-white p-10 rounded-2xl shadow-xl text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold">Partner with Fyntegra</h2>
          <p className="mt-3 text-white/90 max-w-2xl mx-auto">
            Join us to deliver lending solutions that combine compliance, speed, and customer-centric innovation. Let’s shape the future of finance together.
          </p>
          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <Link
              to="/contact"
              className="px-6 py-3 bg-white text-red-600 rounded-full font-semibold shadow hover:scale-105 transition-all duration-300"
            >
              Contact Us
            </Link>
            <Link
              to="/partner-with-us"
              className="px-6 py-3 border border-white/50 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
}