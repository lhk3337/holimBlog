import React from "react";
import Image from "next/image";
import Link from "next/link";
import favicon from "public/favicon.png";
import DarkmodeTogBtn from "./darkmodetoggle";

export default function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-8 flex-col md:flex-row items-center">
        <Link href="/">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image src={favicon} width={28} height={28} alt="logo" />
            <span className="ml-3 text-xl">holim log</span>
          </a>
        </Link>
        <nav className="md:ml-auto md:mr-10 flex flex-wrap items-center text-base justify-center">
          <Link href="/">
            <a className="mr-10 text-xl hover:text-gray-700">Home</a>
          </Link>
          <Link href="/post">
            <a className="mr-5  text-xl hover:text-gray-700">Post</a>
          </Link>
        </nav>
        <DarkmodeTogBtn />
      </div>
    </header>
  );
}
