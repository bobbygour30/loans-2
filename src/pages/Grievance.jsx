import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ShieldCheck,
  FileText,
  BadgeCheck,
  PhoneCall,
  CheckCircle,
  Lock,
  AlertCircle,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Grievance() {
  const escalationFlow = [
    {
      level: "Level 1",
      contact: "Support Desk",
      email: "support@fyntegra.in",
    },
    {
      level: "Level 2",
      contact: "Escalations Team",
      email: "escalations@fyntegra.in",
    },
    {
      level: "Level 3",
      contact: "Grievance Officer",
      email: "grievance@fyntegra.in",
    },
  ];

  const policies = [
    { name: "Privacy Policy", link: "/privacy" },
    { name: "Cookie Policy", link: "/cookies" },
    { name: "Customer Charter", link: "/customer-charter" },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50 mt-10">
      <div className="max-w-7xl mx-auto">
        {/* Fyntegra Shield: Core Solutions */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-24"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-center text-black mb-6">
            Fyntegra Shield: <span className="text-red-600">Our Core Solutions</span>
          </h1>
          <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-12 leading-relaxed">
            Two premium products solving spam, trust and compliance for BFSI: <strong>Shield</strong> (Badging & Branded Calls) and <strong>Stream</strong> (Regulated 140/160 Access).
          </p>

          <div className="flex justify-center gap-6 mb-16">
            <a
              href="#shield"
              className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition shadow-md"
            >
              Explore Shield <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#stream"
              className="flex items-center gap-2 px-6 py-3 border-2 border-red-600 text-red-600 rounded-lg font-semibold hover:bg-red-50 transition"
            >
              Explore Stream <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Shield & Stream Cards */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* Fyntegra Shield */}
            <motion.div
              id="shield"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition"
            >
              <div className="flex items-center gap-3 mb-4">
                <BadgeCheck className="w-8 h-8 text-red-600" />
                <h3 className="text-2xl font-bold text-black">1. Fyntegra Shield (Badging & Branded Calls)</h3>
              </div>
              <p className="text-sm font-medium text-red-600 mb-3">Focus: The Visual Trust Signal</p>
              <p className="text-gray-700 mb-6">
                The ultimate anti-fraud solution that displays your KYC-verified brand name, logo, and a guaranteed trust badge directly on the recipient's mobile screen. Instantly eliminate "Unknown Caller" or spam labels to achieve superior answer rates and customer confidence.
              </p>
              <ul className="space-y-3">
                {[
                  "KYC-verified brand display (name + logo)",
                  "Trusted badge to counter spam labeling",
                  "Higher answer rates and CX confidence",
                  "Works alongside DLT, consent & disclosures",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Fyntegra Stream */}
            <motion.div
              id="stream"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition"
            >
              <div className="flex items-center gap-3 mb-4">
                <PhoneCall className="w-8 h-8 text-red-600" />
                <h3 className="text-2xl font-bold text-black">2. Fyntegra Stream (Regulated 140/160 Access)</h3>
              </div>
              <p className="text-sm font-medium text-red-600 mb-3">Focus: The Compliant Delivery Engine</p>
              <p className="text-gray-700 mb-6">
                The new-age gateway for outbound calls. Fyntegra Stream manages complex routing and strict TRAI/DLT compliance for your Promotional (140) and Transactional/Service (160) voice traffic, ensuring timely, secure delivery and protecting your business from regulatory penalties.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-black flex items-center gap-2 mb-2">
                    <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs">140</span>
                    Promotional
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    {[
                      "TRAI-regulated CLI for promotional outreach",
                      "Provisioned via DLT/TCCCPR with opt-in/consent",
                      "Routing, retries and throttles managed by Stream",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-black flex items-center gap-2 mb-2">
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">160</span>
                    Service/Transactional
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    {[
                      "RBI/sectoral-aligned service CLIs for NBFCs & banks",
                      "KYC/TVR, disclosures and audit trails baked-in",
                      "Priority delivery and compliance safe-guards",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Compliance & Anti-Fraud Section */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-red-50 to-white p-6 rounded-xl border border-red-100"
            >
              <Lock className="w-10 h-10 text-red-600 mb-3" />
              <h4 className="font-bold text-black mb-2">DLT Registration & Disclosures</h4>
              <p className="text-sm text-gray-700">
                Templates and headers registered under DLT/TCCCPR; consent capture, purpose disclosures and opt-out aligned to RBI Digital Lending directions.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100"
            >
              <ShieldCheck className="w-10 h-10 text-blue-600 mb-3" />
              <h4 className="font-bold text-black mb-2">Compliance Guardrails</h4>
              <p className="text-sm text-gray-700">
                TRAI & RBI-aligned routing, label management, scrubbing, and audit logs reduce risk of penalties and spam markings.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-100"
            >
              <AlertCircle className="w-10 h-10 text-green-600 mb-3" />
              <h4 className="font-bold text-black mb-2">Anti-Fraud Posture</h4>
              <p className="text-sm text-gray-700">
                Combine Stream with Shield for branded display + compliant CLIs to maximize answer rates and trust.
              </p>
            </motion.div>
          </div>

          {/* Why This Works */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="mt-16 bg-gradient-to-r from-red-600 to-red-700 text-white p-8 rounded-xl text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Why This Works</h3>
            <ul className="space-y-3 max-w-3xl mx-auto text-left">
              {[
                "Fyntegra Shield is aspirational and easy for customers to grasp.",
                "Badging and 140/160 lines are replaced with strong, proprietary names.",
                "The structure (Shield → [Badging] and Stream → [140/160]) forms a premium suite that solves spam/low answer rates with two specific solutions.",
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Existing Grievance Redressal Section */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-center text-black mt-32"
        >
          Grievance Redressal & Regulatory{" "}
          <span className="text-red-600">Disclosures</span>
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-gray-600 text-center max-w-3xl mx-auto leading-relaxed"
        >
          Fyntegra is committed to transparent governance and regulatory
          compliance. Below are our Grievance Officer details, escalation
          process, and mandatory disclosures as an RBI-registered LSP.
        </motion.p>

        {/* GRO Details */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 bg-white p-8 rounded-xl shadow-md border border-gray-100"
        >
          <h2 className="text-2xl font-semibold text-center mb-6 text-black">
            Grievance Redressal Officer (GRO)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-red-600" />
              <span>Email: grievance@fyntegra.in</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-red-600" />
              <span>Phone: 9810598449</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-red-600" />
              <span>Address: I-9 ,Lajpat Nagar II, Lajpat Nagar, New Delhi, Delhi 110024</span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-red-600" />
              <span>Name: Pragati Sehgal</span>
            </div>
          </div>
        </motion.div>

        {/* Escalation Flow */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-semibold text-center mb-6 text-black">
            Escalation Flow
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            {escalationFlow.map((step, i) => (
              <div
                key={i}
                className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md border border-gray-100 w-72 text-center hover:shadow-xl hover:border-red-200 transition"
              >
                <div className="text-red-600 font-bold">{step.level}</div>
                <div className="text-black mt-2 font-medium">{step.contact}</div>
                <a
                  href={`mailto:${step.email}`}
                  className="text-sm text-red-600 mt-2 hover:underline"
                >
                  {step.email}
                </a>
              </div>
            ))}
          </div>
        </motion.div>

        {/* TAT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-semibold mb-4 text-black">Resolution Timelines</h2>
          <p className="text-gray-600">
            Acknowledgement within{" "}
            <span className="font-semibold text-red-600">48 hours</span> & full
            resolution within{" "}
            <span className="font-semibold text-red-600">30 days</span>.
          </p>
        </motion.div>

        {/* Disclosure */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 bg-white p-8 rounded-xl shadow-md border border-gray-100 text-center"
        >
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            <ShieldCheck className="inline w-6 h-6 text-red-600 mr-2" />
            Fyntegra operates as a only Solutions for Banks, NBFC , Telcos & Fintechs to deliver compliant and
            customer-centric services.
          </p>
        </motion.div>

        {/* Policies */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="mt-12 text-center"
        >
          <h2 className="text-2xl font-semibold mb-4 text-black">Policies</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {policies.map((p, i) => (
              <a
                key={i}
                href={p.link}
                className="flex items-center gap-2 text-gray-700 hover:text-red-600 transition"
              >
                <FileText className="w-5 h-5 text-red-600" />
                {p.name}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}