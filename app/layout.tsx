import type { Metadata } from "next";
import { Patrick_Hand } from "next/font/google";
import "./globals.css";

const patrickHand = Patrick_Hand({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "TechVerse Blog",
  description: "Explore insights, tutorials, and tips on web development, JavaScript, and modern tech trends at TechVerse Blog.",
  keywords: ["web development","JavaScript tutorials","React.js","Next.js guide","front-end development","full-stack development","modern web technologies","programming tips"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${patrickHand.className} bg-tb-gradient mx-auto min-h-screen max-w-[1440px] px-6 antialiased md:px-14 lg:px-32 xl:px-36`}
      >
        {children}
      </body>
    </html>
  );
}