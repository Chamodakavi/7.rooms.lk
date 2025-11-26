import NavBar from "@/components/NavBar";
import type { Metadata } from "next";
import Providers from "./Providers";
import "../globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Rooms.LK || Official Site || Book Accommodation in Sri Lanka ||",
  description: "|| Official Site || Book Accommodation in Sri Lanka ||",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <NavBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
