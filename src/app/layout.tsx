import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Dr. Sarah Johnson - Family Medicine | Comprehensive Healthcare",
  description: "Dr. Sarah Johnson provides compassionate, comprehensive family medicine services. Book your appointment today for preventive care, chronic disease management, and health screenings.",
  keywords: "family medicine, doctor, healthcare, medical services, preventive care, health screenings, Dr. Sarah Johnson",
  authors: [{ name: "Dr. Sarah Johnson" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  openGraph: {
    title: "Dr. Sarah Johnson - Family Medicine",
    description: "Comprehensive healthcare for your entire family",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppChat />
      </body>
    </html>
  );
}
