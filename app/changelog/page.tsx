import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Changelog | MurkCraft Wiki",
  description: "Latest updates and changes to the MurkCraft server",
}

export default function ChangelogPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col gap-4 mb-8">
        <h1 className="text-4xl font-bold">MurkCraft Changelog</h1>
        <p className="text-xl text-muted-foreground">
          Stay up to date with the latest changes and updates to the MurkCraft server.
        </p>
      </div>

      <Tabs defaultValue="latest" className="w-full">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="latest">Latest Updates</TabsTrigger>
          <TabsTrigger value="major">Major Updates</TabsTrigger>
          <TabsTrigger value="archive">Archive</TabsTrigger>
        </TabsList>

        <TabsContent value="latest" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Server Update v3.5.0</CardTitle>
                <Badge>Latest</Badge>
              </div>
              <CardDescription>Released on October 15, 2023</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">New Features</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Added 5 new custom enchantments to the Enchantments plugin</li>
                  <li>Implemented new ValhallaMMO skill: Alchemy</li>
                  <li>Added 3 new boss fights in the Nether region</li>
                  <li>Introduced seasonal Halloween event with special rewards</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Balance Changes</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Reduced XP requirements for ValhallaMMO skills levels 50-75</li>
                  <li>Adjusted drop rates for rare items from MythicMobs</li>
                  <li>Rebalanced economy prices for certain high-tier items</li>
                  <li>Modified Lands war system to prevent exploitation</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Bug Fixes</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Fixed issue with Veinminer enchantment not working on certain blocks</li>
                  <li>Resolved duplication glitch with Silk Chest enchantment</li>
                  <li>Fixed crash when using Telekinesis on shulker boxes</li>
                  <li>Corrected permission issues with Lands outpost system</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Server Update v3.4.2</CardTitle>
              </div>
              <CardDescription>Released on September 28, 2023</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Bug Fixes</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Fixed server lag issues related to item entity processing</li>
                  <li>Resolved conflict between ValhallaMMO and ItemsAdder custom items</li>
                  <li>Fixed issue with Lands war system not properly ending wars</li>
                  <li>Corrected permission inheritance for certain player ranks</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Minor Changes</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Updated server to Minecraft 1.20.2</li>
                  <li>Optimized database queries for better performance</li>
                  <li>Adjusted spawn rates in custom dimensions</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="major" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Major Update: The Nether Expansion</CardTitle>
                <Badge variant="outline">v3.0.0</Badge>
              </div>
              <CardDescription>Released on July 15, 2023</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Major Features</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Complete overhaul of the Nether dimension with custom biomes</li>
                  <li>Added 5 new boss fights with unique mechanics</li>
                  <li>Introduced Nether-specific ValhallaMMO skill tree</li>
                  <li>Added 20+ new custom items and weapons</li>
                  <li>Implemented new progression system for end-game content</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">System Changes</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Updated server to Minecraft 1.20</li>
                  <li>Migrated to new database system for better performance</li>
                  <li>Implemented new anti-cheat measures</li>
                  <li>Overhauled permission system for more granular control</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Major Update: The Great Reset</CardTitle>
                <Badge variant="outline">v2.0.0</Badge>
              </div>
              <CardDescription>Released on January 10, 2023</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Major Features</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Complete server reset with new world generation</li>
                  <li>Implemented ValhallaMMO as the core progression system</li>
                  <li>Added custom enchantments system</li>
                  <li>Introduced Lands plugin for land claiming and protection</li>
                  <li>Added MythicMobs with custom mob spawning</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">System Changes</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Updated server to Minecraft 1.19.3</li>
                  <li>Implemented new economy system</li>
                  <li>Added custom crafting recipes</li>
                  <li>Introduced player shops system</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="archive" className="space-y-6">
          <div className="text-center py-8">
            <p className="text-muted-foreground">
              Archived changelogs from previous server versions are available upon request.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
