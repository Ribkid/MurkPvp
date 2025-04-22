"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Search } from "lucide-react"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="pr-0">
        <div className="px-7">
          <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
            <span className="font-bold text-xl">MurkCraft</span>
          </Link>
        </div>
        <div className="flex flex-col gap-3 px-2 mt-8">
          <Button variant="outline" size="sm" className="justify-start w-full">
            <Search className="mr-2 h-4 w-4" />
            Search
          </Button>
        </div>
        <nav className="flex flex-col gap-4 px-2 mt-4">
          <Link
            href="/enchantments"
            className="px-3 py-2 text-base font-medium rounded-md hover:bg-accent"
            onClick={() => setOpen(false)}
          >
            Enchantments
          </Link>
          <Link
            href="/valhalla-mmo"
            className="px-3 py-2 text-base font-medium rounded-md hover:bg-accent"
            onClick={() => setOpen(false)}
          >
            ValhallaMMO
          </Link>
          <Link
            href="/lands"
            className="px-3 py-2 text-base font-medium rounded-md hover:bg-accent"
            onClick={() => setOpen(false)}
          >
            Lands
          </Link>
          <Link
            href="/servers"
            className="px-3 py-2 text-base font-medium rounded-md hover:bg-accent"
            onClick={() => setOpen(false)}
          >
            Servers
          </Link>
          <Link
            href="/plugins"
            className="px-3 py-2 text-base font-medium rounded-md hover:bg-accent"
            onClick={() => setOpen(false)}
          >
            Plugins
          </Link>
          <Link
            href="/changelog"
            className="px-3 py-2 text-base font-medium rounded-md hover:bg-accent"
            onClick={() => setOpen(false)}
          >
            Changelog
          </Link>
          <Link
            href="/report"
            className="px-3 py-2 text-base font-medium rounded-md hover:bg-accent"
            onClick={() => setOpen(false)}
          >
            Report Bug
          </Link>
          <Link
            href="/admin"
            className="px-3 py-2 text-base font-medium rounded-md hover:bg-accent"
            onClick={() => setOpen(false)}
          >
            Admin
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
