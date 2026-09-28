import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
// import { Navbar } from "@/components/navigation/navbar";
// import { Footer } from "@/components/navigation/footer";
const inter=Inter({subsets:["latin"],variable:"--font-inter",display:"swap"});
const playfair=Playfair_Display({subsets:["latin"],variable:"--font-playfair",display:"swap"});
export const metadata:Metadata={title:{default:"Explore Koshi Province — Nepal's Land of Mountains, Hills, Wildlife & Culture",template:"%s | Koshi Travel"},description:"A premium travel guide and trip-planning platform for Koshi Province, Nepal — Everest, Kanchenjunga, Makalu, Ilam tea country, wildlife and culture.",openGraph:{title:"Explore Koshi Province",description:"Mountains, tea gardens, wildlife, culture and tailor-made journeys across eastern Nepal.",type:"website"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className={`${inter.variable} ${playfair.variable} grain`}>{children}</body></html>}
