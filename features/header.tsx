import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white border-b-1 border-mist-300 w-full flex items-center justify-between pl-12 pr-48 py-2">
      {/* logo */}
      <Image
        src="/img/nuko_logo.jpg"
        width={60}
        height={60}
        alt="nuko_logo"
        className=""
      ></Image>

      <nav className="flex gap-8 items-center text-gray-600/70">
        <a
          href="#"
          className="text-sm tracking-wide uppercase hover:text-black"
        >
          Вироби
        </a>
        <a
          href="#"
          className="text-sm tracking-wide uppercase hover:text-black"
        >
          Про нас
        </a>
        <a
          href="#"
          className="text-sm tracking-wide uppercase hover:text-black"
        >
          Процес
        </a>
        <a
          href="#"
          className="text-sm tracking-wide uppercase hover:text-black"
        >
          Контакт
        </a>
      </nav>
    </header>
  );
}
