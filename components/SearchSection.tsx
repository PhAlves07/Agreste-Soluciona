"use client";
import { Search } from "lucide-react";

export default function SearchSection() {
  return (
    <section className="bg-gray-200 text-gray-800 px-6 py-10 flex flex-col items-center text-center">
      <h2 className="text-lg md:text-xl font-light max-w-md leading-relaxed">
        Encontre profissionais e contrate serviços para tudo que precisar
      </h2>

      <div className="relative w-full max-w-md mt-6">
        <input
          type="text"
          placeholder="Busque um profissional"
          className="w-full rounded-full bg-white px-6 py-3 pl-12 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <Search className="absolute left-4 top-3 text-gray-400" />
      </div>

      <div className="mt-6">
        <p className="text-sm mb-2">Quer ser um profissional?</p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition flex items-center space-x-2">
          <span>Clique aqui</span>
          <span>→</span>
        </button>
      </div>
    </section>
  );
}
