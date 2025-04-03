import Link from "next/link"
import { BlocksIcon as GrassBlock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-16">
        <div className="flex items-center gap-2">
          <GrassBlock className="h-5 w-5 text-green-500" />
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} MurkCraft. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <Link href="/privacy" className="hover:underline">
            Privacy
          </Link>
          <Link href="/terms" className="hover:underline">
            Terms
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
}

