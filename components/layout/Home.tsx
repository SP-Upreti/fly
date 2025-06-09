"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";

const GridImages = dynamic(() => import("../divider/divider"), {
  ssr: false
})


const GridImages2 = dynamic(() => import("../divider/divider"), {
  ssr: false
})

import We from "../we/We";

//  Only dynamically import browser-dependent components
const Hero = dynamic(() => import("../HeroComponents/Hero"), {
  ssr: false,
  loading: () => <div className="min-h-screen flex items-center justify-center">Loading Hero...</div>,
});

// Others can be imported normally unless they use `window`, `document`, etc.
import About from "../about/page";
import TrekCard from "../trekking/TrekCard";
import Popular from "../trekking/Popular";
import ActivityCarousel from "../layout/Activity";
import Book from "../layout/Book";
import Testimonial from "../testimonials/Testimonial";
import Advice from "../advice/Advice";
import CallToAction from "../calltoaction/CallToAction";

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FF4E58]"></div>
  </div>
);

const Home = () => {
  return (
    <div className="min-h-screen">
      <Suspense fallback={<LoadingSpinner />}>
        <Hero />
      </Suspense>

      <About />

      <GridImages
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

      <We />
      <TrekCard />
      <Popular />
      <CallToAction />

      <GridImages2
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
            overlay: "/logo_banner2.png",
          },
        ]}
      />

      <ActivityCarousel />
      <Book />
      <Testimonial />
      <Advice />
    </div>
  );
};

export default Home;
