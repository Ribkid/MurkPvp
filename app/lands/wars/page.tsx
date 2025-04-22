import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info, AlertTriangle } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Wars System | Lands | MurkCraft Wiki",
  description: "Guide to the Wars system in the Lands plugin on MurkCraft",
}

export default function LandsWarsPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col gap-4 mb-8">
        <h1 className="text-4xl font-bold">Lands Wars System</h1>
        <p className="text-xl text-muted-foreground">A comprehensive guide to the Wars system in the Lands plugin.</p>

        <div className="flex justify-start">
          <Link href="/lands" className="text-primary hover:underline">
            ← Back to Lands Overview
          </Link>
        </div>
      </div>

      <Alert className="mb-8" variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Important War Information</AlertTitle>
        <AlertDescription>
          Wars have real consequences in the game. Land can be lost, items can be stolen, and builds can be damaged
          depending on server settings. Make sure you understand the system before engaging in warfare.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="basics" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
          <TabsTrigger value="basics">War Basics</TabsTrigger>
          <TabsTrigger value="mechanics">War Mechanics</TabsTrigger>
          <TabsTrigger value="strategy">War Strategy</TabsTrigger>
          <TabsTrigger value="peace">Peace Process</TabsTrigger>
        </TabsList>

        <TabsContent value="basics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>War Basics</CardTitle>
              <CardDescription>Understanding the fundamentals of the war system</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="text-lg font-medium">What is the War System?</h3>
              <p>
                The Lands War System allows lands and nations to formally declare war on each other. During wartime,
                special rules apply that allow for combat, raiding, and conquest between the warring parties.
              </p>

              <h3 className="text-lg font-medium">War Declaration</h3>
              <p>
                To declare war, a land or nation owner must use the command{" "}
                <code>/lands war declare &lt;land/nation&gt;</code>. This initiates a war between the two parties. Wars
                can be declared between:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Land vs Land</li>
                <li>Land vs Nation</li>
                <li>Nation vs Land</li>
                <li>Nation vs Nation</li>
              </ul>

              <h3 className="text-lg font-medium">War Participants</h3>
              <p>
                When a war is declared, all members of the involved lands/nations become participants in the war. This
                means:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Members of warring lands can attack each other without consequences</li>
                <li>Special war flags are activated in enemy territories</li>
                <li>War-specific commands become available</li>
              </ul>

              <Alert className="mt-4">
                <Info className="h-4 w-4" />
                <AlertTitle>War Cooldowns</AlertTitle>
                <AlertDescription>
                  After a war ends, there is typically a cooldown period before the same lands can declare war on each
                  other again. This prevents constant war cycling.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="mechanics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>War Mechanics</CardTitle>
              <CardDescription>How wars function on the server</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="text-lg font-medium">War Flags</h3>
              <p>During wartime, special flags are activated in enemy territories for war participants:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>PVP:</strong> Always enabled between warring factions
                </li>
                <li>
                  <strong>Build/Break:</strong> May be enabled depending on server settings
                </li>
                <li>
                  <strong>Item Use:</strong> May be enabled depending on server settings
                </li>
                <li>
                  <strong>Container Access:</strong> May be enabled depending on server settings
                </li>
              </ul>

              <h3 className="text-lg font-medium">War Points</h3>
              <p>Wars are often tracked using a point system:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Points are earned by killing enemy players</li>
                <li>Points may be earned by capturing specific areas</li>
                <li>The side with more points has an advantage in negotiations</li>
              </ul>

              <h3 className="text-lg font-medium">Land Conquest</h3>
              <p>Depending on server settings, wars may allow for land conquest:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Attackers may be able to claim chunks from defeated enemies</li>
                <li>Some servers implement a "war chest" system where lands must pay to maintain war</li>
                <li>Conquest may be limited to border chunks only</li>
              </ul>

              <h3 className="text-lg font-medium">War Duration</h3>
              <p>Wars can end in several ways:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  One side surrenders using <code>/lands war surrender</code>
                </li>
                <li>
                  Both sides agree to peace using <code>/lands war peace</code>
                </li>
                <li>Server administrators force an end to the war</li>
                <li>A time limit is reached (if configured)</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="strategy" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>War Strategy</CardTitle>
              <CardDescription>Tips for engaging in warfare</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="text-lg font-medium">Preparation</h3>
              <p>Before declaring war, consider these preparations:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Secure valuable items in hidden or protected storage</li>
                <li>Create backup bases outside your main territory</li>
                <li>Stock up on combat supplies (potions, golden apples, etc.)</li>
                <li>Coordinate with all land/nation members about the war</li>
                <li>Consider forming alliances with other lands/nations</li>
              </ul>

              <h3 className="text-lg font-medium">Defensive Strategies</h3>
              <p>To protect your land during war:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Build walls and fortifications around important areas</li>
                <li>Set up traps in likely invasion paths</li>
                <li>Create multiple layers of defense</li>
                <li>Establish watch schedules to ensure someone is online</li>
                <li>Use redstone mechanisms for quick escape routes</li>
              </ul>

              <h3 className="text-lg font-medium">Offensive Strategies</h3>
              <p>When attacking enemy lands:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Scout enemy territory before attacking</li>
                <li>Attack when you have a numerical advantage</li>
                <li>Focus on high-value targets (storage, spawns, etc.)</li>
                <li>Use coordinated attacks from multiple directions</li>
                <li>Consider guerrilla tactics if outnumbered</li>
              </ul>

              <Alert className="mt-4">
                <Info className="h-4 w-4" />
                <AlertTitle>Remember Server Rules</AlertTitle>
                <AlertDescription>
                  Even during war, all server rules still apply. Harassment, excessive toxicity, or exploiting glitches
                  can result in punishment regardless of war status.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="peace" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Peace Process</CardTitle>
              <CardDescription>How to end wars and negotiate peace</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="text-lg font-medium">Surrender</h3>
              <p>If you're losing a war and want to end it:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Use <code>/lands war surrender</code> to surrender to all enemies
                </li>
                <li>Surrendering typically means accepting the enemy's terms</li>
                <li>This may include land concessions, item payments, or other penalties</li>
                <li>Surrendering immediately ends the war</li>
              </ul>

              <h3 className="text-lg font-medium">Peace Negotiations</h3>
              <p>For a more balanced end to war:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Use <code>/lands war peace &lt;land/nation&gt;</code> to offer peace
                </li>
                <li>The other side must accept your peace offer</li>
                <li>Peace negotiations often involve compromise from both sides</li>
                <li>Consider using a neutral third party to mediate negotiations</li>
              </ul>

              <h3 className="text-lg font-medium">Peace Treaties</h3>
              <p>After agreeing to peace, consider formalizing your agreement:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Use written books to document peace terms</li>
                <li>Clearly outline any territorial changes</li>
                <li>Specify any reparations to be paid</li>
                <li>Include non-aggression terms for future relations</li>
                <li>Consider forming an alliance to prevent future conflicts</li>
              </ul>

              <h3 className="text-lg font-medium">Post-War Recovery</h3>
              <p>After a war ends:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Rebuild damaged structures</li>
                <li>Restock lost supplies</li>
                <li>Reorganize land claims if territory was lost</li>
                <li>Consider strengthening defenses for the future</li>
                <li>Review what went well and what didn't for future conflicts</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
