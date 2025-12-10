"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa";
import Navbar2 from "@/components/Navbar2";
import Link from "next/link";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <div className="min-h-screen bg-[#d9d8d3] flex flex-col">
      <Navbar2></Navbar2>

    
      <main className="flex flex-col items-center justify-center flex-1 px-6">
        <h2 className="text-3xl font-semibold text-orange-500 mb-8 text-center">
          Redefinir Senha
        </h2>

        <div className="bg-[#d9d8d3] p-8 rounded-lg shadow-md w-full max-w-md">
          <h3 className="text-xl font-semibold mb-4 text-gray-600">Insira o Email para redefinir a senha</h3>

          <label className="block font-medium text-black">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full text-gray-600 border border-gray-400 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <button className="w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 rounded-full mt-4">
            ENVIAR CODIGO
          </button>

        </div>
      </main>
    </div>
  );
}
    