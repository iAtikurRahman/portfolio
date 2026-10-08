import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MD. Atikur Rahman | Full Stack Developer",
    template: "%s | MD. Atikur Rahman",
  },
  description:
    "Full Stack Developer with 5+ years of experience in Node.js, NestJS, Next.js, PHP, Python, and database technologies. Building scalable APIs, microservices, and modern web applications.",
  keywords: [
    "Full Stack Developer",
    "Node.js",
    "NestJS",
    "Next.js",
    "TypeScript",
    "PHP",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "MySQL",
    "REST API",
    "Microservices",
    "E-commerce",
    "API Integration",
    "Rajshahi",
    "Bangladesh",
  ],
  authors: [{ name: "MD. Atikur Rahman", url: "https://github.com/iAtikurRahman" }],
  creator: "MD. Atikur Rahman",
  publisher: "MD. Atikur Rahman",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://atikurrahman.dev",
    title: "MD. Atikur Rahman | Full Stack Developer",
    description:
      "Full Stack Developer with 5+ years of experience building scalable web applications, REST APIs, and microservices.",
    siteName: "Atikur Rahman Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MD. Atikur Rahman - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MD. Atikur Rahman | Full Stack Developer",
    description:
      "Full Stack Developer with 5+ years of experience in Node.js, NestJS, Next.js, and database technologies.",
    creator: "@iAtikurRahman",
    images: ["/og-image.png"],
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0f1a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://github.com" />
        <link rel="dns-prefetch" href="https://linkedin.com" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}