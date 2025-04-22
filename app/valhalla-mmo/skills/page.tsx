import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sword, Shield, Axe, Pickaxe, Wheat, Book, Heart, Flame, Droplet } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info } from "lucide-react"

export const metadata: Metadata = {
  title: "Skills | ValhallaMMO | MurkCraft Wiki",
  description: "Detailed guide to all skills in the ValhallaMMO plugin",
}

export default function ValhallaSkillsPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col gap-4 mb-8">
        <h1 className="text-4xl font-bold">ValhallaMMO Skills Guide</h1>
        <p className="text-xl text-muted-foreground">
          A comprehensive breakdown of all skills available in the ValhallaMMO plugin.
        </p>

        <div className="flex justify-start">
          <Link href="/valhalla-mmo" className="text-primary hover:underline">
            ← Back to ValhallaMMO Overview
          </Link>
        </div>
      </div>

      <Alert className="mb-8">
        <Info className="h-4 w-4" />
        <AlertTitle>How to Access Skills</AlertTitle>
        <AlertDescription>
          Type <code>/skills</code> in-game to open the skills menu. You can also use <code>/valhalla</code> to access
          the main ValhallaMMO menu.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="combat" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
          <TabsTrigger value="combat">Combat Skills</TabsTrigger>
          <TabsTrigger value="gathering">Gathering Skills</TabsTrigger>
          <TabsTrigger value="crafting">Crafting Skills</TabsTrigger>
          <TabsTrigger value="misc">Misc Skills</TabsTrigger>
        </TabsList>

        <TabsContent value="combat" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Sword className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>Light Weapons</CardTitle>
                  <CardDescription>Swords, tridents, and other light weapons</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <span className="font-medium">Primary Stat:</span> Attack Speed
                  </li>
                  <li>
                    <span className="font-medium">Key Perks:</span> Dual Wielding, Critical Strikes, Bleeding
                  </li>
                  <li>
                    <span className="font-medium">EXP Source:</span> Dealing damage with light weapons
                  </li>
                  <li>
                    <span className="font-medium">Max Level:</span> 100
                  </li>
                </ul>
                <div className="mt-4">
                  <h4 className="font-medium mb-2">Notable Abilities:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Dash - Quick forward movement with damage boost</li>
                    <li>Flurry - Rapid succession of strikes</li>
                    <li>Parry - Chance to negate incoming damage</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Axe className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>Heavy Weapons</CardTitle>
                  <CardDescription>Axes, hammers, and other heavy weapons</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <span className="font-medium">Primary Stat:</span> Raw Damage
                  </li>
                  <li>
                    <span className="font-medium">Key Perks:</span> Armor Breaking, Stunning Blows, Cleave
                  </li>
                  <li>
                    <span className="font-medium">EXP Source:</span> Dealing damage with heavy weapons
                  </li>
                  <li>
                    <span className="font-medium">Max Level:</span> 100
                  </li>
                </ul>
                <div className="mt-4">
                  <h4 className="font-medium mb-2">Notable Abilities:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Ground Slam - AoE damage and knockback</li>
                    <li>Berserk - Temporary damage boost at cost of defense</li>
                    <li>Executioner - Extra damage to low-health targets</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>Defense</CardTitle>
                  <CardDescription>Armor and damage mitigation</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <span className="font-medium">Primary Stat:</span> Damage Reduction
                  </li>
                  <li>
                    <span className="font-medium">Key Perks:</span> Shield Mastery, Damage Reflection, Resilience
                  </li>
                  <li>
                    <span className="font-medium">EXP Source:</span> Taking damage while wearing armor
                  </li>
                  <li>
                    <span className="font-medium">Max Level:</span> 100
                  </li>
                </ul>
                <div className="mt-4">
                  <h4 className="font-medium mb-2">Notable Abilities:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Bulwark - Temporary invulnerability</li>
                    <li>Taunt - Draw aggro from nearby mobs</li>
                    <li>Iron Skin - Passive damage reduction</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Flame className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>Archery</CardTitle>
                  <CardDescription>Bows, crossbows, and ranged combat</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <span className="font-medium">Primary Stat:</span> Range and Accuracy
                  </li>
                  <li>
                    <span className="font-medium">Key Perks:</span> Piercing Shots, Multishot, Precision
                  </li>
                  <li>
                    <span className="font-medium">EXP Source:</span> Hitting targets with arrows
                  </li>
                  <li>
                    <span className="font-medium">Max Level:</span> 100
                  </li>
                </ul>
                <div className="mt-4">
                  <h4 className="font-medium mb-2">Notable Abilities:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Sniper Shot - Increased damage at long range</li>
                    <li>Arrow Rain - AoE damage in target area</li>
                    <li>Quick Draw - Faster bow charging</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="gathering" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Pickaxe className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>Mining</CardTitle>
                  <CardDescription>Resource gathering from stone and ores</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <span className="font-medium">Primary Stat:</span> Mining Speed and Yield
                  </li>
                  <li>
                    <span className="font-medium">Key Perks:</span> Double Drops, Rare Gem Finding, Auto-Smelting
                  </li>
                  <li>
                    <span className="font-medium">EXP Source:</span> Mining stone and ore blocks
                  </li>
                  <li>
                    <span className="font-medium">Max Level:</span> 100
                  </li>
                </ul>
                <div className="mt-4">
                  <h4 className="font-medium mb-2">Notable Abilities:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Vein Miner - Mine connected ore blocks</li>
                    <li>Prospector - Detect nearby ores</li>
                    <li>Excavation - Mine in a 3x3 area</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Axe className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>Woodcutting</CardTitle>
                  <CardDescription>Harvesting wood and tree resources</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <span className="font-medium">Primary Stat:</span> Chopping Speed and Wood Yield
                  </li>
                  <li>
                    <span className="font-medium">Key Perks:</span> Tree Feller, Apple Drops, Crystal Apples
                  </li>
                  <li>
                    <span className="font-medium">EXP Source:</span> Chopping wood blocks
                  </li>
                  <li>
                    <span className="font-medium">Max Level:</span> 100
                  </li>
                </ul>
                <div className="mt-4">
                  <h4 className="font-medium mb-2">Notable Abilities:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Timber - Fell entire trees at once</li>
                    <li>Forager - Find special items from leaves</li>
                    <li>Crystal Apple Crafting - Create powerful buff items</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Wheat className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>Farming</CardTitle>
                  <CardDescription>Crop cultivation and animal husbandry</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <span className="font-medium">Primary Stat:</span> Crop Yield and Growth Speed
                  </li>
                  <li>
                    <span className="font-medium">Key Perks:</span> Multi-Harvest, Animal Breeding, Special Crops
                  </li>
                  <li>
                    <span className="font-medium">EXP Source:</span> Harvesting crops and breeding animals
                  </li>
                  <li>
                    <span className="font-medium">Max Level:</span> 100
                  </li>
                </ul>
                <div className="mt-4">
                  <h4 className="font-medium mb-2">Notable Abilities:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Green Thumb - Instant crop growth</li>
                    <li>Harvest Aura - Harvest crops in an area</li>
                    <li>Animal Whisperer - Better breeding results</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Droplet className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>Fishing</CardTitle>
                  <CardDescription>Aquatic resource gathering</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <span className="font-medium">Primary Stat:</span> Catch Rate and Treasure Finding
                  </li>
                  <li>
                    <span className="font-medium">Key Perks:</span> Rare Fish, Treasure Hunter, Master Angler
                  </li>
                  <li>
                    <span className="font-medium">EXP Source:</span> Catching fish and items
                  </li>
                  <li>
                    <span className="font-medium">Max Level:</span> 100
                  </li>
                </ul>
                <div className="mt-4">
                  <h4 className="font-medium mb-2">Notable Abilities:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Aquatic Sense - Detect fish nearby</li>
                    <li>Treasure Diver - Increased treasure chances</li>
                    <li>Quick Catch - Faster fishing</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="crafting" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Axe className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>Smithing</CardTitle>
                  <CardDescription>Tool and armor crafting</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <span className="font-medium">Primary Stat:</span> Item Quality
                  </li>
                  <li>
                    <span className="font-medium">Key Perks:</span> Material Specialization, Durability, Repair
                  </li>
                  <li>
                    <span className="font-medium">EXP Source:</span> Crafting tools and armor
                  </li>
                  <li>
                    <span className="font-medium">Max Level:</span> 100
                  </li>
                </ul>
                <div className="mt-4">
                  <h4 className="font-medium mb-2">Notable Abilities:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Master Smith - Craft highest quality items</li>
                    <li>Reinforcement - Add durability to items</li>
                    <li>Material Efficiency - Use fewer resources</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Book className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>Enchanting</CardTitle>
                  <CardDescription>Item enchantment and magical augmentation</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <span className="font-medium">Primary Stat:</span> Enchantment Power and Level Cap
                  </li>
                  <li>
                    <span className="font-medium">Key Perks:</span> XP Efficiency, Enchantment Preservation, Hexblade
                  </li>
                  <li>
                    <span className="font-medium">EXP Source:</span> Enchanting items and using enchantment tables
                  </li>
                  <li>
                    <span className="font-medium">Max Level:</span> 100
                  </li>
                </ul>
                <div className="mt-4">
                  <h4 className="font-medium mb-2">Notable Abilities:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Hexblade - Toggle elemental damage on weapons</li>
                    <li>Soul Binding - Transfer enchantments between items</li>
                    <li>Arcane Insight - See exact enchantment chances</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Flame className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>Alchemy</CardTitle>
                  <CardDescription>Potion brewing and special concoctions</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <span className="font-medium">Primary Stat:</span> Potion Duration and Potency
                  </li>
                  <li>
                    <span className="font-medium">Key Perks:</span> Extended Duration, Potion Mastery, Special Brews
                  </li>
                  <li>
                    <span className="font-medium">EXP Source:</span> Brewing potions
                  </li>
                  <li>
                    <span className="font-medium">Max Level:</span> 100
                  </li>
                </ul>
                <div className="mt-4">
                  <h4 className="font-medium mb-2">Notable Abilities:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Master Brewer - Create unique potion effects</li>
                    <li>Alchemical Preservation - Chance not to consume ingredients</li>
                    <li>Splash Mastery - Enhanced splash potions</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>Cooking</CardTitle>
                  <CardDescription>Food preparation and nutrition</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <span className="font-medium">Primary Stat:</span> Food Quality and Saturation
                  </li>
                  <li>
                    <span className="font-medium">Key Perks:</span> Special Recipes, Nutritional Expertise, Preservation
                  </li>
                  <li>
                    <span className="font-medium">EXP Source:</span> Cooking food items
                  </li>
                  <li>
                    <span className="font-medium">Max Level:</span> 100
                  </li>
                </ul>
                <div className="mt-4">
                  <h4 className="font-medium mb-2">Notable Abilities:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Gourmet - Create special food with buffs</li>
                    <li>Efficient Cooking - Chance for double output</li>
                    <li>Preservation - Food lasts longer before spoiling</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="misc" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>Power</CardTitle>
                  <CardDescription>Overall progression through ValhallaMMO</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <span className="font-medium">Primary Stat:</span> Overall Power Level
                  </li>
                  <li>
                    <span className="font-medium">Key Perks:</span> Skill Point Bonuses, Passive Regeneration,
                    Versatility
                  </li>
                  <li>
                    <span className="font-medium">EXP Source:</span> Leveling up other skills
                  </li>
                  <li>
                    <span className="font-medium">Max Level:</span> Unlimited (scales with other skills)
                  </li>
                </ul>
                <div className="mt-4">
                  <h4 className="font-medium mb-2">Special Notes:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Power level increases as you level other skills</li>
                    <li>Provides small bonuses to all other skills</li>
                    <li>Cannot be reset with NewGame+</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Book className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>Parties</CardTitle>
                  <CardDescription>Group system for cooperative play</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <span className="font-medium">Key Commands:</span>
                  </li>
                  <li>
                    <code>/party create [name]</code> - Create a new party
                  </li>
                  <li>
                    <code>/party invite [player]</code> - Invite a player
                  </li>
                  <li>
                    <code>/party join [player/party]</code> - Join a party
                  </li>
                  <li>
                    <code>/party leave</code> - Leave your current party
                  </li>
                </ul>
                <div className="mt-4">
                  <h4 className="font-medium mb-2">Party Benefits:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Shared XP for nearby party members</li>
                    <li>Party-wide buffs from certain abilities</li>
                    <li>
                      Coordinate with party chat using <code>/pc [message]</code>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
