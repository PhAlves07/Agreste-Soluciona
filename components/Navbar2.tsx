"use client";
import { Menu, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between bg-[#bfbfbf] px-6 py-3">
      <div className="flex items-center space-x-2">
               <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={60}
            height={60}
            className="cursor-pointer"
          />
        </Link>
      </div>

      <div className="flex items-center space-x-6 text-sm font-medium text-black">
               <a href="#" className="flex items-center space-x-1 hover:text-orange-500">
          <User size={18} /> <span>Usuario</span>
        </a>
        <Menu size={26} className="cursor-pointer text-black" />
      </div>
    </header>
  );
}
