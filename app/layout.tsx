import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sneakers Spa 254",
  description: "shoe care services",
};

export default function RootLayout({ children,}: Readonly<{  children: React.ReactNode; }>) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} h-screen antialiased  bg-[#333030]`}
      >

        
        {/* Main content */}
       {children}
        
      </body>
    </html>
  );
}
