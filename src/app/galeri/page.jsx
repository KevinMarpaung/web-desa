import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Dummy data for gallery
const galleryData = {
  kegiatan: [
    {
      id: 1,
      title: "Gotong Royong",
      image: "/placeholder.svg?height=300&width=300&text=Gotong+Royong",
    },
    {
      id: 2,
      title: "Rapat Desa",
      image: "/placeholder.svg?height=300&width=300&text=Rapat+Desa",
    },
    {
      id: 3,
      title: "Pelatihan Warga",
      image: "/placeholder.svg?height=300&width=300&text=Pelatihan",
    },
    {
      id: 4,
      title: "Posyandu",
      image: "/placeholder.svg?height=300&width=300&text=Posyandu",
    },
    {
      id: 5,
      title: "Penyuluhan Pertanian",
      image: "/placeholder.svg?height=300&width=300&text=Penyuluhan",
    },
    {
      id: 6,
      title: "Pembagian Bantuan",
      image: "/placeholder.svg?height=300&width=300&text=Bantuan",
    },
    {
      id: 7,
      title: "Peringatan HUT RI",
      image: "/placeholder.svg?height=300&width=300&text=HUT+RI",
    },
    {
      id: 8,
      title: "Lomba Desa",
      image: "/placeholder.svg?height=300&width=300&text=Lomba",
    },
  ],
  infrastruktur: [
    {
      id: 1,
      title: "Jalan Desa",
      image: "/placeholder.svg?height=300&width=300&text=Jalan+Desa",
    },
    {
      id: 2,
      title: "Jembatan",
      image: "/placeholder.svg?height=300&width=300&text=Jembatan",
    },
    {
      id: 3,
      title: "Balai Desa",
      image: "/placeholder.svg?height=300&width=300&text=Balai+Desa",
    },
    {
      id: 4,
      title: "Puskesmas Pembantu",
      image: "/placeholder.svg?height=300&width=300&text=Puskesmas",
    },
    {
      id: 5,
      title: "Sekolah",
      image: "/placeholder.svg?height=300&width=300&text=Sekolah",
    },
    {
      id: 6,
      title: "Masjid Desa",
      image: "/placeholder.svg?height=300&width=300&text=Masjid",
    },
  ],
  wisata: [
    {
      id: 1,
      title: "Air Terjun",
      image: "/placeholder.svg?height=300&width=300&text=Air+Terjun",
    },
    {
      id: 2,
      title: "Sawah Terasering",
      image: "/placeholder.svg?height=300&width=300&text=Sawah",
    },
    {
      id: 3,
      title: "Danau",
      image: "/placeholder.svg?height=300&width=300&text=Danau",
    },
    {
      id: 4,
      title: "Bukit Pemandangan",
      image: "/placeholder.svg?height=300&width=300&text=Bukit",
    },
  ],
  budaya: [
    {
      id: 1,
      title: "Tarian Tradisional",
      image: "/placeholder.svg?height=300&width=300&text=Tarian",
    },
    {
      id: 2,
      title: "Upacara Adat",
      image: "/placeholder.svg?height=300&width=300&text=Upacara",
    },
    {
      id: 3,
      title: "Kerajinan Lokal",
      image: "/placeholder.svg?height=300&width=300&text=Kerajinan",
    },
    {
      id: 4,
      title: "Festival Budaya",
      image: "/placeholder.svg?height=300&width=300&text=Festival",
    },
  ],
};

export default function GaleriPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Galeri Desa</h1>
      <p className="text-muted-foreground mb-8">
        Kumpulan foto kegiatan, infrastruktur, wisata, dan budaya Desa
        Sejahtera.
      </p>

      <Tabs defaultValue="kegiatan" className="mb-12">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="kegiatan">Kegiatan</TabsTrigger>
          <TabsTrigger value="infrastruktur">Infrastruktur</TabsTrigger>
          <TabsTrigger value="wisata">Wisata</TabsTrigger>
          <TabsTrigger value="budaya">Budaya</TabsTrigger>
        </TabsList>

        <TabsContent value="kegiatan" className="mt-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryData.kegiatan.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-square rounded-lg overflow-hidden bg-muted"
              >
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <h3 className="text-white font-medium">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="infrastruktur" className="mt-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryData.infrastruktur.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-square rounded-lg overflow-hidden bg-muted"
              >
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <h3 className="text-white font-medium">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="wisata" className="mt-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryData.wisata.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-square rounded-lg overflow-hidden bg-muted"
              >
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <h3 className="text-white font-medium">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="budaya" className="mt-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryData.budaya.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-square rounded-lg overflow-hidden bg-muted"
              >
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <h3 className="text-white font-medium">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
