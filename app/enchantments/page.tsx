import type { Metadata } from "next"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export const metadata: Metadata = {
  title: "Enchantments | MurkCraft Wiki",
  description: "Complete custom enchantments reference for the MurkCraft server",
}

export default function EnchantmentsPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col gap-4 mb-8">
        <h1 className="text-4xl font-bold">Complete Custom Enchantments Reference</h1>
        <p className="text-xl text-muted-foreground">
          This guide combines all custom enchantments available on the server from both enchantment plugins.
        </p>
      </div>

      <Tabs defaultValue="armor" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-7 mb-8">
          <TabsTrigger value="armor">Armor</TabsTrigger>
          <TabsTrigger value="weapon">Weapon</TabsTrigger>
          <TabsTrigger value="tool">Tool</TabsTrigger>
          <TabsTrigger value="bow">Bow</TabsTrigger>
          <TabsTrigger value="fishing">Fishing</TabsTrigger>
          <TabsTrigger value="universal">Universal</TabsTrigger>
          <TabsTrigger value="curse">Curse</TabsTrigger>
        </TabsList>

        <TabsContent value="armor" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Armor Enchantments</CardTitle>
              <CardDescription>Enchantments that can be applied to armor pieces</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Applies To</TableHead>
                    <TableHead>Conflicts With</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Aquaman</TableCell>
                    <TableCell>Grants Water Breathing effect</TableCell>
                    <TableCell>Helmet</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Bunny Hop</TableCell>
                    <TableCell>Grants Jump Boost effect</TableCell>
                    <TableCell>Boots</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Cold Steel</TableCell>
                    <TableCell>Applies Mining Fatigue effect to the attacker</TableCell>
                    <TableCell>Chestplate</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Darkness Cloak</TableCell>
                    <TableCell>Applies Darkness effect to the attacker</TableCell>
                    <TableCell>Chestplate</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Elemental Protection</TableCell>
                    <TableCell>Reduces Poison, Magic, Wither, Lightning, Freeze damage</TableCell>
                    <TableCell>All Armor</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Flame Walker</TableCell>
                    <TableCell>Creates magma blocks when walking over lava, immune to magma block damage</TableCell>
                    <TableCell>Boots</TableCell>
                    <TableCell>Frost Walker</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Fire Shield</TableCell>
                    <TableCell>Like Thorns, but ignites the attacker</TableCell>
                    <TableCell>Chestplate</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Ice Shield</TableCell>
                    <TableCell>Freezes and slows down the attacker</TableCell>
                    <TableCell>Chestplate</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Hardened</TableCell>
                    <TableCell>Grants Damage Resistance effect on receiving damage</TableCell>
                    <TableCell>Chestplate</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Night Vision</TableCell>
                    <TableCell>Grants Night Vision effect</TableCell>
                    <TableCell>Helmet</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <div className="mt-4 text-center">
                <Link href="/enchantments/armor" className="text-primary hover:underline">
                  View all Armor Enchantments
                </Link>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="weapon" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Weapon Enchantments</CardTitle>
              <CardDescription>Enchantments that can be applied to weapons</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Applies To</TableHead>
                    <TableHead>Conflicts With</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Bane of Netherspawn</TableCell>
                    <TableCell>Additional damage to nether mobs</TableCell>
                    <TableCell>Swords, Axes</TableCell>
                    <TableCell>Sharpness, Bane of Arthropods, Smite, Village Defender</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Blindness</TableCell>
                    <TableCell>Applies Blindness effect on hit</TableCell>
                    <TableCell>Swords, Axes</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Confusion</TableCell>
                    <TableCell>Applies Nausea effect on hit</TableCell>
                    <TableCell>Swords, Axes</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Cure</TableCell>
                    <TableCell>Cures Zombified Piglins and Zombie Villagers</TableCell>
                    <TableCell>Swords, Axes</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Curse of Death</TableCell>
                    <TableCell>Chance of dying if you kill a player</TableCell>
                    <TableCell>Swords, Axes</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Cutter</TableCell>
                    <TableCell>Reduces durability and unequips enemy's armor</TableCell>
                    <TableCell>Swords, Axes</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Decapitator</TableCell>
                    <TableCell>Drops enemy's head on kill</TableCell>
                    <TableCell>Swords, Axes</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Double Strike</TableCell>
                    <TableCell>Chance to inflict double damage</TableCell>
                    <TableCell>Swords, Axes</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Exhaust</TableCell>
                    <TableCell>Applies Hunger effect on hit</TableCell>
                    <TableCell>Swords, Axes</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Exp Hunter</TableCell>
                    <TableCell>More exp from mobs on kill</TableCell>
                    <TableCell>Swords, Axes</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <div className="mt-4 text-center">
                <Link href="/enchantments/weapon" className="text-primary hover:underline">
                  View all Weapon Enchantments
                </Link>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tool" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Tool Enchantments</CardTitle>
              <CardDescription>Enchantments that can be applied to tools</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Applies To</TableHead>
                    <TableHead>Conflicts With</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Blast Mining</TableCell>
                    <TableCell>Creates an explosion that mines blocks in area</TableCell>
                    <TableCell>Pickaxes</TableCell>
                    <TableCell>Tunnel, Veinminer</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Divine Touch</TableCell>
                    <TableCell>Mine Spawners with Entity Type</TableCell>
                    <TableCell>Pickaxes</TableCell>
                    <TableCell>Smelter</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Haste</TableCell>
                    <TableCell>Receive Haste effect on block break</TableCell>
                    <TableCell>Tools</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Lucky Miner</TableCell>
                    <TableCell>More exp from mined blocks</TableCell>
                    <TableCell>Pickaxes</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Replanter</TableCell>
                    <TableCell>Automatically replant crops</TableCell>
                    <TableCell>Hoes</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Silk Chest</TableCell>
                    <TableCell>Save chest contents in dropped item</TableCell>
                    <TableCell>Axes</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Smelter</TableCell>
                    <TableCell>Smelt dropped items into other materials</TableCell>
                    <TableCell>Tools</TableCell>
                    <TableCell>Silk Touch, Divine Touch</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Telekinesis</TableCell>
                    <TableCell>Move block loot directly to inventory</TableCell>
                    <TableCell>Tools</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Tunnel</TableCell>
                    <TableCell>Mine in patterns (1x2, 2x2, 3x3)</TableCell>
                    <TableCell>Pickaxes, Shovels</TableCell>
                    <TableCell>Veinminer, Blast Mining</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Veinminer</TableCell>
                    <TableCell>Mine whole ore veins at once</TableCell>
                    <TableCell>Pickaxes</TableCell>
                    <TableCell>Tunnel, Blast Mining</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <div className="mt-4 text-center">
                <Link href="/enchantments/tool" className="text-primary hover:underline">
                  View all Tool Enchantments
                </Link>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="bow" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Bow Enchantments</CardTitle>
              <CardDescription>Enchantments that can be applied to bows and crossbows</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Applies To</TableHead>
                    <TableHead>Conflicts With</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Bomber</TableCell>
                    <TableCell>Launches TNT instead of Arrow</TableCell>
                    <TableCell>Bows, Crossbows</TableCell>
                    <TableCell>Power, Punch, Flame, Flare, Ender Bow, Ghast, Arrow Effect Enchants</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Ender Bow</TableCell>
                    <TableCell>Launches Ender Pearl instead of Arrow</TableCell>
                    <TableCell>Bows, Crossbows</TableCell>
                    <TableCell>Ghast, Bomber, Flare</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Ghast</TableCell>
                    <TableCell>Launches Fireball instead of Arrow</TableCell>
                    <TableCell>Bows, Crossbows</TableCell>
                    <TableCell>Ender Bow, Bomber, Flare</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Flare</TableCell>
                    <TableCell>Creates torch where arrow lands</TableCell>
                    <TableCell>Bows, Crossbows</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Sniper</TableCell>
                    <TableCell>Increases projectile speed</TableCell>
                    <TableCell>Bows, Crossbows</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Hover</TableCell>
                    <TableCell>Arrow applies Levitation effect on hit</TableCell>
                    <TableCell>Bows, Crossbows</TableCell>
                    <TableCell>Ender Bow, Ghast, Bomber</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Lingering</TableCell>
                    <TableCell>Tipped arrows generate lingering effects</TableCell>
                    <TableCell>Bows, Crossbows</TableCell>
                    <TableCell>Ender Bow, Ghast, Bomber</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <div className="mt-4 text-center">
                <Link href="/enchantments/bow" className="text-primary hover:underline">
                  View all Bow Enchantments
                </Link>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fishing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Fishing Enchantments</CardTitle>
              <CardDescription>Enchantments that can be applied to fishing rods</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Applies To</TableHead>
                    <TableHead>Conflicts With</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Auto Reel</TableCell>
                    <TableCell>Automatically reels in hook on bite</TableCell>
                    <TableCell>Fishing Rod</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Double Catch</TableCell>
                    <TableCell>Doubles amount of caught items</TableCell>
                    <TableCell>Fishing Rod</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Seasoned Angler</TableCell>
                    <TableCell>Increases XP from fishing</TableCell>
                    <TableCell>Fishing Rod</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Survivalist</TableCell>
                    <TableCell>Automatically cooks fish</TableCell>
                    <TableCell>Fishing Rod</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>River Master</TableCell>
                    <TableCell>Increases casting distance</TableCell>
                    <TableCell>Fishing Rod</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <div className="mt-4 text-center">
                <Link href="/enchantments/fishing" className="text-primary hover:underline">
                  View all Fishing Enchantments
                </Link>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="universal" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Universal Enchantments</CardTitle>
              <CardDescription>Enchantments that can be applied to any item</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Applies To</TableHead>
                    <TableHead>Conflicts With</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Restore</TableCell>
                    <TableCell>When item breaks, loses enchant but regains durability</TableCell>
                    <TableCell>All Items</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Soulbound</TableCell>
                    <TableCell>Prevents item from being dropped upon death</TableCell>
                    <TableCell>All Items</TableCell>
                    <TableCell>Curse of Vanishing</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="curse" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Curse Enchantments</CardTitle>
              <CardDescription>Negative enchantments that hinder the player</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Applies To</TableHead>
                    <TableHead>Conflicts With</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Curse of Breaking</TableCell>
                    <TableCell>Takes extra item durability</TableCell>
                    <TableCell>All Items</TableCell>
                    <TableCell>Unbreaking</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Curse of Mediocrity</TableCell>
                    <TableCell>Chance to disenchant dropped items</TableCell>
                    <TableCell>Tools, Weapons</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Curse of Misfortune</TableCell>
                    <TableCell>Chance to have no drops/loot</TableCell>
                    <TableCell>Tools, Weapons</TableCell>
                    <TableCell>Fortune, Looting</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Curse of Fragility</TableCell>
                    <TableCell>Prevents item from being grindstoned or anviled</TableCell>
                    <TableCell>All Items</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Curse of Brittleness</TableCell>
                    <TableCell>Items break faster</TableCell>
                    <TableCell>All Items</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <div className="mt-4 text-center">
                <Link href="/enchantments/curse" className="text-primary hover:underline">
                  View all Curse Enchantments
                </Link>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
