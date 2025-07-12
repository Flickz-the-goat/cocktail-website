import type { Metadata } from "next";
import "./globals.css";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

export const metadata: Metadata = {
  title: "Cocktail app",
  description: "Practice GSAP app",
};

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=""
      >
        {children}
      </body>
    </html>
  );
}
