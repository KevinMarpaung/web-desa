import Link from "next/link";
import { Calendar, Clock, MapPin, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Dummy data for events
const acaraData = {
  upcoming: [
    {
      id: 1,
      title: "Musyawarah Desa",
      date: "15 Mei 2025",
      time: "09:00 - 12:00",
      location: "Balai Desa",
      description:
        "Musyawarah desa untuk membahas rencana pembangunan desa tahun 2025-2026.",
      slug: "musyawarah-desa",
    },
    {
      id: 2,
      title: "Festival Budaya Desa",
      date: "20 Mei 2025",
      time: "10:00 - 22:00",
      location: "Lapangan Desa",
      description:
        "Festival budaya tahunan yang menampilkan kesenian dan kuliner khas desa.",
      slug: "festival-budaya",
    },
    {
      id: 3,
      title: "Gotong Royong Bersih Desa",
      date: "25 Mei 2025",
      time: "07:00 - 11:00",
      location: "Seluruh Wilayah Desa",
      description:
        "Kegiatan bersih-bersih lingkungan desa yang dilakukan secara gotong royong.",
      slug: "gotong-royong",
    },
    {
      id: 4,
      title: "Pelatihan Kewirausahaan",
      date: "1 Juni 2025",
      time: "09:00 - 15:00",
      location: "Aula Desa",
      description:
        "Pelatihan kewirausahaan untuk pemuda desa dengan pembicara dari Dinas UMKM.",
      slug: "pelatihan-kewirausahaan",
    },
    {
      id: 5,
      title: "Posyandu Balita",
      date: "5 Juni 2025",
      time: "08:00 - 12:00",
      location: "Pos Kesehatan Desa",
      description:
        "Pemeriksaan kesehatan rutin untuk balita dan pemberian imunisasi.",
      slug: "posyandu-balita",
    },
    {
      id: 6,
      title: "Rapat Kelompok Tani",
      date: "10 Juni 2025",
      time: "19:00 - 21:00",
      location: "Balai Desa",
      description:
        "Rapat koordinasi kelompok tani untuk persiapan musim tanam.",
      slug: "rapat-kelompok-tani",
    },
  ],
  past: [
    {
      id: 1,
      title: "Peringatan Hari Kartini",
      date: "21 April 2025",
      time: "09:00 - 12:00",
      location: "Balai Desa",
      description:
        "Peringatan Hari Kartini dengan lomba dan penampilan budaya.",
      slug: "hari-kartini",
    },
    {
      id: 2,
      title: "Vaksinasi COVID-19",
      date: "15 April 2025",
      time: "08:00 - 15:00",
      location: "Puskesmas Pembantu",
      description: "Program vaksinasi COVID-19 untuk warga desa.",
      slug: "vaksinasi-covid",
    },
    {
      id: 3,
      title: "Penyuluhan Pertanian",
      date: "10 April 2025",
      time: "09:00 - 12:00",
      location: "Aula Desa",
      description:
        "Penyuluhan tentang teknik pertanian organik oleh Dinas Pertanian.",
      slug: "penyuluhan-pertanian",
    },
    {
      id: 4,
      title: "Turnamen Voli Desa",
      date: "5 April 2025",
      time: "14:00 - 18:00",
      location: "Lapangan Desa",
      description:
        "Turnamen voli antar dusun untuk memperebutkan piala kepala desa.",
      slug: "turnamen-voli",
    },
  ],
};

export default function AcaraPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Agenda Kegiatan</h1>
      <p className="text-muted-foreground mb-8">
        Informasi kegiatan dan acara yang akan dan telah dilaksanakan di Desa
        Sejahtera.
      </p>

      <Tabs defaultValue="upcoming" className="mb-12">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="upcoming">Akan Datang</TabsTrigger>
          <TabsTrigger value="past">Telah Selesai</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {acaraData.upcoming.map((acara) => (
              <Card key={acara.id}>
                <CardHeader>
                  <CardTitle className="text-xl">{acara.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{acara.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-emerald-600" />
                      <span>{acara.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-emerald-600" />
                      <span>{acara.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-emerald-600" />
                      <span>{acara.location}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="px-0" asChild>
                    <Link
                      href={`/acara/${acara.slug}`}
                      className="flex items-center"
                    >
                      Detail Acara <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="past" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {acaraData.past.map((acara) => (
              <Card key={acara.id}>
                <CardHeader>
                  <CardTitle className="text-xl">{acara.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{acara.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-emerald-600" />
                      <span>{acara.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-emerald-600" />
                      <span>{acara.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-emerald-600" />
                      <span>{acara.location}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="px-0" asChild>
                    <Link
                      href={`/acara/${acara.slug}`}
                      className="flex items-center"
                    >
                      Detail Acara <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="p-6 bg-muted rounded-lg">
        <h2 className="text-xl font-bold mb-4">
          Ingin Mengadakan Acara di Desa?
        </h2>
        <p className="text-muted-foreground mb-4">
          Jika Anda ingin mengadakan acara di fasilitas desa, silakan ajukan
          permohonan melalui formulir online atau datang langsung ke kantor
          desa.
        </p>
        <Button asChild>
          <Link href="/layanan/permohonan-acara">Ajukan Permohonan Acara</Link>
        </Button>
      </div>
    </div>
  );
}
