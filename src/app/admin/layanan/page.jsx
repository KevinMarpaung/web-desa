"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Calendar,
  Eye,
  MessageSquare,
  MoreHorizontal,
  Search,
  UserCircle,
  Trash2,
} from "lucide-react";
import { ServiceRequestDetail } from "@/components/admin/service-request-detail";

// Sample service requests data
const initialRequestsData = [
  {
    id: 1,
    name: "Ahmad Sulaiman",
    service: "Administrasi Kependudukan",
    type: "Pembuatan KTP",
    date: "15 Mei 2023",
    status: "pending",
    description: "Permohonan pembuatan KTP baru karena KTP lama hilang.",
    contact: "081234567890",
    address: "Jl. Desa Sejahtera No. 45, RT 03/RW 02",
    attachments: ["kk.jpg", "surat_kehilangan.pdf"],
    notes: [],
  },
  {
    id: 2,
    name: "Siti Aminah",
    service: "Bantuan Sosial",
    type: "Pendaftaran BLT",
    date: "12 Mei 2023",
    status: "in-progress",
    description:
      "Permohonan untuk mendapatkan bantuan langsung tunai karena kehilangan pekerjaan.",
    contact: "085678901234",
    address: "Jl. Desa Sejahtera No. 78, RT 05/RW 03",
    attachments: ["ktp.jpg", "kk.jpg", "surat_keterangan_tidak_mampu.pdf"],
    notes: [
      {
        date: "13 Mei 2023",
        content: "Dokumen sudah diperiksa, menunggu verifikasi lapangan.",
        admin: "Joko",
      },
    ],
  },
  {
    id: 3,
    name: "Budi Santoso",
    service: "Perizinan Usaha",
    type: "Surat Izin Usaha",
    date: "10 Mei 2023",
    status: "completed",
    description: "Permohonan surat izin usaha untuk warung makan.",
    contact: "089876543210",
    address: "Jl. Desa Sejahtera No. 120, RT 07/RW 04",
    attachments: [
      "ktp.jpg",
      "kk.jpg",
      "foto_lokasi.jpg",
      "surat_pernyataan.pdf",
    ],
    notes: [
      {
        date: "11 Mei 2023",
        content: "Dokumen sudah diperiksa, menunggu survei lokasi.",
        admin: "Dewi",
      },
      {
        date: "12 Mei 2023",
        content: "Survei lokasi sudah dilakukan, izin disetujui.",
        admin: "Rudi",
      },
    ],
  },
  {
    id: 4,
    name: "Dewi Lestari",
    service: "Pengaduan Masyarakat",
    type: "Kerusakan Infrastruktur",
    date: "8 Mei 2023",
    status: "in-progress",
    description:
      "Laporan jalan rusak di depan rumah yang membahayakan pengendara.",
    contact: "082345678901",
    address: "Jl. Desa Sejahtera No. 56, RT 04/RW 02",
    attachments: ["foto_jalan_rusak.jpg"],
    notes: [
      {
        date: "9 Mei 2023",
        content: "Pengaduan diterima, akan dijadwalkan untuk perbaikan.",
        admin: "Ahmad",
      },
    ],
  },
  {
    id: 5,
    name: "Joko Widodo",
    service: "Pertanian & Peternakan",
    type: "Bantuan Bibit",
    date: "5 Mei 2023",
    status: "rejected",
    description: "Permohonan bantuan bibit padi untuk musim tanam berikutnya.",
    contact: "087654321098",
    address: "Jl. Desa Sejahtera No. 90, RT 06/RW 03",
    attachments: ["ktp.jpg", "bukti_kepemilikan_lahan.pdf"],
    notes: [
      {
        date: "6 Mei 2023",
        content:
          "Dokumen tidak lengkap, perlu melampirkan surat keterangan dari kelompok tani.",
        admin: "Tono",
      },
      {
        date: "7 Mei 2023",
        content:
          "Pemohon tidak melengkapi dokumen dalam batas waktu yang ditentukan.",
        admin: "Tono",
      },
    ],
  },
  {
    id: 6,
    name: "Rina Wulandari",
    service: "Pendidikan & Kesehatan",
    type: "Beasiswa Pendidikan",
    date: "3 Mei 2023",
    status: "pending",
    description: "Permohonan beasiswa pendidikan untuk anak yang berprestasi.",
    contact: "083456789012",
    address: "Jl. Desa Sejahtera No. 34, RT 02/RW 01",
    attachments: [
      "ktp_orangtua.jpg",
      "kk.jpg",
      "rapor.pdf",
      "sertifikat_prestasi.pdf",
    ],
    notes: [],
  },
];

