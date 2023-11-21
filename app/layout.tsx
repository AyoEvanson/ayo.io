import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProfilePicture from "./components/ProfilePicture";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ayo.io | Home",
  description: "Inspired, developed and lived by Ayo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" className="bg-slate-200 dark:bg-purple-800">
        <Navbar />
        <ProfilePicture />
        <main>{children}</main>
      </html>
    </>
  );
}
