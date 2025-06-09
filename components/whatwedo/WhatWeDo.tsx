import React from "react";
import { Users, MapPin, Globe, Star } from "lucide-react";
import Image from "next/image";

const StatisticsAndPartners = () => {
  return (
    <div className="w-full flex flex-col">
      {/* Partners Section */}
      <div className="bg-black/40 z-10">
        <div className="w-full text-white px-4 md:px-24 py-10">
          <div className=" mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <h1 className="font-bold text-5xl uppercase">Associated With</h1>

              <div className="flex flex-wrap justify-center gap-8">
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
                    className="h-14 w-auto"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsAndPartners;
