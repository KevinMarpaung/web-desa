import { Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Sample recent news data
const recentNews = [
  {
    id: 1,
    title: "Program Vaksinasi COVID-19",
    date: "10 Mei 2023",
    category: "Kesehatan",
    status: "published",
  },
  {
    id: 2,
    title: "Pembangunan Jalan Desa",
    date: "5 Mei 2023",
    category: "Infrastruktur",
    status: "published",
  },
  {
    id: 3,
    title: "Festival Budaya Tahunan",
    date: "1 Mei 2023",
    category: "Budaya",
    status: "published",
  },
  {
    id: 4,
    title: "Pelatihan Keterampilan untuk Pemuda Desa",
    date: "28 April 2023",
    category: "Pendidikan",
    status: "draft",
  },
];

export function RecentNews() {
  return (
    <div className="space-y-4">
      {recentNews.map((news) => (
        <div
          key={news.id}
          className="flex items-start justify-between border-b pb-4 last:border-0 last:pb-0"
        >
          <div>
            <div className="font-medium">{news.title}</div>
            <div className="flex items-center gap-4 mt-1">
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="mr-1 h-3 w-3" />
                {news.date}
              </div>
              <Badge variant="outline">{news.category}</Badge>
              <Badge
                variant={news.status === "published" ? "default" : "secondary"}
              >
                {news.status === "published" ? "Dipublikasikan" : "Draft"}
              </Badge>
            </div>
          </div>
          <Button variant="ghost" size="icon" asChild>
            <a
              href={`/news/${news.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-4 w-4" />
              <span className="sr-only">Lihat Berita</span>
            </a>
          </Button>
        </div>
      ))}
      <div className="text-center pt-2">
        <Button variant="outline" asChild>
          <a href="/admin/berita">Lihat Semua Berita</a>
        </Button>
      </div>
    </div>
  );
}
