import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  FileText,
  ImageIcon,
  MapPin,
  Phone,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import NewsCard from "@/components/news-card";
import EventCard from "@/components/event-card";
import StatisticCard from "@/components/statistic-card";
const images = [
  "/galeri-1.jpg",
  "/galeri-2.jpg",
  "/galeri-3.jpg",
  "/galeri-4.jpg",
];
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative w-full h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/desa.jpg"
            alt="Desa Panorama"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Desa Bandar Khalifah
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Selamat datang di website resmi Desa Bandar Khalifah. Temukan
            informasi dan layanan untuk masyarakat desa.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/layanan">Layanan Desa</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20"
              asChild
            >
              <Link href="/kontak">Hubungi Kami</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-8 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-black grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <Link
              href="/layanan"
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <FileText className="h-8 w-8 text-emerald-600 mb-2" />
              <span className="text-sm font-medium text-center">Layanan</span>
            </Link>
            <Link
              href="/berita"
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <FileText className="h-8 w-8 text-emerald-600 mb-2" />
              <span className="text-sm font-medium text-center">Berita</span>
            </Link>
            <Link
              href="/acara"
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <Calendar className="h-8 w-8 text-emerald-600 mb-2" />
              <span className="text-sm font-medium text-center">Acara</span>
            </Link>
            <Link
              href="/galeri"
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <ImageIcon className="h-8 w-8 text-emerald-600 mb-2" />
              <span className="text-sm font-medium text-center">Galeri</span>
            </Link>
            <Link
              href="/profil"
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <Users className="h-8 w-8 text-emerald-600 mb-2" />
              <span className="text-sm font-medium text-center">
                Profil Desa
              </span>
            </Link>
            <Link
              href="/kontak"
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <Phone className="h-8 w-8 text-emerald-600 mb-2" />
              <span className="text-sm font-medium text-center">Kontak</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Selamat Datang di Desa Bandar Khalifah
              </h2>
              <p className="text-muted-foreground mb-6">
                Desa Bandar Khalifah adalah desa yang terletak di kecamatan
                Tamiang hulu, kabupaten aceh tamiang. Dengan luas wilayah
                sekitar 500 hektar dan jumlah penduduk mencapai 5.000 jiwa, desa
                kami memiliki potensi alam yang indah dan budaya yang kaya.
              </p>
              <p className="text-muted-foreground mb-6">
                Website ini dibangun untuk memberikan informasi terkini tentang
                desa kami dan memudahkan masyarakat dalam mengakses layanan
                pemerintah desa.
              </p>
              <Button asChild>
                <Link href="/profil">Pelajari Lebih Lanjut</Link>
              </Button>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/wista.jpg"
                alt="Desa Sejahtera"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Statistik Desa
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatisticCard title="Penduduk" value="5,000" icon="Users" />
            <StatisticCard title="Luas Wilayah" value="500 Ha" icon="Map" />
            <StatisticCard title="Kepala Keluarga" value="1,250" icon="Home" />
            <StatisticCard title="UMKM" value="75" icon="Store" />
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* News */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Berita Terbaru</h2>
                <Button variant="outline" asChild>
                  <Link href="/berita">Lihat Semua</Link>
                </Button>
              </div>
              <div className="space-y-6">
                <NewsCard
                  title="Pembangunan Jalan Desa Tahap II Dimulai"
                  date="10 Mei 2025"
                  excerpt="Pembangunan jalan desa tahap kedua telah dimulai dan diperkirakan selesai dalam 3 bulan."
                  slug="pembangunan-jalan-desa"
                />
                <NewsCard
                  title="Pelatihan Keterampilan Digital untuk Pemuda Desa"
                  date="5 Mei 2025"
                  excerpt="Program pelatihan keterampilan digital untuk pemuda desa telah dilaksanakan dengan sukses."
                  slug="pelatihan-digital"
                />
                <NewsCard
                  title="Panen Raya Padi Organik Desa Sejahtera"
                  date="1 Mei 2025"
                  excerpt="Petani desa merayakan panen raya padi organik dengan hasil yang memuaskan."
                  slug="panen-raya"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Agenda Kegiatan</h2>
                <Button variant="outline" asChild>
                  <Link href="/acara">Lihat Semua</Link>
                </Button>
              </div>
              <div className="space-y-6">
                <EventCard
                  title="Musyawarah Desa"
                  date="15 Mei 2025"
                  time="09:00 - 12:00"
                  location="Balai Desa"
                  slug="musyawarah-desa"
                />
                <EventCard
                  title="Festival Budaya Desa"
                  date="20 Mei 2025"
                  time="10:00 - 22:00"
                  location="Lapangan Desa"
                  slug="festival-budaya"
                />
                <EventCard
                  title="Gotong Royong Bersih Desa"
                  date="25 Mei 2025"
                  time="07:00 - 11:00"
                  location="Seluruh Wilayah Desa"
                  slug="gotong-royong"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Galeri Desa</h2>
            <Button variant="outline" asChild>
              <Link href="/galeri">Lihat Semua</Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.map((image, i) => (
              <div
                key={i}
                className="relative aspect-square rounded-lg overflow-hidden"
              >
                <Image
                  src={image}
                  alt={`Galeri Desa ${i}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Lokasi Desa</h2>
          <div className="relative h-[400px] rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 mx-auto mb-4 text-emerald-600" />
              <p className="text-lg font-medium">Peta Desa tamiang</p>
              <p className="text-muted-foreground">
                Kecamatan tamiang, Kabupaten aceh tamiang
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
