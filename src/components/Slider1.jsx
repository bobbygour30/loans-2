"use client";
import React from "react";
import { motion } from "framer-motion";
import assets from "../assets/assets"; // make sure all images are exported here

const Slider = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const images = [
    assets.zomato,
    assets.vodafone,
    assets.uber,
    assets.swiggy,
    assets.tvs,
    assets.sbi,
    assets.rbl,
    assets.ola,
    assets.kotak,
    assets.hdfc,
    assets.american,
    assets.amazon,
    assets.airtel,
  ];

  return (
    <div>
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-12 px-6 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-lg text-gray-600 uppercase tracking-wider">
            Trusted by
          </h3>
          <h2 className="text-2xl md:text-3xl font-extrabold mt-2">
            Banks, NBFCs & Fintechs{" "}
            <span className="text-[9px] font-medium border-2 text-white bg-red-500 border-red-500 rounded-full p-1">
              Powered by Konexions
            </span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            We partner with a wide ecosystem of financial institutions and
            fintechs
          </p>

          {/* Smooth Infinite Slider */}
          <div className="mt-8 relative overflow-hidden">
            <div className="group relative w-full overflow-hidden">
              <motion.div
                className="flex items-center gap-8"
                animate={{
                  x: ["0%", "-100%"],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 25,
                  ease: "linear",
                }}
                whileHover={{ animationPlayState: "paused" }}
              >
                {[...images, ...images].map((src, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-32 h-20  rounded-lg  flex items-center justify-center p-3"
                  >
                    <img
                      src={src}
                      alt={`partner-${index}`}
                      className="object-contain w-full h-full"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Slider;
