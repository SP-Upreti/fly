"use client";

import Image from "next/image";
import React from "react";
import { CheckCircle } from "lucide-react";

const Season = () => {
  return (
    <section
      id="season-&-weather"
      className="relative w-full text-black px-4 py-16"
    >
      <div className="mx-auto space-y-12">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Best Time for Manaslu Circuit Trek
        </h2>

        {/* Seasons */}
        <div className="space-y-8">
          {/* Autumn */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-full md:w-1/3">
              <Image
                src="https://cdn.pixabay.com/photo/2023/01/07/20/08/woman-7704047_1280.jpg"
                alt="Autumn Trek"
                width={600}
                height={400}
                className="rounded-xl object-cover w-full h-auto"
              />
            </div>
            <div className="flex-1 space-y-3">
              <h3 className="text-xl md:text-2xl font-semibold">
                Autumn (Sept – Nov) – Best Season
              </h3>
              <ul className="space-y-2 text-gray-700">
                {[
                  "Clear skies, stable weather, amazing mountain views",
                  "Peak trekking season in Nepal",
                  "Ideal for first-time and experienced trekkers",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="text-green-400 w-5 h-5 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Spring */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-full md:w-1/3">
              <Image
                src="https://cdn.pixabay.com/photo/2023/04/29/09/51/polana-kalatowki-7958161_1280.jpg"
                alt="Spring Trek"
                width={600}
                height={400}
                className="rounded-xl object-cover w-full h-auto"
              />
            </div>
            <div className="flex-1 space-y-3">
              <h3 className="text-xl md:text-2xl font-semibold">
                Spring (Mar – May) – Beautiful & Colorful
              </h3>
              <ul className="space-y-2 text-gray-700">
                {[
                  "Blooming rhododendrons and lush landscapes",
                  "Great visibility and moderate temperatures",
                  "Fewer crowds than autumn",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="text-green-400 w-5 h-5 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Qualification Section */}
        <div className="mt-12 space-y-6">
          <h3 className="text-2xl font-semibold">
            Qualification and Skills Required
          </h3>
          <ul className="space-y-3 text-gray-700">
            {[
              "Moderate to Good Fitness Level",
              "Strong Mental & Physical Endurance",
              "No Technical Climbing Needed",
              "Trek Preparation is Recommended",
              "Basic Knowledge of AMS (Altitude Sickness)",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="text-green-400 w-5 h-5 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-700 italic">
            Note: You don’t need to be a pro, but preparation is key to enjoy
            this trek safely and comfortably.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Season;
