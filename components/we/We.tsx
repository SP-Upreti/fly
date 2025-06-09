import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const phrases = [
  "welcome with open hearts.",
  "inspire through nature.",
  "guide with passion.",
  "share the beauty of Nepal.",
];

const We = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  // Scroll animation for "we"
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Transform the scroll to move slower (parallax effect)
  const y = useTransform(scrollYProgress, [0, 1], [0, 230]);

  return (
    <section className="h-[120vh] bg-black text-white flex items-center justify-center p-10">
      <div className="flex w-full gap-3">
        {/* Left "we" with slower scroll motion */}
        <div className="w-1/3 relative text-end -translate-y-4">
          <motion.div
            style={{ y }}
            className="text-5xl font-semibold"
          >
            we
          </motion.div>
        </div>

        {/* Right scroll content */}
        <div className="w-2/3 space-y-4" ref={ref}>
          {phrases.map((text, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-5xl font-semibold"
            >
              {text}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default We;
