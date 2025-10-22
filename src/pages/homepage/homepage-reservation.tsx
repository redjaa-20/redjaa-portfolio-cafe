"use client";

import { ChevronDownIcon } from "lucide-react";
import { FormEvent, useState } from "react";

const HomepageReservation = () => {
  const [nama, setNama] = useState("");
  const [jumlah, setJumlah] = useState("1");
  const [tanggal, setTanggal] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      const pesan = `*Form Reservasi Coconam Food*

Halo kak, saya mau reservasi meja nih, berikut datanya :

Nama lengkap : *${nama}*
Jumlah orang : *${jumlah} orang*
Tanggal & Waktu : *${tanggal}*`;

      const encodedMessage = encodeURIComponent(pesan);
      const nomor = "6282214487498"; // ganti dengan nomor kamu
      const waLink = `https://wa.me/${nomor}?text=${encodedMessage}`;

      window.open(waLink, "_blank");
      setLoading(false);
    }, 2000);
  };

  return (
    <section className="bg-custom-green-500 py-[50px] lg:py-15 text-beige-100">
      <div className="max-w-6xl px-5 md:px-5 lg:px-0 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 items-center">
          <div className="flex flex-col gap-4 lg:gap-8">
            <div className="font-playfair-display text-4xl lg:text-7xl font-bold leading-relaxed lg:leading-22 max-w-lg">
              Reservasi Meja Anda Sekarang
            </div>
            <div className="leading-relaxed text-sm lg:text-base mb-2 max-w-md">
              Pesan meja lebih awal agar Anda bisa menikmati waktu tanpa
              terburu-buru.
            </div>
            <div className="flex flex-col gap-7 max-w-3xs text-lg">
              <div>
                <span className="font-bold">Sen-Jum: </span>11.00 - 22.00 WITA
              </div>
              <hr className="border-t border-beige-100" />
              <div>
                <span className="font-bold">Sab-Min: </span>11.00 - 22.00 WITA
              </div>
              <hr className="border-t border-beige-100" />
            </div>
          </div>
          <div className="flex lg:justify-end">
            <div className="bg-beige-100 rounded-xl lg:rounded-3xl text-custom-green-700 px-10 pt-7 pb-10 lg:pt-10 lg:pb-13 lg:px-15 max-w-[30rem] w-full ml-auto">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col">
                  <div className="font-playfair-display text-2xl lg:text-3xl font-bold mb-10">
                    Form Reservasi
                  </div>
                  <div className="flex flex-col gap-7 mb-10">
                    <div>
                      <label
                        htmlFor="full-name"
                        className="block font-medium text-custom-green-500 text-sm lg:text-base"
                      >
                        Nama Lengkap
                      </label>
                      <div className="mt-2">
                        <input
                          id="full-name"
                          type="text"
                          value={nama}
                          onChange={(e) => setNama(e.target.value)}
                          className="block w-full rounded-lg text-sm lg:text-base p-4 outline-1 -outline-offset-1 outline-custom-green-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-custom-green-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="total-person"
                        className="block font-medium text-custom-green-500 text-sm lg:text-base"
                      >
                        Jumlah orang
                      </label>
                      <div className="mt-2 grid grid-cols-1">
                        <select
                          id="total-person"
                          name="total-person"
                          value={jumlah}
                          onChange={(e) => setJumlah(e.target.value)}
                          autoComplete="total-person"
                          className="col-start-1 row-start-1 w-full text-sm lg:text-base appearance-none rounded-lg py-4 pr-8 pl-4 outline-1 -outline-offset-1 outline-custom-green-500 focus:outline-2 focus:-outline-offset-2 focus:outline-custom-green-500 cursor-pointer"
                        >
                          {Array.from({ length: 10 }, (_, i) => (
                            <option key={i + 1} value={i + 1}>
                              {i + 1}
                            </option>
                          ))}
                        </select>
                        <ChevronDownIcon
                          aria-hidden="true"
                          className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-custom-green-500 sm:size-4"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="date-time"
                        className="block font-medium text-custom-green-500 text-sm lg:text-base"
                      >
                        Tanggal & Waktu
                      </label>
                      <div className="mt-2">
                        <input
                          id="date-time"
                          type="text"
                          value={tanggal}
                          onChange={(e) => setTanggal(e.target.value)}
                          className="block w-full rounded-lg text-sm lg:text-base p-4 outline-1 -outline-offset-1 outline-custom-green-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-custom-green-500"
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className={`w-full py-4 px-3 rounded-lg text-beige-100 cursor-pointer transition-all duration-300 text-sm lg:text-base font-semibold hover:bg-custom-green-600 ${
                      loading ? "bg-custom-green-200" : "bg-custom-green-500"
                    }`}
                  >
                    {loading ? "Mengirim..." : "Kirim reservasi"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageReservation;
