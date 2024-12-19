import Link from "next/link";
import "./globals.css";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased p-8 space-y-8`}>
        <header>
          <nav>
            <ul className="list-disc pl-4">
              <li>
                <Link href="/">home</Link>
              </li>
              <li>
                <Link href="/users">users</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
