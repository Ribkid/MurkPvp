"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { toast } from "@/components/ui/use-toast"
import { AlertCircle, Save } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function SettingsPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // General settings
  const [siteName, setSiteName] = useState("MurkCraft Wiki")
  const [siteDescription, setSiteDescription] = useState("Official wiki for the MurkCraft Minecraft server")
  const [contactEmail, setContactEmail] = useState("admin@murkcraft.com")

  // Appearance settings
  const [customCSS, setCustomCSS] = useState("")
  const [darkModeDefault, setDarkModeDefault] = useState(false)
  const [accentColor, setAccentColor] = useState("#7c3aed")

  // Moderation settings
  const [enableBugReporting, setEnableBugReporting] = useState(true)
  const [requireLogin, setRequireLogin] = useState(false)
  const [moderationLevel, setModerationLevel] = useState([2])

  // Maintenance settings
  const [maintenanceMode, setMaintenanceMode] = useState(false)
  const [maintenanceMessage, setMaintenanceMessage] = useState(
    "The wiki is currently undergoing maintenance. Please check back later.",
  )

  const handleSave = async () => {
    setIsLoading(true)
    setError(null)

    try {
      // In a real app, this would save to a database
      // For now, we'll just simulate a delay and show a success message
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Log the settings that would be saved
      console.log({
        general: {
          siteName,
          siteDescription,
          contactEmail,
        },
        appearance: {
          customCSS,
          darkModeDefault,
          accentColor,
        },
        moderation: {
          enableBugReporting,
          requireLogin,
          moderationLevel: moderationLevel[0],
        },
        maintenance: {
          maintenanceMode,
          maintenanceMessage,
        },
      })

      toast({
        title: "Settings saved",
        description: "Your changes have been saved successfully.",
      })
    } catch (err: any) {
      setError(err.message || "Failed to save settings")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your wiki settings and preferences.</p>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
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
              <CardDescription>Configure basic settings for your wiki.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="siteName">Site Name</Label>
                <Input id="siteName" value={siteName} onChange={(e) => setSiteName(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="siteDescription">Site Description</Label>
                <Textarea
                  id="siteDescription"
                  value={siteDescription}
                  onChange={(e) => setSiteDescription(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contactEmail">Contact Email</Label>
                <Input
                  id="contactEmail"
                  type="email"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSave} disabled={isLoading}>
                {isLoading ? (
                  <>Saving...</>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Appearance Settings</CardTitle>
              <CardDescription>Customize the look and feel of your wiki.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="customCSS">Custom CSS</Label>
                <Textarea
                  id="customCSS"
                  value={customCSS}
                  onChange={(e) => setCustomCSS(e.target.value)}
                  placeholder="/* Add your custom CSS here */"
                  className="font-mono"
                  rows={8}
                />
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="darkMode" checked={darkModeDefault} onCheckedChange={setDarkModeDefault} />
                <Label htmlFor="darkMode">Use Dark Mode as Default</Label>
              </div>
              <div className="space-y-2">
                <Label htmlFor="accentColor">Accent Color</Label>
                <div className="flex items-center space-x-2">
                  <Input
                    id="accentColor"
                    type="color"
                    value={accentColor}
                    onChange={(e) => setAccentColor(e.target.value)}
                    className="w-12 h-8 p-1"
                  />
                  <Input value={accentColor} onChange={(e) => setAccentColor(e.target.value)} className="flex-1" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSave} disabled={isLoading}>
                {isLoading ? (
                  <>Saving...</>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="moderation" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Moderation Settings</CardTitle>
              <CardDescription>Configure moderation and user interaction settings.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch id="enableReporting" checked={enableBugReporting} onCheckedChange={setEnableBugReporting} />
                <Label htmlFor="enableReporting">Enable Bug Reporting</Label>
              </div>
              <p className="text-sm text-muted-foreground">Allow users to submit bug reports through the wiki.</p>

              <div className="flex items-center space-x-2 pt-4">
                <Switch id="requireLogin" checked={requireLogin} onCheckedChange={setRequireLogin} />
                <Label htmlFor="requireLogin">Require Login for Bug Reports</Label>
              </div>
              <p className="text-sm text-muted-foreground">Users must be logged in to submit bug reports.</p>

              <div className="space-y-2 pt-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="moderationLevel">Moderation Level</Label>
                  <span className="text-sm">
                    {moderationLevel[0] === 0
                      ? "None"
                      : moderationLevel[0] === 1
                        ? "Low"
                        : moderationLevel[0] === 2
                          ? "Medium"
                          : moderationLevel[0] === 3
                            ? "High"
                            : "Very High"}
                  </span>
                </div>
                <Slider
                  id="moderationLevel"
                  min={0}
                  max={4}
                  step={1}
                  value={moderationLevel}
                  onValueChange={setModerationLevel}
                  className="py-4"
                />
                <p className="text-sm text-muted-foreground">
                  Controls how strictly bug reports are moderated before being visible to staff.
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSave} disabled={isLoading}>
                {isLoading ? (
                  <>Saving...</>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="maintenance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Maintenance Mode</CardTitle>
              <CardDescription>Configure maintenance mode settings.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch id="maintenanceMode" checked={maintenanceMode} onCheckedChange={setMaintenanceMode} />
                <Label htmlFor="maintenanceMode">Enable Maintenance Mode</Label>
              </div>
              <p className="text-sm text-muted-foreground">
                When enabled, the wiki will display a maintenance message to all users except administrators.
              </p>

              <div className="space-y-2 pt-4">
                <Label htmlFor="maintenanceMessage">Maintenance Message</Label>
                <Textarea
                  id="maintenanceMessage"
                  value={maintenanceMessage}
                  onChange={(e) => setMaintenanceMessage(e.target.value)}
                  rows={4}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSave} disabled={isLoading}>
                {isLoading ? (
                  <>Saving...</>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
