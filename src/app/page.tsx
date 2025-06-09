"use client";

import React from "react";
import dynamic from "next/dynamic";

const Home = dynamic(() => import("../../components/layout/Home"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FF4E58]"></div>
    </div>
  ),
});

const Page = () => {
  return <Home />;
};

export default Page;
