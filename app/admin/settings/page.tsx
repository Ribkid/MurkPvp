"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle2, AlertTriangle } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SettingsPage() {
  const [saved, setSaved] = useState(false)
  const [settings, setSettings] = useState({
    siteName: "MurkCraft Wiki",
    siteDescription: "Official wiki for the MurkCraft Minecraft server",
    contactEmail: "admin@murkcraft.com",
    discordLink: "https://discord.gg/murkcraft",
    enableReporting: true,
    requireLogin: false,
    moderationLevel: "medium",
    customCSS: "",
    maintenanceMode: false,
    maintenanceMessage: "The wiki is currently undergoing maintenance. Please check back later.",
  })

  const handleSaveSettings = () => {
    // In a real app, this would send the settings to the server
    console.log("Saving settings:", settings)
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your wiki settings and configurations.</p>
      </div>

      {saved && (
        <Alert className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-900">
          <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
          <AlertDescription>Settings saved successfully!</AlertDescription>
        </Alert>
      )}

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="moderation">Moderation</TabsTrigger>
          <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
        </TabsList>
        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>Configure general settings for your wiki.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="siteName">Site Name</Label>
                <Input
                  id="siteName"
                  value={settings.siteName}
                  onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="siteDescription">Site Description</Label>
                <Textarea
                  id="siteDescription"
                  value={settings.siteDescription}
                  onChange={(e) => setSettings({ ...settings, siteDescription: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contactEmail">Contact Email</Label>
                <Input
                  id="contactEmail"
                  type="email"
                  value={settings.contactEmail}
                  onChange={(e) => setSettings({ ...settings, contactEmail: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="discordLink">Discord Link</Label>
                <Input
                  id="discordLink"
                  value={settings.discordLink}
                  onChange={(e) => setSettings({ ...settings, discordLink: e.target.value })}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSaveSettings}>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="appearance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Appearance Settings</CardTitle>
              <CardDescription>Customize the appearance of your wiki.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="customCSS">Custom CSS</Label>
                <Textarea
                  id="customCSS"
                  value={settings.customCSS}
                  onChange={(e) => setSettings({ ...settings, customCSS: e.target.value })}
                  className="font-mono"
                  rows={10}
                  placeholder="/* Add your custom CSS here */"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSaveSettings}>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="moderation" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Moderation Settings</CardTitle>
              <CardDescription>Configure moderation settings for your wiki.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="enableReporting">Enable Bug Reporting</Label>
                  <p className="text-sm text-muted-foreground">Allow users to submit bug reports through the wiki.</p>
                </div>
                <Switch
                  id="enableReporting"
                  checked={settings.enableReporting}
                  onCheckedChange={(checked) => setSettings({ ...settings, enableReporting: checked })}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="requireLogin">Require Login for Reporting</Label>
                  <p className="text-sm text-muted-foreground">Require users to be logged in to submit bug reports.</p>
                </div>
                <Switch
                  id="requireLogin"
                  checked={settings.requireLogin}
                  onCheckedChange={(checked) => setSettings({ ...settings, requireLogin: checked })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="moderationLevel">Moderation Level</Label>
                <Select
                  value={settings.moderationLevel}
                  onValueChange={(value) => setSettings({ ...settings, moderationLevel: value })}
                >
                  <SelectTrigger id="moderationLevel">
                    <SelectValue placeholder="Select moderation level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low - Minimal moderation</SelectItem>
                    <SelectItem value="medium">Medium - Standard moderation</SelectItem>
                    <SelectItem value="high">High - Strict moderation</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-sm text-muted-foreground">Set the level of moderation for user-submitted content.</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSaveSettings}>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="maintenance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Maintenance Mode</CardTitle>
              <CardDescription>Configure maintenance mode settings for your wiki.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="maintenanceMode">Enable Maintenance Mode</Label>
                  <p className="text-sm text-muted-foreground">
                    Put the wiki into maintenance mode, showing a message to users.
                  </p>
                </div>
                <Switch
                  id="maintenanceMode"
                  checked={settings.maintenanceMode}
                  onCheckedChange={(checked) => setSettings({ ...settings, maintenanceMode: checked })}
                />
              </div>
              {settings.maintenanceMode && (
                <div className="space-y-2">
                  <Label htmlFor="maintenanceMessage">Maintenance Message</Label>
                  <Textarea
                    id="maintenanceMessage"
                    value={settings.maintenanceMessage}
                    onChange={(e) => setSettings({ ...settings, maintenanceMessage: e.target.value })}
                    rows={3}
                  />
                  <p className="text-sm text-muted-foreground">
                    This message will be displayed to users when maintenance mode is enabled.
                  </p>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex items-center text-amber-600">
                <AlertTriangle className="h-4 w-4 mr-2" />
                <span className="text-sm">Enabling maintenance mode will restrict access to the wiki.</span>
              </div>
              <Button onClick={handleSaveSettings}>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
