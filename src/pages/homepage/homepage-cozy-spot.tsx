"use client";

import ScrollReveal from "@/components/framer-animation/scroll-reveal";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef, useState } from "react";

// ----------------------------------------------------------------------

const images = [
  "/media/images/cozy-spot-1.jpg",
  "/media/images/cozy-spot-2.jpg",
  "/media/images/cozy-spot-3.jpg",
  "/media/images/cozy-spot-4.jpg",
];

// ----------------------------------------------------------------------

const HomepageCozySpot = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scrollNext = () => {
    carouselRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  const scrollPrev = () => {
    carouselRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  return (
    <section className="px-5 md:px-5 lg:pl-[100px] lg:pr-0 mx-auto py-[50px] lg:py-15">
      <div className="grid grid-cols-1 lg:grid-cols-8 gap-y-10 items-center text-custom-green-500">
        <div className="col-span-5">
          <div className="flex flex-col gap-4 lg:gap-8">
            <ScrollReveal type="slide-up">
              <div className="max-w-2xl font-playfair-display text-4xl lg:text-7xl font-bold leading-relaxed lg:leading-22">
                Spot Estetik, Wajib Buat yang Suka Foto-Foto!
              </div>
            </ScrollReveal>
            <ScrollReveal type="slide-up" delay={0.1}>
              <div className="max-w-xl leading-relaxed text-sm lg:text-base mb-4">
                Setiap sudut kami dirancang untuk membuatmu betah — entah buat
                ngobrol santai, kerja, atau sekadar menikmati kopi hangat.
                <br />
                Cahaya lembut dan interior yang estetik siap menyambutmu.
              </div>
            </ScrollReveal>
            <ScrollReveal type="slide-up" delay={0.2}>
              <div className="flex gap-5 text-beige-100">
                <button
                  onClick={scrollPrev}
                  className="bg-custom-green-500 p-3 rounded-full cursor-pointer"
                >
                  <ArrowLeft size={20} />
                </button>
                <button
                  onClick={scrollNext}
                  className="bg-custom-green-500 p-3 rounded-full cursor-pointer"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>
        <div className="col-span-3 relative">
          <ScrollReveal type="slide-up" delay={0.3}>
            <div
              ref={carouselRef}
              className="flex gap-4 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {images.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`Spot ${idx + 1}`}
                  className="flex-shrink-0 w-70 h-100 lg:w-90 lg:h-130 object-cover rounded-2xl shadow-md"
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default HomepageCozySpot;
