import { Footer, Navbar } from "@/components";
import "./globals.css";

export const metadata = {
  title: "MSM Landing page",
  description: "Showcase multisite management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
