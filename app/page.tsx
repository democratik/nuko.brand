import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2">
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center px-4 md:px-16 py-16">
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
          <Image
            src="/img/people/RainbowAbalone.jpg"
            fill
            priority
            alt="Ювелірні прикраси ручної роботи"
            className="object-cover"
          ></Image>
        </div>
      </section>
    </>
  );
}
