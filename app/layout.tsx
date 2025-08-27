import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LTU MOODLE LMS Components",
  description: "Web application for creating HTML + JS components for MOODLE LMS deployment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="bg-blue-600 text-white shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-lg font-bold">Student: [YOUR_STUDENT_NUMBER]</span>
                <h1 className="text-xl font-semibold">LTU MOODLE LMS Components</h1>
              </div>
              <nav className="hidden md:flex space-x-6">
                <Link href="/" className="hover:text-blue-200 transition-colors">Home</Link>
                <Link href="/about" className="hover:text-blue-200 transition-colors">About</Link>
                <Link href="/components" className="hover:text-blue-200 transition-colors">Components</Link>
              </nav>
            </div>
          </div>
        </header>
        <main className="min-h-screen bg-gray-50">
          {children}
        </main>
      </body>
    </html>
  );
}
