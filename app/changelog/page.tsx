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
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="latest">Latest Updates</TabsTrigger>
          <TabsTrigger value="major">Major Updates</TabsTrigger>
          <TabsTrigger value="coming-soon">Coming Soon</TabsTrigger>
          <TabsTrigger value="archive">Archive</TabsTrigger>
        </TabsList>

        <TabsContent value="latest" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Network Update - May 2025</CardTitle>
                <Badge>Latest</Badge>
              </div>
              <CardDescription>Released on May 1, 2025</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Skyblock Updates</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    Fixed salvage duplication exploit (temporarily removed salvage feature - more updates coming soon)
                  </li>
                  <li>Fixed two Duke boss bugs</li>
                  <li>Fixed emissions issues on Skyloft</li>
                  <li>Re-added minions to Skyblock</li>
                  <li>Re-added cell ones to Skyblock (will be fully configured in the coming days)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Cross-Server Features</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Added cross-server speech functionality</li>
                  <li>Implemented cross-server messaging system</li>
                  <li>Added cross-server teleportation</li>
                  <li>Introduced cross-server portals for seamless travel</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Network Expansion</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Added a new partner server to the MurkCraft Network</li>
                  <li>All MurkCraft players are welcome to join this new server</li>
                  <li>This expansion aims to bring more players to the MurkCraft Network</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Server Update - April 2025</CardTitle>
              </div>
              <CardDescription>Released on April 22, 2025</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Survival Server Updates</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Added four new elite mob dungeons</li>
                  <li>Added three new types of better structures that can form in the world</li>
                  <li>Added warps to the Primus world</li>
                  <li>Added new achievements</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Skyblock Server Updates</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Reduced prices across the server</li>
                  <li>Fixed minions functionality and performance issues</li>
                  <li>Fixed crates system and rewards</li>
                  <li>Continuing to work to make the game more affordable</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Adventure Server Status</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Still running at version 1.21</li>
                  <li>Update to version 1.21.4 expected in the next 1-2 weeks</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Server Update v3.5.0</CardTitle>
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
        </TabsContent>

        <TabsContent value="major" className="space-y-6">
          <div className="text-center py-8">
            <p className="text-muted-foreground">
              No major updates are currently listed. Check back soon for future major updates.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="coming-soon" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Coming Soon: Skyblock Expansion</CardTitle>
                <Badge variant="outline">In Development</Badge>
              </div>
              <CardDescription>Expected release: May 2025</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">New Skyblock Features</h3>
                <p className="mb-4">The Skyblock server will be receiving major updates in the coming days to weeks:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>New dungeons with unique challenges and rewards</li>
                  <li>New boss encounters with special mechanics</li>
                  <li>
                    New arena system with tiered difficulty levels:
                    <ul className="list-disc pl-6 mt-1">
                      <li>Low-level mythic mobs for beginners</li>
                      <li>Medium-level mythic mobs for experienced players</li>
                      <li>High-level mythic mobs for endgame challenges</li>
                    </ul>
                  </li>
                  <li>
                    New currency: Mythic Coins
                    <ul className="list-disc pl-6 mt-1">
                      <li>Earned by defeating mythic mobs in the arena</li>
                      <li>Used to purchase exclusive items from the Mythic Coin Shop</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Coming Soon: Cross-Server Economy</CardTitle>
                <Badge variant="outline">Planned</Badge>
              </div>
              <CardDescription>Expected release: May 2025</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Cross-Server Currency</h3>
                <p className="mb-4">
                  We're excited to announce our upcoming cross-server economy system that will allow players to earn and
                  spend Murk Coins across different server modes.
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Earn Murk Coins on the Survival server</li>
                  <li>Spend your earned coins on the Skyblock server</li>
                  <li>Unified economy across all MurkCraft servers</li>
                  <li>Transfer items and resources between game modes</li>
                  <li>Special cross-server marketplace</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Coming Soon: Adventure Server Update</CardTitle>
                <Badge variant="outline">In Progress</Badge>
              </div>
              <CardDescription>Expected release: May 2025</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Version 1.21.4 Update</h3>
                <p className="mb-4">
                  The Adventure server will be updated to version 1.21.4 in the next 1-2 weeks, bringing it in line with
                  our Survival and Skyblock servers.
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Full compatibility with the latest Minecraft features</li>
                  <li>New custom quests and adventures</li>
                  <li>Improved performance and stability</li>
                  <li>Integration with the cross-server economy system</li>
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
