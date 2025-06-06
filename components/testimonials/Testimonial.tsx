"use client";

import { useRef, useState } from "react";
import { Quote } from "lucide-react";
import Title from "../title/Title";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Albert Mizuno",
    role: "Founder of The Mizuno",
    avatar: "https://i.pravatar.cc/150?img=1",
    text: "We had a fantastic experience partnering with Trionn for our website. The communication and collaboration were excellent, resulting in a top-notch design and functionality.",
  },
  {
    id: 2,
    name: "Stephen Dash",
    role: "Founder & CEO of Credible",
    avatar: "https://i.pravatar.cc/150?img=2",
    text: "The Trionn team is extremely reliable, professional and talented. It has been a great pleasure collaborating with them over many months.",
  },
  {
    id: 3,
    name: "Sarah Chen",
    role: "CTO at TechFlow",
    avatar: "https://i.pravatar.cc/150?img=3",
    text: "Trionn delivered beyond our expectations. Their attention to detail and technical expertise helped us launch our platform 2 months ahead of schedule. The code quality was exceptional.",
  },
  {
    id: 4,
    name: "Michael Rodriguez",
    role: "VP of Product at InnovateCorp",
    avatar: "https://i.pravatar.cc/150?img=4",
    text: "Working with Trionn was a game-changer for our startup. They understood our vision perfectly and built a scalable solution that grows with our business. Highly recommended!",
  },
  {
    id: 5,
    name: "Emily Johnson",
    role: "Director of Marketing at GrowthLab",
    avatar: "https://i.pravatar.cc/150?img=5",
    text: "The team's creativity and technical skills are outstanding. They transformed our outdated website into a modern, high-performing platform that increased our conversions by 150%.",
  },
  {
    id: 6,
    name: "David Park",
    role: "Founder of NextGen Solutions",
    avatar: "https://i.pravatar.cc/150?img=6",
    text: "Trionn's expertise in both design and development is rare to find. They delivered a beautiful, functional product that our users love. The project management was flawless.",
  },
  {
    id: 7,
    name: "Jessica Williams",
    role: "Head of Digital at ModernCorp",
    avatar: "https://i.pravatar.cc/150?img=7",
    text: "Outstanding work! The team delivered exactly what we envisioned and more. Their professionalism and expertise made the entire process seamless.",
  },
  {
    id: 8,
    name: "James Thompson",
    role: "CEO of InnovateNow",
    avatar: "https://i.pravatar.cc/150?img=8",
    text: "The quality of work and attention to detail is remarkable. They transformed our digital presence completely and our customers love the new experience.",
  },
];

export default function TestimonialsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, scrollLeft: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setDragStart({
      x: e.pageX - containerRef.current.offsetLeft,
      scrollLeft: containerRef.current.scrollLeft,
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - dragStart.x) * 1.5;
    containerRef.current.scrollLeft = dragStart.scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="relative z-10 min-h-screen bg-black/80 text-white">
      {/* Header Section */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Title
            title={"What Our Client Say"}
            discription="Read what our clients say about us"
          />
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="pb-20">
        <div
          className={`overflow-x-auto overflow-y-hidden scrollbar-hide ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          } select-none`}
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <div className="flex gap-6 px-6 w-max py-4">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="group w-[480px] h-[380px] bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-10 flex flex-col justify-between shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl hover:border-gray-600/50 hover:bg-gradient-to-br hover:from-gray-700/50 hover:to-gray-800/80"
              >
                <div className="relative">
                  <div className="absolute -top-4 -left-4 bg-[#E63258] p-3 rounded-full shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                    <Quote className="text-white w-5 h-5" />
                  </div>
                  <div className="mt-10">
                    <p className="text-gray-300 text-lg leading-relaxed font-light group-hover:text-gray-200 transition-colors duration-300">
                      "{testimonial.text}"
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 mt-6">
                  <div className="relative">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full ring-2 ring-[#E63258] object-cover shadow-lg transition-all duration-300"
                      draggable={false}
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="text-white font-semibold text-lg mb-1 group-hover:text-gray-100 transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700/50 backdrop-blur-sm">
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-gray-500 rounded-full animate-pulse"></div>
              <div className="w-1 h-1 bg-gray-500 rounded-full animate-pulse delay-75"></div>
              <div className="w-1 h-1 bg-gray-500 rounded-full animate-pulse delay-150"></div>
            </div>
            <p className="text-gray-400 text-sm">Drag to explore</p>
          </div>
        </div>
      </div>

      {/* Custom scrollbar styles */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
