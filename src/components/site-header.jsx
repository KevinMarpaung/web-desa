import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "@/components/mode-toggle";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="font-bold text-xl mr-6 mx-2">
          Desa aceh tamiang
        </Link>
        <nav className="hidden md:flex gap-6 flex-1">
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Beranda
          </Link>
          <Link
            href="/profil"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Profil Desa
          </Link>
          <Link
            href="/layanan"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Layanan
          </Link>
          <Link
            href="/berita"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Berita
          </Link>
          <Link
            href="/acara"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Agenda
          </Link>
          <Link
            href="/galeri"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Galeri
          </Link>
          <Link
            href="/kontak"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Kontak
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <Link
                  href="/"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Beranda
                </Link>
                <Link
                  href="/profil"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Profil Desa
                </Link>
                <Link
                  href="/layanan"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Layanan
                </Link>
                <Link
                  href="/berita"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Berita
                </Link>
                <Link
                  href="/acara"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Agenda
                </Link>
                <Link
                  href="/galeri"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Galeri
                </Link>
                <Link
                  href="/kontak"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Kontak
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
