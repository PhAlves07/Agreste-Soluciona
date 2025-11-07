"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa";
import Navbar2 from "@/components/Navbar2";
import Link from "next/link";

export default function LoginPage() {
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [erro, setErro] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!usuario || !email || !senha || !confirmarSenha) {
      setErro("Preencha todos os campos!");
      return;
    }

    if (senha !== confirmarSenha) {
      setErro("As senhas não coincidem!");
      return;
    }

    setErro("");
    // Aqui você pode enviar os dados para a API, banco de dados, etc.
    console.log("Cadastro realizado com sucesso:", { usuario, email, senha });
  };

  return (
    <div className="min-h-screen bg-[#d9d8d3] flex flex-col">
      <Navbar2 />

      <main className="flex flex-col items-center justify-center flex-1 px-6">
        <h2 className="text-3xl font-semibold text-orange-500 mb-8 text-center">
          Cadastre-se
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-[#d9d8d3] p-8 rounded-lg shadow-md w-full max-w-md"
        >
          <h3 className="text-xl font-semibold mb-4 text-gray-600">
            Faça seu cadastro
          </h3>

          <label className="block font-medium text-black">Usuário</label>
          <input
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            className="w-full text-gray-600 border border-gray-400 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

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

          <label className="block font-medium text-black">Confirmar Senha</label>
          <input
            type="password"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            className="w-full text-gray-600 border border-gray-400 rounded-md px-3 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          {erro && (
            <p className="text-red-500 text-sm mt-2 mb-2 text-center font-medium">
              {erro}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 rounded-full mt-4 transition"
          >
            Criar Minha Conta
          </button>

          <div className="flex items-center my-4">
            <hr className="flex-1 border-gray-300" />
            <span className="mx-2 text-gray-500">ou</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          <div className="space-y-3">
            <button className="w-full flex items-center justify-center border border-blue-400 rounded-full py-2 gap-2 text-blue-500 hover:bg-blue-50 transition">
              <FaFacebook className="text-blue-600 text-lg" />
             Cadastre-se com o Facebook
            </button>

            <button
              onClick={() => signIn("google")}
              type="button"
              className="w-full flex items-center justify-center border border-black rounded-full py-2 gap-2 text-black hover:bg-gray-100 transition"
            >
              <FaGoogle className="text-orange-400 text-lg" />
              Cadastra-se com o Google
            </button>

          </div>

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
        </form>
      </main>
    </div>
  );
}
