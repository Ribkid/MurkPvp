import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Book, Map, Sword, Server, Clock } from "lucide-react"
import { ServerStatus } from "@/components/server-status"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
        <Image src="/images/murkcraft-hero.png" alt="MurkCraft Server" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 flex flex-col items-center justify-end pb-16 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">MurkCraft Wiki</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
            Your comprehensive guide to everything on the MurkCraft server
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/enchantments">Get Started</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/plugins">Plugins Wiki</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/changelog">Changelog</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/report">Report Bug</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="https://discord.gg/murkcraft" target="_blank">
                Join Discord
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About MurkCraft Section */}
      <section className="container py-8 md:py-12">
        <div className="flex flex-col gap-4 mb-6">
          <h2 className="text-3xl font-bold">About MurkCraft</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-lg">
                MurkCraft is a thriving community server that has been running for over a year, providing a stable and
                enjoyable Minecraft experience for all players.
              </p>
              <p>
                Unlike many servers that reset worlds regularly, MurkCraft is committed to staying online indefinitely
                with no world resets planned. This means your builds and progress are safe for the long term.
              </p>
              <p>
                Our community-focused approach ensures that player feedback shapes the future of the server, with
                regular updates and new features being added based on what our players want to see.
              </p>
            </div>
            <div className="bg-muted rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Coming Soon</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Cross-Server Currency</p>
                    <p className="text-sm text-muted-foreground">
                      Earn Murk Coins on the Survival server and spend them on the Skyblock server.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Adventure Server Update</p>
                    <p className="text-sm text-muted-foreground">
                      Update to version 1.21.4 coming in the next 1-2 weeks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Server Status Section */}
      <section className="container py-8 md:py-12">
        <div className="flex flex-col gap-4 mb-6">
          <h2 className="text-3xl font-bold">Server Status</h2>
          <p className="text-muted-foreground">
            Check the current status of our Minecraft servers and connect with one click.
          </p>
        </div>
        <ServerStatus />
      </section>

      {/* Features Section */}
      <section className="container py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <Sword className="h-10 w-10 mb-2 text-primary" />
              <CardTitle>Custom Enchantments</CardTitle>
              <CardDescription>Discover all the unique enchantments available on the server</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Explore armor, weapon, tool, bow, and fishing enchantments that go beyond vanilla Minecraft.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="/enchantments">View Enchantments</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <Book className="h-10 w-10 mb-2 text-primary" />
              <CardTitle>ValhallaMMO</CardTitle>
              <CardDescription>Master the RPG skills and progression system</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Learn about the 14 different skills, leveling, custom items, and various mechanics to enhance your
                gameplay.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="/valhalla-mmo">View ValhallaMMO Guide</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <Map className="h-10 w-10 mb-2 text-primary" />
              <CardTitle>Lands System</CardTitle>
              <CardDescription>Claim land and build your empire</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Understand how to claim land, manage permissions, create nations, wage wars, and establish camps.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="/lands">View Lands Guide</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <Server className="h-10 w-10 mb-2 text-primary" />
              <CardTitle>Our Servers</CardTitle>
              <CardDescription>Connect to our different game modes</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Explore our Survival, Skyblock, and Adventure servers, each with unique features and gameplay.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="/servers">View Servers</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted py-12">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Connect to MurkCraft today and experience a unique Minecraft server with custom enchantments, RPG
            progression, and land claiming.
          </p>
          <Button size="lg" asChild>
            <Link href="minecraft://connect/panel.murkpvp.com">Join Server: panel.murkpvp.com</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
