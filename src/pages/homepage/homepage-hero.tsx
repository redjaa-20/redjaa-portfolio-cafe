import ScrollReveal from "@/components/framer-animation/scroll-reveal";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// ----------------------------------------------------------------------

const HomepageHero = () => {
  return (
    <section className="max-w-6xl px-5 lg:px-0 mx-auto">
      <div className="h-screen flex items-center justify-between">
        <div className="flex flex-col justify-end max-w-md gap-6 lg:gap-10 lg:pt-20">
          <ScrollReveal type="slide-up" delay={0.2}>
            <div className="font-playfair-display max-w-xs text-6xl lg:text-8xl font-bold leading-18 lg:leading-28 text-custom-green-500">
              Redjaa Cafe
            </div>
          </ScrollReveal>
          <ScrollReveal type="slide-up" delay={0.3}>
            <div className="leading-relaxed text-sm lg:text-base mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto reprehenderit ut necessitatibus numquam iure vitae,
              totam, fuga provident beatae tempora.
            </div>
          </ScrollReveal>
          <div className="flex items-center gap-6 lg:gap-8 text-sm lg:text-base">
            <ScrollReveal type="slide-up" delay={0.4}>
              <Link
                href="#"
                className="flex items-center gap-4 bg-custom-green-500 font-semibold hover:bg-custom-green-600 text-custom-text-secondary rounded-full px-5 lg:px-10 py-3 lg:py-4 transition-all duration-300"
                prefetch
              >
                Reservasi
                <ArrowRight size={16} strokeWidth={3} />
              </Link>
            </ScrollReveal>
            <ScrollReveal type="slide-up" delay={0.5}>
              <Link
                href="#"
                className="text-custom-green-500 hover:underline underline-offset-4 font-semibold text-sm lg:text-base"
              >
                Daftar Menu
              </Link>
            </ScrollReveal>
          </div>
        </div>
        <ScrollReveal type="slide-up" delay={0.5}>
          <div className="hidden lg:flex h-140 2xl:h-160 w-130 overflow-hidden rounded-3xl">
            <Image
              src="/media/images/hero-image.jpg"
              width={680}
              height={1024}
              alt="Hero image"
              className="h-full w-full object-cover"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HomepageHero;
