import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import { CoutureProvider } from '@/context/CoutureContext';

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'LOVE LASA — Contemporary Indian Couture',
  description:
    'Handwoven Chanderi silk-organza, antique zari borders, and quiet architectural tailoring. A dialogue between Indian handloom heritage and contemporary form.',
  keywords: [
    'Love Lasa',
    'Contemporary Indian Couture',
    'Chanderi Silk',
    'Organza Saree',
    'Banarasi Tissue',
    'Handloom Fashion',
    'Luxury Indian Wear',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="bg-obsidian text-ivory selection:bg-crimson/35 selection:text-ivory antialiased overflow-x-hidden">
        <CoutureProvider>{children}</CoutureProvider>
      </body>
    </html>
  );
}
