import Link from "next/link"
import { ArrowRight, Check, Compass, BlocksIcon as GrassBlock, Shield, Users } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function GettingStartedPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Getting Started</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Everything you need to know to begin your adventure on MurkCraft
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="bg-muted rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-shrink-0">
              <GrassBlock className="h-16 w-16 text-green-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">Server Information</h2>
              <p className="mb-4">Connect to MurkCraft using the following server address:</p>
              <div className="bg-background p-3 rounded-md font-mono text-center mb-4">
              murkcraft.com</div>
              <p className="text-sm text-muted-foreground">Compatible with Minecraft Java Edition 1.19.2 and above</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6">First Steps</h2>

        <div className="grid gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Compass className="h-5 w-5 text-blue-500" />
                1. Explore Spawn
              </CardTitle>
              <CardDescription>Familiarize yourself with the server's central hub</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                When you first join MurkCraft, you'll spawn in our custom-built spawn area. Take some time to explore
                and discover important locations:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Visit the Welcome Center for server rules and information</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Check out the Community Board for events and announcements</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Find the Teleportation Hub to quickly travel around the server</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Visit the Server Shop to buy and sell items</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-purple-500" />
                2. Claim Your Land
              </CardTitle>
              <CardDescription>Protect your builds from griefing with our land claim system</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">MurkCraft uses GriefPrevention to allow players to claim and protect their land:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Use a golden shovel to create land claims</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Right-click one corner, then right-click the opposite corner</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>
                    Type <code>/trust [player]</code> to allow friends to build in your claim
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>You earn more claim blocks by playing on the server</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-yellow-500" />
                3. Join the Community
              </CardTitle>
              <CardDescription>Connect with other players and become part of the MurkCraft family</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">MurkCraft is more than just a Minecraft server—it's a community:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Join our Discord server to chat with other players</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Participate in community events and competitions</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Consider joining or creating a town with other players</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Share your builds and adventures on our forums</span>
                </li>
              </ul>
              <div className="mt-4">
                <Link href="/discord">
                  <Button className="flex items-center gap-2">
                    Join our Discord
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-muted rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Need More Help?</h2>
          <p className="mb-4">If you have any questions or need assistance, there are several ways to get help:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Ask in the game chat using <code>/help</code> command
            </li>
            <li>Reach out to a staff member (players with colored names)</li>
            <li>Post in the #help-and-support channel on our Discord</li>
            <li>
              Check out our{" "}
              <Link href="/faq" className="text-primary hover:underline">
                FAQ page
              </Link>{" "}
              for common questions
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

