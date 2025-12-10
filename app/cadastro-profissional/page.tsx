"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";

export default function CadastroPrestador() {

  const router = useRouter(); 

  const [form, setForm] = useState({
    usuario: "",
    email: "",
    tipoServico: "",
    telefone: "",
    senha: "",
    confirmarSenha: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

  
    console.log("Dados enviados:", form);

  
    if (form.senha !== form.confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    
    alert("Cadastro realizado com sucesso!");

    router.push("/tela-principal");
  };
  return (
    <div className="min-h-screen bg-[#d8d6d1]">

     
      <Navbar />

  
      <div className="flex flex-col items-center mt-12">
        <div className="w-full max-w-5xl px-6 flex justify-between">

    
          <div className="flex flex-col items-center text-center w-1/2">
            <div className="w-40 h-40 rounded-full bg-[#cfcfcf] flex items-center justify-center">
              <Image
                src="/images/worker-icon.png"
                alt="Profissional"
                width={120}
                height={120}
              />
            </div>

            <h2 className="text-xl text-black font-semibold mt-4">
              Cadastro do Prestador <br /> de serviços
            </h2>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col text-black w-1/2 space-y-3"
          >
            <label>Usuário</label>
            <input
              type="text"
              name="usuario"
              value={form.usuario}
              onChange={handleChange}
              className="border rounded-md px-3 py-2 bg-white"
              required
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="border rounded-md px-3 py-2 bg-white"
              required
            />

            <label>Tipo de Serviço</label>
            <input
              type="text"
              name="tipoServico"
              value={form.tipoServico}
              onChange={handleChange}
              className="border rounded-md px-3 py-2 bg-white"
              required
            />

            <label>Telefone</label>
            <input
              type="text"
              name="telefone"
              value={form.telefone}
              onChange={handleChange}
              className="border rounded-md px-3 py-2 bg-white"
              required
            />

            <label>Senha</label>
            <input
              type="password"
              name="senha"
              value={form.senha}
              onChange={handleChange}
              className="border rounded-md px-3 py-2 bg-white"
              required
            />

            <label>Confirme a Senha</label>
            <input
              type="password"
              name="confirmarSenha"
              value={form.confirmarSenha}
              onChange={handleChange}
              className="border rounded-md px-3 py-2 bg-white"
              required
            />

            <div className="flex items-center gap-2 text-sm mt-2">
              <input type="checkbox" className="accent-black" required />
              <span>
                Li e concordo com a{" "}
                <a className="text-blue-600 underline">Política de Privacidade</a>{" "}
                e{" "}
                <a className="text-blue-600 underline">Termos de Uso</a>
              </span>
            </div>

            <button className="mt-4 bg-black text-white py-2 rounded-full w-40 mx-auto">
              cadastre-se
            </button>
          </form>
        </div>
      </div>

    </div>
  );
}
