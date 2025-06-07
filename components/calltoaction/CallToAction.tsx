"use client";

import Image from "next/image";
import { FiAward, FiShield, FiUsers, FiClock } from "react-icons/fi";
import Title from "../title/Title";

type Feature = {
  id: number;
  icon: JSX.Element;
  title: string;
  description: string;
};

const CallToAction = () => {
  const features: Feature[] = [
    {
      id: 1,
      icon: <FiAward size={28} strokeWidth={2} />,
      title: "Best Price Guaranteed",
      description:
        "We promise unbeatable pricing on all services, ensuring you get the best value without compromising quality.",
    },
    {
      id: 2,
      icon: <FiShield size={28} strokeWidth={2} />,
      title: "Certified & Trusted Service",
      description:
        "Our certified team provides reliable and safe services prioritizing your confidence and peace of mind.",
    },
    {
      id: 3,
      icon: <FiUsers size={28} strokeWidth={2} />,
      title: "Professional Rescue Team",
      description:
        "Our experienced rescue team is available 24/7, trained to handle emergencies efficiently.",
    },
    {
      id: 4,
      icon: <FiClock size={28} strokeWidth={2} />,
      title: "24/7 Customer Service",
      description:
        "Round-the-clock support team to assist, guide, and resolve any issues during your journey.",
    },
  ];

  return (
    <section className="relative z-10 bg-black/80 w-full h-screen text-white ">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/heroimages/faded.png"
          alt="Adventure"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full w-full px-6 md:px-12 flex flex-col justify-center items-center text-center">
        <div className="max-w-4xl space-y-6">
          <Title
            title="Why Choose Flyeast Nepal?"
            discription="An enhanced safety record provides peace of mind while you explore the breathtaking heights of the Himalayas."
          />
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-5xl w-full">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex items-start gap-4 p-5 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm"
            >
              {/* Icon */}
              <div className="p-3 rounded-full border border-white/20 text-[#E63258] bg-red-300/10 flex items-center justify-center">
                {feature.icon}
              </div>

              {/* Text */}
              <div className="text-left">
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-sm text-gray-300 mt-1">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
