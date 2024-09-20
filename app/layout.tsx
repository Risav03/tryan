import type { Metadata } from "next";

import candybeans from "next/font/local"

import "./globals.css";
import Providers from "@/utils/Providers"

const font = candybeans({ src: "./fonts/candy-beans.otf" })

export const metadata: Metadata = {
  title: "TRYAN NFTs",
  description: "Official $TRYAN NFT collection.",
  openGraph: {
    title: "TRYAN NFTs",
  description: "Official $TRYAN NFT collection.",
    url: 'https://get.richordietryan.club',
    siteName: 'TRYAN NFTs',
    images: [
      {
        url: 'https://cdn.discordapp.com/attachments/1225423312906354788/1286750524779139175/Thumbnail.png?ex=66ef0b4f&is=66edb9cf&hm=d82479e43eccc11876270e296c7178442c2b012d1f2cccbeb942b1c09b8cd92a&', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://cdn.discordapp.com/attachments/1225423312906354788/1286750524779139175/Thumbnail.png?ex=66ef0b4f&is=66edb9cf&hm=d82479e43eccc11876270e296c7178442c2b012d1f2cccbeb942b1c09b8cd92a&', // Must be an absolute URL
        width: 1800,
        height: 1600,
      },
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        <Providers>
        {children}
        </Providers>
      </body>
    </html>
  );
}
