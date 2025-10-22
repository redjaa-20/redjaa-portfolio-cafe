import { InstagramIcon, MapPin } from "lucide-react";
import Link from "next/link";

// ----------------------------------------------------------------------

const Footer = () => {
  return (
    <footer className="bg-custom-green-900 py-[50px] lg:pt-15 lg:pb-10 text-beige-100">
      <div className="max-w-6xl px-5 md:px-5 lg:px-0 mx-auto text-sm lg:text-base">
        <div className="grid lg:grid-cols-8 mb-15 gap-y-10">
          <div className="col-span-5 max-w-lg">
            <div className="font-playfair-display text-3xl leading-12 font-bold mb-7">
              Redjaa
              <br />
              Cafe
            </div>
            <div className="leading-relaxed text-sm lg:text-base mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto reprehenderit ut necessitatibus numquam iure vitae,
              totam, fuga provident beatae tempora.
            </div>
          </div>
          <div className="col-span-3">
            <div className="font-playfair-display text-lg lg:text-xl font-bold mb-5">
              Penting
            </div>
            <div className="flex gap-8 lg:gap-12 mb-6">
              <Link
                href="#"
                className="hover:underline underline-offset-4"
                prefetch
              >
                Home
              </Link>
              <Link
                href="#"
                className="hover:underline underline-offset-4"
                prefetch
              >
                Menu
              </Link>
              <Link
                href="#"
                className="hover:underline underline-offset-4"
                prefetch
              >
                About
              </Link>
              <Link
                href="#"
                className="hover:underline underline-offset-4"
                prefetch
              >
                Contact Us
              </Link>
            </div>
            <div className="flex flex-col gap-5">
              <Link
                href="#"
                className="flex items-center gap-4 lg:gap-6 hover:underline underline-offset-4"
                prefetch
              >
                <div className="flex items-center justify-center bg-beige-100 h-[35px] w-[35px] lg:h-[40px] lg:w-[40px] text-custom-green-500 rounded-full">
                  <InstagramIcon size={20} />
                </div>
                @redjaa_cafe
              </Link>
              <Link
                href="#"
                className="flex items-center gap-4 lg:gap-6 hover:underline underline-offset-4"
                prefetch
              >
                <div className="flex items-center justify-center bg-beige-100 h-[35px] w-[35px] lg:h-[40px] lg:w-[40px] text-custom-green-500 rounded-full">
                  <MapPin size={20} />
                </div>
                Jl. Belibis Kanan (Belakang Kantor Pertanahan)
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between text-sm gap-y-3">
          <div>© 2025. Redjaa Cafe. All rights reserved.</div>
          <div>
            <span>Made with pasion by </span>
            <Link
              href="https://redjaa.my.id"
              className="font-bold hover:underline underline-offset-4"
              prefetch
              target="_blank"
            >
              Redjaa
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
