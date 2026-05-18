import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "teach & tech | DevOps and Cloud Engineer Path",
  description:
    "A practical roadmap, free resources, certifications, and YouTube channels for becoming a DevOps and Cloud Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
