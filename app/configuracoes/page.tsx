"use client";

import { useState } from "react";
import Navbar2 from "@/components/Navbar2";
import { Settings, Bell, Lock, User, HelpCircle } from "lucide-react";

export default function Configuracoes() {
  const [notificacoesAtivas, setNotificacoesAtivas] = useState(true);

  return (
    <div className="min-h-screen bg-[#d8d6d1]">
      {/* NAVBAR fora do container central */}
      <Navbar2 />

      <div className="max-w-2xl mx-auto bg-gray-100 mt-10 rounded-xl shadow-md p-8">
        <div className="text-center mb-10">
          <Settings size={60} className="mx-auto text-orange-500" />
          <h1 className="text-2xl text-black font-semibold mt-3">Configurações</h1>
        </div>

        <div className="space-y-7">

          {/* Perfil */}
          <button className="w-full text-black flex items-center gap-4 p-4 bg-white rounded-xl shadow hover:bg-gray-50 transition">
            <User size={32} className="text-orange-500" />
            <span className="text-lg font-medium">Perfil</span>
          </button>

          {/* Notificações */}
          <button
            onClick={() => setNotificacoesAtivas(!notificacoesAtivas)}
            className="w-full flex items-center gap-4 p-4 bg-white rounded-xl shadow hover:bg-gray-50 transition text-black "
          >
            <Bell
              size={32}
              className={notificacoesAtivas ? "text-orange-500" : "text-gray-400"}
            />

            <div className="flex justify-between w-full items-center">
              <span className="text-lg font-medium">Notificações</span>

              <span
                className={`text-sm font-semibold ${
                  notificacoesAtivas ? "text-green-600" : "text-red-600"
                }`}
              >
                {notificacoesAtivas ? "Ativadas" : "Desativadas"}
              </span>
            </div>
          </button>

          {/* Segurança */}
          <button className="w-full flex items-center gap-4 p-4 bg-white rounded-xl shadow hover:bg-gray-50 transition">
            <Lock size={32} className="text-orange-500" />
            <span className="text-lg text-black font-medium">Segurança</span>
          </button>

          {/* Ajuda */}
          <button className="w-full flex items-center gap-4 p-4 bg-white rounded-xl shadow hover:bg-gray-50 transition">
            <HelpCircle size={32} className="text-orange-500" />
            <span className="text-lg text-black font-medium">Ajuda</span>
          </button>

        </div>
      </div>
    </div>
  );
}
