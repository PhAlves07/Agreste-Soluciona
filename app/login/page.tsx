"use client";

import Image from "next/image";
import { useState } from "react";
import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <div className="min-h-screen bg-[#d9d8d3] flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center bg-[#bfbfbf] px-6 py-2">
        <div className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="Logo" width={80} height={80} />
        </div>
        <div className="space-y-1 cursor-pointer">
          <div className="w-8 h-[3px] bg-black rounded"></div>
          <div className="w-8 h-[3px] bg-black rounded"></div>
          <div className="w-8 h-[3px] bg-black rounded"></div>
        </div>
      </nav>

      {/* Conteúdo principal */}
      <main className="flex flex-col items-center justify-center flex-1 px-6">
        <h2 className="text-3xl font-semibold text-orange-500 mb-8 text-center">
          Faça seu login ou cadastre-se
        </h2>

        <div className="bg-[#d9d8d3] p-8 rounded-lg shadow-md w-full max-w-md">
          <h3 className="text-xl font-semibold mb-4 text-gray-600">Já tenho cadastro</h3>

          <label className="block font-medium text-black">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full text-gray-600 border border-gray-400 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <label className="block font-medium text-black">Senha</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="w-full text-gray-600 border border-gray-400 rounded-md px-3 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <a href="#" className="text-sm text-orange-500 underline">
            Esqueci minha senha
          </a>

          <button className="w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 rounded-full mt-4">
            ACESSAR MINHA CONTA
          </button>

          <div className="flex items-center my-4">
            <hr className="flex-1 border-gray-300" />
            <span className="mx-2 text-gray-500">ou</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* Botões sociais */}
          <div className="space-y-3">
            <button className="w-full flex items-center justify-center border border-blue-400 rounded-full py-2 gap-2 text-blue-500 hover:bg-blue-50 transition">
              <FaFacebook className="text-blue-600 text-lg" />
              Entrar com o Facebook
            </button>
            <button className="w-full flex items-center justify-center border border-black rounded-full py-2 gap-2 text-black hover:bg-gray-100 transition">
              <FaGoogle className="text-orange-400 text-lg" />
              Entrar com o Google
            </button>
            <button className="w-full flex items-center justify-center border border-black rounded-full py-2 gap-2 text-black hover:bg-gray-100 transition">
              <FaApple className="text-black text-lg" />
              Entrar com a Apple
            </button>
          </div>

          <button className="w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 rounded-full mt-6">
            CADASTRAR-SE
          </button>

          <p className="text-xs text-gray-700 mt-4 text-center">
            Li e concordo com a{" "}
            <a href="#" className="text-blue-500 underline">
              Política de Privacidade
            </a>{" "}
            e{" "}
            <a href="#" className="text-blue-500 underline">
              Termos de Uso
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
    