import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Link from "next/link";
import { LayoutProps } from "@/lib/definistions/layout.types";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextJS Demo",
  description: "Just for demonstrating about the nextjs feature"
};

// localhost:3000/

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "red",
            padding: 12,
            color: "white"
          }}
        >
          <div>Logo</div>
          <ul style={{ display: "flex", gap: 24 }}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/animals">Animals</Link>
            </li>

            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </header>
        {children}
        <footer></footer>
      </body>
    </html>
  );
}
