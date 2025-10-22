import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// ----------------------------------------------------------------------

const HomepageBestSeller = () => {
  return (
    <section className="bg-custom-green-500 py-[50px] lg:py-15 text-beige-100">
      <div className="max-w-6xl px-5 md:px-5 lg:px-0 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-10 items-center">
          <div className="grid grid-rows-2 col-span-4 gap-y-3 lg:gap-y-4 order-2 lg:order-1 text-sm lg:text-base font-semibold">
            <div className="grid grid-cols-5 h-50 lg:h-70 gap-3">
              <div className="relative bg-slate-300 rounded-xl lg:rounded-3xl overflow-hidden col-span-3">
                <div className="absolute bottom-2 right-2 lg:bottom-4 lg:right-4 bg-beige-100 rounded-full text-custom-green-700 px-4 py-1">
                  Salad
                </div>
                <Image
                  src="/media/images/menu-salad.jpg"
                  width={1024}
                  height={1024}
                  alt="Hero image"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="relative bg-slate-300 rounded-xl lg:rounded-3xl overflow-hidden col-span-2 shadow-lg">
                <div className="absolute top-2 left-2 lg:top-4 lg:left-4 bg-beige-100 rounded-full text-custom-green-700 px-4 py-1">
                  Gado-gado
                </div>
                <Image
                  src="/media/images/menu-gado.jpg"
                  width={1024}
                  height={1024}
                  alt="Hero image"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="grid grid-cols-5 h-50 lg:h-70 gap-3">
              <div className="relative bg-slate-300 rounded-xl lg:rounded-3xl overflow-hidden col-span-2 shadow-lg">
                <div className="absolute bottom-2 left-2 lg:bottom-4 lg:left-4 bg-beige-100 rounded-full text-custom-green-700 px-4 py-1">
                  Burger
                </div>
                <Image
                  src="/media/images/menu-burger.jpg"
                  width={1024}
                  height={1024}
                  alt="Hero image"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="relative bg-slate-300 rounded-xl lg:rounded-3xl overflow-hidden col-span-3 shadow-lg">
                <div className="absolute top-2 right-2 lg:top-4 lg:right-4 bg-beige-100 rounded-full text-custom-green-700 px-4 py-1">
                  Pizza
                </div>
                <Image
                  src="/media/images/menu-pizza.jpg"
                  width={1024}
                  height={1024}
                  alt="Hero image"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="col-span-3 lg:pl-14 order-1 lg:order-2">
            <div className="flex flex-col gap-4 lg:gap-8">
              <div className="font-playfair-display text-4xl lg:text-7xl font-bold leading-relaxed lg:leading-22">
                Menu
                <br />
                Best Seller
              </div>
              <div className="leading-relaxed text-sm lg:text-base mb-4">
                Setiap hidangan kami dibuat dengan bahan segar pilihan dan
                sentuhan cinta dari dapur kami.
                <br />
                Temukan cita rasa terbaik yang jadi favorit para pengunjung!
              </div>
              <div className="flex">
                <Link
                  href="#"
                  className="flex items-center gap-5 bg-beige-100 hover:bg-beige-300 text-custom-green-500 font-semibold rounded-full px-5 lg:px-10 py-3 lg:py-4 transition-all duration-300 text-sm lg:text-base"
                  prefetch
                >
                  Lihat semua menu
                  <ArrowRight size={16} strokeWidth={3} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageBestSeller;
