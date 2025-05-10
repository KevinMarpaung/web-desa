import Link from "next/link";
import {
  FileText,
  MessageSquare,
  HelpCircle,
  AlertTriangle,
  Users,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function LayananPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Layanan Desa</h1>
        <p className="text-muted-foreground mb-8">
          Berikut adalah layanan yang disediakan oleh Pemerintah Desa Bandar
          Khalifah untuk masyarakat.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <FileText className="h-8 w-8 text-emerald-600 mb-2" />
              <CardTitle>Surat Pengantar</CardTitle>
              <CardDescription>
                Layanan pembuatan surat pengantar untuk berbagai keperluan
                administrasi.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Surat pengantar untuk pembuatan KTP, KK, Akta Kelahiran, dan
                dokumen penting lainnya.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href="/layanan/surat-pengatar">Ajukan Permohonan</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <FileText className="h-8 w-8 text-emerald-600 mb-2" />
              <CardTitle>Surat Keterangan</CardTitle>
              <CardDescription>
                Layanan pembuatan surat keterangan dari desa.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Surat keterangan domisili, keterangan usaha, keterangan tidak
                mampu, dan lainnya.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href="/layanan/surat-keterangan">Ajukan Permohonan</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <MessageSquare className="h-8 w-8 text-emerald-600 mb-2" />
              <CardTitle>Pengaduan Masyarakat</CardTitle>
              <CardDescription>
                Layanan pengaduan masyarakat untuk peningkatan pelayanan desa.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Sampaikan keluhan, saran, atau masukan untuk perbaikan layanan
                dan infrastruktur desa.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href="/layanan/pengaduan">Sampaikan Pengaduan</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <AlertTriangle className="h-8 w-8 text-emerald-600 mb-2" />
              <CardTitle>Pelaporan Darurat</CardTitle>
              <CardDescription>
                Layanan pelaporan kejadian darurat di wilayah desa.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Laporkan kejadian bencana alam, kebakaran, atau situasi darurat
                lainnya untuk penanganan cepat.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href="/layanan/darurat">Laporkan Kejadian</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <Users className="h-8 w-8 text-emerald-600 mb-2" />
              <CardTitle>Bantuan Sosial</CardTitle>
              <CardDescription>
                Informasi dan pendaftaran program bantuan sosial.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Program bantuan untuk masyarakat kurang mampu, lansia, dan
                kelompok rentan lainnya.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href="/layanan/bantuan">Lihat Program</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <HelpCircle className="h-8 w-8 text-emerald-600 mb-2" />
              <CardTitle>Informasi & Konsultasi</CardTitle>
              <CardDescription>
                Layanan informasi dan konsultasi untuk masyarakat.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Dapatkan informasi tentang program desa, konsultasi pertanian,
                kesehatan, dan lainnya.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href="/layanan/informasi">Ajukan Pertanyaan</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-12 p-6 bg-muted rounded-lg">
          <h2 className="text-xl font-bold mb-4">Jam Pelayanan</h2>
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
          <div className="mt-4 text-sm text-muted-foreground">
            <p>
              Untuk layanan darurat di luar jam kerja, silakan hubungi nomor
              darurat desa: (62) 9876-5432
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
