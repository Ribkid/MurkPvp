import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info } from "lucide-react"

export const metadata: Metadata = {
  title: "Commands | Lands | MurkCraft Wiki",
  description: "Complete list of commands for the Lands plugin on MurkCraft",
}

export default function LandsCommandsPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col gap-4 mb-8">
        <h1 className="text-4xl font-bold">Lands Commands Reference</h1>
        <p className="text-xl text-muted-foreground">
          A comprehensive list of all commands available in the Lands plugin.
        </p>

        <div className="flex justify-start">
          <Link href="/lands" className="text-primary hover:underline">
            ← Back to Lands Overview
          </Link>
        </div>
      </div>

      <Alert className="mb-8">
        <Info className="h-4 w-4" />
        <AlertTitle>Command Tip</AlertTitle>
        <AlertDescription>
          Most player interactions with Lands can be done through the GUI menu system by using <code>/lands menu</code>{" "}
          or simply <code>/lands</code>.
        </AlertDescription>
      </Alert>

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Basic Land Management</CardTitle>
            <CardDescription>Essential commands for creating and managing lands</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Command</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Permission</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <code>/lands</code>
                  </TableCell>
                  <TableCell>Opens the main Lands GUI menu</TableCell>
                  <TableCell>All players</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <code>/lands create &lt;name&gt;</code>
                  </TableCell>
                  <TableCell>Creates a new land with the specified name</TableCell>
                  <TableCell>All players</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <code>/lands claim</code>
                  </TableCell>
                  <TableCell>Claims the chunk you're standing in for your land</TableCell>
                  <TableCell>Land owners/admins</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <code>/lands unclaim</code>
                  </TableCell>
                  <TableCell>Unclaims the chunk you're standing in</TableCell>
                  <TableCell>Land owners/admins</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <code>/lands delete</code>
                  </TableCell>
                  <TableCell>Deletes your land permanently</TableCell>
                  <TableCell>Land owners</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <code>/lands info</code>
                  </TableCell>
                  <TableCell>Shows information about the land you're standing in</TableCell>
                  <TableCell>All players</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <code>/lands map</code>
                  </TableCell>
                  <TableCell>Shows a map of claimed chunks around you</TableCell>
                  <TableCell>All players</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <code>/lands selection</code>
                  </TableCell>
                  <TableCell>Toggles selection mode for claiming multiple chunks</TableCell>
                  <TableCell>Land owners/admins</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <code>/lands selection claim</code>
                  </TableCell>
                  <TableCell>Claims all selected chunks</TableCell>
                  <TableCell>Land owners/admins</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <code>/lands selection unclaim</code>
                  </TableCell>
                  <TableCell>Unclaims all selected chunks</TableCell>
                  <TableCell>Land owners/admins</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Player Management</CardTitle>
            <CardDescription>Commands for managing players in your land</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Command</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Permission</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <code>/lands trust &lt;player&gt;</code>
                  </TableCell>
                  <TableCell>Adds a player to your land with the default role</TableCell>
                  <TableCell>Land owners/admins</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <code>/lands untrust &lt;player&gt;</code>
                  </TableCell>
                  <TableCell>Removes a player from your land</TableCell>
                  <TableCell>Land owners/admins</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <code>/lands setrole &lt;player&gt; &lt;role&gt;</code>
                  </TableCell>
                  <TableCell>Sets a player's role in your land</TableCell>
                  <TableCell>Land owners/admins</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <code>/lands ban &lt;player&gt;</code>
                  </TableCell>
                  <TableCell>Bans a player from your land</TableCell>
                  <TableCell>Land owners/admins</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <code>/lands unban &lt;player&gt;</code>
                  </TableCell>
                  <TableCell>Unbans a player from your land</TableCell>
                  <TableCell>Land owners/admins</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <code>/lands setspawn</code>
                  </TableCell>
                  <TableCell>Sets the spawn point for your land</TableCell>
                  <TableCell>Land owners/admins</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <code>/lands spawn &lt;land&gt;</code>
                  </TableCell>
                  <TableCell>Teleports you to a land's spawn point</TableCell>
                  <TableCell>Varies by land settings</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Roles and Permissions</CardTitle>
            <CardDescription>Commands for managing roles and permissions</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Command</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Permission</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <code>/lands role create &lt;name&gt;</code>
                  </TableCell>
                  <TableCell>Creates a new role in your land</TableCell>
                  <TableCell>Land owners/admins</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <code>/lands role delete &lt;role&gt;</code>
                  </TableCell>
                  <TableCell>Deletes a role from your land</TableCell>
                  <TableCell>Land owners/admins</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <code>/lands role edit &lt;role&gt;</code>
                  </TableCell>
                  <TableCell>Opens the role editing menu</TableCell>
                  <TableCell>Land owners/admins</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <code>/lands role list</code>
                  </TableCell>
                  <TableCell>Lists all roles in your land</TableCell>
                  <TableCell>Land owners/admins</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <code>/lands flag set &lt;flag&gt; &lt;value&gt;</code>
                  </TableCell>
                  <TableCell>Sets a flag for your land</TableCell>
                  <TableCell>Land owners/admins</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <code>/lands flag set &lt;flag&gt; &lt;value&gt; &lt;role&gt;</code>
                  </TableCell>
                  <TableCell>Sets a flag for a specific role</TableCell>
                  <TableCell>Land owners/admins</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Nations and Alliances</CardTitle>
            <CardDescription>Commands for managing nations and alliances</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Command</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Permission</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <code>/lands nation create &lt;name&gt;</code>
                  </TableCell>
                  <TableCell>Creates a new nation</TableCell>
                  <TableCell>Land owners</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <code>/lands nation invite &lt;land&gt;</code>
                  </TableCell>
                  <TableCell>Invites a land to your nation</TableCell>
                  <TableCell>Nation owners/admins</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <code>/lands nation join &lt;nation&gt;</code>
                  </TableCell>
                  <TableCell>Joins a nation that invited your land</TableCell>
                  <TableCell>Land owners</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <code>/lands nation leave</code>
                  </TableCell>
                  <TableCell>Leaves your current nation</TableCell>
                  <TableCell>Land owners</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <code>/lands nation kick &lt;land&gt;</code>
                  </TableCell>
                  <TableCell>Kicks a land from your nation</TableCell>
                  <TableCell>Nation owners/admins</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <code>/lands nation delete</code>
                  </TableCell>
                  <TableCell>Deletes your nation</TableCell>
                  <TableCell>Nation owners</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <code>/lands ally add &lt;land/nation&gt;</code>
                  </TableCell>
                  <TableCell>Adds a land or nation as an ally</TableCell>
                  <TableCell>Land/nation owners</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <code>/lands ally remove &lt;land/nation&gt;</code>
                  </TableCell>
                  <TableCell>Removes a land or nation from allies</TableCell>
                  <TableCell>Land/nation owners</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>War System</CardTitle>
            <CardDescription>Commands for the war system</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Command</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Permission</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <code>/lands war declare &lt;land/nation&gt;</code>
                  </TableCell>
                  <TableCell>Declares war on a land or nation</TableCell>
                  <TableCell>Land/nation owners</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <code>/lands war surrender</code>
                  </TableCell>
                  <TableCell>Surrenders in an active war</TableCell>
                  <TableCell>Land/nation owners</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <code>/lands war status</code>
                  </TableCell>
                  <TableCell>Shows the status of your active wars</TableCell>
                  <TableCell>Land/nation members</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <code>/lands war peace &lt;land/nation&gt;</code>
                  </TableCell>
                  <TableCell>Offers peace to an enemy land/nation</TableCell>
                  <TableCell>Land/nation owners</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Camps and Outposts</CardTitle>
            <CardDescription>Commands for managing temporary camps and outposts</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Command</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Permission</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <code>/lands camp create</code>
                  </TableCell>
                  <TableCell>Creates a temporary camp at your location</TableCell>
                  <TableCell>All players</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <code>/lands camp delete</code>
                  </TableCell>
                  <TableCell>Deletes your camp</TableCell>
                  <TableCell>Camp owner</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <code>/lands camp trust &lt;player&gt;</code>
                  </TableCell>
                  <TableCell>Trusts a player in your camp</TableCell>
                  <TableCell>Camp owner</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <code>/lands camp untrust &lt;player&gt;</code>
                  </TableCell>
                  <TableCell>Untrusts a player from your camp</TableCell>
                  <TableCell>Camp owner</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <code>/lands camp spawn</code>
                  </TableCell>
                  <TableCell>Teleports to your camp</TableCell>
                  <TableCell>Camp owner/trusted</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <code>/lands outpost create &lt;name&gt;</code>
                  </TableCell>
                  <TableCell>Creates an outpost for your land</TableCell>
                  <TableCell>Land owners/admins</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <code>/lands outpost delete &lt;name&gt;</code>
                  </TableCell>
                  <TableCell>Deletes an outpost</TableCell>
                  <TableCell>Land owners/admins</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <code>/lands outpost spawn &lt;name&gt;</code>
                  </TableCell>
                  <TableCell>Teleports to an outpost</TableCell>
                  <TableCell>Land members</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
