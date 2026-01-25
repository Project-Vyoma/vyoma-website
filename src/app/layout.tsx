import type { Metadata, Viewport } from "next";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://vyoma.rvce.edu.in'),
  title: {
    default: "Vyoma RVCE - Aeromodelling Club",
    template: "%s | Vyoma RVCE"
  },
  description: "Aeromodelling Club of RVCE - Pioneering excellence in aerospace engineering since 2007. Building innovative aircraft, competing nationally, and inspiring the next generation of aerospace engineers.",
  keywords: ["aeromodelling", "aerospace", "RVCE", "RV College of Engineering", "Vyoma", "aircraft", "engineering club", "Bangalore"],
  authors: [{ name: "Vyoma RVCE" }],
  creator: "Vyoma RVCE",
  publisher: "Vyoma RVCE",
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vyoma.rvce.edu.in",
    title: "Vyoma RVCE - Aeromodelling Club",
    description: "Pioneering excellence in aerospace engineering since 2007. Building innovative aircraft and inspiring future engineers.",
    siteName: "Vyoma RVCE",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "Vyoma RVCE Aeromodelling Club",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vyoma RVCE - Aeromodelling Club",
    description: "Pioneering excellence in aerospace engineering since 2007.",
    images: ["/icon.png"],
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
    <html lang="en" className="dark" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <link rel="icon" type="image/png" href="/icon.png" />
        <link rel="shortcut icon" type="image/png" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=Source+Code+Pro:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
