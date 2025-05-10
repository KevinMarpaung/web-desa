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
  Edit,
  MoreHorizontal,
  Plus,
  Search,
  Trash2,
} from "lucide-react";
import { NewsForm } from "@/components/admin/news-form";

// Sample news data
const initialNewsData = [
  {
    id: 1,
    title: "Program Vaksinasi COVID-19",
    date: "10 Mei 2023",
    excerpt:
      "Program vaksinasi COVID-19 akan dilaksanakan di balai desa mulai tanggal 15 Mei 2023.",
    category: "Kesehatan",
    status: "published",
  },
  {
    id: 2,
    title: "Pembangunan Jalan Desa",
    date: "5 Mei 2023",
    excerpt:
      "Pembangunan jalan desa akan dimulai minggu depan dan diperkirakan selesai dalam 3 bulan.",
    category: "Infrastruktur",
    status: "published",
  },
  {
    id: 3,
    title: "Festival Budaya Tahunan",
    date: "1 Mei 2023",
    excerpt:
      "Festival budaya tahunan akan diselenggarakan pada tanggal 20 Juni 2023 di lapangan desa.",
    category: "Budaya",
    status: "published",
  },
  {
    id: 4,
    title: "Pelatihan Keterampilan untuk Pemuda Desa",
    date: "28 April 2023",
    excerpt:
      "Pelatihan keterampilan untuk pemuda desa akan diadakan selama satu minggu mulai tanggal 10 Mei 2023.",
    category: "Pendidikan",
    status: "draft",
  },
  {
    id: 5,
    title: "Rapat Koordinasi Pembangunan Desa",
    date: "25 April 2023",
    excerpt:
      "Rapat koordinasi pembangunan desa akan dilaksanakan pada tanggal 5 Mei 2023 di balai desa.",
    category: "Pemerintahan",
    status: "published",
  },
  {
    id: 6,
    title: "Program Bantuan Bibit untuk Petani",
    date: "20 April 2023",
    excerpt: "Program bantuan bibit untuk petani akan diluncurkan bulan depan.",
    category: "Pertanian",
    status: "draft",
  },
];

export default function NewsManagement() {
  const [newsData, setNewsData] = useState(initialNewsData);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentNews, setCurrentNews] = useState(null);

  // Filter news based on search term and filters
  const filteredNews = newsData.filter((news) => {
    const matchesSearch =
      news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      news.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      categoryFilter === "" || news.category === categoryFilter;
    const matchesStatus = statusFilter === "" || news.status === statusFilter;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  // Handle adding new news
  const handleAddNews = (newsItem) => {
    const newId = Math.max(...newsData.map((item) => item.id)) + 1;
    const newNews = {
      id: newId,
      ...newsItem,
    };
    setNewsData([...newsData, newNews]);
    setIsAddDialogOpen(false);
  };

  // Handle editing news
  const handleEditNews = (updatedNews) => {
    setNewsData(
      newsData.map((news) => (news.id === updatedNews.id ? updatedNews : news))
    );
    setIsEditDialogOpen(false);
  };

  // Handle deleting news
  const handleDeleteNews = () => {
    setNewsData(newsData.filter((news) => news.id !== currentNews.id));
    setIsDeleteDialogOpen(false);
  };

  // Open edit dialog
  const openEditDialog = (news) => {
    setCurrentNews(news);
    setIsEditDialogOpen(true);
  };

  // Open delete dialog
  const openDeleteDialog = (news) => {
    setCurrentNews(news);
    setIsDeleteDialogOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Manajemen Berita</h1>
        <Button onClick={() => setIsAddDialogOpen(true)}>
          <Plus className="mr-2 h-4 w-4" /> Tambah Berita
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Cari berita..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Kategori" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Semua Kategori</SelectItem>
            <SelectItem value="Kesehatan">Kesehatan</SelectItem>
            <SelectItem value="Infrastruktur">Infrastruktur</SelectItem>
            <SelectItem value="Budaya">Budaya</SelectItem>
            <SelectItem value="Pendidikan">Pendidikan</SelectItem>
            <SelectItem value="Pemerintahan">Pemerintahan</SelectItem>
            <SelectItem value="Pertanian">Pertanian</SelectItem>
          </SelectContent>
        </Select>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Semua Status</SelectItem>
            <SelectItem value="published">Dipublikasikan</SelectItem>
            <SelectItem value="draft">Draft</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* News Table */}
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Judul</TableHead>
              <TableHead>Kategori</TableHead>
              <TableHead>Tanggal</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredNews.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="text-center py-8 text-muted-foreground"
                >
                  Tidak ada berita yang ditemukan
                </TableCell>
              </TableRow>
            ) : (
              filteredNews.map((news) => (
                <TableRow key={news.id}>
                  <TableCell className="font-medium">
                    <div>
                      <div>{news.title}</div>
                      <div className="text-sm text-muted-foreground truncate max-w-md">
                        {news.excerpt}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{news.category}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                      {news.date}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        news.status === "published" ? "default" : "secondary"
                      }
                    >
                      {news.status === "published" ? "Dipublikasikan" : "Draft"}
                    </Badge>
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
                        <DropdownMenuItem onClick={() => openEditDialog(news)}>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="text-red-600"
                          onClick={() => openDeleteDialog(news)}
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

      {/* Add News Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Tambah Berita Baru</DialogTitle>
            <DialogDescription>
              Isi formulir berikut untuk menambahkan berita baru ke website
              desa.
            </DialogDescription>
          </DialogHeader>
          <NewsForm onSubmit={handleAddNews} />
        </DialogContent>
      </Dialog>

      {/* Edit News Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Edit Berita</DialogTitle>
            <DialogDescription>
              Ubah informasi berita yang sudah ada.
            </DialogDescription>
          </DialogHeader>
          {currentNews && (
            <NewsForm
              initialData={currentNews}
              onSubmit={handleEditNews}
              isEditing={true}
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
              Apakah Anda yakin ingin menghapus berita "{currentNews?.title}"?
              Tindakan ini tidak dapat dibatalkan.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Batal</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteNews}
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
