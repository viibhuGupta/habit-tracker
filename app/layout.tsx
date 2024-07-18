import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/main.scss";
import { gtRG , gtTrial } from "@/utils/coustomFonts"; 
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HABIT TRACKER",
  description: "Created by Vibhu Gupta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <ClerkProvider>
    <body className={`${gtRG.variable} ${gtTrial.variable}`}>{children}</body>
    </ClerkProvider>
    </html>
  );
}
