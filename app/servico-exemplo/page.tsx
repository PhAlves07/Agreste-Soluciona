"use client";

import Navbar2 from "@/components/Navbar2";
import { useState } from "react";
import { Search, ChevronRight } from "lucide-react";

export default function MontadorMoveis() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<string | null>(null);
  const [subcategoriaSelecionada, setSubcategoriaSelecionada] = useState<string | null>(null);

  const opcoes: string[] = [
    "Móveis Convencionais",
    "Móveis Corporativos",
    "Móveis de Aço",
    "Móveis Modulados",
    "Outros",
  ];

  const subOpcoes: Record<string, string[]> = {
    "Móveis Convencionais": [
      "Guarda-roupa",
      "Cama",
      "Mesa",
      "Criado-mudo",
      "Painel",
      "Sapateira",
      "Cômoda",
      "Escrivaninha",
    ],
  };

  return (
    <div className="min-h-screen bg-[#e9e8e6] text-black">
      <Navbar2 />

      <div className="max-w-xl mx-auto mt-14 p-6 text-center">
        {!categoriaSelecionada && (
          <>
            <h1 className="text-xl font-semibold leading-tight">
              Qual serviço de <br /> Montador de Móveis <br /> está precisando?
            </h1>

            <div className="relative max-w-md mx-auto mt-6">
              <input
                type="text"
                placeholder="O que você precisa?"
                className="w-full bg-white text-sm rounded-full py-3 pl-5 pr-11 shadow-md outline-none placeholder-gray-500"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full shadow transition">
                <Search size={18} />
              </button>
            </div>

            <div className="bg-[#f6f3f2] rounded-xl shadow-lg p-5 mt-10 max-w-sm mx-auto">
              <div className="space-y-3">
                {opcoes.map((item) => (
                  <button
                    key={item}
                    onClick={() => setCategoriaSelecionada(item)}
                    className="w-full flex items-center justify-between bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-lg shadow transition"
                  >
                    <span className="text-left text-base font-medium">{item}</span>
                    <ChevronRight size={22} />
                  </button>
                ))}
              </div>
            </div>
          </>
        )}

  
        {categoriaSelecionada &&
          !subcategoriaSelecionada &&
          subOpcoes[categoriaSelecionada] && (
            <>
              <h1 className="text-xl font-semibold mb-8">{categoriaSelecionada}</h1>

              <div className="bg-[#f6f3f2] rounded-xl shadow-lg p-5 max-w-sm mx-auto space-y-3">
                {subOpcoes[categoriaSelecionada].map((sub) => (
                  <button
                    key={sub}
                    onClick={() => setSubcategoriaSelecionada(sub)}
                    className="w-full flex items-center justify-between bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-lg shadow transition"
                  >
                    <span className="text-left text-base font-medium">{sub}</span>
                    <ChevronRight size={22} />
                  </button>
                ))}

                <button
                  onClick={() => setCategoriaSelecionada(null)}
                  className="w-full mt-4 text-orange-600 font-semibold underline"
                >
                  Voltar
                </button>
              </div>
            </>
          )}

       
        {(subcategoriaSelecionada ||
          (categoriaSelecionada && !subOpcoes[categoriaSelecionada])) && (
          <div className="max-w-xl mx-auto mt-12 bg-white p-6 rounded-xl shadow-md text-left">
            <h2 className="text-xl font-semibold mb-6 text-center">Finalizar Solicitação</h2>

            <form className="space-y-4">
              <div>
                <label className="block font-medium mb-1">Nome completo</label>
                <input className="w-full p-3 border rounded-lg outline-none" placeholder="Seu nome" />
              </div>

              <div>
                <label className="block font-medium mb-1">Telefone</label>
                <input
                  className="w-full p-3 border rounded-lg outline-none"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Endereço</label>
                <input
                  className="w-full p-3 border rounded-lg outline-none"
                  placeholder="Rua, número, bairro"
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Descrição do serviço</label>
                <textarea
                  className="w-full p-3 border rounded-lg outline-none"
                  rows={4}
                  placeholder="Descreva o que precisa"
                ></textarea>
              </div>

              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold shadow">
                Enviar Solicitação
              </button>

              <button
                type="button"
                className="w-full text-orange-600 text-center mt-4 font-semibold underline"
                onClick={() => {
                  setSubcategoriaSelecionada(null);
                  setCategoriaSelecionada(null);
                }}
              >
                Voltar
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
