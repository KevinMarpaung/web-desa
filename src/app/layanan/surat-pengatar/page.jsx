import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SuratPengantarPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Permohonan Surat Pengantar</h1>
        <p className="text-muted-foreground mb-8">
          Silakan isi formulir di bawah ini untuk mengajukan permohonan surat
          pengantar.
        </p>

        <Card>
          <CardHeader>
            <CardTitle>Formulir Permohonan</CardTitle>
            <CardDescription>
              Pastikan data yang diisi sesuai dengan KTP/KK yang berlaku.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Data Pemohon</h3>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="nik" className="text-sm font-medium">
                      NIK
                    </label>
                    <Input
                      id="nik"
                      placeholder="Nomor Induk Kependudukan"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="nama" className="text-sm font-medium">
                      Nama Lengkap
                    </label>
                    <Input id="nama" placeholder="Nama sesuai KTP" required />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="tempat-lahir"
                      className="text-sm font-medium"
                    >
                      Tempat Lahir
                    </label>
                    <Input
                      id="tempat-lahir"
                      placeholder="Tempat lahir"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="tanggal-lahir"
                      className="text-sm font-medium"
                    >
                      Tanggal Lahir
                    </label>
                    <Input id="tanggal-lahir" type="date" required />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="jenis-kelamin"
                      className="text-sm font-medium"
                    >
                      Jenis Kelamin
                    </label>
                    <Select>
                      <SelectTrigger id="jenis-kelamin">
                        <SelectValue placeholder="Pilih jenis kelamin" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="laki-laki">Laki-laki</SelectItem>
                        <SelectItem value="perempuan">Perempuan</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="agama" className="text-sm font-medium">
                      Agama
                    </label>
                    <Select>
                      <SelectTrigger id="agama">
                        <SelectValue placeholder="Pilih agama" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="islam">Islam</SelectItem>
                        <SelectItem value="kristen">Kristen</SelectItem>
                        <SelectItem value="katolik">Katolik</SelectItem>
                        <SelectItem value="hindu">Hindu</SelectItem>
                        <SelectItem value="buddha">Buddha</SelectItem>
                        <SelectItem value="konghucu">Konghucu</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="alamat" className="text-sm font-medium">
                    Alamat
                  </label>
                  <Textarea id="alamat" placeholder="Alamat lengkap" required />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="pekerjaan" className="text-sm font-medium">
                      Pekerjaan
                    </label>
                    <Input id="pekerjaan" placeholder="Pekerjaan" required />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="status-perkawinan"
                      className="text-sm font-medium"
                    >
                      Status Perkawinan
                    </label>
                    <Select>
                      <SelectTrigger id="status-perkawinan">
                        <SelectValue placeholder="Pilih status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="belum-kawin">Belum Kawin</SelectItem>
                        <SelectItem value="kawin">Kawin</SelectItem>
                        <SelectItem value="cerai-hidup">Cerai Hidup</SelectItem>
                        <SelectItem value="cerai-mati">Cerai Mati</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Informasi Surat</h3>

                <div className="space-y-2">
                  <label htmlFor="jenis-surat" className="text-sm font-medium">
                    Jenis Surat Pengantar
                  </label>
                  <Select>
                    <SelectTrigger id="jenis-surat">
                      <SelectValue placeholder="Pilih jenis surat" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ktp">Pembuatan KTP</SelectItem>
                      <SelectItem value="kk">
                        Pembuatan Kartu Keluarga
                      </SelectItem>
                      <SelectItem value="akta-kelahiran">
                        Pembuatan Akta Kelahiran
                      </SelectItem>
                      <SelectItem value="skck">Pembuatan SKCK</SelectItem>
                      <SelectItem value="domisili">
                        Keterangan Domisili
                      </SelectItem>
                      <SelectItem value="lainnya">Lainnya</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="keperluan" className="text-sm font-medium">
                    Keperluan
                  </label>
                  <Textarea
                    id="keperluan"
                    placeholder="Jelaskan keperluan pembuatan surat"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="keterangan" className="text-sm font-medium">
                    Keterangan Tambahan (opsional)
                  </label>
                  <Textarea
                    id="keterangan"
                    placeholder="Keterangan tambahan jika ada"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Lampiran Dokumen</h3>
                <p className="text-sm text-muted-foreground">
                  Silakan unggah dokumen pendukung (format: JPG, PNG, atau PDF,
                  maks. 2MB)
                </p>

                <div className="space-y-2">
                  <label htmlFor="foto-ktp" className="text-sm font-medium">
                    Foto KTP
                  </label>
                  <Input
                    id="foto-ktp"
                    type="file"
                    accept=".jpg,.jpeg,.png,.pdf"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="foto-kk" className="text-sm font-medium">
                    Foto Kartu Keluarga
                  </label>
                  <Input
                    id="foto-kk"
                    type="file"
                    accept=".jpg,.jpeg,.png,.pdf"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="dokumen-pendukung"
                    className="text-sm font-medium"
                  >
                    Dokumen Pendukung Lainnya (opsional)
                  </label>
                  <Input
                    id="dokumen-pendukung"
                    type="file"
                    accept=".jpg,.jpeg,.png,.pdf"
                  />
                </div>
              </div>

              <div className="pt-4">
                <Button type="submit" className="w-full">
                  Ajukan Permohonan
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="mt-8 p-4 bg-muted rounded-lg">
          <h3 className="font-medium mb-2">Catatan:</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
            <li>Permohonan akan diproses dalam waktu 1-3 hari kerja.</li>
            <li>
              Anda akan mendapatkan notifikasi melalui email atau SMS ketika
              surat siap diambil.
            </li>
            <li>Silakan bawa dokumen asli saat pengambilan surat.</li>
            <li>
              Untuk informasi lebih lanjut, silakan hubungi kantor desa di (+62
              8316530731)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
