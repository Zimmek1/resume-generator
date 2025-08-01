import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume Generator",
  description: "Build your resume instantly with style",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
