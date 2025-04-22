import type { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Lands | MurkCraft Wiki",
  description: "Guide to the Lands plugin on the MurkCraft server",
}

export default function LandsPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col gap-4 mb-8">
        <h1 className="text-4xl font-bold">Lands Plugin Player Guide</h1>
        <p className="text-xl text-muted-foreground">
          A comprehensive guide to the Lands plugin on the MurkCraft server.
        </p>
      </div>

      <div className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Introduction</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Lands is a comprehensive land protection plugin for Minecraft servers that allows players to claim land,
              manage permissions through roles, create nations, wage wars, establish camps, and more. This guide will
              help you understand the key features and commands available to players.
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="basics" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
          <TabsTrigger value="basics">Basic Concepts</TabsTrigger>
          <TabsTrigger value="commands">Commands</TabsTrigger>
          <TabsTrigger value="roles">Roles & Flags</TabsTrigger>
          <TabsTrigger value="wars">Wars System</TabsTrigger>
          <TabsTrigger value="tips">Tips & Issues</TabsTrigger>
        </TabsList>

        <TabsContent value="basics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Basic Concepts</CardTitle>
              <CardDescription>Understanding the fundamental concepts of the Lands plugin</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="font-bold">Lands:</span>
                  <span>Protected areas that you can claim, where you control who can do what</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold">Roles:</span>
                  <span>Permission groups within your land (Owner, Member, Visitor, etc.)</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold">Flags:</span>
                  <span>Specific permissions for different actions (building, breaking blocks, etc.)</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold">Nations:</span>
                  <span>Alliances of multiple lands</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold">Areas:</span>
                  <span>Sub-regions within your land that can have different settings</span>
                </li>
              </ul>

              <Alert className="mt-6">
                <Info className="h-4 w-4" />
                <AlertTitle>Tip</AlertTitle>
                <AlertDescription>
                  Most player interactions with Lands can be done through the GUI menu system by using{" "}
                  <code>/lands menu</code> or simply <code>/lands</code>.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="commands" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Player Commands</CardTitle>
              <CardDescription>Essential commands for managing your lands</CardDescription>
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-medium mb-2">Land Management</h3>
              <Table className="mb-6">
                <TableHeader>
                  <TableRow>
                    <TableHead>Command</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <code>/lands create &lt;name&gt;</code>
                    </TableCell>
                    <TableCell>Create a new land</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <code>/lands claim</code>
                    </TableCell>
                    <TableCell>Claim the chunk you're standing in</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <code>/lands unclaim</code>
                    </TableCell>
                    <TableCell>Unclaim the chunk you're standing in</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <code>/lands info</code>
                    </TableCell>
                    <TableCell>Show information about the land you're in</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <code>/lands map</code>
                    </TableCell>
                    <TableCell>Show a map of claimed chunks around you</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <code>/lands trust &lt;player&gt;</code>
                    </TableCell>
                    <TableCell>Add a player to your land</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <code>/lands untrust &lt;player&gt;</code>
                    </TableCell>
                    <TableCell>Remove a player from your land</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="roles" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Roles & Permissions</CardTitle>
              <CardDescription>Understanding the role system in Lands</CardDescription>
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-medium mb-2">Default Roles</h3>
              <p className="mb-4">Lands comes with several default roles that have different permission levels:</p>
              <Table className="mb-6">
                <TableHeader>
                  <TableRow>
                    <TableHead>Role</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Owner</TableCell>
                    <TableCell>Has full control over the land, can manage all aspects</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Admin</TableCell>
                    <TableCell>Can manage most aspects of the land except ownership transfer and deletion</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Member</TableCell>
                    <TableCell>Can build, break blocks, and use most features within the land</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Visitor</TableCell>
                    <TableCell>Has limited permissions, typically can only enter the land</TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <h3 className="text-lg font-medium mb-2">Custom Roles</h3>
              <p className="mb-4">Land owners can create custom roles with specific permissions using:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>
                  <code>/lands role create &lt;name&gt;</code> - Create a new role
                </li>
                <li>
                  <code>/lands role edit &lt;role&gt;</code> - Edit a role's permissions
                </li>
                <li>
                  <code>/lands role list</code> - List all roles in your land
                </li>
              </ul>

              <h3 className="text-lg font-medium mb-2">Common Flags</h3>
              <p className="mb-4">Flags control what actions can be performed in a land. Here are some common flags:</p>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Flag</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>build</TableCell>
                    <TableCell>Allows placing blocks</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>break</TableCell>
                    <TableCell>Allows breaking blocks</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>interact</TableCell>
                    <TableCell>Allows interacting with blocks (doors, buttons, etc.)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>container</TableCell>
                    <TableCell>Allows accessing containers (chests, furnaces, etc.)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>pvp</TableCell>
                    <TableCell>Allows player vs player combat</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>mob-damage</TableCell>
                    <TableCell>Allows damaging mobs</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>fly</TableCell>
                    <TableCell>Allows flying (if player has flight capability)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>teleport</TableCell>
                    <TableCell>Allows teleporting to the land</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="wars" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Wars System</CardTitle>
              <CardDescription>Understanding the war mechanics in Lands</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                The Lands plugin includes a comprehensive war system that allows lands and nations to declare war on
                each other.
              </p>

              <h3 className="text-lg font-medium mb-2">Declaring War</h3>
              <p className="mb-4">To declare war on another land or nation:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>
                  <code>/lands war declare &lt;land/nation&gt;</code> - Declare war
                </li>
                <li>Wars can be between lands, nations, or a combination</li>
                <li>War declarations may require confirmation</li>
              </ul>

              <h3 className="text-lg font-medium mb-2">During War</h3>
              <p className="mb-4">When at war, special rules apply:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>PVP is enabled between warring factions regardless of land settings</li>
                <li>Depending on server configuration, you may be able to break blocks in enemy territory</li>
                <li>
                  War participants can check war status with <code>/lands war status</code>
                </li>
              </ul>

              <h3 className="text-lg font-medium mb-2">Ending Wars</h3>
              <p className="mb-4">Wars can end in several ways:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>
                  <code>/lands war surrender</code> - Surrender to your enemies
                </li>
                <li>
                  <code>/lands war peace &lt;land/nation&gt;</code> - Offer peace to an enemy
                </li>
                <li>The enemy must accept your peace offer for the war to end</li>
                <li>Server administrators can force end wars</li>
              </ul>

              <div className="bg-muted p-4 rounded-lg">
                <p className="font-medium">Note:</p>
                <p>
                  For more detailed information about the war system, visit the{" "}
                  <Link href="/lands/wars" className="text-primary hover:underline">
                    Wars System Guide
                  </Link>
                  .
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tips" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Tips & Common Issues</CardTitle>
              <CardDescription>Helpful tips and solutions to common problems</CardDescription>
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-medium mb-2">Claiming Tips</h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>
                  Use <code>/lands selection</code> to claim multiple chunks at once
                </li>
                <li>Claim in a square or rectangle shape for easier management</li>
                <li>Remember that claims are chunk-based (16x16 blocks)</li>
                <li>
                  Use <code>/lands map</code> frequently to visualize your claims
                </li>
              </ul>

              <h3 className="text-lg font-medium mb-2">Permission Management</h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Create specific roles for different types of members (builders, visitors, etc.)</li>
                <li>Use areas within your land to set different permissions for different regions</li>
                <li>Test permissions with a second account or ask a friend to help test</li>
                <li>Remember that higher roles inherit permissions from lower roles</li>
              </ul>

              <h3 className="text-lg font-medium mb-2">Common Issues</h3>
              <div className="space-y-4">
                <div className="p-3 border rounded-md">
                  <p className="font-medium">Can't build in your own land?</p>
                  <p>
                    Make sure you have the build flag enabled for your role. Check with <code>/lands info</code>.
                  </p>
                </div>

                <div className="p-3 border rounded-md">
                  <p className="font-medium">Can't claim more chunks?</p>
                  <p>
                    You may have reached your claim limit. Check with <code>/lands info</code> to see your current
                    claims and limit.
                  </p>
                </div>

                <div className="p-3 border rounded-md">
                  <p className="font-medium">Redstone not working?</p>
                  <p>Make sure the redstone flag is enabled for the appropriate roles.</p>
                </div>

                <div className="p-3 border rounded-md">
                  <p className="font-medium">Mobs not spawning?</p>
                  <p>Check if the mob-spawn flag is enabled in your land.</p>
                </div>
              </div>

              <h3 className="text-lg font-medium mt-4 mb-2">Advanced Tips</h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Use outposts to claim non-contiguous chunks away from your main base</li>
                <li>
                  Set up a spawn point in your land with <code>/lands setspawn</code>
                </li>
                <li>Join a nation for additional protection and allies</li>
                <li>Use areas to create different zones within your land (public shops, private residences, etc.)</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
