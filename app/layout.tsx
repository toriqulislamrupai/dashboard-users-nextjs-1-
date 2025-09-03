import type { Metadata } from "next";
import "./globals.css";
import ThreeBg from "@/components/ThreeBg";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Users Dashboard",
  description:
    "Next.js Dashboard with Users list, search, pagination and details.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThreeBg />
        <Header />
        <main className="container px-6 py-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
