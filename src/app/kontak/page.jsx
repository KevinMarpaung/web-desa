import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function KontakPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Hubungi Kami</h1>
      <p className="text-muted-foreground mb-8">
        Silakan hubungi kami untuk informasi lebih lanjut atau kirimkan pesan
        melalui formulir di bawah ini.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-6">Kirim Pesan</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="nama-depan" className="text-sm font-medium">
                  Nama Depan
                </label>
                <Input
                  id="nama-depan"
                  placeholder="Masukkan nama depan"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="nama-belakang" className="text-sm font-medium">
                  Nama Belakang
                </label>
                <Input
                  id="nama-belakang"
                  placeholder="Masukkan nama belakang"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="nama@email.com"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="subjek" className="text-sm font-medium">
                Subjek
              </label>
              <Input id="subjek" placeholder="Subjek pesan" required />
            </div>
            <div className="space-y-2">
              <label htmlFor="pesan" className="text-sm font-medium">
                Pesan
              </label>
              <Textarea
                id="pesan"
                placeholder="Tulis pesan Anda di sini..."
                rows={5}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Kirim Pesan
            </Button>
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Informasi Kontak</h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-emerald-600 mt-0.5" />
                  <div>
                    <h3 className="font-bold mb-1">Alamat</h3>
                    <p className="text-muted-foreground">
                      Jl. Desa No. 123, aceh tamiang, kecamatan tamiang,
                      Kabupaten tamiang
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-emerald-600 mt-0.5" />
                  <div>
                    <h3 className="font-bold mb-1">Telepon</h3>
                    <p className="text-muted-foreground">(021) 1234-5678</p>
                    <p className="text-muted-foreground">
                      Darurat: (021) 9876-5432
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-emerald-600 mt-0.5" />
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      info@acehtamiang.desa.id
                    </p>
                    <p className="text-muted-foreground">
                      admin@acehtamiang.desa.id
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Jam Pelayanan</CardTitle>
                <CardDescription>Kantor Desa Sejahtera</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Senin - Kamis</span>
                    <span>08:00 - 15:00 WIB</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Jumat</span>
                    <span>08:00 - 11:30 WIB</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sabtu, Minggu & Hari Libur</span>
                    <span>Tutup</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Lokasi Kami</h2>
        <div className="relative h-[400px] rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-12 w-12 mx-auto mb-4 text-emerald-600" />
            <p className="text-lg font-medium">Peta Desa aceh tamiang</p>
            <p className="text-muted-foreground">
              Kecamatan aceh tamiang, Kabupaten tamiang
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
