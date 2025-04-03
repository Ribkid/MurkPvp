import Link from "next/link"
import { ChevronLeft, Gauge, Sword, Pickaxe, Lightbulb } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

export default function McMMOPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-8">
        <Link href="/plugins">
          <Button variant="ghost" size="sm" className="flex items-center gap-1">
            <ChevronLeft className="h-4 w-4" />
            Back to Plugins
          </Button>
        </Link>
      </div>

      <div className="flex flex-col items-center text-center mb-12">
        <div className="bg-muted rounded-full p-4 mb-4">
          <Gauge className="h-12 w-12 text-blue-500" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-4">mcMMO</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Level up skills and gain special abilities through gameplay
        </p>
      </div>

      <Tabs defaultValue="overview" className="max-w-4xl mx-auto">
        <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="abilities">Abilities</TabsTrigger>
          <TabsTrigger value="commands">Commands</TabsTrigger>
          <TabsTrigger value="tips">Tips</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Overview</CardTitle>
              <CardDescription>What is mcMMO?</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                mcMMO is a popular plugin that adds RPG-like skills and abilities to many aspects of Minecraft gameplay.
                By performing regular activities like mining, combat, or farming, you'll gain experience in various
                skills and unlock powerful abilities.
              </p>
              <p>With mcMMO, you can:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Level up skills by performing related activities</li>
                <li>Unlock passive and active abilities as you progress</li>
                <li>Gain advantages in combat, resource gathering, and more</li>
                <li>Compete with other players on skill leaderboards</li>
                <li>Specialize in skills that match your playstyle</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="skills" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Pickaxe className="h-5 w-5 text-orange-500" />
                Skills System
              </CardTitle>
              <CardDescription>Master various skills through gameplay</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                mcMMO includes over a dozen different skills, each with their own leveling path and unique abilities:
              </p>

              <h3 className="text-lg font-medium mt-6 mb-2">Gathering Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Mining</h4>
                  <p className="text-sm text-muted-foreground">
                    Enhanced ore drops, blast mining, and more efficient excavation
                  </p>
                </div>
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Herbalism</h4>
                  <p className="text-sm text-muted-foreground">Better crop harvests, special plant abilities</p>
                </div>
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Woodcutting</h4>
                  <p className="text-sm text-muted-foreground">Faster tree felling, automatic tree felling</p>
                </div>
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Fishing</h4>
                  <p className="text-sm text-muted-foreground">Improved catches, treasure hunting</p>
                </div>
              </div>

              <h3 className="text-lg font-medium mt-6 mb-2">Combat Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Swords</h4>
                  <p className="text-sm text-muted-foreground">Special attacks, counters, and bleed effects</p>
                </div>
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Archery</h4>
                  <p className="text-sm text-muted-foreground">Increased damage, special arrow effects</p>
                </div>
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Axes</h4>
                  <p className="text-sm text-muted-foreground">Armor impact, critical strikes</p>
                </div>
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Unarmed</h4>
                  <p className="text-sm text-muted-foreground">Powerful punches, disarming abilities</p>
                </div>
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Taming</h4>
                  <p className="text-sm text-muted-foreground">Enhanced pets with special abilities</p>
                </div>
              </div>

              <h3 className="text-lg font-medium mt-6 mb-2">Miscellaneous Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Acrobatics</h4>
                  <p className="text-sm text-muted-foreground">Reduced fall damage, dodge abilities</p>
                </div>
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Repair</h4>
                  <p className="text-sm text-muted-foreground">Better item repair, salvage abilities</p>
                </div>
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Alchemy</h4>
                  <p className="text-sm text-muted-foreground">Enhanced potion brewing</p>
                </div>
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Salvage</h4>
                  <p className="text-sm text-muted-foreground">Recover materials from tools and armor</p>
                </div>
              </div>

              <h3 className="text-lg font-medium mt-6 mb-2">How to Level Up</h3>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Simply perform the activity related to the skill you want to level</li>
                <li>Mining ore levels Mining, fighting with a sword levels Swords, etc.</li>
                <li>
                  Check your progress with <code>/mcstats</code>
                </li>
                <li>As you level up, you'll automatically unlock new passive and active abilities</li>
              </ol>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="abilities" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sword className="h-5 w-5 text-red-500" />
                Ability Types
              </CardTitle>
              <CardDescription>Special powers unlocked through skill progression</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border rounded-md p-4">
                  <h3 className="font-medium mb-2">Passive Abilities</h3>
                  <p className="text-sm text-muted-foreground">Always active, providing bonuses automatically</p>
                  <ul className="list-disc pl-5 mt-2 text-sm space-y-1">
                    <li>Double drops from mining</li>
                    <li>Increased damage with weapons</li>
                    <li>Better crop yields</li>
                    <li>Reduced fall damage</li>
                  </ul>
                </div>

                <div className="border rounded-md p-4">
                  <h3 className="font-medium mb-2">Active Abilities</h3>
                  <p className="text-sm text-muted-foreground">
                    Triggered by right-clicking with the appropriate tool/weapon
                  </p>
                  <ul className="list-disc pl-5 mt-2 text-sm space-y-1">
                    <li>Super Breaker (Mining)</li>
                    <li>Tree Feller (Woodcutting)</li>
                    <li>Serrated Strikes (Swords)</li>
                    <li>Skull Splitter (Axes)</li>
                  </ul>
                </div>

                <div className="border rounded-md p-4">
                  <h3 className="font-medium mb-2">Sub-Skills</h3>
                  <p className="text-sm text-muted-foreground">Specialized abilities within each skill category</p>
                  <ul className="list-disc pl-5 mt-2 text-sm space-y-1">
                    <li>Fishing treasure hunting</li>
                    <li>Archery distance bonuses</li>
                    <li>Herbalism special effects</li>
                    <li>Taming beast lore</li>
                  </ul>
                </div>
              </div>

              <div className="bg-muted p-4 rounded-md mt-6">
                <p className="text-sm font-medium">How to Use Active Abilities:</p>
                <ol className="list-decimal pl-5 mt-2 text-sm space-y-1">
                  <li>Equip the appropriate tool or weapon</li>
                  <li>Right-click to activate the ability when it's ready</li>
                  <li>A sound effect and message will indicate activation</li>
                  <li>The ability will remain active for a limited time</li>
                  <li>After use, there's a cooldown period before you can use it again</li>
                </ol>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="commands" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Key Commands</CardTitle>
              <CardDescription>Essential commands for using mcMMO</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-md p-4">
                  <code className="font-bold">/mcstats</code>
                  <p className="text-sm text-muted-foreground mt-1">View your skill levels and progress</p>
                </div>
                <div className="border rounded-md p-4">
                  <code className="font-bold">/mcrank</code>
                  <p className="text-sm text-muted-foreground mt-1">See your ranking in each skill</p>
                </div>
                <div className="border rounded-md p-4">
                  <code className="font-bold">/mcability</code>
                  <p className="text-sm text-muted-foreground mt-1">Toggle ability activation notifications</p>
                </div>
                <div className="border rounded-md p-4">
                  <code className="font-bold">/mctop</code>
                  <p className="text-sm text-muted-foreground mt-1">View the server's skill leaderboards</p>
                </div>
                <div className="border rounded-md p-4">
                  <code className="font-bold">/mchelp</code>
                  <p className="text-sm text-muted-foreground mt-1">Access detailed help for mcMMO commands</p>
                </div>
                <div className="border rounded-md p-4">
                  <code className="font-bold">/&lt;skillname&gt;</code>
                  <p className="text-sm text-muted-foreground mt-1">View information about a specific skill</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tips" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-yellow-500" />
                Tips for Success
              </CardTitle>
              <CardDescription>Make the most of your mcMMO experience</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc pl-5 space-y-3">
                <li>
                  <span className="font-medium">Focus on skills that match your playstyle:</span> If you enjoy mining,
                  focus on the Mining skill first
                </li>
                <li>
                  <span className="font-medium">
                    Use <code>/mcability</code>:
                  </span>{" "}
                  Learn about newly unlocked abilities as you level up
                </li>
                <li>
                  <span className="font-medium">Right-click with tools:</span> Activate special abilities when they're
                  ready
                </li>
                <li>
                  <span className="font-medium">Check the leaderboards:</span> Use <code>/mctop</code> to see who leads
                  in different skills
                </li>
                <li>
                  <span className="font-medium">Balance your skills:</span> Try to level up multiple skills for a
                  well-rounded character
                </li>
                <li>
                  <span className="font-medium">Practice ability timing:</span> Learn when to activate abilities for
                  maximum effectiveness
                </li>
              </ul>

              <div className="bg-muted p-4 rounded-md mt-6">
                <p className="text-sm font-medium">Pro Tip:</p>
                <p className="text-sm">
                  Some abilities work best in combination. For example, using Mining's Super Breaker in combination with
                  Repair skill can help you efficiently gather resources while maintaining your tools.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="max-w-4xl mx-auto mt-12">
        <h2 className="text-2xl font-bold mb-4">Related Plugins</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Link href="/plugins/valhallaMM">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Valhalla MMO</CardTitle>
                <CardDescription>RPG character progression system</CardDescription>
              </CardHeader>
            </Card>
          </Link>
          <Link href="/plugins/mythicmobs">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">MythicMobs</CardTitle>
                <CardDescription>Custom mobs with unique abilities</CardDescription>
              </CardHeader>
            </Card>
          </Link>
          <Link href="/plugins/enchantssquared">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">EnchantsSquared</CardTitle>
                <CardDescription>Powerful custom enchantments</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
}

