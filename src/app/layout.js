"use client";
import { Inter } from "next/font/google";
import "./layout.server";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import LoginLayout from "./login/layout";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isLoginRoute = pathname === "/login";

  return (
    <html lang="en">
      <body className={inter.className}>
        {isLoginRoute ? (
          <LoginLayout />
        ) : (
          <>
            <Sidebar />
            <Navbar />
            <main>{children}</main>
          </>
        )}
      </body>
    </html>
  );
}
