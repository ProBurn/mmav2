import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";
import LocomotiveScrollWrapper from "@/components/LocomotiveScrollWrapper";
import Navbar from "@/components/ui/navbar";

import Footer2 from "@/components/ui/footer2";

import { Roboto, Poppins } from 'next/font/google'
import React from "react";
import { NavbarProvider } from "@/components/UIContext";



const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const poppins = Poppins({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Middlesbrough Music Academy",
  description: "Professional Guitar lessons Middlesbrough & North Yorkshire - we offer expert professional guitar tuition as well as singing, drum, vocal, piano, ukulele",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={` ${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          strategy="beforeInteractive" // You can also use "afterInteractive" if you prefer
        />
        <LocomotiveScrollWrapper />
        <NavbarProvider>

          <Navbar />
          {children}
          {/* <Footer /> */}
          <Footer2 />
        </NavbarProvider>

      </body>
    </html>
  );
}
