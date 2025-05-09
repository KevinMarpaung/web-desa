import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ProfilPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Profil Desa aceh tamiang</h1>

        <div className="relative h-[300px] rounded-lg overflow-hidden mb-8">
          <Image
            src="/profilDesa.jpg"
            alt="Panorama Desa Sejahtera"
            fill
            className="object-cover"
          />
        </div>

        <Tabs defaultValue="sejarah" className="mb-12">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="sejarah">Sejarah</TabsTrigger>
            <TabsTrigger value="visi-misi">Visi & Misi</TabsTrigger>
            <TabsTrigger value="demografi">Demografi</TabsTrigger>
            <TabsTrigger value="pemerintahan">Pemerintahan</TabsTrigger>
          </TabsList>
          <TabsContent value="sejarah" className="mt-6">
            <h2 className="text-2xl font-bold mb-4">Sejarah Desa</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Desa Sejahtera didirikan pada tahun 1945 setelah kemerdekaan
                Indonesia. Awalnya, desa ini merupakan pemukiman kecil yang
                dihuni oleh beberapa keluarga petani yang mengolah lahan subur
                di sekitar sungai.
              </p>
              <p>
                Nama "Sejahtera" diberikan oleh para pendiri desa yang berharap
                desa ini akan membawa kesejahteraan bagi seluruh penduduknya.
                Seiring berjalannya waktu, desa ini berkembang menjadi pusat
                pertanian dan perdagangan lokal yang penting di wilayah
                tersebut.
              </p>
              <p>
                Pada tahun 1970-an, desa ini mengalami modernisasi dengan
                dibangunnya jalan utama yang menghubungkan desa dengan kota
                kabupaten. Hal ini membuka akses ekonomi dan pendidikan yang
                lebih luas bagi penduduk desa.
              </p>
              <p>
                Hingga saat ini, Desa Sejahtera terus berkembang dengan tetap
                mempertahankan nilai-nilai budaya dan kearifan lokal yang
                menjadi ciri khas desa ini.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="visi-misi" className="mt-6">
            <h2 className="text-2xl font-bold mb-4">Visi & Misi</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Visi</h3>
                <p className="text-muted-foreground">
                  "Mewujudkan Desa Sejahtera yang mandiri, maju, sejahtera, dan
                  berbudaya berdasarkan gotong royong."
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Misi</h3>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>
                    Meningkatkan kualitas pelayanan pemerintahan desa yang
                    profesional dan transparan
                  </li>
                  <li>
                    Membangun infrastruktur desa yang memadai dan berkelanjutan
                  </li>
                  <li>Mengembangkan ekonomi lokal berbasis potensi desa</li>
                  <li>
                    Meningkatkan kualitas pendidikan dan kesehatan masyarakat
                  </li>
                  <li>Melestarikan budaya dan kearifan lokal</li>
                  <li>
                    Menciptakan lingkungan yang bersih, sehat, dan lestari
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="demografi" className="mt-6">
            <h2 className="text-2xl font-bold mb-4">Demografi</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Penduduk</h3>
                <p className="text-muted-foreground mb-4">
                  Jumlah penduduk Desa Sejahtera mencapai 5.000 jiwa dengan
                  komposisi sebagai berikut:
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle>Jenis Kelamin</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1">
                        <li className="flex justify-between">
                          <span className="text-muted-foreground">
                            Laki-laki
                          </span>
                          <span>2.450 jiwa</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-muted-foreground">
                            Perempuan
                          </span>
                          <span>2.550 jiwa</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle>Kelompok Usia</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1">
                        <li className="flex justify-between">
                          <span className="text-muted-foreground">
                            0-14 tahun
                          </span>
                          <span>1.200 jiwa</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-muted-foreground">
                            15-64 tahun
                          </span>
                          <span>3.300 jiwa</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-muted-foreground">
                            65+ tahun
                          </span>
                          <span>500 jiwa</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Mata Pencaharian</h3>
                <p className="text-muted-foreground mb-4">
                  Mayoritas penduduk Desa Sejahtera bekerja di sektor:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>Pertanian (60%)</li>
                  <li>Perdagangan (15%)</li>
                  <li>Jasa (10%)</li>
                  <li>Pegawai Negeri/Swasta (10%)</li>
                  <li>Lainnya (5%)</li>
                </ul>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="pemerintahan" className="mt-6">
            <h2 className="text-2xl font-bold mb-4">Struktur Pemerintahan</h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Kepala Desa</CardTitle>
                    <CardDescription>Periode 2023-2029</CardDescription>
                  </CardHeader>
                  <CardContent className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden bg-muted">
                      <Image
                        src="/placeholder.svg?height=64&width=64"
                        alt="Kepala Desa"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">Bapak Suharto</h4>
                      <p className="text-sm text-muted-foreground">
                        Menjabat sejak 2023
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Sekretaris Desa</CardTitle>
                  </CardHeader>
                  <CardContent className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden bg-muted">
                      <Image
                        src="/placeholder.svg?height=64&width=64"
                        alt="Sekretaris Desa"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">Ibu Rahayu</h4>
                      <p className="text-sm text-muted-foreground">
                        Menjabat sejak 2020
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-xl font-bold mt-8 mb-4">Perangkat Desa</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { jabatan: "Kaur Pemerintahan", nama: "Bapak Joko" },
                  { jabatan: "Kaur Pembangunan", nama: "Bapak Santoso" },
                  { jabatan: "Kaur Kesejahteraan", nama: "Ibu Wati" },
                  { jabatan: "Kaur Keuangan", nama: "Bapak Hadi" },
                  { jabatan: "Kaur Umum", nama: "Ibu Siti" },
                  { jabatan: "Kepala Dusun I", nama: "Bapak Rudi" },
                  { jabatan: "Kepala Dusun II", nama: "Bapak Tono" },
                  { jabatan: "Kepala Dusun III", nama: "Bapak Dedi" },
                ].map((item, index) => (
                  <Card key={index}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">
                        {item.jabatan}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">{item.nama}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
