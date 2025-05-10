"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  BarChart,
  FileText,
  Home,
  LayoutDashboard,
  LogOut,
  MessageSquare,
  Settings,
  Users,
  ChevronLeft,
  ChevronRight,
  ImageIcon,
  FileEdit,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function AdminSidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={cn(
        "bg-gray-900 text-white flex flex-col h-full transition-all duration-300",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        {!isCollapsed && (
          <Link href="/admin" className="font-bold text-xl">
            Admin Desa
          </Link>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="text-gray-400 hover:text-white hover:bg-gray-800"
        >
          {isCollapsed ? (
            <ChevronRight className="h-5 w-5" />
          ) : (
            <ChevronLeft className="h-5 w-5" />
          )}
        </Button>
      </div>

      <ScrollArea className="flex-1">
        <nav className="p-2">
          <ul className="space-y-1">
            <NavItem
              href="/admin"
              icon={<LayoutDashboard className="h-5 w-5" />}
              label="Dashboard"
              isActive={pathname === "/admin"}
              isCollapsed={isCollapsed}
            />
            <NavItem
              href="/admin/berita"
              icon={<FileText className="h-5 w-5" />}
              label="Berita"
              isActive={pathname === "/admin/berita"}
              isCollapsed={isCollapsed}
            />
            <NavItem
              href="/admin/layanan"
              icon={<MessageSquare className="h-5 w-5" />}
              label="Layanan"
              isActive={pathname === "/admin/layanan"}
              isCollapsed={isCollapsed}
            />
            <NavItem
              href="/admin/konten"
              icon={<FileEdit className="h-5 w-5" />}
              label="Konten Website"
              isActive={pathname === "/admin/konten"}
              isCollapsed={isCollapsed}
            />
            <NavItem
              href="/admin/galeri"
              icon={<ImageIcon className="h-5 w-5" />}
              label="Galeri"
              isActive={pathname === "/admin/galeri"}
              isCollapsed={isCollapsed}
            />
            <NavItem
              href="/admin/statistik"
              icon={<BarChart className="h-5 w-5" />}
              label="Statistik"
              isActive={pathname === "/admin/statistik"}
              isCollapsed={isCollapsed}
            />
            <NavItem
              href="/admin/pengguna"
              icon={<Users className="h-5 w-5" />}
              label="Pengguna"
              isActive={pathname === "/admin/pengguna"}
              isCollapsed={isCollapsed}
            />
            <NavItem
              href="/admin/pengaturan"
              icon={<Settings className="h-5 w-5" />}
              label="Pengaturan"
              isActive={pathname === "/admin/pengaturan"}
              isCollapsed={isCollapsed}
            />
          </ul>
        </nav>
      </ScrollArea>

      <div className="p-2 border-t border-gray-800">
        <NavItem
          href="/"
          icon={<Home className="h-5 w-5" />}
          label="Website Desa"
          isActive={false}
          isCollapsed={isCollapsed}
        />
        <NavItem
          href="/admin/login"
          icon={<LogOut className="h-5 w-5" />}
          label="Keluar"
          isActive={false}
          isCollapsed={isCollapsed}
        />
      </div>
    </div>
  );
}

function NavItem({ href, icon, label, isActive, isCollapsed }) {
  return (
    <li>
      <Link
        href={href}
        className={cn(
          "flex items-center gap-3 rounded-md px-3 py-2 transition-colors",
          isActive
            ? "bg-gray-800 text-white"
            : "text-gray-400 hover:text-white hover:bg-gray-800"
        )}
      >
        {icon}
        {!isCollapsed && <span>{label}</span>}
      </Link>
    </li>
  );
}
