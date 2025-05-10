import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardStats } from "@/components/admin/dashboard-stats";
import { RecentNews } from "@/components/admin/recent-news";
import { RecentRequests } from "@/components/admin/recent-requests";
import { ActivityLog } from "@/components/admin/activity-log";

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard Admin</h1>

      <DashboardStats />

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Berita Terbaru</CardTitle>
          </CardHeader>
          <CardContent>
            <RecentNews />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Pengajuan Layanan Terbaru</CardTitle>
          </CardHeader>
          <CardContent>
            <RecentRequests />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Log Aktivitas</CardTitle>
        </CardHeader>
        <CardContent>
          <ActivityLog />
        </CardContent>
      </Card>
    </div>
  );
}
