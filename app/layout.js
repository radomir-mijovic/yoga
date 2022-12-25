import NavbarInfo from "./navbar-info";
import Navbar from "./navbar";
import "../styles/globals.css"

import { Lobster } from '@next/font/google'

const lobster = Lobster({
    weight: "400",
    subsets: ['latin']
})

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className={lobster.className}>
        <NavbarInfo />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
