import type { Metadata } from "next";
import {Inter, IBM_Plex_Serif} from "next/font/google";
import "./globals.css";

const inter = Inter ({ subsets: ["latin"], variable: '--font-inter'})
const ibmplexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ibm-plex-serif'

})


// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Helios",
  description: "Helios is a modern Banking Platform for everyone.",
  icons: {
    icon: '/icons/logo.svg'
  }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmplexSerif.variable} `}>
        {children}
      </body>
    </html>
  );
}
