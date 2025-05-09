import { Users, Map, Home, Store } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function StatisticCard({ title, value, icon }) {
  const getIcon = () => {
    switch (icon) {
      case "Users":
        return <Users className="h-8 w-8 text-emerald-600" />;
      case "Map":
        return <Map className="h-8 w-8 text-emerald-600" />;
      case "Home":
        return <Home className="h-8 w-8 text-emerald-600" />;
      case "Store":
        return <Store className="h-8 w-8 text-emerald-600" />;
      default:
        return <Users className="h-8 w-8 text-emerald-600" />;
    }
  };

  return (
    <Card>
      <CardContent className="flex flex-col items-center justify-center p-6">
        {getIcon()}
        <h3 className="text-xl font-bold mt-4">{value}</h3>
        <p className="text-muted-foreground">{title}</p>
      </CardContent>
    </Card>
  );
}
