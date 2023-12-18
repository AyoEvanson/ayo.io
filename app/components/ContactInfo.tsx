"use client";
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

export default function MyContact() {
  return (
    <Dropdown className="bg-purple-700 text-white">
      <DropdownTrigger>
        <Button
          variant="shadow"
          color="secondary"
          className="font-semibold text-lg"
        >
          Get in touch
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="email">ayodeleevanson@gmail.com</DropdownItem>
        <DropdownItem key="telephone">+44 7415129566</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
