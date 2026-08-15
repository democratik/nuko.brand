'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const images = ['/img/products/RainbowAbalone.jpg', '/img/products/CrystalNecklace.jpg', '/img/products/GalaxyColors.jpg'];

export default function HeroSection() {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-[60%_40%] min-h-screen">
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center md:px-35 py-16">
          <span className="text-xs tracking-widest text-amber-700 mb-4 uppercase">Aesthetics of nature and craft</span>

          <h1 className="text-5xl md:text-6xl font-serif leading-tight mb-6">
            <Image src="/img/nuko_transparent_logo.svg" width={200} height={200} alt="nuko_logo" loading="eager"></Image>
            aesthetic accessories
          </h1>
          <p className="text-gray-600 max-w-md mb-8">
            Sculptural accessories <br />
            Japanese traditional method of woodworking <br />
            Using wood responsibly <br />
          </p>

          <div className="flex items-center gap-10">
            <button className="bg-black text-white px-8 py-4 uppercase text-sm tracking-wide hover:bg-[#3A3730] transition cursor-pointer">
              колекції
            </button>
            <a
              href="https://www.instagram.com/nuko.brand/"
              className="uppercase text-sm tracking-wide border-b border-black pb-1"
            >
              про майстра
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative w-full h-[80vh] md:h-screen">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            className="w-full h-full"
          >
            {images.map((src, i) => (
              <SwiperSlide key={i} className="relative w-full h-full">
                <Image src={src} fill className="object-cover" alt={`Slide ${i + 1}`}></Image>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
