import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { personalInfo } from "@/lib/content";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

// Clean environment-configured site URL without hardcoding a fake domain
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
  : process.env.VERCEL_URL
  ? new URL(`https://${process.env.VERCEL_URL}`)
  : new URL("http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: "Hanmanth Patil — AI/ML Engineer & Creative Technologist",
  description:
    "Personal portfolio of Hanmanth Patil. Building intelligent, human-centered systems across artificial intelligence, machine learning, software engineering, robotics, and product design.",
  keywords: [
    "Hanmanth Patil",
    "AI/ML Engineer",
    "Creative Technologist",
    "Robotics",
    "Machine Learning",
    "UI/UX Design",
    "Kalaburagi",
  ],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hanmanth Patil — AI/ML Engineer & Creative Technologist",
    description:
      "Personal portfolio of Hanmanth Patil. Building intelligent, human-centered systems across artificial intelligence, machine learning, software engineering, robotics, and product design.",
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Hanmanth Patil Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hanmanth Patil — AI/ML Engineer & Creative Technologist",
    description:
      "Personal portfolio of Hanmanth Patil. Building intelligent, human-centered systems across artificial intelligence, machine learning, software engineering, robotics, and product design.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#07090D",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// Verified Schema.org JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "#person",
      name: personalInfo.name,
      jobTitle: personalInfo.role,
      description:
        "Personal portfolio of Hanmanth Patil. Building intelligent, human-centered systems across artificial intelligence, machine learning, software engineering, robotics, and product design.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kalaburagi",
        addressRegion: "Karnataka",
        addressCountry: "India",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: personalInfo.education.institution,
      },
      sameAs: [
        personalInfo.contact.github,
        personalInfo.contact.linkedin,
        personalInfo.contact.instagram,
      ],
      knowsAbout: [
        "Artificial Intelligence",
        "Machine Learning",
        "Autonomous Robotics",
        "Software Engineering",
        "UI/UX & Product Design",
      ],
    },
    {
      "@type": "ProfilePage",
      "@id": "#profilepage",
      name: "Hanmanth Patil — AI/ML Engineer & Creative Technologist",
      mainEntity: {
        "@id": "#person",
      },
    },
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
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="bg-background text-text-primary font-sans antialiased min-h-screen selection:bg-accent-cyan/20 selection:text-text-primary">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YRKPBJ3843"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YRKPBJ3843');
          `}
        </Script>
        {/* Structured Data (Schema.org JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Accessible Skip Link */}
        <a
          href="#about"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-accent-cyan focus:text-background focus:font-mono focus:text-xs focus:font-semibold focus:rounded-pill focus:outline-none focus:ring-2 focus:ring-accent-soft shadow-lg transition-transform"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
