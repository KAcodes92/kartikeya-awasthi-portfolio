import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kartikeya Awasthi | GTM Strategy and Demand Generation",
  description:
    "GTM strategist and marketing leader building AI-native demand systems across BFSI, Insurance, and Healthcare.",
  metadataBase: new URL("https://kartikeyaawasthi.com"),
  openGraph: {
    title: "Kartikeya Awasthi | GTM Strategy and Demand Generation",
    description:
      "GTM strategist and marketing leader building AI-native demand systems across BFSI, Insurance, and Healthcare.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,500;8..60,600&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
