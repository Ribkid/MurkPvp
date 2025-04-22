import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Book, Map, Sword } from "lucide-react"

export const metadata: Metadata = {
  title: "Plugins Wiki | MurkCraft Wiki",
  description: "Complete list of plugins used on the MurkCraft server",
}

export default function PluginsPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col gap-4 mb-8">
        <h1 className="text-4xl font-bold">MurkCraft Plugins Wiki</h1>
        <p className="text-xl text-muted-foreground">
          A comprehensive guide to all plugins used on the MurkCraft server.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader>
            <Sword className="h-10 w-10 mb-2 text-primary" />
            <CardTitle>Custom Enchantments</CardTitle>
            <CardDescription>Enhanced enchantment system</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Discover all the unique enchantments available on the server that go beyond vanilla Minecraft.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
              <Link href="/enchantments">View Guide</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <Book className="h-10 w-10 mb-2 text-primary" />
            <CardTitle>ValhallaMMO</CardTitle>
            <CardDescription>RPG progression system</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Master the 14 different skills, leveling, custom items, and various mechanics to enhance your gameplay.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
              <Link href="/valhalla-mmo">View Guide</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <Map className="h-10 w-10 mb-2 text-primary" />
            <CardTitle>Lands</CardTitle>
            <CardDescription>Land claiming and protection</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Claim land, manage permissions, create nations, wage wars, and establish camps to protect your builds.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
              <Link href="/lands">View Guide</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="bg-muted p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Additional Plugins</h2>
        <p className="mb-4">
          MurkCraft uses many other plugins to enhance gameplay. Here are some additional plugins that may be of
          interest:
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <li className="flex items-center gap-2">
            <span className="font-medium">EssentialsX</span> - Core commands and features
          </li>
          <li className="flex items-center gap-2">
            <span className="font-medium">LuckPerms</span> - Permission management
          </li>
          <li className="flex items-center gap-2">
            <span className="font-medium">Dynmap</span> - Live server map
          </li>
          <li className="flex items-center gap-2">
            <span className="font-medium">GriefPrevention</span> - Additional claim protection
          </li>
          <li className="flex items-center gap-2">
            <span className="font-medium">Jobs</span> - Earn money through professions
          </li>
          <li className="flex items-center gap-2">
            <span className="font-medium">QuickShop</span> - Player shops system
          </li>
          <li className="flex items-center gap-2">
            <span className="font-medium">Votifier</span> - Vote rewards
          </li>
          <li className="flex items-center gap-2">
            <span className="font-medium">WorldEdit</span> - World editing tools
          </li>
          <li className="flex items-center gap-2">
            <span className="font-medium">WorldGuard</span> - Region protection
          </li>
        </ul>
      </div>
    </div>
  )
}
