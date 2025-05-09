import Link from "next/link";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="bg-muted py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Desa Sejahtera</h3>
            <p className="text-muted-foreground mb-4">
              Website resmi Desa Sejahtera, Kecamatan Makmur, Kabupaten Bahagia.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Tautan</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/profil"
                  className="text-muted-foreground hover:text-primary"
                >
                  Profil Desa
                </Link>
              </li>
              <li>
                <Link
                  href="/layanan"
                  className="text-muted-foreground hover:text-primary"
                >
                  Layanan
                </Link>
              </li>
              <li>
                <Link
                  href="/berita"
                  className="text-muted-foreground hover:text-primary"
                >
                  Berita
                </Link>
              </li>
              <li>
                <Link
                  href="/galeri"
                  className="text-muted-foreground hover:text-primary"
                >
                  Galeri
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Layanan</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/layanan/surat-pengantar"
                  className="text-muted-foreground hover:text-primary"
                >
                  Surat Pengantar
                </Link>
              </li>
              <li>
                <Link
                  href="/layanan/surat-keterangan"
                  className="text-muted-foreground hover:text-primary"
                >
                  Surat Keterangan
                </Link>
              </li>
              <li>
                <Link
                  href="/layanan/laporan"
                  className="text-muted-foreground hover:text-primary"
                >
                  Laporan Masyarakat
                </Link>
              </li>
              <li>
                <Link
                  href="/layanan/pengaduan"
                  className="text-muted-foreground hover:text-primary"
                >
                  Pengaduan
                </Link>
              </li>
              <li>
                <Link
                  href="/layanan/bantuan"
                  className="text-muted-foreground hover:text-primary"
                >
                  Bantuan Sosial
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Kontak</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-emerald-600 mt-0.5" />
                <span className="text-muted-foreground">
                  Jl. Desa No. 123, Desa aceh tamiang, Kecamatan tamiang,
                  Kabupaten aceh tamiang
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-emerald-600" />
                <span className="text-muted-foreground">(021) 1234-5678</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-emerald-600" />
                <span className="text-muted-foreground">
                  info@desaacehtamiang.desa.id
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-6 text-center text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Desa Aceh Tamiang. Hak Cipta
            Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
