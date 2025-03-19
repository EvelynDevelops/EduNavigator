import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Evelyn's Portfolio",
  description: "Showcasing my projects, blog, and experience.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <title>education navigator</title>
        <meta name="description" content="this is an education navigator page" />
      </head>
      <body className="flex flex-col min-h-screen">
        {/* Top nav bar */}
        <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-sm z-50 px-64 py-2 flex justify-between items-center">
          <h1 className="text-xl font-bold">教育导航</h1>
          <div className="flex space-x-8">
            <Link href="/apply" className="font-semibold text-gray-700 hover:text-black">申请收录</Link>
            {/* <Link href="/projects" className="font-semibold text-gray-700 hover:text-black">Projects</Link>
            <Link href="/contact-me" className="font-semibold text-gray-700 hover:text-black">Contact</Link> */}
            <Link href="/about-us" className="font-semibold text-gray-700 hover:text-black">关于本站</Link>
          </div>
        </nav>

        {/* Main content area */}
        <main className="flex-grow pt-16">{children}</main>

        {/* Footer (sticks to the bottom) */}
        <footer className="w-full bg-white text-black text-center py-6 border-t border-gray-300 mt-auto">
          <p>© 2025 Evelyn. All rights reserved.</p>
          <p>Made with love and 🥏</p>
        </footer>
      </body>
    </html>
  );
}

