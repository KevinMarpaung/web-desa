import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  DropletIcon,
  Leaf,
  Mountain,
  Fish,
  TreePine,
  Gem,
  Bird,
} from "lucide-react";

export default function SumberDayaAlamPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}

      {/* Natural Resources Content */}
      <section className="py-12 px-4 md:px-6 lg:py-16 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Potensi Sumber Daya Alam Desa Bandar Khalifah
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Desa Bandar Khalifah memiliki beragam sumber daya alam yang
              menjadi tulang punggung perekonomian dan kehidupan masyarakat.
              Kekayaan alam ini menjadi modal penting dalam pembangunan desa
              yang berkelanjutan.
            </p>
          </div>

          <Tabs defaultValue="pertanian" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              <TabsTrigger value="pertanian">Pertanian</TabsTrigger>
              <TabsTrigger value="air">Air</TabsTrigger>
              <TabsTrigger value="hutan">Hutan</TabsTrigger>
              <TabsTrigger value="perikanan">Perikanan</TabsTrigger>
              <TabsTrigger value="perkebunan">Perkebunan</TabsTrigger>
            </TabsList>

            <TabsContent value="pertanian" className="mt-6">
              <ResourceSection
                title="Sumber Daya Pertanian"
                icon={<Leaf className="h-12 w-12 text-green-600" />}
                description="Desa Bandar Khalifah memiliki lahan pertanian yang subur dengan luas sekitar 90 hektar. Tanah yang subur dan iklim yang mendukung menjadikan sektor pertanian sebagai salah satu andalan ekonomi desa."
                resources={[
                  {
                    name: "Lahan Sawah",
                    description:
                      "Lahan sawah seluas 50 hektar dengan sistem irigasi teknis yang baik. Mampu menghasilkan 2-3 kali panen dalam setahun dengan produktivitas rata-rata 6-7 ton per hektar.",
                    image: "/sawah.jpg",
                    stats: [
                      { label: "Luas Area", value: "50 Hektar" },
                      { label: "Produktivitas", value: "6-7 Ton/Hektar" },
                      { label: "Panen per Tahun", value: "2-3 Kali" },
                    ],
                  },
                  {
                    name: "Lahan Ladang",
                    description:
                      "Lahan ladang seluas 40 hektar yang dimanfaatkan untuk tanaman palawija seperti jagung, kacang tanah, dan ubi. Hasil panen ladang menjadi sumber pangan alternatif dan pendapatan tambahan bagi petani.",
                    image: "/ladang.jpg",
                    stats: [
                      { label: "Luas Area", value: "40 Hektar" },
                      { label: "Jenis Tanaman", value: "cabai, Kacang, sayur" },
                      {
                        label: "Produktivitas Jagung",
                        value: "8-9 Ton/Hektar",
                      },
                    ],
                  },
                  {
                    name: "Lahan Hortikultura",
                    description:
                      "Area khusus seluas 10 hektar untuk budidaya sayuran dan buah-buahan. Produk hortikultura desa terkenal dengan kualitasnya yang baik dan organik, sehingga memiliki nilai jual yang tinggi di pasar.",
                    image: "/placeholder.svg?height=300&width=400",
                    stats: [
                      { label: "Luas Area", value: "10 Hektar" },
                      {
                        label: "Jenis Tanaman",
                        value: "Sayuran dan Buah-buahan",
                      },
                      { label: "Metode", value: "Organik dan Konvensional" },
                    ],
                  },
                ]}
                challenges={[
                  "Ketergantungan pada musim dan cuaca",
                  "Serangan hama dan penyakit tanaman",
                  "Fluktuasi harga hasil pertanian",
                  "Regenerasi petani yang semakin berkurang",
                ]}
                potentials={[
                  "Pengembangan pertanian organik untuk meningkatkan nilai jual",
                  "Diversifikasi tanaman untuk mengurangi risiko gagal panen",
                  "Pengolahan hasil pertanian untuk meningkatkan nilai tambah",
                  "Pengembangan agrowisata berbasis pertanian",
                ]}
              />
            </TabsContent>

            <TabsContent value="air" className="mt-6">
              <ResourceSection
                title="Sumber Daya Air"
                icon={<DropletIcon className="h-12 w-12 text-blue-600" />}
                description="Desa Bandar Khalifah memiliki sumber daya air yang melimpah berupa sungai, mata air, dan air tanah. Sumber daya air ini menjadi penopang utama kegiatan pertanian, perikanan, dan kebutuhan sehari-hari masyarakat."
                resources={[
                  {
                    name: "Sungai hulu",
                    description:
                      "Sungai utama yang mengalir sepanjang 15 km melintasi desa. Sungai ini menjadi sumber irigasi utama untuk lahan pertanian dan juga dimanfaatkan untuk budidaya ikan air tawar.",
                    image: "/sungai.jpg",
                    stats: [
                      { label: "Panjang", value: "15 Kilometer" },
                      { label: "Debit Air", value: "10-15 m³/detik" },
                      { label: "Kualitas Air", value: "Baik" },
                    ],
                  },
                  {
                    name: "Mata Air Pegunungan",
                    description:
                      "Terdapat 5 titik mata air alami dari pegunungan yang menghasilkan air bersih dengan kualitas tinggi. Air dari mata air ini dimanfaatkan untuk kebutuhan air minum dan rumah tangga masyarakat desa.",
                    image: "/mata-air-pegunungan.jpg",
                    stats: [
                      { label: "Jumlah Titik", value: "5 Mata Air" },
                      { label: "Debit Total", value: "25 Liter/detik" },
                      { label: "Kualitas Air", value: "Sangat Baik" },
                    ],
                  },
                  {
                    name: "Air Terjun x",
                    description:
                      "Air terjun dengan ketinggian 30 meter yang menjadi salah satu objek wisata andalan desa. Selain sebagai destinasi wisata, air terjun ini juga menjadi sumber air bersih dan potensi pembangkit listrik mikrohidro.",
                    image: "/air-terjun.jpg",
                    stats: [
                      { label: "Ketinggian", value: "30 Meter" },
                      { label: "Debit Air", value: "5-8 m³/detik" },
                      { label: "Potensi Energi", value: "Mikrohidro 50 kW" },
                    ],
                  },
                ]}
                challenges={[
                  "Pencemaran air dari aktivitas pertanian dan rumah tangga",
                  "Debit air yang berkurang pada musim kemarau",
                  "Erosi dan sedimentasi di aliran sungai",
                  "Pengelolaan distribusi air yang belum optimal",
                ]}
                potentials={[
                  "Pengembangan sistem irigasi modern untuk efisiensi penggunaan air",
                  "Pembangunan pembangkit listrik mikrohidro",
                  "Pengembangan wisata air berbasis konservasi",
                  "Pengelolaan air bersih untuk kebutuhan domestik dan komersial",
                ]}
              />
            </TabsContent>

            <TabsContent value="hutan" className="mt-6">
              <ResourceSection
                title="Sumber Daya Hutan"
                icon={<TreePine className="h-12 w-12 text-green-800" />}
                description="Desa Sejahtera memiliki kawasan hutan seluas 500 hektar yang terdiri dari hutan lindung dan hutan produksi. Hutan ini menjadi penyangga ekosistem dan sumber penghidupan bagi sebagian masyarakat desa."
                resources={[
                  {
                    name: "Hutan Lindung",
                    description:
                      "Kawasan hutan lindung seluas 300 hektar yang berfungsi sebagai penyangga ekosistem, penyimpan cadangan air, dan habitat berbagai flora dan fauna. Hutan ini dilindungi dan dikelola bersama oleh masyarakat dan pemerintah.",
                    image: "/placeholder.svg?height=300&width=400",
                    stats: [
                      { label: "Luas Area", value: "300 Hektar" },
                      { label: "Jenis Pohon", value: ">100 Spesies" },
                      { label: "Usia Hutan", value: ">50 Tahun" },
                    ],
                  },
                  {
                    name: "Hutan Produksi",
                    description:
                      "Kawasan hutan produksi seluas 200 hektar yang dikelola secara lestari untuk menghasilkan kayu dan hasil hutan non-kayu. Pengelolaan dilakukan dengan sistem tebang pilih dan rotasi yang terencana.",
                    image: "/placeholder.svg?height=300&width=400",
                    stats: [
                      { label: "Luas Area", value: "200 Hektar" },
                      {
                        label: "Jenis Pohon Utama",
                        value: "Jati, Mahoni, Sengon",
                      },
                      { label: "Siklus Panen", value: "15-25 Tahun" },
                    ],
                  },
                  {
                    name: "Hasil Hutan Non-Kayu",
                    description:
                      "Berbagai hasil hutan non-kayu seperti madu, rotan, jamur, dan tanaman obat yang dimanfaatkan oleh masyarakat. Hasil hutan non-kayu ini menjadi sumber pendapatan alternatif yang berkelanjutan.",
                    image: "/placeholder.svg?height=300&width=400",
                    stats: [
                      { label: "Jenis Produk", value: ">20 Jenis" },
                      { label: "Produksi Madu", value: "500 Kg/Tahun" },
                      { label: "Tanaman Obat", value: ">50 Spesies" },
                    ],
                  },
                ]}
                challenges={[
                  "Ancaman perambahan dan alih fungsi hutan",
                  "Kebakaran hutan pada musim kemarau",
                  "Eksploitasi berlebihan terhadap hasil hutan",
                  "Regenerasi pohon yang lambat pada beberapa spesies",
                ]}
                potentials={[
                  "Pengembangan ekowisata berbasis hutan",
                  "Sertifikasi produk hasil hutan untuk meningkatkan nilai jual",
                  "Pengembangan industri pengolahan hasil hutan skala kecil",
                  "Program pembayaran jasa lingkungan (PES) untuk konservasi hutan",
                ]}
              />
            </TabsContent>

            <TabsContent value="perikanan" className="mt-6">
              <ResourceSection
                title="Sumber Daya Perikanan"
                icon={<Fish className="h-12 w-12 text-blue-500" />}
                description="Desa Sejahtera memiliki potensi perikanan yang besar dari sungai, kolam budidaya, dan rawa. Sektor perikanan menjadi salah satu sumber pendapatan penting bagi sebagian masyarakat desa."
                resources={[
                  {
                    name: "Perikanan Sungai",
                    description:
                      "Sungai Sejahtera yang mengalir di desa menjadi habitat berbagai jenis ikan air tawar seperti ikan mas, nila, dan gabus. Penangkapan ikan di sungai dilakukan secara tradisional dengan memperhatikan kelestarian.",
                    image: "/perikanan-sungai.jpg",
                    stats: [
                      { label: "Panjang Sungai", value: "15 Kilometer" },
                      { label: "Jenis Ikan", value: ">15 Spesies" },
                      { label: "Hasil Tangkapan", value: "2-3 Ton/Tahun" },
                    ],
                  },
                  {
                    name: "Kolam Budidaya",
                    description:
                      "Terdapat 50 unit kolam budidaya ikan dengan total luas 10 hektar. Budidaya ikan yang dikembangkan meliputi ikan lele, nila, dan gurame dengan sistem intensif dan semi-intensif.",
                    image: "/kolam-budidaya.jpg",
                    stats: [
                      { label: "Jumlah Kolam", value: "50 Unit" },
                      { label: "Luas Total", value: "10 Hektar" },
                      { label: "Produksi", value: "50 Ton/Tahun" },
                    ],
                  },
                  {
                    name: "Rawa dan Genangan Air",
                    description:
                      "Kawasan rawa dan genangan air seluas 20 hektar yang menjadi habitat alami berbagai jenis ikan. Area ini juga dimanfaatkan untuk budidaya ikan sistem silvofishery yang ramah lingkungan.",
                    image: "rawa.jpg",
                    stats: [
                      { label: "Luas Area", value: "20 Hektar" },
                      { label: "Jenis Ikan", value: "Gabus, Betok, Sepat" },
                      { label: "Sistem Budidaya", value: "Silvofishery" },
                    ],
                  },
                ]}
                challenges={[
                  "Pencemaran air yang mengancam habitat ikan",
                  "Penangkapan ikan berlebihan di perairan umum",
                  "Fluktuasi harga pakan dan hasil perikanan",
                  "Serangan penyakit pada budidaya ikan intensif",
                ]}
                potentials={[
                  "Pengembangan budidaya ikan organik untuk pasar premium",
                  "Diversifikasi jenis ikan budidaya untuk mengurangi risiko",
                  "Pengolahan hasil perikanan untuk meningkatkan nilai tambah",
                  "Pengembangan wisata pemancingan dan kuliner ikan",
                ]}
              />
            </TabsContent>

            <TabsContent value="perkebunan" className="mt-6">
              <ResourceSection
                title="Sumber Daya Perkebunan"
                icon={<Mountain className="h-12 w-12 text-green-700" />}
                description="Desa Sejahtera memiliki lahan perkebunan seluas 150 hektar yang ditanami berbagai jenis tanaman keras dan tanaman industri. Sektor perkebunan menjadi investasi jangka panjang bagi masyarakat desa."
                resources={[
                  {
                    name: "Perkebunan Kopi",
                    description:
                      "Perkebunan kopi arabika dan robusta seluas 50 hektar yang terletak di dataran tinggi desa. Kopi dari desa ini memiliki cita rasa khas dan telah mendapatkan pengakuan dari pecinta kopi.",
                    image: "/kopi.jpg",
                    stats: [
                      { label: "Luas Area", value: "50 Hektar" },
                      { label: "Varietas", value: "Arabika dan Robusta" },
                      { label: "Produksi", value: "75 Ton/Tahun" },
                    ],
                  },
                  {
                    name: "Perkebunan Kelapa",
                    description:
                      "Perkebunan kelapa seluas 60 hektar yang tersebar di seluruh wilayah desa. Kelapa dimanfaatkan secara menyeluruh mulai dari buah, daun, batang, hingga serabut untuk berbagai keperluan.",
                    image: "/kelapa.jpg",
                    stats: [
                      { label: "Luas Area", value: "60 Hektar" },
                      { label: "Jumlah Pohon", value: "~6.000 Pohon" },
                      { label: "Produksi", value: "500.000 Butir/Tahun" },
                    ],
                  },
                  {
                    name: "Perkebunan Buah-buahan",
                    description:
                      "Kebun buah-buahan seluas 40 hektar dengan berbagai jenis tanaman seperti durian, rambutan, mangga, dan jeruk. Buah-buahan ini menjadi komoditas unggulan desa terutama saat musim panen.",
                    image: "/mangga.jpg",
                    stats: [
                      { label: "Luas Area", value: "40 Hektar" },
                      { label: "Jenis Buah", value: ">10 Jenis" },
                      { label: "Produksi Durian", value: "15 Ton/Tahun" },
                    ],
                  },
                ]}
                challenges={[
                  "Serangan hama dan penyakit tanaman",
                  "Fluktuasi harga komoditas perkebunan",
                  "Masa tunggu hasil yang lama untuk tanaman keras",
                  "Keterbatasan teknologi pasca panen",
                ]}
                potentials={[
                  "Pengembangan agrowisata kebun buah dan kopi",
                  "Sertifikasi produk perkebunan untuk pasar ekspor",
                  "Pengolahan hasil perkebunan untuk meningkatkan nilai tambah",
                  "Integrasi perkebunan dengan peternakan (sistem agroforestri)",
                ]}
              />
            </TabsContent>

            <TabsContent value="tambang" className="mt-6">
              <ResourceSection
                title="Sumber Daya Tambang"
                icon={<Gem className="h-12 w-12 text-purple-600" />}
                description="Desa Sejahtera memiliki beberapa potensi sumber daya tambang berupa bahan galian C yang dimanfaatkan untuk pembangunan. Pengelolaan tambang dilakukan dengan memperhatikan aspek lingkungan dan sosial."
                resources={[
                  {
                    name: "Tambang Pasir",
                    description:
                      "Deposit pasir di sepanjang aliran Sungai Sejahtera yang dimanfaatkan untuk bahan bangunan. Penambangan dilakukan secara selektif dan terbatas untuk menjaga keseimbangan ekosistem sungai.",
                    image: "/placeholder.svg?height=300&width=400",
                    stats: [
                      { label: "Lokasi", value: "Sepanjang Sungai" },
                      { label: "Cadangan", value: "Cukup Besar" },
                      { label: "Produksi", value: "100 m³/Bulan" },
                    ],
                  },
                  {
                    name: "Tambang Batu",
                    description:
                      "Deposit batuan andesit dan batu kali yang dimanfaatkan untuk pondasi bangunan dan pengeras jalan. Penambangan dilakukan pada lokasi terbatas dengan sistem kuota untuk menjaga kelestarian.",
                    image: "/placeholder.svg?height=300&width=400",
                    stats: [
                      { label: "Lokasi", value: "Perbukitan Desa" },
                      { label: "Jenis Batuan", value: "Andesit, Batu Kali" },
                      { label: "Produksi", value: "150 m³/Bulan" },
                    ],
                  },
                  {
                    name: "Tanah Liat",
                    description:
                      "Deposit tanah liat berkualitas tinggi yang dimanfaatkan untuk pembuatan batu bata, genteng, dan kerajinan gerabah. Tanah liat menjadi bahan baku industri rumah tangga yang menyerap tenaga kerja lokal.",
                    image: "/placeholder.svg?height=300&width=400",
                    stats: [
                      { label: "Lokasi", value: "Lembah Desa" },
                      { label: "Kualitas", value: "Tinggi" },
                      { label: "Pemanfaatan", value: "Batu Bata, Gerabah" },
                    ],
                  },
                ]}
                challenges={[
                  "Potensi kerusakan lingkungan akibat penambangan",
                  "Konflik kepentingan dalam pemanfaatan lahan",
                  "Keterbatasan teknologi penambangan yang ramah lingkungan",
                  "Regulasi dan perizinan yang kompleks",
                ]}
                potentials={[
                  "Pengembangan industri pengolahan bahan tambang skala kecil",
                  "Rehabilitasi lahan bekas tambang untuk fungsi produktif",
                  "Penerapan teknologi penambangan yang lebih ramah lingkungan",
                  "Pengembangan kerajinan berbasis bahan tambang lokal",
                ]}
              />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Biodiversity Section */}
      <section className="py-12 px-4 md:px-6 lg:py-16 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Keanekaragaman Hayati</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Desa Sejahtera memiliki keanekaragaman hayati yang tinggi dengan
              berbagai jenis flora dan fauna yang menjadi kekayaan alam desa.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <TreePine className="h-8 w-8 text-green-600 mr-4" />
                  <h3 className="text-2xl font-bold">Flora</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Desa Sejahtera memiliki beragam jenis tumbuhan mulai dari
                  tanaman pangan, tanaman obat, hingga pohon berkayu yang
                  menjadi habitat berbagai satwa.
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Tanaman Pangan</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge>Padi</Badge>
                      <Badge>Jagung</Badge>
                      <Badge>Ubi Kayu</Badge>
                      <Badge>Kacang Tanah</Badge>
                      <Badge>Kedelai</Badge>
                      <Badge>Talas</Badge>
                      <Badge>Ganyong</Badge>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Tanaman Obat</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge>Jahe</Badge>
                      <Badge>Kunyit</Badge>
                      <Badge>Kencur</Badge>
                      <Badge>Temulawak</Badge>
                      <Badge>Kumis Kucing</Badge>
                      <Badge>Pegagan</Badge>
                      <Badge>Sambiloto</Badge>
                      <Badge>Binahong</Badge>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Pohon Berkayu</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge>Jati</Badge>
                      <Badge>Mahoni</Badge>
                      <Badge>Sengon</Badge>
                      <Badge>Akasia</Badge>
                      <Badge>Pinus</Badge>
                      <Badge>Cendana</Badge>
                      <Badge>Sonokeling</Badge>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Buah-buahan</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge>Durian</Badge>
                      <Badge>Rambutan</Badge>
                      <Badge>Mangga</Badge>
                      <Badge>Jeruk</Badge>
                      <Badge>Pisang</Badge>
                      <Badge>Pepaya</Badge>
                      <Badge>Nangka</Badge>
                      <Badge>Alpukat</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Bird className="h-8 w-8 text-green-600 mr-4" />
                  <h3 className="text-2xl font-bold">Fauna</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Keanekaragaman fauna di Desa Sejahtera meliputi berbagai jenis
                  hewan liar dan ternak yang menjadi bagian dari ekosistem dan
                  perekonomian desa.
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Mamalia</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge>Kijang</Badge>
                      <Badge>Musang</Badge>
                      <Badge>Tupai</Badge>
                      <Badge>Landak</Badge>
                      <Badge>Kelelawar</Badge>
                      <Badge>Monyet Ekor Panjang</Badge>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Burung</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge>Elang Jawa</Badge>
                      <Badge>Kutilang</Badge>
                      <Badge>Perkutut</Badge>
                      <Badge>Jalak</Badge>
                      <Badge>Merpati</Badge>
                      <Badge>Burung Hantu</Badge>
                      <Badge>Cendrawasih</Badge>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Ikan</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge>Mas</Badge>
                      <Badge>Nila</Badge>
                      <Badge>Lele</Badge>
                      <Badge>Gurame</Badge>
                      <Badge>Gabus</Badge>
                      <Badge>Betok</Badge>
                      <Badge>Sepat</Badge>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Ternak</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge>Sapi</Badge>
                      <Badge>Kambing</Badge>
                      <Badge>Ayam</Badge>
                      <Badge>Bebek</Badge>
                      <Badge>Kelinci</Badge>
                      <Badge>Lebah Madu</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Conservation Efforts */}
      <section className="py-12 px-4 md:px-6 lg:py-16 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Upaya Konservasi</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Berbagai upaya konservasi yang dilakukan untuk menjaga kelestarian
              sumber daya alam Desa Sejahtera.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Pelestarian Hutan</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-muted-foreground">
                      Program reboisasi tahunan di kawasan hutan lindung
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-muted-foreground">
                      Patroli hutan bersama untuk mencegah perambahan
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-muted-foreground">
                      Pembibitan tanaman hutan oleh kelompok masyarakat
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-muted-foreground">
                      Pengembangan hutan desa dengan sistem agroforestri
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Perlindungan Air</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-muted-foreground">
                      Konservasi daerah tangkapan air di sekitar mata air
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-muted-foreground">
                      Pembuatan sumur resapan di setiap rumah warga
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-muted-foreground">
                      Pengelolaan limbah rumah tangga dan pertanian
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-muted-foreground">
                      Pembersihan sungai secara berkala oleh masyarakat
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">
                  Pertanian Berkelanjutan
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-muted-foreground">
                      Pengembangan pertanian organik dengan pupuk kompos
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-muted-foreground">
                      Pengendalian hama terpadu dengan predator alami
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-muted-foreground">
                      Rotasi tanaman untuk menjaga kesuburan tanah
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-muted-foreground">
                      Pemanfaatan limbah pertanian untuk pakan ternak
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

function ResourceSection({
  title,
  icon,
  description,
  resources,
  challenges,
  potentials,
}) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center mb-8">
          {icon}
          <h2 className="text-2xl font-bold mt-4 mb-2">{title}</h2>
          <p className="text-muted-foreground max-w-3xl">{description}</p>
        </div>

        <div className="space-y-8">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="grid gap-6 md:grid-cols-2 items-center border-b pb-8 last:border-0 last:pb-0"
            >
              <div>
                <h3 className="text-xl font-semibold mb-3">{resource.name}</h3>
                <p className="text-muted-foreground mb-4">
                  {resource.description}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {resource.stats.map((stat, statIndex) => (
                    <div key={statIndex}>
                      <p className="text-sm text-muted-foreground">
                        {stat.label}
                      </p>
                      <p className="font-medium">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-first md:order-last">
                <img
                  src={resource.image || "/placeholder.svg"}
                  alt={resource.name}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 mt-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Tantangan</h3>
            <ul className="space-y-2">
              {challenges.map((challenge, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span className="text-muted-foreground">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Potensi Pengembangan</h3>
            <ul className="space-y-2">
              {potentials.map((potential, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span className="text-muted-foreground">{potential}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
