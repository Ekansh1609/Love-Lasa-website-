import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Love Lasa | Editorial Fashion & Lifestyle",
  description:
    "Love Lasa is a premium, editorial, photography-led fashion brand celebrating modern minimalism, sculptural silhouettes, and curated craftsmanship.",
  openGraph: {
    title: "Love Lasa | Editorial Fashion & Lifestyle",
    description:
      "Modern minimalism, sculptural silhouettes, and curated craftsmanship.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} font-sans`}
    >
      <body className="min-h-screen bg-[#FAF8F5] text-[#191817] font-sans flex flex-col">
        {children}
      </body>
    </html>
  );
}