// Status badge mapping
const statusBadgeMap = {
  pending: { label: "Menunggu", variant: "outline" },
  "in-progress": { label: "Diproses", variant: "secondary" },
  completed: { label: "Selesai", variant: "default" },
  rejected: { label: "Ditolak", variant: "destructive" },
};

export default function ServiceRequestsManagement() {
  const [requestsData, setRequestsData] = useState(initialRequestsData);
  const [searchTerm, setSearchTerm] = useState("");
  const [serviceFilter, setServiceFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentRequest, setCurrentRequest] = useState(null);

  // Filter requests based on search term and filters
  const filteredRequests = requestsData.filter((request) => {
    const matchesSearch =
      request.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesService =
      serviceFilter === "" || request.service === serviceFilter;
    const matchesStatus =
      statusFilter === "" || request.status === statusFilter;

    return matchesSearch && matchesService && matchesStatus;
  });

  // Handle updating request status
  const handleUpdateRequest = (updatedRequest) => {
    setRequestsData(
      requestsData.map((request) =>
        request.id === updatedRequest.id ? updatedRequest : request
      )
    );
    setIsViewDialogOpen(false);
  };

  // Handle deleting request
  const handleDeleteRequest = () => {
    setRequestsData(
      requestsData.filter((request) => request.id !== currentRequest.id)
    );
    setIsDeleteDialogOpen(false);
  };

  // Open view dialog
  const openViewDialog = (request) => {
    setCurrentRequest(request);
    setIsViewDialogOpen(true);
  };

  // Open delete dialog
  const openDeleteDialog = (request) => {
    setCurrentRequest(request);
    setIsDeleteDialogOpen(true);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Manajemen Pengajuan Layanan</h1>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Cari berdasarkan nama atau jenis layanan..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={serviceFilter} onValueChange={setServiceFilter}>
          <SelectTrigger className="w-full md:w-[220px]">
            <SelectValue placeholder="Jenis Layanan" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Semua Layanan</SelectItem>
            <SelectItem value="Administrasi Kependudukan">
              Administrasi Kependudukan
            </SelectItem>
            <SelectItem value="Bantuan Sosial">Bantuan Sosial</SelectItem>
            <SelectItem value="Pengaduan Masyarakat">
              Pengaduan Masyarakat
            </SelectItem>
            <SelectItem value="Perizinan Usaha">Perizinan Usaha</SelectItem>
            <SelectItem value="Pertanian & Peternakan">
              Pertanian & Peternakan
            </SelectItem>
            <SelectItem value="Pendidikan & Kesehatan">
              Pendidikan & Kesehatan
            </SelectItem>
          </SelectContent>
        </Select>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Semua Status</SelectItem>
            <SelectItem value="pending">Menunggu</SelectItem>
            <SelectItem value="in-progress">Diproses</SelectItem>
            <SelectItem value="completed">Selesai</SelectItem>
            <SelectItem value="rejected">Ditolak</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Requests Table */}
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Pemohon</TableHead>
              <TableHead>Layanan</TableHead>
              <TableHead>Tanggal</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Catatan</TableHead>
              <TableHead className="text-right">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredRequests.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={6}
                  className="text-center py-8 text-muted-foreground"
                >
                  Tidak ada pengajuan layanan yang ditemukan
                </TableCell>
              </TableRow>
            ) : (
              filteredRequests.map((request) => (
                <TableRow key={request.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center">
                      <UserCircle className="mr-2 h-5 w-5 text-muted-foreground" />
                      <div>
                        <div>{request.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {request.contact}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div>{request.service}</div>
                      <div className="text-sm text-muted-foreground">
                        {request.type}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                      {request.date}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={statusBadgeMap[request.status].variant}>
                      {statusBadgeMap[request.status].label}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <MessageSquare className="mr-2 h-4 w-4 text-muted-foreground" />
                      {request.notes.length}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onClick={() => openViewDialog(request)}
                        >
                          <Eye className="mr-2 h-4 w-4" />
                          Lihat Detail
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="text-red-600"
                          onClick={() => openDeleteDialog(request)}
                        >
                          <Trash2 className="mr-2 h-4 w-4" />
                          Hapus
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* View Request Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Detail Pengajuan Layanan</DialogTitle>
            <DialogDescription>
              Informasi lengkap tentang pengajuan layanan dan riwayat prosesnya.
            </DialogDescription>
          </DialogHeader>
          {currentRequest && (
            <ServiceRequestDetail
              request={currentRequest}
              onUpdate={handleUpdateRequest}
            />
          )}
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog
        open={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Konfirmasi Hapus</AlertDialogTitle>
            <AlertDialogDescription>
              Apakah Anda yakin ingin menghapus pengajuan layanan dari "
              {currentRequest?.name}"? Tindakan ini tidak dapat dibatalkan.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Batal</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteRequest}
              className="bg-red-600 hover:bg-red-700"
            >
              Hapus
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
