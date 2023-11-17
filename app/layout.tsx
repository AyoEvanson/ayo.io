import Navbar from "./components/Navbar";
import ProfilePicture from "./components/ProfilePicture";
import "./globals.css";

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
