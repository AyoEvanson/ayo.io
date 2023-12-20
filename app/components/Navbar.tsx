import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import MyDropdown from "./MyDropdown";
import MyContact from "./ContactInfo";

export default function Navbar() {
  return (
    <nav className="grid grid-cols-5 grid-rows-1 bg-purple-600 p-6 m-2 rounded-lg">
      <div className="col-span-1 flex justify-center items-left">
        <MyDropdown />
      </div>
      <div className="col-span-1 flex justify-center items-center">
        <a
          href="https://github.com/AyoEvanson/"
          target="_blank"
          className="text-xl sm:text-3xl text-white hover:opacity-50"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
      <div className="col-span-1 flex justify-center items-center text-white font-bold text-sm sm:text-xl text-center hover:opacity-50">
        <Link href="/">Ayo Odeleye</Link>
      </div>
      <div className="col-span-1 flex justify-center items-center">
        <a
          href="https://www.linkedin.com/in/ayo-o-4a5898196/"
          target="_blank"
          className="text-xl sm:text-3xl text-white hover:opacity-50"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
      <div className="col-span-1 flex justify-center items-right">
        <MyContact />
      </div>
    </nav>
  );
}
