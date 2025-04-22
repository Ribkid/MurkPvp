import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Shield, Sword } from "lucide-react"

export const metadata: Metadata = {
  title: "Enchantment Categories | MurkCraft Wiki",
  description: "Detailed breakdown of all enchantment categories on the MurkCraft server",
}

export default function EnchantmentCategoriesPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col gap-4 mb-8">
        <h1 className="text-4xl font-bold">Enchantment Categories</h1>
        <p className="text-xl text-muted-foreground">
          A detailed breakdown of all enchantment categories available on the MurkCraft server.
        </p>

        <div className="flex justify-start">
          <Link href="/enchantments" className="text-primary hover:underline">
            ← Back to Enchantments Overview
          </Link>
        </div>
      </div>

      <Tabs defaultValue="armor" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
          <TabsTrigger value="armor">Armor</TabsTrigger>
          <TabsTrigger value="weapon">Weapon</TabsTrigger>
          <TabsTrigger value="tool">Tool</TabsTrigger>
          <TabsTrigger value="bow">Bow</TabsTrigger>
          <TabsTrigger value="fishing">Fishing</TabsTrigger>
        </TabsList>

        <TabsContent value="armor" className="space-y-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-primary/10 p-4 rounded-full">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Armor Enchantments</h2>
              <p className="text-muted-foreground">Enchantments that can be applied to armor pieces</p>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Helmet Enchantments</CardTitle>
              <CardDescription>Enchantments specific to helmets</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Max Level</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Conflicts With</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Aquaman</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>Grants Water Breathing effect</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Night Vision</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>Grants Night Vision effect</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Oxygen</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell>Extends underwater breathing time</TableCell>
                    <TableCell>Aquaman</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Glowing</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>Provides light source when worn</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Sonar</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell>Detects nearby entities through walls</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Chestplate Enchantments</CardTitle>
              <CardDescription>Enchantments specific to chestplates</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Max Level</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Conflicts With</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Cold Steel</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell>Applies Mining Fatigue effect to the attacker</TableCell>
                    <TableCell>Fire Shield, Ice Shield</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Darkness Cloak</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell>Applies Darkness effect to the attacker</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Fire Shield</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell>Like Thorns, but ignites the attacker</TableCell>
                    <TableCell>Cold Steel, Ice Shield</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Ice Shield</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell>Freezes and slows down the attacker</TableCell>
                    <TableCell>Cold Steel, Fire Shield</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Hardened</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell>Grants Damage Resistance effect on receiving damage</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Thorns</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell>Damages attackers when they hit you</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Leggings Enchantments</CardTitle>
              <CardDescription>Enchantments specific to leggings</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Max Level</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Conflicts With</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Agility</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell>Increases movement speed</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Firewalker</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>Immunity to fire and lava damage</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Steadfast</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell>Reduces knockback from attacks</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Boots Enchantments</CardTitle>
              <CardDescription>Enchantments specific to boots</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Max Level</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Conflicts With</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Bunny Hop</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell>Grants Jump Boost effect</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Flame Walker</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell>Creates magma blocks when walking over lava, immune to magma block damage</TableCell>
                    <TableCell>Frost Walker</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Frost Walker</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell>Creates ice when walking over water</TableCell>
                    <TableCell>Flame Walker</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Feather Falling</TableCell>
                    <TableCell>4</TableCell>
                    <TableCell>Reduces fall damage</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Soft Step</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell>Reduces sound when walking</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>All Armor Enchantments</CardTitle>
              <CardDescription>Enchantments that can be applied to any armor piece</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Max Level</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Conflicts With</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Protection</TableCell>
                    <TableCell>4</TableCell>
                    <TableCell>Reduces damage from all sources</TableCell>
                    <TableCell>Blast Protection, Fire Protection, Projectile Protection</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Fire Protection</TableCell>
                    <TableCell>4</TableCell>
                    <TableCell>Reduces fire damage</TableCell>
                    <TableCell>Protection, Blast Protection, Projectile Protection</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Blast Protection</TableCell>
                    <TableCell>4</TableCell>
                    <TableCell>Reduces explosion damage</TableCell>
                    <TableCell>Protection, Fire Protection, Projectile Protection</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Projectile Protection</TableCell>
                    <TableCell>4</TableCell>
                    <TableCell>Reduces projectile damage</TableCell>
                    <TableCell>Protection, Fire Protection, Blast Protection</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Elemental Protection</TableCell>
                    <TableCell>4</TableCell>
                    <TableCell>Reduces Poison, Magic, Wither, Lightning, Freeze damage</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Unbreaking</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell>Increases durability</TableCell>
                    <TableCell>Curse of Breaking</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Mending</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>Repairs items with XP</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="weapon" className="space-y-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-primary/10 p-4 rounded-full">
              <Sword className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Weapon Enchantments</h2>
              <p className="text-muted-foreground">Enchantments that can be applied to swords and axes</p>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Damage Enchantments</CardTitle>
              <CardDescription>Enchantments that increase damage against specific targets</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Max Level</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Conflicts With</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Sharpness</TableCell>
                    <TableCell>5</TableCell>
                    <TableCell>Increases damage against all targets</TableCell>
                    <TableCell>Smite, Bane of Arthropods, Bane of Netherspawn, Village Defender</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Smite</TableCell>
                    <TableCell>5</TableCell>
                    <TableCell>Increases damage against undead mobs</TableCell>
                    <TableCell>Sharpness, Bane of Arthropods, Bane of Netherspawn, Village Defender</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Bane of Arthropods</TableCell>
                    <TableCell>5</TableCell>
                    <TableCell>Increases damage against arthropods (spiders, silverfish, etc.)</TableCell>
                    <TableCell>Sharpness, Smite, Bane of Netherspawn, Village Defender</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Bane of Netherspawn</TableCell>
                    <TableCell>5</TableCell>
                    <TableCell>Increases damage against nether mobs</TableCell>
                    <TableCell>Sharpness, Smite, Bane of Arthropods, Village Defender</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Village Defender</TableCell>
                    <TableCell>5</TableCell>
                    <TableCell>Increases damage against illagers and pillagers</TableCell>
                    <TableCell>Sharpness, Smite, Bane of Arthropods, Bane of Netherspawn</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Effect Enchantments</CardTitle>
              <CardDescription>Enchantments that apply status effects to targets</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Max Level</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Conflicts With</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Fire Aspect</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell>Sets target on fire</TableCell>
                    <TableCell>Frost Aspect</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Frost Aspect</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell>Slows and freezes target</TableCell>
                    <TableCell>Fire Aspect</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Poison</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell>Applies Poison effect on hit</TableCell>
                    <TableCell>Wither</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Wither</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell>Applies Wither effect on hit</TableCell>
                    <TableCell>Poison</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Blindness</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell>Applies Blindness effect on hit</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Confusion</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell>Applies Nausea effect on hit</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Exhaust</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell>Applies Hunger effect on hit</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Special Weapon Enchantments</CardTitle>
              <CardDescription>Unique enchantments with special effects</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Max Level</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Conflicts With</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Knockback</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell>Increases knockback distance</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Looting</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell>Increases mob drops</TableCell>
                    <TableCell>Curse of Misfortune</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Sweeping Edge</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell>Increases sweep attack damage</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Cutter</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell>Reduces durability and unequips enemy's armor</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Decapitator</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell>Drops enemy's head on kill</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Double Strike</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell>Chance to inflict double damage</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Exp Hunter</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell>More exp from mobs on kill</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Cure</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>Cures Zombified Piglins and Zombie Villagers</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tool" className="space-y-6">
          {/* Tool enchantments content would go here, similar to the armor and weapon sections */}
        </TabsContent>

        <TabsContent value="bow" className="space-y-6">
          {/* Bow enchantments content would go here, similar to the armor and weapon sections */}
        </TabsContent>

        <TabsContent value="fishing" className="space-y-6">
          {/* Fishing enchantments content would go here, similar to the armor and weapon sections */}
        </TabsContent>
      </Tabs>
    </div>
  )
}
