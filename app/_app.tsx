import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import RootLayout from "./layout"; // Adjust the path to where your RootLayout component is
import { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";

export const metadata: Metadata = {
  title: "Ayo.io",
  description: "Inspired, developed and lived by Ayo",
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </NextUIProvider>
  );
}

export default MyApp;
