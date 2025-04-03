import Link from "next/link"
import { ChevronRight, Sword, Shield, Sparkles, Mountain, Skull, Gauge } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function PluginsPage() {
  const plugins = [
    {
      id: "valhallaMM",
      name: "Valhalla MMO",
      description: "A comprehensive MMO system with classes, skills, and progression",
      icon: <Sword className="h-8 w-8 text-yellow-500" />,
      details: [
        "Choose from multiple character classes",
        "Level up skills through gameplay",
        "Unlock special abilities and perks",
        "Complete class-specific quests",
      ],
      commands: ["vmmo", "vmmo skills", "vmmo class"],
    },
    {
      id: "mcmmo",
      name: "mcMMO",
      description: "Level up skills and gain special abilities through gameplay",
      icon: <Gauge className="h-8 w-8 text-blue-500" />,
      details: [
        "Gain experience in various skills like Mining, Woodcutting, and Combat",
        "Unlock passive and active abilities",
        "Compete on skill leaderboards",
        "Earn rewards for skill milestones",
      ],
      commands: ["mcstats", "mcrank", "mcability", "mctop"],
    },
    {
      id: "lands",
      name: "Lands",
      description: "Claim and protect your land from other players",
      icon: <Mountain className="h-8 w-8 text-green-500" />,
      details: [
        "Create and manage your own land claims",
        "Invite friends to build in your territory",
        "Set custom permissions for different players",
        "Protect your builds from griefing",
      ],
      commands: ["lands claim", "lands trust", "lands untrust", "lands info"],
    },
    {
      id: "enchantssquared",
      name: "EnchantsSquared",
      description: "Discover powerful custom enchantments beyond vanilla Minecraft",
      icon: <Sparkles className="h-8 w-8 text-purple-500" />,
      details: [
        "Find rare and powerful enchantments",
        "Apply special effects to your tools and weapons",
        "Combine enchantments for unique abilities",
        "Discover hidden enchantment combinations",
      ],
      commands: ["es list", "es info"],
    },
    {
      id: "mythicmobs",
      name: "MythicMobs",
      description: "Encounter unique custom mobs with special abilities and drops",
      icon: <Skull className="h-8 w-8 text-red-500" />,
      details: [
        "Battle custom-designed mobs with unique abilities",
        "Collect rare drops and treasures",
        "Face challenging boss fights",
        "Discover special mobs in different biomes",
      ],
      commands: [],
    },
    {
      id: "levelledmobs",
      name: "LevelledMobs",
      description: "Mobs with levels that scale in difficulty and rewards",
      icon: <Shield className="h-8 w-8 text-orange-500" />,
      details: [
        "Encounter progressively harder mobs as you explore",
        "Higher level mobs drop better loot",
        "Visual indicators show mob difficulty",
        "Region-based difficulty scaling",
      ],
      commands: [],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Key Server Plugins</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Learn about the most important plugins that enhance your gameplay on MurkCraft
        </p>
      </div>

      <div className="mb-12">
        <p className="text-center mb-6 max-w-3xl mx-auto">
          These core plugins define the MurkCraft experience. Understanding how to use them will greatly enhance your
          adventures on the server!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {plugins.map((plugin) => (
          <Card key={plugin.id} className="transition-all hover:shadow-lg overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-4">
                <div className="bg-muted rounded-lg p-3">{plugin.icon}</div>
                <div>
                  <CardTitle className="text-2xl">{plugin.name}</CardTitle>
                  <CardDescription className="text-base">{plugin.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <h3 className="text-sm font-medium mb-2">Features:</h3>
              <ul className="space-y-1 mb-4">
                {plugin.details.map((detail, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-1">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              {plugin.commands && plugin.commands.length > 0 && (
                <>
                  <h3 className="text-sm font-medium mb-2">Key Commands:</h3>
                  <div className="flex flex-wrap gap-2">
                    {plugin.commands.map((command, index) => (
                      <code key={index} className="px-2 py-1 bg-muted rounded text-xs">
                        /{command}
                      </code>
                    ))}
                  </div>
                </>
              )}
            </CardContent>
            <CardFooter className="border-t pt-4">
              <Link href={`/plugins/${plugin.id}`} className="w-full">
                <div className="flex items-center justify-between w-full text-sm text-primary hover:text-primary/80 transition-colors">
                  <span>View detailed guide</span>
                  <ChevronRight className="h-4 w-4" />
                </div>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="bg-muted rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Other Server Plugins</h2>
        <p className="mb-4">
          MurkCraft uses many other plugins to enhance your experience. These six highlighted above are the most
          important ones you'll interact with directly, but you may also encounter:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2">
          <div className="text-sm py-1">• Citizens</div>
          <div className="text-sm py-1">• Quests</div>
          <div className="text-sm py-1">• Shopkeepers</div>
          <div className="text-sm py-1">• PlayerShop</div>
          <div className="text-sm py-1">• DiscordSRV</div>
          <div className="text-sm py-1">• Geyser</div>
          <div className="text-sm py-1">• WorldGuard</div>
          <div className="text-sm py-1">• And many more!</div>
        </div>
      </div>

      <div className="bg-muted rounded-lg p-6 mt-8">
        <h2 className="text-2xl font-bold mb-4">Need Help With Plugins?</h2>
        <p className="mb-4">If you need assistance with any plugin, you can:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Type <code>/help [plugin name]</code> in-game
          </li>
          <li>Ask other players or staff members</li>
          <li>Check our Discord server's #plugin-help channel</li>
          <li>Click on any plugin above to see a detailed guide</li>
        </ul>
      </div>
    </div>
  )
}

