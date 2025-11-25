"use client";

import { useState } from "react";
import Navbar2 from "@/components/Navbar2";
import Image from "next/image";
import Link from "next/link";

export default function UsuarioPage() {
  const [notificacoesAtivas, setNotificacoesAtivas] = useState(true);

  function alternarNotificacoes() {
    setNotificacoesAtivas(!notificacoesAtivas);
  }

  return (
    <div className="min-h-screen bg-[#d8d6d1]">

      {/* Navbar fixa e fora do container */}
      <Navbar2 />

      {/* Conteúdo central */}
      <div className="w-full flex text-black flex-col items-center mt-10 px-4">

        {/* Avatar */}
        <div className="w-36 h-36 rounded-full bg-[#cfcfcf] flex items-center justify-center">
          <Image
            src="/images/avatar-user.png"
            alt="Usuário"
            width={120}
            height={120}
          />
        </div>

        <h2 className="text-xl font-semibold mt-3">Usuário</h2>

        {/* Área das opções */}
        <div className="mt-10 w-full max-w-md flex flex-col gap-8">

          {/* Configurações */}
          <Link href="/configuracoes">
          <div className="flex items-center gap-6">
            <Image src="/images/settings.png" width={60} height={60} alt="Configurações"/>
            <span className="font-medium">Configurações</span>
          </div>
          </Link>
          {/* Pagamentos */}
          <div className="flex items-center gap-6">
            <Image src="/images/payment.png" width={60} height={60} alt="Pagamentos"/>
            <span className="font-medium">Formas de pagamentos</span>
          </div>

          {/* Notificações */}
          <button 
            onClick={alternarNotificacoes}
            className="flex items-center gap-6"
          >
            <Image 
              src={
                notificacoesAtivas 
                  ? "/images/notification-on.png"
                  : "/images/notification-off.png"
              }
              width={60}
              height={60}
              alt="Notificações"
            />
            <span className="font-medium">
              Notificações {notificacoesAtivas ? "(ativadas)" : "(desativadas)"}
            </span>
          </button>

          {/* Seja prestador */}
          <div className="flex items-center gap-6">
            <Image src="/images/pro-worker.png" width={60} height={60} alt="Prestador"/>
            <span className="font-medium">
              Seja um prestador de serviços
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}
