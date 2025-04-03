"use client"

import Link from "next/link"
import { useState } from "react"
import { BlocksIcon as GrassBlock, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const isHomePage = pathname === "/"

  const routes = [
    { name: "Home", path: "/" },
    { name: "Plugins", path: "/plugins" },
    { name: "Updates", path: "/updates" },
    { name: "Rules", path: "/rules" },
    { name: "Staff", path: "/staff" },
    { name: "Bug Report", path: "/bug-report" },
    { name: "Getting Started", path: "/getting-started" },
  ]

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full",
        isHomePage
          ? "absolute top-0 bg-transparent"
          : "border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
      )}
    >
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2 mr-6">
          <GrassBlock className={cn("h-6 w-6", isHomePage ? "text-white" : "text-green-500")} />
          <span className={cn("font-bold text-xl hidden md:inline-block", isHomePage ? "text-white" : "")}>Wiki</span>
          <span className={cn("font-bold text-xl md:hidden", isHomePage ? "text-white" : "")}>Wiki</span>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={cn(
                "transition-colors hover:text-foreground/80",
                isHomePage
                  ? "text-white/90 hover:text-white"
                  : pathname === route.path
                    ? "text-foreground font-medium"
                    : "text-foreground/60",
              )}
            >
              {route.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center ml-auto gap-2">
          <Link
            href="https://discord.gg/RPD9Cy4VA5"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block"
          >
            <Button
              variant={isHomePage ? "secondary" : "outline"}
              size="sm"
              className={isHomePage ? "bg-white/20 hover:bg-white/30 text-white border-white/50" : ""}
            >
              Join Discord
            </Button>
          </Link>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className={isHomePage ? "text-white hover:bg-white/20" : ""}>
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4 mt-8">
                {routes.map((route) => (
                  <Link
                    key={route.path}
                    href={route.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-foreground/60 transition-colors hover:text-foreground",
                      pathname === route.path ? "text-foreground font-medium" : "",
                    )}
                  >
                    {route.name}
                  </Link>
                ))}
                <Link
                  href="https://discord.gg/RPD9Cy4VA5"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                >
                  <Button className="w-full mt-4">Join Discord</Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

