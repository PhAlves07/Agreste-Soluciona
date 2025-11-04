"use client";
import { Menu, User } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between bg-[#bfbfbf] px-6 py-3">
      <div className="flex items-center space-x-2">
        <Image src="/images/logo.png" alt="Logo" width={60} height={60} />
      </div>

      <div className="flex items-center space-x-6 text-sm font-medium text-black">
        <a href="/login" className="flex items-center space-x-1 hover:text-orange-500">
          <User size={18} /> <span>entrar</span>
        </a>
        <Menu size={26} className="cursor-pointer text-black" />
      </div>
    </header>
  );
}
