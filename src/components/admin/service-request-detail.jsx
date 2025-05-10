"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Calendar,
  FileText,
  MapPin,
  Phone,
  User,
  UserCircle,
} from "lucide-react";

// Status badge mapping
const statusBadgeMap = {
  pending: { label: "Menunggu", variant: "outline" },
  "in-progress": { label: "Diproses", variant: "secondary" },
  completed: { label: "Selesai", variant: "default" },
  rejected: { label: "Ditolak", variant: "destructive" },
};

export function ServiceRequestDetail({ request, onUpdate }) {
  const [status, setStatus] = useState(request.status);
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState(request.notes || []);

  const handleAddNote = () => {
    if (!note.trim()) return;

    const newNote = {
      date: new Date().toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      content: note,
      admin: "Admin", // In a real app, this would be the current admin's name
    };

    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    setNote("");

    // Update the request with the new note
    onUpdate({
      ...request,
      notes: updatedNotes,
    });
  };

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);

    // Update the request with the new status
    onUpdate({
      ...request,
      status: newStatus,
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h3 className="text-lg font-semibold mb-4">Informasi Pemohon</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <User className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <div className="font-medium">Nama Lengkap</div>
                <div className="text-muted-foreground">{request.name}</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <div className="font-medium">Kontak</div>
                <div className="text-muted-foreground">{request.contact}</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <div className="font-medium">Alamat</div>
                <div className="text-muted-foreground">{request.address}</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <div className="font-medium">Tanggal Pengajuan</div>
                <div className="text-muted-foreground">{request.date}</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Detail Layanan</h3>
          <div className="space-y-4">
            <div>
              <div className="font-medium">Jenis Layanan</div>
              <div className="text-muted-foreground">{request.service}</div>
            </div>
            <div>
              <div className="font-medium">Tipe Pengajuan</div>
              <div className="text-muted-foreground">{request.type}</div>
            </div>
            <div>
              <div className="font-medium">Status</div>
              <div className="mt-1">
                <Badge variant={statusBadgeMap[status].variant}>
                  {statusBadgeMap[status].label}
                </Badge>
              </div>
            </div>
            <div>
              <div className="font-medium">Deskripsi</div>
              <div className="text-muted-foreground">{request.description}</div>
            </div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="attachments">
        <TabsList>
          <TabsTrigger value="attachments">Lampiran</TabsTrigger>
          <TabsTrigger value="notes">Catatan ({notes.length})</TabsTrigger>
        </TabsList>
        <TabsContent value="attachments" className="mt-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Dokumen Lampiran</h3>
            {request.attachments && request.attachments.length > 0 ? (
              <div className="grid gap-4 md:grid-cols-2">
                {request.attachments.map((attachment, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 border rounded-md"
                  >
                    <FileText className="h-8 w-8 text-muted-foreground" />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium truncate">{attachment}</div>
                      <div className="text-sm text-muted-foreground">
                        {attachment.endsWith(".pdf") ? "PDF Document" : "Image"}
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Lihat
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                Tidak ada lampiran
              </div>
            )}
          </div>
        </TabsContent>
        <TabsContent value="notes" className="mt-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Riwayat Catatan</h3>
            <div className="space-y-4 max-h-[300px] overflow-y-auto">
              {notes.length > 0 ? (
                notes.map((note, index) => (
                  <div key={index} className="flex gap-3 p-3 border rounded-md">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src="/placeholder.svg?height=32&width=32"
                        alt={note.admin}
                      />
                      <AvatarFallback>
                        <UserCircle className="h-6 w-6" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div className="font-medium">{note.admin}</div>
                        <div className="text-sm text-muted-foreground">
                          {note.date}
                        </div>
                      </div>
                      <div className="text-muted-foreground mt-1">
                        {note.content}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  Belum ada catatan
                </div>
              )}
            </div>
            <div className="space-y-2 pt-4 border-t">
              <Textarea
                placeholder="Tambahkan catatan baru..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
              <div className="flex justify-end">
                <Button onClick={handleAddNote} disabled={!note.trim()}>
                  Tambah Catatan
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="border-t pt-6">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="font-medium">Ubah Status:</div>
            <Select value={status} onValueChange={handleStatusChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pending">Menunggu</SelectItem>
                <SelectItem value="in-progress">Diproses</SelectItem>
                <SelectItem value="completed">Selesai</SelectItem>
                <SelectItem value="rejected">Ditolak</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => onUpdate(null)}>
              Tutup
            </Button>
            <Button>Simpan Perubahan</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
