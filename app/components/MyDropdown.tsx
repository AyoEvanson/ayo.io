"use client";
import Link from "next/link";
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

export default function MyDropdown() {
  return (
    <Dropdown className="bg-purple-700 text-white">
      <DropdownTrigger>
        <Button
          variant="shadow"
          color="secondary"
          className="font-semibold text-sm sm:text-lg"
        >
          Menu
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="home" href="/">
          Home
        </DropdownItem>
        <DropdownItem key="blog" href="/blog">
          Blog
        </DropdownItem>
        <DropdownItem key="gallery" href="/gallery">
          Gallery
        </DropdownItem>
        <DropdownItem key="about" href="/about">
          About me
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
