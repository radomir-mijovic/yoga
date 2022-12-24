import NavbarInfo from "./navbar-info";
import Navbar from "./navbar";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <NavbarInfo />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
