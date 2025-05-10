"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Edit,
  ExternalLink,
  ImageIcon,
  FileText,
  Users,
  Map,
  Phone,
  Clock,
} from "lucide-react";
import { ContentEditForm } from "@/components/admin/content-edit-form";

// Sample content sections data
const initialContentData = {
  homepage: [
    {
      id: "hero",
      title: "Hero Section",
      description:
        "Bagian utama pada halaman beranda yang menampilkan judul dan deskripsi singkat desa.",
      lastUpdated: "10 Mei 2023",
      content: {
        title: "Selamat Datang di Desa Sejahtera",
        description:
          "Desa yang indah dengan kekayaan alam dan budaya. Mari kita bangun desa bersama untuk masa depan yang lebih baik.",
        image: "/placeholder.svg?height=800&width=1600",
      },
    },
    {
      id: "welcome",
      title: "Sambutan",
      description:
        "Bagian yang berisi sambutan dan penjelasan singkat tentang desa.",
      lastUpdated: "8 Mei 2023",
      content: {
        title: "Selamat Datang di Desa Kami",
        description:
          "Desa kami adalah komunitas yang indah dengan pemandangan alam yang menakjubkan, budaya yang kaya, dan penduduk yang ramah. Kami bangga dengan warisan kami dan terus bekerja untuk membangun masa depan yang lebih baik.",
        image: "/placeholder.svg?height=400&width=600",
      },
    },
    {
      id: "services",
      title: "Layanan Desa",
      description:
        "Bagian yang menampilkan layanan-layanan yang disediakan oleh desa.",
      lastUpdated: "5 Mei 2023",
      content: {
        title: "Layanan Desa",
        services: [
          {
            title: "Administrasi Kependudukan",
            description:
              "Layanan pembuatan KTP, KK, dan surat keterangan lainnya.",
          },
          {
            title: "Bantuan Sosial",
            description:
              "Informasi dan pendaftaran program bantuan sosial dari pemerintah.",
          },
          {
            title: "Pengaduan Masyarakat",
            description: "Layanan pengaduan masyarakat untuk masalah di desa.",
          },
          {
            title: "Perizinan Usaha",
            description:
              "Layanan perizinan untuk usaha kecil dan menengah di desa.",
          },
          {
            title: "Pertanian & Peternakan",
            description:
              "Konsultasi dan bantuan untuk petani dan peternak desa.",
          },
          {
            title: "Pendidikan & Kesehatan",
            description:
              "Informasi tentang fasilitas pendidikan dan kesehatan di desa.",
          },
        ],
      },
    },
  ],
  about: [
    {
      id: "profile",
      title: "Profil Desa",
      description:
        "Informasi umum tentang desa termasuk lokasi, luas wilayah, dan jumlah penduduk.",
      lastUpdated: "7 Mei 2023",
      content: {
        title: "Profil Desa",
        description:
          "Desa Sejahtera adalah sebuah desa yang terletak di Kecamatan Makmur, Kabupaten Bahagia. Desa ini memiliki luas wilayah sekitar 500 hektar dengan jumlah penduduk mencapai 5.000 jiwa.",
        details: [
          "Mayoritas penduduk Desa Sejahtera bermata pencaharian sebagai petani dan peternak. Desa ini dikenal dengan hasil pertanian yang melimpah, terutama padi, jagung, dan sayuran.",
          "Desa Sejahtera juga memiliki potensi wisata yang menarik, seperti air terjun, pemandangan alam yang indah, dan kerajinan tangan khas desa yang unik.",
        ],
        image: "/placeholder.svg?height=400&width=600",
      },
    },
    {
      id: "history",
      title: "Sejarah Desa",
      description:
        "Sejarah berdirinya desa dan perkembangannya hingga saat ini.",
      lastUpdated: "6 Mei 2023",
      content: {
        title: "Sejarah Desa",
        paragraphs: [
          "Desa Sejahtera didirikan pada tahun 1945 oleh sekelompok pejuang kemerdekaan yang memutuskan untuk menetap di daerah ini setelah Indonesia merdeka. Mereka memilih lokasi ini karena kesuburan tanahnya dan sumber air yang melimpah.",
          "Pada awalnya, desa ini hanya dihuni oleh beberapa keluarga saja. Namun, seiring berjalannya waktu, semakin banyak orang yang tertarik untuk tinggal di desa ini karena potensi alamnya yang menjanjikan.",
          'Nama "Sejahtera" dipilih sebagai harapan agar desa ini selalu dalam keadaan makmur dan penduduknya hidup sejahtera. Sejarah mencatat bahwa desa ini pernah mengalami masa-masa sulit, terutama saat krisis ekonomi tahun 1998, namun berhasil bangkit kembali berkat kegigihan dan kerja sama seluruh warga desa.',
          "Saat ini, Desa Sejahtera terus berkembang dan berusaha menjadi desa percontohan dalam hal pembangunan berkelanjutan dan pelestarian budaya lokal.",
        ],
      },
    },
    {
      id: "vision",
      title: "Visi & Misi",
      description:
        "Visi dan misi desa dalam pembangunan dan pelayanan masyarakat.",
      lastUpdated: "5 Mei 2023",
      content: {
        title: "Visi & Misi",
        vision:
          "Mewujudkan Desa Sejahtera yang maju, mandiri, dan sejahtera dengan berlandaskan pada nilai-nilai budaya dan kearifan lokal.",
        missions: [
          "Meningkatkan kualitas pelayanan publik yang profesional dan transparan.",
          "Membangun infrastruktur desa yang memadai dan berkelanjutan.",
          "Mengembangkan potensi ekonomi lokal untuk meningkatkan kesejahteraan masyarakat.",
          "Meningkatkan kualitas pendidikan dan kesehatan masyarakat.",
          "Melestarikan dan mengembangkan nilai-nilai budaya dan kearifan lokal.",
          "Menciptakan lingkungan yang bersih, sehat, dan lestari.",
          "Meningkatkan partisipasi masyarakat dalam pembangunan desa.",
        ],
      },
    },
  ],
  contact: [
    {
      id: "address",
      title: "Alamat",
      description: "Alamat lengkap kantor desa.",
      lastUpdated: "4 Mei 2023",
      content: {
        title: "Alamat",
        address:
          "Jl. Desa Sejahtera No. 123, Kecamatan Makmur, Kabupaten Bahagia, 12345",
      },
    },
    {
      id: "contact",
      title: "Kontak",
      description: "Informasi kontak desa termasuk nomor telepon dan email.",
      lastUpdated: "4 Mei 2023",
      content: {
        title: "Kontak",
        phone: "(021) 1234-5678",
        emergency: "(021) 8765-4321",
        fax: "(021) 1234-8765",
        email: {
          info: "info@desasejahtera.desa.id",
          service: "layanan@desasejahtera.desa.id",
          complaint: "pengaduan@desasejahtera.desa.id",
        },
      },
    },
    {
      id: "hours",
      title: "Jam Operasional",
      description: "Jam operasional kantor desa.",
      lastUpdated: "4 Mei 2023",
      content: {
        title: "Jam Operasional",
        hours: [
          { day: "Senin - Jumat", time: "08.00 - 16.00" },
          { day: "Sabtu", time: "08.00 - 12.00" },
          { day: "Minggu & Hari Libur", time: "Tutup" },
        ],
      },
    },
  ],
};

