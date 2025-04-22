import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-xl md:text-2xl">MurkCraft</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/enchantments" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Enchantments
            </Link>
            <Link href="/valhalla-mmo" className="transition-colors hover:text-foreground/80 text-foreground/60">
              ValhallaMMO
            </Link>
            <Link href="/lands" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Lands
            </Link>
            <Link href="/servers" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Servers
            </Link>
            <Link href="/plugins" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Plugins
            </Link>
            <Link href="/changelog" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Changelog
            </Link>
            <Link href="/admin" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Admin
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <div className="hidden md:flex">
            <Button variant="outline" size="icon">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          </div>
          <ModeToggle />
          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}
