import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Inter font setup with swap display
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap', 
});

// JetBrains Mono setup
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: 'swap',
});

export const metadata = {
  title: "Thorfin Store | Premium Fashion",
  description: "Explore the latest collection at Thorfin Store.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased font-sans bg-white text-[#222]">
        {children}
      </body>
    </html>
  );
}