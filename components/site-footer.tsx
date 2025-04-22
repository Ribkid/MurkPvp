import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
        <p className="text-sm text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} MurkCraft. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link
            href="https://discord.gg/murkcraft"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Discord
          </Link>
          <Link
            href="https://murkcraft.com"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Website
          </Link>
        </div>
      </div>
    </footer>
  )
}
