import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers/Providers";
import { headers } from "next/headers";
import { getServerSession, Session } from "next-auth";
import { authConfig } from "@/auth";
import { ConnectWalletButton } from "@/components/ui/shared/ConnectWalletButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vocabmon Dev",
  description: "A simple vocabularies-based web3 Game",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = (await getServerSession(authConfig)) as Session;
  const cookie = (await headers()).get("cookie") as string;
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers session={session} cookie={cookie}>
          <ConnectWalletButton />
          {children}
        </Providers>
      </body>
    </html>
  );
}
