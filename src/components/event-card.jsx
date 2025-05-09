import Link from "next/link";
import { Calendar, Clock, MapPin } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function EventCard({ title, date, time, location, slug }) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center gap-2 text-sm">
          <Calendar className="h-4 w-4 text-emerald-600" />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Clock className="h-4 w-4 text-emerald-600" />
          <span>{time}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <MapPin className="h-4 w-4 text-emerald-600" />
          <span>{location}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="link" className="px-0" asChild>
          <Link href={`/acara/${slug}`}>Detail Acara</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
