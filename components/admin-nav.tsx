"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { LayoutDashboard, AlertCircle, Users, Settings, LogOut, Terminal } from "lucide-react"
import { clearAuthSession } from "@/lib/auth"

export function AdminNav() {
  const pathname = usePathname()
  const router = useRouter()

  // Get admin email from localStorage if available
  const adminEmail =
    typeof window !== "undefined" ? localStorage.getItem("adminEmail") || "Staff Member" : "Staff Member"

  const handleLogout = () => {
    clearAuthSession()
    router.push("/admin")
  }

  const navItems = [
    {
      title: "Dashboard",
      href: "/admin/dashboard",
      icon: <LayoutDashboard className="mr-2 h-4 w-4" />,
    },
    {
      title: "Bug Reports",
      href: "/admin/reports",
      icon: <AlertCircle className="mr-2 h-4 w-4" />,
    },
    {
      title: "Staff Management",
      href: "/admin/staff",
      icon: <Users className="mr-2 h-4 w-4" />,
    },
    {
      title: "Server Commands",
      href: "/admin/server-commands",
      icon: <Terminal className="mr-2 h-4 w-4" />,
    },
    {
      title: "Settings",
      href: "/admin/settings",
      icon: <Settings className="mr-2 h-4 w-4" />,
    },
  ]

  return (
    <div className="border-r bg-muted/40">
      <div className="flex h-16 items-center border-b px-6">
        <Link href="/admin/dashboard" className="flex items-center gap-2 font-semibold">
          <span className="font-bold text-xl">MurkCraft</span>
          <span className="text-xs bg-primary text-primary-foreground px-1.5 py-0.5 rounded">Admin</span>
        </Link>
      </div>
      <ScrollArea className="h-[calc(100vh-64px)]">
        <div className="flex flex-col gap-2 p-4">
          <div className="mb-4 px-2 py-1.5">
            <p className="text-sm font-medium">Logged in as</p>
            <p className="text-sm text-muted-foreground">{adminEmail}</p>
          </div>
          <div className="py-2">
            <h2 className="mb-2 px-2 text-xs font-semibold tracking-tight">Administration</h2>
            <div className="space-y-1">
              {navItems.map((item) => (
                <Button
                  key={item.href}
                  variant={pathname === item.href ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  asChild
                >
                  <Link href={item.href}>
                    {item.icon}
                    {item.title}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
        <div className="p-4 pt-0">
          <Button variant="outline" className="w-full justify-start" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </ScrollArea>
    </div>
  )
}
