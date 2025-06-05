import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";
import Script from "next/script"; // ← this is the correct way to inject scripts

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
      <head>
        {/* Google Analytics script tag. */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FKKETHZ6ZT"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-FKKETHZ6ZT');
          `}
        </Script>
      </head>
      <body>
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
