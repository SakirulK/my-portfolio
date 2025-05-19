"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const quotes = [
  "“If you can dream it, you can do it.” – Walt Disney",
  "“I think, therefore I am” – René Descartes ",
  "“The only thing we have to fear is fear itself.” – Franklin D. Roosevelt",
  "“Experience is the name everyone gives to their mistakes.” – Oscar Wilde",
  "'In three words I can sum up everything I've learned about life: it goes on. – Robert Frost",
];

export default function Slider() {
  const [index, setIndex] = useState(0);

  const prevQuote = () => {
    setIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  const nextQuote = () => {
    setIndex((prev) => (prev + 1) % quotes.length);
  };

  return (
    <section className="bg-blue-50 py-12 px-6 border-t border-blue-200 mt-20">
      <div className="max-w-4xl mx-auto flex items-center justify-center gap-6">
        {/* Left Arrow */}
        <button onClick={prevQuote} aria-label="Previous quote" className="text-blue-600 hover:text-blue-800 transition">
          <ChevronLeft size={32} />
        </button>

        {/* Quote */}
        <p className="text-lg italic text-gray-700 max-w-2xl text-center transition-opacity duration-700 ease-in-out">
          {quotes[index]}
        </p>

        {/* Right Arrow */}
        <button onClick={nextQuote} aria-label="Next quote" className="text-blue-600 hover:text-blue-800 transition">
          <ChevronRight size={32} />
        </button>
      </div>
    </section>
  );
}
