import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const TestimonialsComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Isabelle",
      role: "BA at Robin",
      avatar:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&fit=crop&crop=face&auto=format",
      text: "An enim nullam tempor gravida donec enim congue magna at pretium purus pretium ligula rutrum luctus risus diam eget risus varius blandit sit amet non magna.",
      rating: 5,
    },
    {
      id: 2,
      name: "Mara Hilpert",
      role: "Web Designer",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face&auto=format",
      text: "Exceptional service and attention to detail. The team went above and beyond to deliver exactly what we needed for our project.",
      rating: 5,
    },
    {
      id: 3,
      name: "Alex Chen",
      role: "Product Manager",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face&auto=format",
      text: "Working with this team has been transformative for our business. Their expertise and professionalism are unmatched.",
      rating: 5,
    },
    {
      id: 4,
      name: "Sarah Johnson",
      role: "Marketing Director",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face&auto=format",
      text: "Incredible results and seamless collaboration. They understood our vision and brought it to life perfectly.",
      rating: 5,
    },
    {
      id: 5,
      name: "Michael Torres",
      role: "Creative Director",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face&auto=format",
      text: "Outstanding creative vision and flawless execution. They brought our brand to life in ways we never imagined possible.",
      rating: 5,
    },
    {
      id: 6,
      name: "Emily Rodriguez",
      role: "Startup Founder",
      avatar:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&fit=crop&crop=face&auto=format",
      text: "Game-changing results that exceeded all expectations. Their strategic approach revolutionized our entire business model.",
      rating: 5,
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push({ ...testimonials[index], slideIndex: i });
    }
    return visible;
  };

  return (
    <div className="relative z-10 min-h-screen bg-black/80 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gray-900 border border-gray-700 rounded-full px-6 py-2 mb-8">
            <Star
              className="w-4 h-4 fill-current"
              style={{ color: "#E7000B" }}
            />
            <span className="text-gray-300 text-sm font-medium">
              Trip Advisor
            </span>
          </div>

          <h2 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            What our happy clients say
          </h2>

          <p className="text-gray-400 text-xl mb-10 max-w-2xl mx-auto">
            Discover the experiences that drive our passion for excellence
          </p>

          <button
            className="px-8 py-4 rounded-full text-white font-semibold border-2 transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: "#E7000B",
              borderColor: "#E7000B",
            }}
          >
            View More Reviews
            <ChevronRight className="inline-block ml-2 w-5 h-5" />
          </button>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          <div className="flex items-center justify-center gap-8 min-h-[500px]">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${currentIndex}`}
                className={`relative transition-all duration-700 ease-out ${
                  index === 1
                    ? "scale-110 z-20 opacity-100"
                    : index === 0
                    ? "scale-90 -translate-x-12 z-10 opacity-60"
                    : "scale-90 translate-x-12 z-10 opacity-60"
                }`}
              >
                <div className="relative bg-gray-900 rounded-3xl p-8 w-96 h-auto border border-gray-700 shadow-2xl transition-all duration-500 hover:border-gray-600">
                  {/* Quote Icon */}
                  <div className="absolute -top-4 -left-4">
                    <div
                      className="p-3 rounded-full shadow-lg"
                      style={{ backgroundColor: "#E7000B" }}
                    >
                      <Quote className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex justify-center mb-6 gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-current"
                        style={{ color: "#EAB308" }}
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-300 text-center leading-relaxed mb-8 text-lg">
                    "{testimonial.text}"
                  </p>

                  {/* Author Info */}
                  <div className="flex flex-col items-center">
                    <div className="relative mb-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover ring-4 ring-gray-700 shadow-2xl transition-all duration-500"
                      />
                    </div>
                    <h4 className="font-bold text-white text-lg mb-1">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 p-4 rounded-full bg-gray-900 border border-gray-700 text-white transition-all duration-300 z-30"
            style={{
              ":hover": {
                backgroundColor: "#E7000B",
                borderColor: "#E7000B",
              },
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#E7000B";
              e.target.style.borderColor = "#E7000B";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "";
              e.target.style.borderColor = "";
            }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 p-4 rounded-full bg-gray-900 border border-gray-700 text-white transition-all duration-300 z-30"
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#E7000B";
              e.target.style.borderColor = "#E7000B";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "";
              e.target.style.borderColor = "";
            }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? "w-12 h-3 shadow-lg"
                  : "w-3 h-3 bg-gray-600 hover:bg-gray-500"
              }`}
              style={
                index === currentIndex ? { backgroundColor: "#E7000B" } : {}
              }
            />
          ))}
        </div>

        {/* Auto-play toggle */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
              isAutoPlaying
                ? "text-white border-gray-600"
                : "text-gray-400 border-gray-700"
            }`}
            style={
              isAutoPlaying
                ? {
                    backgroundColor: "#E7000B",
                    borderColor: "#E7000B",
                  }
                : {}
            }
          >
            {isAutoPlaying ? "Pause Auto-play" : "Resume Auto-play"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsComponent;
