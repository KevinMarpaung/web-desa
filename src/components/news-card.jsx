import Link from "next/link";
import { Calendar } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function NewsCard({ title, date, excerpt, slug }) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription className="flex items-center gap-1">
          <Calendar className="h-3 w-3" />
          {date}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{excerpt}</p>
      </CardContent>
      <CardFooter>
        <Button variant="link" className="px-0" asChild>
          <Link href={`/berita/${slug}`}>Baca Selengkapnya</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
