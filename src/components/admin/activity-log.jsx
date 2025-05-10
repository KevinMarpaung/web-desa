import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Sample activity log data
const activityLog = [
  {
    id: 1,
    user: {
      name: "Admin",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "AD",
    },
    action: "menambahkan berita baru",
    target: "Program Vaksinasi COVID-19",
    time: "15 Mei 2023, 10:30",
  },
  {
    id: 2,
    user: {
      name: "Admin",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "AD",
    },
    action: "memperbarui status pengajuan layanan",
    target: "Siti Aminah - Pendaftaran BLT",
    time: "14 Mei 2023, 14:45",
  },
  {
    id: 3,
    user: {
      name: "Admin",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "AD",
    },
    action: "menghapus komentar",
    target: "pada berita Festival Budaya Tahunan",
    time: "13 Mei 2023, 09:15",
  },
  {
    id: 4,
    user: {
      name: "Admin",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "AD",
    },
    action: "memperbarui konten",
    target: "Profil Desa",
    time: "12 Mei 2023, 16:20",
  },
  {
    id: 5,
    user: {
      name: "Admin",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "AD",
    },
    action: "menambahkan pengguna baru",
    target: "Operator Desa",
    time: "11 Mei 2023, 11:05",
  },
];

export function ActivityLog() {
  return (
    <div className="space-y-4">
      {activityLog.map((activity) => (
        <div
          key={activity.id}
          className="flex items-start gap-4 border-b pb-4 last:border-0 last:pb-0"
        >
          <Avatar className="h-8 w-8">
            <AvatarImage
              src={activity.user.avatar || "/placeholder.svg"}
              alt={activity.user.name}
            />
            <AvatarFallback>{activity.user.initials}</AvatarFallback>
          </Avatar>
          <div>
            <div>
              <span className="font-medium">{activity.user.name}</span>{" "}
              <span className="text-muted-foreground">{activity.action}</span>{" "}
              <span className="font-medium">{activity.target}</span>
            </div>
            <div className="text-sm text-muted-foreground">{activity.time}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
