// Install gsap
// npm install gsap

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const We = () => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { y: 200 },
      {
        y: "-140%", // 30% slower
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      }
    );
  });

  return (
    <section
      ref={containerRef}
      className="h-[120vh] overflow-hidden bg-black text-white flex items-center justify-center p-10"
    >
      <div className="flex w-full gap-3">
        <div className="w-1/3 relative text-end">
          <div className="sticky top-24 -translate-y-[3rem] text-5xl font-semibold">we</div>
        </div>
        <div className="w-2/3 space-y-4" ref={contentRef}>
          {phrases.map((text, index) => (
            <div key={index} className="text-5xl font-semibold">
              {text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default We

const phrases = [
  "welcome with open hearts.",
  "inspire through nature.",
  "guide with passion.",
  "share the beauty of Nepal.",
];

