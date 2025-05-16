import type { Metadata } from "next";
import { ThemeProvider } from "@/providers/NextTheme";
import { GeistSans } from 'geist/font/sans'
import Header from "@/components/layout/Header";
import "@/app/globals.css";

export const metadata = {
  title: {
    default: 'Zisty Converter',
    template: '%s / Zisty Converter'
  },
  description: 'Zisty Converter',
  metadataBase: new URL('https://converter.zisty.net'),
  openGraph: {
    title: 'Unlimited File Format Conversion',
    description: 'Unlimited File Format Conversion. Free and Open Source.',
    url: 'https://converter.zisty.net',
    siteName: 'Zisty Converter',
    images: [
      {
        url: '/ogp.webp',
        width: 1200,
        height: 630,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/favicon.png',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <body className="bg-neutral-50 dark:bg-neutral-950 font-geist antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem storageKey="acme-theme">
          <Header />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
