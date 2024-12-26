import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Naeem Davids Developer Portfolio",
  description: "A Website Developer Portfolio of Naeem Davids",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>{children} </div>
        <Footer />
      </body>
    </html>
  );
}
