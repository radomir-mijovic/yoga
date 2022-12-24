import NavbarInfo from "./navbar-info";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
      <NavbarInfo/>
      {children}
      </body>
    </html>
  )
}