// Icon mapping for content sections
const iconMap = {
  hero: <ImageIcon className="h-8 w-8" />,
  welcome: <Users className="h-8 w-8" />,
  services: <FileText className="h-8 w-8" />,
  profile: <Users className="h-8 w-8" />,
  history: <FileText className="h-8 w-8" />,
  vision: <FileText className="h-8 w-8" />,
  address: <Map className="h-8 w-8" />,
  contact: <Phone className="h-8 w-8" />,
  hours: <Clock className="h-8 w-8" />,
};

export default function ContentManagement() {
  const [contentData, setContentData] = useState(initialContentData);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [currentContent, setCurrentContent] = useState(null);
  const [currentSection, setCurrentSection] = useState(null);

  // Handle editing content
  const handleEditContent = (updatedContent) => {
    setContentData({
      ...contentData,
      [currentSection]: contentData[currentSection].map((content) =>
        content.id === updatedContent.id
          ? {
              ...updatedContent,
              lastUpdated: new Date().toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
              }),
            }
          : content
      ),
    });
    setIsEditDialogOpen(false);
  };

  // Open edit dialog
  const openEditDialog = (content, section) => {
    setCurrentContent(content);
    setCurrentSection(section);
    setIsEditDialogOpen(true);
  };

  // Preview content on the website
  const previewContent = (contentId, section) => {
    let url = "/";

    switch (section) {
      case "homepage":
        url = "/";
        break;
      case "about":
        url = "/about";
        break;
      case "contact":
        url = "/contact";
        break;
      default:
        url = "/";
    }

    // In a real application, this would open the URL in a new tab
    window.open(url, "_blank");
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Manajemen Konten Website</h1>

      <Tabs defaultValue="homepage" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="homepage">Beranda</TabsTrigger>
          <TabsTrigger value="about">Tentang Kami</TabsTrigger>
          <TabsTrigger value="contact">Kontak</TabsTrigger>
        </TabsList>

        {Object.keys(contentData).map((section) => (
          <TabsContent key={section} value={section} className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {contentData[section].map((content) => (
                <Card key={content.id}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center mb-2">
                      {iconMap[content.id] || <FileText className="h-8 w-8" />}
                    </div>
                    <CardTitle>{content.title}</CardTitle>
                    <CardDescription>{content.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Terakhir diperbarui: {content.lastUpdated}
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button
                      variant="outline"
                      onClick={() => previewContent(content.id, section)}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Pratinjau
                    </Button>
                    <Button onClick={() => openEditDialog(content, section)}>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Edit Content Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Edit Konten: {currentContent?.title}</DialogTitle>
            <DialogDescription>
              Ubah konten untuk bagian ini. Perubahan akan langsung terlihat di
              website setelah disimpan.
            </DialogDescription>
          </DialogHeader>
          {currentContent && (
            <ContentEditForm
              content={currentContent}
              onSubmit={handleEditContent}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
