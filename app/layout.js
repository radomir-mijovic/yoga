"use client"
import NavbarInfo from "./navbar-info";
import Navbar from "./navbar";
import "../styles/globals.css"

import { Lobster } from '@next/font/google'
import {AppProvider} from "../context/app_context";
import Footer from "./footer";

const lobster = Lobster({
    weight: "400",
    subsets: ['latin']
})

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className={lobster.className}>
      <AppProvider>
          <NavbarInfo />
          <Navbar />
          {children}
          <Footer/>
      </AppProvider>
      </body>
    </html>
  );
}
