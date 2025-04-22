import type { Metadata } from "next"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Sword, Axe, Pickaxe, Wheat, Book } from "lucide-react"

export const metadata: Metadata = {
  title: "ValhallaMMO | MurkCraft Wiki",
  description: "Guide to the ValhallaMMO plugin on the MurkCraft server",
}

export default function ValhallaMMOPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col gap-4 mb-8">
        <h1 className="text-4xl font-bold">ValhallaMMO Guide</h1>
        <p className="text-xl text-muted-foreground">
          A comprehensive guide to the ValhallaMMO plugin on the MurkCraft server.
        </p>
      </div>

      <div className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              ValhallaMMO is a comprehensive RPG plugin for Minecraft that adds skills, leveling, custom items, and
              various mechanics to enhance gameplay. The plugin features 14 different skills that players can level up
              to gain access to special perks, abilities, and improved crafting capabilities.
            </p>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/upload_2024-9-4_20-54-46-JNtiIzZrBhpk4HUrQqmkywi67cePAW.png"
              alt="ValhallaMMO Plugin Overview"
              width={600}
              height={900}
              className="rounded-lg mx-auto my-4"
            />
            <p>
              Use the arrows to navigate the skill tree, and clicking on a skill icon will center that skill and reveal
              some others sort of like a scroll bar.
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="skills" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
          <TabsTrigger value="skills">Skills & Leveling</TabsTrigger>
          <TabsTrigger value="food">Foods & Nutrition</TabsTrigger>
          <TabsTrigger value="smithing">Smithing & Quality</TabsTrigger>
          <TabsTrigger value="enchanting">Enchanting</TabsTrigger>
        </TabsList>

        <TabsContent value="skills" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Skills & Leveling</CardTitle>
              <CardDescription>
                Each skill has its own skill tree, populated with perks you can unlock to gain specific bonuses.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center p-4 border rounded-lg">
                  <div className="mr-4 bg-primary/10 p-3 rounded-full">
                    <Sword className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Power 💥</h3>
                    <p className="text-sm text-muted-foreground">Total progression through ValhallaMMO</p>
                  </div>
                </div>

                <div className="flex items-center p-4 border rounded-lg">
                  <div className="mr-4 bg-primary/10 p-3 rounded-full">
                    <Axe className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Smithing 🛠</h3>
                    <p className="text-sm text-muted-foreground">Proficiency in tool/armor making</p>
                  </div>
                </div>

                <div className="flex items-center p-4 border rounded-lg">
                  <div className="mr-4 bg-primary/10 p-3 rounded-full">
                    <Book className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Enchanting 🎇</h3>
                    <p className="text-sm text-muted-foreground">Proficiency in enchanting items</p>
                  </div>
                </div>

                <div className="flex items-center p-4 border rounded-lg">
                  <div className="mr-4 bg-primary/10 p-3 rounded-full">
                    <Pickaxe className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Mining ⛏</h3>
                    <p className="text-sm text-muted-foreground">Resource gathering from rock and ores</p>
                  </div>
                </div>

                <div className="flex items-center p-4 border rounded-lg">
                  <div className="mr-4 bg-primary/10 p-3 rounded-full">
                    <Axe className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Woodcutting 🪓</h3>
                    <p className="text-sm text-muted-foreground">Resources from forests and trees</p>
                  </div>
                </div>

                <div className="flex items-center p-4 border rounded-lg">
                  <div className="mr-4 bg-primary/10 p-3 rounded-full">
                    <Wheat className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Farming 🌾</h3>
                    <p className="text-sm text-muted-foreground">Extract food from crops and animals</p>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-medium mb-2">NewGame+</h3>
              <p className="mb-4">
                Each skill (except Power) has an additional perk that allows you to reset that skill. In exchange you
                get some permanent stats for that skill and you get your skill points refunded, but also have EXP gain
                for that skill reduced a bit so your next run will be a bit harder. This also allows for a higher power
                level since you get to level skills again.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="food" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Foods & Nutrition</CardTitle>
              <CardDescription>
                ValhallaMMO categorizes foods into different types, which can affect their bonuses and properties in the
                game.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Category</TableHead>
                    <TableHead>Items</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Magical</TableCell>
                    <TableCell>(Enchanted) Golden Apple, Golden Carrot, Crystal Apple</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Meat</TableCell>
                    <TableCell>
                      (Cooked) Chicken, (Cooked) Mutton, (Cooked) Porkchop, (Cooked) Rabbit, (Cooked) Steak, Rabbit Stew
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Seafood</TableCell>
                    <TableCell>(Cooked) Salmon, (Cooked) Cod, Tropical Fish</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Vegetables</TableCell>
                    <TableCell>
                      (Baked) Potato, Beetroot, Beetroot Soup, Dried Kelp, Carrot, Mushroom Stew, Suspicious Stew
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Grain</TableCell>
                    <TableCell>Bread</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Sweets</TableCell>
                    <TableCell>Cookies, Cake, Honey, Pumpkin Pie</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Fruit</TableCell>
                    <TableCell>Apple, Chorus Fruit, Glow Berries, Melon Slice, Sweet Berries</TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <div className="mt-6">
                <h3 className="text-lg font-medium mb-2">Special Foods</h3>
                <p>
                  Special foods like Crystal Apples (obtained through Woodcutting skill) provide temporary buffs to
                  various skills, including +50 quality to Enchanting, Smithing, and Alchemy for 30 seconds.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="smithing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Smithing & Quality System</CardTitle>
              <CardDescription>
                Smithing is your proficiency in tool/armor making. The higher quality equipment you make, the better
                their properties.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Crafting any tool or piece of armor grants it a quality value equal to your generic Smithing quality
                stat PLUS your Smithing quality stat for the material used.
              </p>

              <h3 className="text-lg font-medium mb-2">Neutral Quality Values</h3>
              <Table className="mb-4">
                <TableHeader>
                  <TableRow>
                    <TableHead>Material Type</TableHead>
                    <TableHead>Neutral Quality</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Wood</TableCell>
                    <TableCell>50</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Leather</TableCell>
                    <TableCell>50</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Stone</TableCell>
                    <TableCell>80</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Chainmail</TableCell>
                    <TableCell>80</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Gold</TableCell>
                    <TableCell>110</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Iron</TableCell>
                    <TableCell>110</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Diamond</TableCell>
                    <TableCell>140</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Netherite</TableCell>
                    <TableCell>170</TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <h3 className="text-lg font-medium mb-2">Quality Tooltips</h3>
              <Table className="mb-4">
                <TableHeader>
                  <TableRow>
                    <TableHead>Quality Difference</TableHead>
                    <TableHead>Tooltip</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>-500</TableCell>
                    <TableCell>Terrible</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>-60</TableCell>
                    <TableCell>Shoddy</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>-30</TableCell>
                    <TableCell>Decent</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>0</TableCell>
                    <TableCell>Good</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>30</TableCell>
                    <TableCell>Great</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>60</TableCell>
                    <TableCell>Flawless</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>90</TableCell>
                    <TableCell>Masterful</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>120</TableCell>
                    <TableCell>Fabled</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>150</TableCell>
                    <TableCell>Peerless</TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <div className="bg-muted p-4 rounded-lg mb-4">
                <p className="italic">
                  For example, a wooden pickaxe with 90 quality would be "Great" (+40 above neutral), but a netherite
                  pickaxe would need 320 quality to be "Peerless."
                </p>
              </div>

              <h3 className="text-lg font-medium mb-2">How to gain Smithing quality</h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Leveling up grants 1.5 Smithing quality, up to 150 at level 100</li>
                <li>Smithing skill tree perks grant +50 quality to specific materials</li>
                <li>Final Smithing perk grants +50 to everything</li>
                <li>Reset Smithing with NewGame+ for +50 quality per loop (up to +100)</li>
                <li>Crystal Apples from Woodcutting give +50 Smithing quality for 30 seconds</li>
                <li>Total possible quality: 450 (default configuration)</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="enchanting" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Enchanting</CardTitle>
              <CardDescription>
                Enchanting is your proficiency in enchanting items. Higher skill allows you to achieve higher
                enchantment levels.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-medium mb-2">How to gain EXP</h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Experience through enchanting items, based on rarity and level of enchantments</li>
                <li>Higher enchantment levels provide more EXP</li>
                <li>EXP for each experience orb you spend</li>
              </ul>

              <div className="bg-muted p-4 rounded-lg mb-4">
                <p className="font-medium">Tip:</p>
                <p>
                  Level 30 enchantments have reduced strength in early game. Use 1st-2nd level enchantments until around
                  level 50 to save on experience.
                </p>
              </div>

              <h3 className="text-lg font-medium mb-2">Enchantment Scaling</h3>
              <p className="mb-4">
                Enchanting quality affects the level of enchantments you can achieve. At 120 quality, all enchantments
                are back to vanilla strengths.
              </p>

              <Table className="mb-4">
                <TableHeader>
                  <TableRow>
                    <TableHead>Enchantment</TableHead>
                    <TableHead>Debuff at 0 quality</TableHead>
                    <TableHead>Quality per level</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Power</TableCell>
                    <TableCell>-2</TableCell>
                    <TableCell>60</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Sharpness</TableCell>
                    <TableCell>-2</TableCell>
                    <TableCell>60</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Protection</TableCell>
                    <TableCell>-1</TableCell>
                    <TableCell>120</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Efficiency</TableCell>
                    <TableCell>-2</TableCell>
                    <TableCell>60</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Fortune</TableCell>
                    <TableCell>-1</TableCell>
                    <TableCell>120</TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <div className="bg-muted p-4 rounded-lg mb-4">
                <p>
                  This means that when you first start playing, every efficiency enchantment you get will be 2 levels
                  weaker than it would have been in vanilla, and every 60 enchanting quality you gain afterward
                  increases your efficiency levels by 1.
                </p>
              </div>

              <h3 className="text-lg font-medium mb-2">Abilities</h3>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-1">Hexblade</h4>
                <p>
                  Swap Hand while holding a weapon to toggle. Converts a fraction of your damage into higher, elemental
                  damage. The damage type can be chosen and switched. Each hit with Hexblade active costs experience
                  orbs.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
