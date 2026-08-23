'use client';

import { useState } from 'react';

const categories = ['УСІ', 'ПЕРСТНІ', 'НАМИСТА', 'БРАСЛЕТИ', 'ПІДВІСКИ'];

export default function Collections() {
  const [active, setActive] = useState('УСІ');

  return (
    <section className="flex flex-row items-end">
      <div className="flex flex-col justify-center md:px-36 py-16">
        <span className="text-xs tracking-widest text-amber-700 mb-4 uppercase">Колекції</span>
        <h1 className="text-5xl leading-tight tracking-tight">
          Кожна прикраса - <br />
          <span className="bg-olive-300">окрема скульптура</span>
        </h1>
      </div>

      <div className="flex flex-row gap-3 items-center mb-16 ml-[20%]">
        {categories.map((category) => {
          return (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={`py-3 px-3 text-xs tracking-widest uppercase border transition cursor-pointer
              ${
                active === category
                  ? 'bg-black text-white border-black'
                  : 'bg-transparent text-black border-gray-300 hover:border-black'
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </section>
  );
}
