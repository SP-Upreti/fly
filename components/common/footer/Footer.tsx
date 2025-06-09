"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import StatisticsAndPartners from "../../whatwedo/WhatWeDo";

const Footer = () => {
  return (
    <footer className="relative w-full min-h-[100vh] bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden  flex flex-col justify-between items-center">
      {/* Background overlays */}
      <div className="absolute inset-0 bg-[url('/navbg.svg')] z-10 opacity-70"></div>
      <div className="absolute top-0 left-0 w-full h-[15vh] bg-gradient-to-b from-gray-900/50 z-10 opacity-70"></div>
      <div className="absolute inset-0 bg-[url('https://www.relaxgetaways.com/uploads/media/Short%20Treks/intero%20for%20short%20trek.jpg')] bg-cover bg-center"></div>

      {/* Decorative image */}
      <div className="absolute right-0 bottom-0 w-72 sm:w-80 h-72 sm:h-80">
        <Image
          fill
          className="opacity-10 object-cover"
          src="/heroimages/footer.svg"
          alt="Footer Decorative"
          sizes="(max-width: 640px) 288px, 320px"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full h-full my-auto px-4 sm:px-8 lg:px-24 ">
        {/* Hero Section */}
        <div className=" mx-auto space-y-5">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative h-12 sm:h-16 w-auto">
              <Image
                src="/logo1.png"
                alt="Logo"
                width={230}
                height={110}
                className="object-contain"
              />
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight bg-gradient-to-r from-[#FF4E58] to-orange-400 bg-clip-text text-transparent">
            Explore Nepal. Once in a lifetime.
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl">
            Discover breathtaking adventures and create unforgettable memories
            with our expertly guided heroes.
          </p>
          <div className="flex gap-4">
            <div className="flex items-center gap-4">
              <h2 className="uppercase text-2xl font-semibold text-zinc-200">
                We accept
              </h2>
              <Image
                height={120}
                width={300}
                src="/heroimages/payment.webp"
                alt="Payment Methods"
                className="w-40 h-20 opacity-80 hover:opacity-100 transition-opacity object-contain cursor-pointer"
              />
            </div>

            {/* Associate with */}
            <div className="flex flex-col md:flex-row items-center justify-start gap-6">
              <h1 className="uppercase text-2xl font-semibold text-zinc-200">
                Associated With
              </h1>
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  "associated1.b77b7a15.png",
                  "associated2.ab7d60cb.png",
                  "certified.fd697c23.png",
                ].map((img, idx) => (
                  <Image
                    height={500}
                    width={500}
                    key={idx}
                    src={`https://infinityadventurenepal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F${img}&w=256&q=75`}
                    alt={`Partner ${idx + 1}`}
                    className="h-14 w-auto  bg-white rounded-full p-1"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* CTA + Social */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <button className="bg-[#FB2C36] hover:bg-[#ff4e57] text-white px-6 py-3 rounded-full font-semibold text-sm transition-all cursor-pointer">
              Experience Now
            </button>

            <div className="flex space-x-4 items-center">
              {[
                {
                  img: "https://www.facebook.com/favicon.ico",
                },
                {
                  img: "https://www.instagram.com/static/images/ico/favicon-200.png/ab6eff595bb1.png",
                },
                {
                  img: "https://www.linkedin.com/favicon.ico",
                },
              ].map(({ img }, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
                >
                  <Image
                    height={500}
                    width={500}
                    src={img}
                    alt="Social Icon"
                    className="w-7 h-7"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-gray-700/50 w-full flex justify-between items-center">
        <div className="w-full px-4 sm:px-8 lg:px-24 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-center lg:text-left">
            <p className="text-gray-300 text-sm">
              © 2025 Flyeast Experience Nepal. All Rights Reserved.
            </p>
            <div className="flex items-center space-x-2">
              <span className="text-gray-300 text-sm">
                Designed and Developed by
              </span>
              <Link href="https://www.webxnep.com/" target="_blank">
                <Image
                  height={500}
                  width={500}
                  src="https://www.webxnep.com/logo/logo.svg"
                  alt="WebX Nepal"
                  className="w-16 opacity-80 hover:opacity-100 hover:scale-110 transition-opacity object-contain"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
