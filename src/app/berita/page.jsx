import Link from "next/link";
import Image from "next/image";
import { Calendar, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const beritaList = [
  {
    id: 1,
    title: "Pembangunan Jalan Desa Tahap II Dimulai",
    date: "10 Mei 2025",
    excerpt:
      "Pembangunan jalan desa tahap kedua telah dimulai dan diperkirakan selesai dalam 3 bulan.",
    image: "/rabat-beton.jpg",
    slug: "pembangunan-jalan-desa",
  },
  {
    id: 2,
    title: "Pelatihan Keterampilan Digital untuk Pemuda Desa",
    date: "5 Mei 2025",
    excerpt:
      "Program pelatihan keterampilan digital untuk pemuda desa telah dilaksanakan dengan sukses.",
    image: "/placeholder.svg?height=200&width=300&text=Pelatihan",
    slug: "pelatihan-digital",
  },
  {
    id: 3,
    title: "Panen Raya Padi Organik Desa Sejahtera",
    date: "1 Mei 2025",
    excerpt:
      "Petani desa merayakan panen raya padi organik dengan hasil yang memuaskan.",
    image: "/placeholder.svg?height=200&width=300&text=Panen+Raya",
    slug: "panen-raya",
  },
  {
    id: 4,
    title: "Kunjungan Bupati ke Desa Sejahtera",
    date: "25 April 2025",
    excerpt:
      "Bupati Kabupaten Bahagia melakukan kunjungan kerja ke Desa Sejahtera untuk meninjau program pembangunan.",
    image: "/placeholder.svg?height=200&width=300&text=Kunjungan",
    slug: "kunjungan-bupati",
  },
  {
    id: 5,
    title: "Posyandu Lansia Diadakan Setiap Bulan",
    date: "20 April 2025",
    excerpt:
      "Posyandu lansia akan diadakan rutin setiap bulan untuk meningkatkan kesehatan warga lanjut usia.",
    image: "/placeholder.svg?height=200&width=300&text=Posyandu",
    slug: "posyandu-lansia",
  },
  {
    id: 6,
    title: "Pembentukan Kelompok Tani Muda",
    date: "15 April 2025",
    excerpt:
      "Kelompok tani muda dibentuk untuk regenerasi petani dan penerapan teknologi pertanian modern.",
    image: "/placeholder.svg?height=200&width=300&text=Tani+Muda",
    slug: "kelompok-tani-muda",
  },
];

export default function BeritaPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Berita Desa</h1>
      <p className="text-muted-foreground mb-8">
        Informasi terbaru seputar kegiatan dan perkembangan Desa Aceh Tamiang.
      </p>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-3/4">
          <div className="grid gap-8">
            {beritaList.map((berita) => (
              <Card key={berita.id} className="overflow-hidden">
                <div className="grid md:grid-cols-[300px_1fr] gap-6">
                  <div className="relative h-[200px]">
                    <Image
                      src={berita.image || "/placeholder.svg"}
                      alt={berita.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <CardHeader className="p-0 pb-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Calendar className="h-4 w-4" />
                        <span>{berita.date}</span>
                      </div>
                      <CardTitle className="text-xl">{berita.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 py-4">
                      <p className="text-muted-foreground">{berita.excerpt}</p>
                    </CardContent>
                    <CardFooter className="p-0">
                      <Button variant="link" className="px-0" asChild>
                        <Link
                          href={`/berita/${berita.slug}`}
                          className="flex items-center"
                        >
                          Baca Selengkapnya{" "}
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Button variant="outline" className="mx-1">
              1
            </Button>
            <Button variant="outline" className="mx-1">
              2
            </Button>
            <Button variant="outline" className="mx-1">
              3
            </Button>
          </div>
        </div>

        <div className="w-full md:w-1/4">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Cari Berita</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Input placeholder="Kata kunci..." />
                  <Button>Cari</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Kategori</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-primary"
                    >
                      Pembangunan
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-primary"
                    >
                      Kesehatan
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-primary"
                    >
                      Pendidikan
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-primary"
                    >
                      Pertanian
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-primary"
                    >
                      Kegiatan Sosial
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Berita Populer</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {beritaList.slice(0, 3).map((berita) => (
                    <li key={berita.id}>
                      <Link
                        href={`/berita/${berita.slug}`}
                        className="flex gap-3 group"
                      >
                        <div className="relative w-16 h-16 rounded overflow-hidden flex-shrink-0">
                          <Image
                            src={berita.image || "/placeholder.svg"}
                            alt={berita.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium group-hover:text-primary line-clamp-2">
                            {berita.title}
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            {berita.date}
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
