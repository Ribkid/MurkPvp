import Link from "next/link"
import { ChevronLeft, Sword, Book, Gauge, Award, Lightbulb } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

export default function ValhallaMMOPage() {
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
          <Sword className="h-12 w-12 text-yellow-500" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-4">Valhalla MMO</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Transform your Minecraft experience into a rich RPG adventure
        </p>
      </div>

      <Tabs defaultValue="overview" className="max-w-4xl mx-auto">
        <TabsList className="grid grid-cols-2 md:grid-cols-6 mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="progression">Progression</TabsTrigger>
          <TabsTrigger value="commands">Commands</TabsTrigger>
          <TabsTrigger value="tips">Tips</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Overview</CardTitle>
              <CardDescription>What is Valhalla MMO?</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Valhalla MMO transforms your Minecraft experience into a rich RPG adventure with character progression,
                classes, and skill systems. This comprehensive system allows players to specialize their characters and
                enjoy a deeper gameplay experience.
              </p>
              <p>With Valhalla MMO, you can:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Choose from multiple character classes with unique abilities</li>
                <li>Level up skills through gameplay activities</li>
                <li>Earn and allocate attribute points to customize your character</li>
                <li>Complete class-specific quests for special rewards</li>
                <li>Access powerful abilities and perks as you progress</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="getting-started" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Book className="h-5 w-5 text-blue-500" />
                Getting Started
              </CardTitle>
              <CardDescription>How to begin your journey</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                When you first join the server, you'll need to choose a character class. This choice is important as it
                determines your starting attributes and available skill paths.
              </p>

              <h3 className="text-lg font-medium mt-6 mb-2">Choosing Your Class</h3>
              <ol className="list-decimal pl-5 space-y-2">
                <li>
                  Use <code>/vmmo class</code> to view available classes
                </li>
                <li>Each class offers unique strengths, weaknesses, and special abilities</li>
                <li>Consider your preferred playstyle (combat, crafting, exploration, etc.)</li>
                <li>Once chosen, your class will shape your progression throughout your server journey</li>
              </ol>

              <div className="bg-muted p-4 rounded-md mt-4">
                <p className="text-sm font-medium">Important Note:</p>
                <p className="text-sm">
                  Choose your class carefully! While it's possible to change later, doing so may reset certain progress
                  or require special items.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="skills" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gauge className="h-5 w-5 text-green-500" />
                Skills System
              </CardTitle>
              <CardDescription>Master various abilities through gameplay</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Valhalla MMO features a robust skills system that allows you to grow stronger through gameplay:</p>

              <h3 className="text-lg font-medium mt-6 mb-2">Skill Categories</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Combat Skills</h4>
                  <p className="text-sm text-muted-foreground">
                    Improve your fighting abilities against mobs and other players
                  </p>
                </div>
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Crafting Skills</h4>
                  <p className="text-sm text-muted-foreground">Enhance your ability to create and improve items</p>
                </div>
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Gathering Skills</h4>
                  <p className="text-sm text-muted-foreground">Become more efficient at collecting resources</p>
                </div>
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Utility Skills</h4>
                  <p className="text-sm text-muted-foreground">Gain helpful abilities for survival and exploration</p>
                </div>
              </div>

              <h3 className="text-lg font-medium mt-6 mb-2">How to Level Up Skills</h3>
              <ol className="list-decimal pl-5 space-y-2">
                <li>
                  Perform activities related to the skill (crafting for Crafting skills, combat for Combat skills, etc.)
                </li>
                <li>
                  Use <code>/vmmo skills</code> to check your current skill levels and progress
                </li>
                <li>Each skill level provides passive bonuses and may unlock new abilities</li>
                <li>Some skills have active abilities that can be triggered with commands</li>
              </ol>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="progression" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-purple-500" />
                Character Progression
              </CardTitle>
              <CardDescription>Grow stronger as you play</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>As you play and level up your skills:</p>

              <ul className="list-disc pl-5 space-y-2">
                <li>You'll earn attribute points that can be spent to improve your character's stats</li>
                <li>Higher-level skills unlock more powerful abilities and perks</li>
                <li>Class-specific quests become available that provide unique rewards</li>
                <li>Your effectiveness in your chosen specialization increases significantly</li>
              </ul>

              <h3 className="text-lg font-medium mt-6 mb-2">Attribute System</h3>
              <p className="mb-4">Attributes are core stats that affect your character's performance:</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Strength</h4>
                  <p className="text-sm text-muted-foreground">Increases physical damage and carrying capacity</p>
                </div>
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Dexterity</h4>
                  <p className="text-sm text-muted-foreground">Improves attack speed and ranged accuracy</p>
                </div>
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Intelligence</h4>
                  <p className="text-sm text-muted-foreground">Enhances magical abilities and crafting quality</p>
                </div>
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Constitution</h4>
                  <p className="text-sm text-muted-foreground">Increases health and damage resistance</p>
                </div>
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Wisdom</h4>
                  <p className="text-sm text-muted-foreground">Improves experience gain and resource gathering</p>
                </div>
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Charisma</h4>
                  <p className="text-sm text-muted-foreground">Better trading prices and NPC interactions</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="commands" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Key Commands</CardTitle>
              <CardDescription>Essential commands for using Valhalla MMO</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-md p-4">
                  <code className="font-bold">/val items</code>
                  <p className="text-sm text-muted-foreground mt-1">View available items and equipment</p>
                </div>
                <div className="border rounded-md p-4">
                  <code className="font-bold">/val stats</code>
                  <p className="text-sm text-muted-foreground mt-1">
                    Displays your current skills, levels, and attributes
                  </p>
                </div>
                <div className="border rounded-md p-4">
                  <code className="font-bold">/valtop</code>
                  <p className="text-sm text-muted-foreground mt-1">Shows server leaderboards for skills and classes</p>
                </div>
                <div className="border rounded-md p-4">
                  <code className="font-bold">/vmmo class</code>
                  <p className="text-sm text-muted-foreground mt-1">View available classes or your current class</p>
                </div>
                <div className="border rounded-md p-4">
                  <code className="font-bold">/vmmo skills</code>
                  <p className="text-sm text-muted-foreground mt-1">Check your skill levels and progress</p>
                </div>
                <div className="border rounded-md p-4">
                  <code className="font-bold">/vmmo help</code>
                  <p className="text-sm text-muted-foreground mt-1">Get help with Valhalla MMO commands</p>
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
              <CardDescription>Make the most of your Valhalla MMO experience</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc pl-5 space-y-3">
                <li>
                  <span className="font-medium">Focus on complementary skills:</span> Level up skills that work well
                  with your class choice for maximum effectiveness
                </li>
                <li>
                  <span className="font-medium">Complete class quests:</span> Class-specific quests often provide
                  valuable rewards and unlock new abilities
                </li>
                <li>
                  <span className="font-medium">Balance your attributes:</span> Distribute attribute points according to
                  your playstyle rather than focusing on just one
                </li>
                <li>
                  <span className="font-medium">Team up with others:</span> Collaborate with players of different
                  classes to cover each other's weaknesses
                </li>
                <li>
                  <span className="font-medium">Check leaderboards:</span> Use <code>/valtop</code> to see what skills
                  other players are focusing on
                </li>
                <li>
                  <span className="font-medium">Plan your progression:</span> Have a goal in mind for which skills and
                  attributes you want to prioritize
                </li>
              </ul>

              <div className="bg-muted p-4 rounded-md mt-6">
                <p className="text-sm font-medium">Pro Tip:</p>
                <p className="text-sm">
                  Different classes excel in different activities. Warriors are great for combat, while Mages might be
                  better at enchanting and alchemy. Choose activities that align with your class's strengths for faster
                  progression.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="max-w-4xl mx-auto mt-12">
        <h2 className="text-2xl font-bold mb-4">Related Plugins</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Link href="/plugins/mcmmo">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">mcMMO</CardTitle>
                <CardDescription>RPG-like skills and abilities</CardDescription>
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
          <Link href="/plugins/levelledmobs">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">LevelledMobs</CardTitle>
                <CardDescription>Mobs with scaling difficulty</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
}

