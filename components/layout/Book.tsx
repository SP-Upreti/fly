"use client";

import { useEffect, useRef, useState } from "react";
import Title from "../../components/title/Title";

const TrekBookingSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const setupGSAP = async () => {
      const gsapModule = await import("gsap");
      const gsap = gsapModule.default;
      const ScrollTriggerModule = await import("gsap/ScrollTrigger");
      const ScrollTrigger = ScrollTriggerModule.default;

      gsap.registerPlugin(ScrollTrigger);

      let animation: any = null;

      const setupAnimation = () => {
        if (animation) {
          animation.kill();
          animation = null;
        }

        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

        if (window.innerWidth < 640) return;

        if (videoRef.current && triggerRef.current) {
          // Set initial styles on video
          gsap.set(videoRef.current, {
            height: "25vh",
            width: "20vw",
            borderRadius: "1rem",
          });

          // Animate video scaling using triggerRef as the ScrollTrigger trigger
          animation = gsap.to(videoRef.current, {
            height: "100vh",
            width: "100%",
            borderRadius: "20px",
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: triggerRef.current,
              start: "top bottom", // when trigger top hits viewport bottom
              end: "top 30%", // when trigger top hits 30% viewport height
              scrub: 2,
              markers: false,
            },
          });

          ScrollTrigger.refresh();
        }
      };

      setupAnimation();

      window.addEventListener("resize", setupAnimation);

      return () => {
        window.removeEventListener("resize", setupAnimation);
        if (animation) animation.kill();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    };

    setupGSAP();
  }, [mounted]);

  return (
    <section className="relative z-10 w-full  flex flex-col items-center bg-black/80 text-white overflow-hidden">
      {/* Heading */}
      <Title
        title="Book Your Trek & Just Go"
        discription="Experience the thrill of adventure with our exclusive trekking packages. Book now and embark on your journey!"
      />

      {/* ScrollTrigger trigger container */}
      <div ref={triggerRef} className="mx-auto w-full h-screen mt-12 ">
        {mounted && (
          <video
            ref={videoRef}
            src="/video/flyeast-vdo.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="mx-auto h-[20vh] sm:h-[16vh] w-45 rounded-4xl object-cover "
          />
        )}
      </div>
    </section>
  );
};

export default TrekBookingSection;
