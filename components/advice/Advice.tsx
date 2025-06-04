"use client";

import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import Title from "../title/Title";
import Link from "next/link";
import { blogData } from "../../components/blogData/blogData";
import { blog } from "../blog/Blogdata";

const Advice: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -340 : 340,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative z-10 bg-black/80 px-4 md:px-16 py-16">
      <div className="text-center mb-8 text-white">
        <Title
          title="Advice and Trek Tips"
          discription="Discover essential trek tips to stay safe, prepared, and make the most of your mountain adventure."
        />
      </div>

      <div className="relative">
        {/* Slide Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#FF4E58] text-white p-2 rounded-full shadow-md hover:scale-110 transition z-10"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#FF4E58] text-white p-2 rounded-full shadow-md hover:scale-110 transition z-10"
        >
          <ChevronRight />
        </button>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scroll-smooth no-scrollbar py-4 px-2"
        >
          {blogData.map((blog) => (
            <Link href={`/blogs/${blog.id}`} key={blog.id}>
              <div className="min-w-[330px] max-w-[330px] bg-[#1F1F1F] hover:bg-[#2A2A2A] transition duration-300 rounded-2xl shadow-lg flex-shrink-0 h-[370px] flex flex-col">
                <div className="relative">
                  <img
                    src={blog.image}
                    alt="Post"
                    className="rounded-t-2xl object-cover h-48 w-full"
                  />
                  <div className="absolute bottom-2 left-2 bg-[#d22e36] text-white rounded-full px-3 py-1 text-xs font-semibold shadow">
                    Read More
                  </div>
                </div>
                <div className="p-4 flex flex-col justify-between flex-1">
                  <h3 className="font-semibold text-white text-base mb-2 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-gray-400 line-clamp-3 mb-3">
                    {blog.description}
                  </p>
                  <div className="flex items-center gap-2 text-gray-300 text-sm mt-auto">
                    <Calendar className="w-4 h-4" />
                    <span>{blog.date}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advice;
