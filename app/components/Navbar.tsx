import Link from "next/link";
import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="grid grid-cols-4 grid-rows-1 bg-purple-600 p-6 m-2 rounded-lg">
      <div className="col-span-1 text-white font-bold text-lg text-center hover:opacity-50">
        <Link href="/">Ayo Odeleye</Link>
      </div>
      <div className="col-span-1 flex justify-center items-center">
        <a
          href="https://github.com/AyoEvanson/"
          target="_blank"
          className="text-3xl text-white hover:opacity-50"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
      <div className="col-span-1 flex justify-center items-center">
        <a
          href="https://www.linkedin.com/in/ayo-o-4a5898196/"
          target="_blank"
          className="text-3xl text-white hover:opacity-50"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
      <div className="col-span-1 flex justify-center items-center">
        <a
          href="https://www.instagram.com/ayo__odeleye/"
          target="_blank"
          className="text-3xl text-white hover:opacity-50"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
}
