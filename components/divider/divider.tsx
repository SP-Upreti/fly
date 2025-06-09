import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type HeroSectionProps = {
  panels: { base: string; overlay: string }[];
};

const HeroSection: React.FC<HeroSectionProps> = ({ panels }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const overlays = gsap.utils.toArray<HTMLDivElement>(".overlay-img");

      // Set initial state
      gsap.set(overlays, { yPercent: 0 });

      // Create timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=100%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(overlays, {
        yPercent: -100,
        ease: "none",
        stagger: 0.5,
      });

      // Wait for all images to be loaded
      const images = gsap.utils.toArray<HTMLImageElement>('img', containerRef.current);
      let loadedCount = 0;
      const totalImages = images.length;
      const loadCallbacks: (() => void)[] = [];

      const checkLoadStatus = () => {
        if (++loadedCount === totalImages) {
          requestAnimationFrame(() => {
            ScrollTrigger.refresh(true);
          });
        }
      };

      images.forEach((img) => {
        if (img.complete) {
          checkLoadStatus();
        } else {
          const onLoad = () => {
            checkLoadStatus();
          };
          img.addEventListener("load", onLoad);
          loadCallbacks.push(() => img.removeEventListener("load", onLoad));
        }
      });

      return () => {
        loadCallbacks.forEach((cb) => cb());
      };
    }, containerRef);

    return () => ctx.revert();
  }, [panels]);

  return (
    <div className="h-[180vh]">
      <section
        ref={containerRef}
        className="flex h-[60vh] overflow-hidden bg-black relative"
      >
        {panels.map((panel, index) => (
          <div
            key={index}
            className="relative w-1/3 h-full overflow-hidden flex-shrink-0"
          >
            {/* Base Image */}
            <img
              src={panel.base}
              alt={`base-${index}`}
              className="w-full h-full object-cover absolute inset-0 z-0"
            />

            {/* Overlay Image */}
            <div className="overlay-img absolute inset-0 z-10 h-full w-full overflow-hidden">
              <img
                src={panel.overlay}
                alt={`overlay-${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default HeroSection;
