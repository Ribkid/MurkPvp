import { CalendarDays } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function UpdatesPage() {
  const updates = [
    {
      id: 1,
      title: "New World: Challenging Mobs Await",
      date: "July 15, 2023",
      description:
        "We've added a brand new world featuring leveled mobs and elite mobs. Explore dangerous territories with progressively challenging enemies and earn better rewards. Elite mobs with special abilities and unique drops can be found throughout this new realm.",
      category: "World",
      isRecent: true,
    },
    {
      id: 2,
      title: "Leap Mobs & Adventurer's Guild",
      date: "June 3, 2023",
      description:
        "Introducing leap mobs that can jump and surprise you from unexpected angles! We've also opened the Adventurer's Guild in the main hub where you can take on quests, participate in arena challenges, and hunt elite monsters for special rewards.",
      category: "Gameplay",
      isRecent: true,
    },
    {
      id: 3,
      title: "Rank System Overhaul",
      date: "May 12, 2023",
      description:
        "We've completely revamped our rank system to include 10 total ranks with clear progression paths. Each rank provides new perks and abilities, giving players more goals to work toward and rewards to earn as they advance through the server.",
      category: "System",
      isRecent: false,
    },
    {
      id: 4,
      title: "MMO Races Added",
      date: "April 8, 2023",
      description:
        "Choose your character's race with our new MMO races system! Each race offers unique passive abilities, stat bonuses, and special skills. This addition brings even more depth to character customization and roleplay opportunities.",
      category: "Feature",
      isRecent: false,
    },
    {
      id: 5,
      title: "Server Launch",
      date: "March 1, 2023",
      description:
        "MurkCraft is officially live! Join us for an immersive Minecraft experience with custom plugins, unique gameplay mechanics, and a friendly community. We're excited to welcome our first players and begin this adventure together.",
      category: "Announcement",
      isRecent: false,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Server Updates</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Stay informed about the latest changes, events, and announcements for MurkCraft
        </p>
      </div>

      <div className="grid gap-6 mb-12">
        {updates.map((update) => (
          <Card key={update.id} className={update.isRecent ? "border-green-500/50" : ""}>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    {update.title}
                    {update.isRecent && <Badge className="ml-2">New</Badge>}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-1 mt-1">
                    <CalendarDays className="h-3 w-3" />
                    {update.date}
                  </CardDescription>
                </div>
                <Badge variant="outline">{update.category}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p>{update.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-muted rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Update Schedule</h2>
        <p className="mb-4">
          We strive to keep MurkCraft fresh and exciting with regular updates and events. Here's our typical update
          schedule:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <span className="font-medium">Weekly:</span> Minor bug fixes and small improvements
          </li>
          <li>
            <span className="font-medium">Monthly:</span> Plugin updates and balance changes
          </li>
          <li>
            <span className="font-medium">Quarterly:</span> Major content updates and new features
          </li>
          <li>
            <span className="font-medium">Seasonal:</span> Special events and limited-time activities
          </li>
        </ul>
      </div>
    </div>
  )
}

