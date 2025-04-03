import Link from "next/link"
import Image from "next/image"
import { BlocksIcon as GrassBlock, Newspaper, Bug, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div>
      {/* Hero Section with Background Image */}
      <div className="relative h-[600px] w-full">
        <Image src="/images/murkcraft-hero.png" alt="MurkCraft Server" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/30">
          <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
            {/* Removed MurkCraft Wiki text as the logo is visible in the hero image */}
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl drop-shadow-md mt-32">
              Your ultimate resource for plugins, updates, and server information
            </p>
            <div className="flex flex-wrap gap-4 mt-8 justify-center">
              <Link href="/plugins">
                <Button size="lg" className="text-lg">
                  Explore Plugins
                </Button>
              </Link>
              <Link href="/getting-started">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg bg-black/30 text-white border-white/50 hover:bg-black/50"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="transition-all hover:shadow-lg">
            <CardHeader>
              <GrassBlock className="w-10 h-10 mb-2 text-green-500" />
              <CardTitle>Plugins</CardTitle>
              <CardDescription>Explore all the plugins running on our server</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Learn about plugin features, commands, and how to make the most of them during gameplay.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/plugins" className="w-full">
                <Button className="w-full">View Plugins</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="transition-all hover:shadow-lg">
            <CardHeader>
              <Newspaper className="w-10 h-10 mb-2 text-blue-500" />
              <CardTitle>Updates</CardTitle>
              <CardDescription>Stay informed about the latest server changes</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Check out recent updates, upcoming features, and important announcements for MurkCraft.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/updates" className="w-full">
                <Button className="w-full">View Updates</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="transition-all hover:shadow-lg">
            <CardHeader>
              <Bug className="w-10 h-10 mb-2 text-red-500" />
              <CardTitle>Bug Reports</CardTitle>
              <CardDescription>Help us improve by reporting issues</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Found a bug? Submit a detailed report to help us fix issues and improve the server experience.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/bug-report" className="w-full">
                <Button className="w-full">Report a Bug</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>

        <div className="bg-muted rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-bold mb-4">Welcome to MurkCraft!</h2>
          <p className="mb-4">
            MurkCraft is a community-driven Minecraft server focused on providing a unique and enjoyable gaming
            experience. Our server features custom plugins, regular events, and a friendly community.
          </p>
          <p className="mb-4">
            This wiki serves as your go-to resource for everything related to our server. Whether you're a new player
            looking to learn about our plugins or a veteran wanting to stay updated with the latest changes, you'll find
            all the information you need here.
          </p>
          <div className="flex justify-center mt-6">
            <Link href="/getting-started">
              <Button variant="outline" className="flex items-center gap-2">
                Getting Started Guide
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Server Rules</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Be respectful to all players</li>
                <li>No griefing or stealing</li>
                <li>No excessive profanity or inappropriate content</li>
                <li>No exploiting bugs or using hacks</li>
                <li>Have fun and enjoy the community!</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/rules" className="text-sm text-muted-foreground hover:underline">
                View complete rules
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Links</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="https://discord.gg/RPD9Cy4VA5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm hover:underline"
                  >
                    <ChevronRight className="h-4 w-4" />
                    Join our Discord
                  </Link>
                </li>
                <li>
                  <Link href="/vote" className="flex items-center gap-2 text-sm hover:underline">
                    <ChevronRight className="h-4 w-4" />
                    Vote for our server
                  </Link>
                </li>
                <li>
                  <Link href="/donate" className="flex items-center gap-2 text-sm hover:underline">
                    <ChevronRight className="h-4 w-4" />
                    Support MurkCraft
                  </Link>
                </li>
                <li>
                  <Link href="/staff" className="flex items-center gap-2 text-sm hover:underline">
                    <ChevronRight className="h-4 w-4" />
                    Meet the staff team
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="flex items-center gap-2 text-sm hover:underline">
                    <ChevronRight className="h-4 w-4" />
                    Frequently Asked Questions
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

