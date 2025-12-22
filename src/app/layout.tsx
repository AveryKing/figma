import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Personal Website Builder",
  description: "Portfolio site generated from Figma design"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white overflow-x-hidden">{children}</body>
    </html>
  );
}
