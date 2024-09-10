// components/HeaderCard.tsx
"use client";

import React from "react";
import Link from "next/link";

const HeaderCard: React.FC = () => {
  return (
    <header className="text-gray-600 body-font bg-gray-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ionic/ionic-original.svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-red-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l2 7l10 8 10-8-10-5zM2 17l10 8 10-5M+2 12l10 8 10-8"></path>
          </svg>
          <span className="ml-3 text-xl">Product Listing</span>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
          <Link href="/" className="mr-5 hover:text-gray-900">
            Home
          </Link>
          <Link href="/product" className="mr-5 hover:text-gray-900">
            Product
          </Link>
          <Link href="/about" className="mr-5 hover:text-gray-900">
            About us
          </Link>
        </nav>
        <Link href="/signin">
          <button className="inline-flex items-center text-white bg-blue-700 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 hover:text-gray-900 rounded text-base mt-4 md:mt-0">
            Sign In
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
        </Link>
      </div>
    </header>
  );
};

export default HeaderCard;
