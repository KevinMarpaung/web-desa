import { Calendar, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Sample recent service requests data
const recentRequests = [
  {
    id: 1,
    name: "Ahmad Sulaiman",
    service: "Administrasi Kependudukan",
    type: "Pembuatan KTP",
    date: "15 Mei 2023",
    status: "pending",
  },
  {
    id: 2,
    name: "Siti Aminah",
    service: "Bantuan Sosial",
    type: "Pendaftaran BLT",
    date: "12 Mei 2023",
    status: "in-progress",
  },
  {
    id: 3,
    name: "Budi Santoso",
    service: "Perizinan Usaha",
    type: "Surat Izin Usaha",
    date: "10 Mei 2023",
    status: "completed",
  },
  {
    id: 4,
    name: "Dewi Lestari",
    service: "Pengaduan Masyarakat",
    type: "Kerusakan Infrastruktur",
    date: "8 Mei 2023",
    status: "in-progress",
  },
];

// Status badge mapping
const statusBadgeMap = {
  pending: { label: "Menunggu", variant: "outline" },
  "in-progress": { label: "Diproses", variant: "secondary" },
  completed: { label: "Selesai", variant: "default" },
  rejected: { label: "Ditolak", variant: "destructive" },
};

export function RecentRequests() {
  return (
    <div className="space-y-4">
      {recentRequests.map((request) => (
        <div
          key={request.id}
          className="flex items-start justify-between border-b pb-4 last:border-0 last:pb-0"
        >
          <div>
            <div className="font-medium">{request.name}</div>
            <div className="text-sm text-muted-foreground">
              {request.service} - {request.type}
            </div>
            <div className="flex items-center gap-4 mt-1">
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="mr-1 h-3 w-3" />
                {request.date}
              </div>
              <Badge variant={statusBadgeMap[request.status].variant}>
                {statusBadgeMap[request.status].label}
              </Badge>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <Eye className="h-4 w-4" />
            <span className="sr-only">Lihat Detail</span>
          </Button>
        </div>
      ))}
      <div className="text-center pt-2">
        <Button variant="outline" asChild>
          <a href="/admin/layanan">Lihat Semua Pengajuan</a>
        </Button>
      </div>
    </div>
  );
}
