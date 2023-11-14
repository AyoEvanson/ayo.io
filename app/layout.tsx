import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import ProfilePicture from "./components/ProfilePicture";

export const metadata: Metadata = {
  title: "Ayo.io",
  description: "Inspired, developed and lived by Ayo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-200 dark:bg-purple-800">
        <Navbar />
        <ProfilePicture />
        {children}
      </body>
    </html>
  );
}
