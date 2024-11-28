import type { Metadata } from "next";
import Providers from "@/app/providers";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "../styles/index.css";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";
import '@rainbow-me/rainbowkit/styles.css';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: "Helix Pay",
  description: "The Digital Products Online Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${plusJakartaSans.variable} antialiased`}
      >
      <Providers>{children}</Providers>
      </body>
    </html>
  );
}
