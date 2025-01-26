import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import Navbar from "@/app/components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "SquareUp - Digital Product Studio",
  description: "Transforming ideas into stunning digital experiences",
  icons: {
    icon: '/imge/Logo1.png',
  },
  openGraph: {
    title: "SquareUp - Digital Product Studio",
    description: "Transforming ideas into stunning digital experiences",
    images: ['/imge/Logo1.png']
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body 
        className={`${inter.className} bg-[#1E1E1E] text-white min-h-screen flex flex-col`}
      >
        <Navbar />
        <main>{children}</main>
        <footer className="bg-[#262626] py-6 text-center">
          <p>&copy; 2024 SquareUp. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
