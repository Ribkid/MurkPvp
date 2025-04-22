import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Coins, Trophy, Scroll, Info, HelpCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Skyblock | MurkCraft Wiki",
  description: "Information about the MurkCraft Skyblock server",
}

export default function SkyblockPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col gap-4 mb-8">
        <h1 className="text-4xl font-bold">Skyblock Server</h1>
        <p className="text-xl text-muted-foreground">
          Everything you need to know about the MurkCraft Skyblock server.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Welcome to Skyblock</CardTitle>
            <CardDescription>Start with an island and build your empire</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <Image
                src="/images/skyblock-logo.png"
                alt="MurkCraft Skyblock Logo"
                width={300}
                height={200}
                className="rounded-lg"
              />
              <div>
                <p className="mb-4">
                  MurkCraft Skyblock offers a unique survival experience where you start on a floating island and expand
                  your territory. With custom features, quests, and events, our Skyblock server provides endless
                  opportunities for creativity and advancement.
                </p>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">IP Address:</span>
                    <code className="bg-muted px-2 py-1 rounded">play.murkcraft.com</code>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">Version:</span>
                    <span>1.21.4</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Links</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>
                <Link href="#faq" className="text-primary hover:underline flex items-center gap-2">
                  <HelpCircle className="h-4 w-4" />
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="#quests" className="text-primary hover:underline flex items-center gap-2">
                  <Scroll className="h-4 w-4" />
                  Quest System
                </Link>
              </li>
              <li>
                <Link href="#events" className="text-primary hover:underline flex items-center gap-2">
                  <Trophy className="h-4 w-4" />
                  PvP Events
                </Link>
              </li>
              <li>
                <Link href="#economy" className="text-primary hover:underline flex items-center gap-2">
                  <Coins className="h-4 w-4" />
                  Economy Guide
                </Link>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="faq" className="w-full mb-10">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
          <TabsTrigger value="faq">FAQ</TabsTrigger>
          <TabsTrigger value="quests">Quests</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="economy">Economy</TabsTrigger>
        </TabsList>

        <TabsContent value="faq" id="faq" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5" />
                Frequently Asked Questions
              </CardTitle>
              <CardDescription>Common questions and answers about the MurkCraft Skyblock server</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How do I complete quests that require money?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Many quests require you to have a certain amount of money or to unlock specific items/features. To
                      progress through these quests:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 mb-2">
                      <li>Focus on money-making activities first (farming, mining, etc.)</li>
                      <li>Participate in PvP events which offer substantial cash rewards</li>
                      <li>Complete easier quests that give monetary rewards</li>
                      <li>Sell valuable items to other players in the marketplace</li>
                    </ul>
                    <p>
                      Remember to save your money for quest requirements rather than spending it on cosmetics early on.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>What are the best ways to make money?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">The most efficient ways to make money on the server are:</p>
                    <ol className="list-decimal pl-6 space-y-1 mb-2">
                      <li>
                        <strong>PvP Events</strong> - These offer the highest rewards for skilled players
                      </li>
                      <li>
                        <strong>Resource Farming</strong> - Setting up automatic farms for valuable resources
                      </li>
                      <li>
                        <strong>Island Minions</strong> - Upgrading your minions to collect resources while you're
                        offline
                      </li>
                      <li>
                        <strong>Trading</strong> - Buy low, sell high in the player marketplace
                      </li>
                      <li>
                        <strong>Weekly Challenges</strong> - Complete these for bonus rewards
                      </li>
                    </ol>
                    <p className="text-muted-foreground italic">
                      Tip: PvP events happen every 3 hours and can reward up to 50,000 coins for winners!
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>How do I unlock new islands and areas?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">To unlock new islands and areas:</p>
                    <ul className="list-disc pl-6 space-y-1 mb-2">
                      <li>Complete the main questline for each area</li>
                      <li>Reach specific island levels by placing blocks and adding features</li>
                      <li>Purchase island expansions from the shop</li>
                      <li>Unlock achievement milestones that grant access to special areas</li>
                    </ul>
                    <p>
                      Each new area provides access to new resources, mobs, and quests, so prioritize unlocking them.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>What are crates and how do I use them?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Crates are special reward containers that can be obtained through:</p>
                    <ul className="list-disc pl-6 space-y-1 mb-2">
                      <li>Voting for the server</li>
                      <li>Participating in events</li>
                      <li>Completing special quests</li>
                      <li>Purchasing from the store</li>
                    </ul>
                    <p className="mb-2">
                      To use a crate, take it to the Crate Area at spawn and right-click on the corresponding crate
                      type. Crates contain random rewards including money, items, and special perks.
                    </p>
                    <p className="text-muted-foreground italic">
                      Note: The crate system has recently been fixed and improved with better rewards!
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>How do minions work?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Minions are automated workers that gather resources while you're online or offline:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 mb-2">
                      <li>Place minions on your island to collect specific resources</li>
                      <li>Upgrade minions to increase their efficiency and storage</li>
                      <li>Collect resources from minions regularly</li>
                      <li>Add fuel to minions to keep them working longer</li>
                      <li>Add hoppers or auto-sellers to automate collection</li>
                    </ul>
                    <p className="text-muted-foreground italic">
                      Note: Minions have recently been fixed and now work more efficiently!
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="quests" id="quests" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scroll className="h-5 w-5" />
                Quest System
              </CardTitle>
              <CardDescription>Learn about the quest system and progression</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                The MurkCraft Skyblock server features an extensive quest system that guides your progression through
                the game. Quests are divided into several categories and difficulty levels.
              </p>

              <h3 className="text-lg font-medium mb-2">Quest Categories</h3>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>
                  <strong>Main Quests</strong> - Follow these to progress through the main storyline
                </li>
                <li>
                  <strong>Resource Quests</strong> - Focus on gathering specific resources
                </li>
                <li>
                  <strong>Combat Quests</strong> - Involve fighting mobs and bosses
                </li>
                <li>
                  <strong>Building Quests</strong> - Require you to build specific structures
                </li>
                <li>
                  <strong>Economy Quests</strong> - Related to making and spending money
                </li>
              </ul>

              <Alert className="mb-4">
                <Info className="h-4 w-4" />
                <AlertTitle>Important Quest Tip</AlertTitle>
                <AlertDescription>
                  Many quests require you to have a certain amount of money or to unlock specific features. Make sure to
                  participate in PvP events and other money-making activities to progress faster!
                </AlertDescription>
              </Alert>

              <h3 className="text-lg font-medium mb-2">Quest Rewards</h3>
              <p className="mb-2">Completing quests can reward you with:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Money and valuable items</li>
                <li>Experience levels and skill points</li>
                <li>Access to new areas and features</li>
                <li>Special abilities and perks</li>
                <li>Rare cosmetics and collectibles</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="events" id="events" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5" />
                PvP Events
              </CardTitle>
              <CardDescription>Information about server events and competitions</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                PvP events are one of the best ways to earn money on the MurkCraft Skyblock server. These events occur
                regularly and offer substantial rewards to participants and winners.
              </p>

              <h3 className="text-lg font-medium mb-2">Event Schedule</h3>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>
                  <strong>Arena Battles</strong> - Every 3 hours
                </li>
                <li>
                  <strong>Capture the Flag</strong> - Daily at 8 PM
                </li>
                <li>
                  <strong>King of the Hill</strong> - Wednesdays and Saturdays
                </li>
                <li>
                  <strong>Tournament</strong> - Last Sunday of each month
                </li>
              </ul>

              <h3 className="text-lg font-medium mb-2">Rewards</h3>
              <p className="mb-2">Event rewards vary based on the type and difficulty:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Arena Battles: 5,000 - 15,000 coins</li>
                <li>Capture the Flag: 10,000 - 25,000 coins</li>
                <li>King of the Hill: 15,000 - 30,000 coins</li>
                <li>Tournament: 50,000+ coins and special items</li>
              </ul>

              <div className="bg-muted p-4 rounded-lg">
                <p className="font-medium mb-1">Pro Tip:</p>
                <p>
                  Even if you're not great at PvP, participating in events can still earn you participation rewards.
                  These events are one of the fastest ways to earn money for completing quests and unlocking new
                  features!
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="economy" id="economy" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Coins className="h-5 w-5" />
                Economy Guide
              </CardTitle>
              <CardDescription>Understanding the server economy and money-making strategies</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                The economy on MurkCraft Skyblock is player-driven, with multiple ways to earn and spend money.
                Understanding how the economy works is crucial for efficient progression.
              </p>

              <h3 className="text-lg font-medium mb-2">Currency</h3>
              <p className="mb-4">
                The main currency is Coins, which can be earned through various activities and spent on upgrades, items,
                and unlocking new features. Soon, MurkCraft will introduce cross-server coins that can be earned on the
                Survival server and spent on Skyblock!
              </p>

              <h3 className="text-lg font-medium mb-2">Money-Making Strategies</h3>
              <ol className="list-decimal pl-6 space-y-2 mb-4">
                <li>
                  <strong>PvP Events</strong>
                  <p className="text-sm text-muted-foreground">
                    Participate in regular PvP events for substantial cash rewards, even if you don't win.
                  </p>
                </li>
                <li>
                  <strong>Resource Farming</strong>
                  <p className="text-sm text-muted-foreground">
                    Set up efficient farms for valuable resources like gold, iron, and rare crops.
                  </p>
                </li>
                <li>
                  <strong>Minions</strong>
                  <p className="text-sm text-muted-foreground">
                    Upgrade your minions to collect resources automatically, even when you're offline.
                  </p>
                </li>
                <li>
                  <strong>Player Market</strong>
                  <p className="text-sm text-muted-foreground">
                    Buy low and sell high on the player marketplace to profit from price differences.
                  </p>
                </li>
                <li>
                  <strong>Island Visitors</strong>
                  <p className="text-sm text-muted-foreground">
                    Create an attractive island to earn tips from visitors and tourists.
                  </p>
                </li>
              </ol>

              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Recent Economy Changes</AlertTitle>
                <AlertDescription>
                  Prices have been reduced across the server to make the game more affordable. The team is continuing to
                  work on balancing the economy to improve player experience.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
