"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/images/img1.png",
  "/images/img2.png",
  "/images/img3.png",
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  function nextImage() {
    setIndex((prev) => (prev + 1) % images.length);
  }

  function prevImage() {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  }

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-2xl mt-6">
      <AnimatePresence mode="wait">
        <motion.img
          key={images[index]}
          src={images[index]}
          alt={`Imagem ${index + 1}`}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Botão anterior */}
      <button
        onClick={prevImage}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Botão próximo */}
      <button
        onClick={nextImage}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicadores (bolinhas) */}
      <div className="absolute bottom-3 w-full flex justify-center space-x-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === index ? "bg-white" : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
