"use client";
import Image from "next/image";

const services = [
  { src: "/images/serv1.jpg", alt: "Pedreiro" },
  { src: "/images/serv2.jpg", alt: "Chaveiro" },
  { src: "/images/serv3.jpg", alt: "Pintor" },
  { src: "/images/serv4.jpg", alt: "Jardineiro" },
  { src: "/images/serv5.jpg", alt: "Vidraceiro" },
  { src: "/images/serv6.jpg", alt: "Montador" },
];

export default function ServicesCarousel() {
  return (
    <section className="bg-gray-200 px-6 py-10">
      <h3 className="text-black text-2xl font-semibold text-center mb-6">
        Top Serviços requisitados
      </h3>

      <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
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
