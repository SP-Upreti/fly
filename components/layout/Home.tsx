"use client";

import React, { Suspense, lazy } from "react";
import dynamic from "next/dynamic";
import Divider from "../divider/divider";
import We from "../we/We";

// Dynamically import components that might access browser APIs with SSR disabled

// 👇 Dynamically import Hero and disable SSR
const Hero = dynamic(() => import("../HeroComponents/Hero"), {
  ssr: false,
  loading: () => <div className="min-h-screen flex items-center justify-center">Loading Hero...</div>,
});
const About = dynamic(() => import("../about/page"), { ssr: false });
const TrekCard = dynamic(() => import("../trekking/TrekCard"), { ssr: false });
const Popular = dynamic(() => import("../trekking/Popular"), { ssr: false });
const ActivityCarousel = dynamic(() => import("../layout/Activity"), {
  ssr: false,
});
const Book = dynamic(() => import("../layout/Book"), { ssr: false });
const Testimonial = dynamic(() => import("../testimonials/Testimonial"), {
  ssr: false,
});
const Advice = dynamic(() => import("../advice/Advice"), { ssr: false });
// const WhatWeDo = dynamic(() => import("../whatwedo/WhatWeDo"), { ssr: false });
const CallToAction = dynamic(() => import("../calltoaction/CallToAction"), {
  ssr: false,
});

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FF4E58]"></div>
  </div>
);

const Home = () => {
  // Use Suspense to show loading state for dynamically imported components
  return (
    <div className="min-h-screen">
      <Suspense fallback={<LoadingSpinner />}>
        <Hero />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <About />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Divider
          panels={[
            {
              base: "/divider-image/lang2.jpg",
              overlay: "/divider-image/lang3.jpg",
            },
            {
              base: "/divider-image/lang1.jpg",
              overlay: "/divider-image/lang5.jpg",
            },
            {
              base: "/logo_banner2.png",
              overlay: "/divider-image/lang1.jpg",
            },
          ]}
        />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <We />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <TrekCard />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Popular />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <CallToAction />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Divider
          panels={[
            {
              base: "/divider-image/lang2.jpg",
              overlay: "/divider-image/lang3.jpg",
            },
            {
              base: "/divider-image/lang1.jpg",
              overlay: "/divider-image/lang5.jpg",
            },
            {
              base: "/divider-image/lang7.jpg",
              overlay: "/logo.png",
            },
          ]}
        />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <ActivityCarousel />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Book />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Testimonial />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Advice />
      </Suspense>
    </div>
  );
};

export default Home;
