"use client";

import { usePathname } from "next/navigation";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const isAdminPage = pathname.startsWith("/admin");

  return (
    <div className="relative flex min-h-screen flex-col">
      {!isAdminPage && <SiteHeader />}
      <main className="flex-1">{children}</main>
      {!isAdminPage && <SiteFooter />}
    </div>
  );
}
