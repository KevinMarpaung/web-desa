import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Desa Sejahtera - Website Resmi",
  description:
    "Website resmi Desa Sejahtera, Kecamatan Makmur, Kabupaten Bahagia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
