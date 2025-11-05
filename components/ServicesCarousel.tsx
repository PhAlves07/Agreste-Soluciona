"use client";
import Image from "next/image";
import { useRef } from "react";

const services = [
  { src: "/images/serv1.png", alt: "Pedreiro" },
  { src: "/images/serv2.png", alt: "Chaveiro" },
  { src: "/images/serv3.png", alt: "Pintor" },
  { src: "/images/serv4.png", alt: "Jardineiro" },
  { src: "/images/serv5.png", alt: "Vidraceiro" },
  { src: "/images/serv6.png", alt: "Montador" },
  { src: "/images/serv7.png", alt: "Eletricista" },
  { src: "/images/serv8.png", alt: "Encanador" },
  { src: "/images/serv9.png", alt: "Piscineiro" },
];

export default function ServicesCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  let isDown = false;
  let startX: number;
  let scrollLeft: number;

  const handleMouseDown = (e: React.MouseEvent) => {
    isDown = true;
    if (!scrollRef.current) return;
    scrollRef.current.classList.add("cursor-grabbing");
    startX = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown = false;
    if (scrollRef.current)
      scrollRef.current.classList.remove("cursor-grabbing");
  };

  const handleMouseUp = () => {
    isDown = false;
    if (scrollRef.current)
      scrollRef.current.classList.remove("cursor-grabbing");
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Velocidade do arraste
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="bg-[#d9d8d3] px-6 py-10">
      <h3 className="text-black text-2xl font-semibold text-center mb-6">
        Top Serviços requisitados
      </h3>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-4 scrollbar-hide cursor-grab scroll-smooth select-none"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {services.map((service, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-40 h-56 rounded-xl overflow-hidden shadow-md bg-white"
          >
            <Image
              src={service.src}
              alt={service.alt}
              width={160}
              height={220}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
