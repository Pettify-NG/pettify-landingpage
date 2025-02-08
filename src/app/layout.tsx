import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

// import Header from '@/components/header/header'
// import Footer from '@/components/footer/footer'
// import Our from '@/components/our/our'
// import Blog from '@/components/Blog/Blog
// import Header from "@/components/Header/Header";
// import Blog from '@/components/Blog/Blog'


const DM_sans = DM_Sans({
  variable: "--font-DM_sans",
  subsets: ["latin"],
  weight:['400','500', '600', '700', '800', '900']
});


export const metadata: Metadata = {
  title: "Pettify",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${DM_sans.variable}`}
      >
        {/* <Header/> */}

        {/* <Blog/> */}
        {/* <Our/> */}
        {/* <Footer/> */}

        

        {children}
        
      </body>
    </html>
  );
}
