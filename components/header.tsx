import React from "react";
import Image from "next/image";
import Link from "next/link";
import favicon from "public/favicon.png";

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
        <button className="ml-10 inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Button
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
}
