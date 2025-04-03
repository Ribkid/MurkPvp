import { Shield, Check, X } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function RulesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Server Rules</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Guidelines to ensure a fair and enjoyable experience for all players
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              General Rules
            </CardTitle>
            <CardDescription>Core rules that apply to all players</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium">Respect All Players</h3>
              <p className="text-sm text-muted-foreground">
                Treat all players with respect. Harassment, discrimination, and excessive toxicity are not tolerated.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">PvP and Raiding</h3>
              <p className="text-sm text-muted-foreground">
                Raiding is allowed, but excessive griefing should be refrained from. Destroy only what you need to
                access loot.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">Cheating and Modifications</h3>
              <p className="text-sm text-muted-foreground">
                Hack clients and game-altering cheats are strictly prohibited. However, quality-of-life modifications
                like full brightness texture packs are allowed.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-green-500/10 border border-green-500/20 rounded-md p-3">
                  <h4 className="font-medium flex items-center gap-2 text-green-500">
                    <Check className="h-4 w-4" /> Allowed Mods
                  </h4>
                  <ul className="mt-2 space-y-1 text-sm">
                    <li>• Full brightness texture packs</li>
                    <li>• Minimap mods (without entity radar)</li>
                    <li>• Performance optimization mods</li>
                    <li>• Cosmetic mods</li>
                  </ul>
                </div>

                <div className="bg-red-500/10 border border-red-500/20 rounded-md p-3">
                  <h4 className="font-medium flex items-center gap-2 text-red-500">
                    <X className="h-4 w-4" /> Prohibited Mods
                  </h4>
                  <ul className="mt-2 space-y-1 text-sm">
                    <li>• Hack clients</li>
                    <li>• X-ray mods</li>
                    <li>• Auto-clickers/macros</li>
                    <li>• Any mod giving unfair advantages</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">Chat and Communication</h3>
              <p className="text-sm text-muted-foreground">
                No excessive profanity or inappropriate content in public chats. Keep discussions respectful.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">Exploits and Bugs</h3>
              <p className="text-sm text-muted-foreground">
                Exploiting bugs for personal gain is prohibited. Report any bugs you find through our bug report system.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Land and Building Rules</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium">Land Claims</h3>
              <p className="text-sm text-muted-foreground">
                Use the land claim system to protect your builds. Respect others' claimed land.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">Building Etiquette</h3>
              <p className="text-sm text-muted-foreground">
                Maintain a reasonable distance from other players' builds unless invited. Avoid creating lag-inducing
                structures.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Rule Enforcement</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Rule violations will be handled on a case-by-case basis by the staff team. Consequences may include:
            </p>

            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>Verbal warnings</li>
              <li>Temporary mutes or bans</li>
              <li>Permanent bans for severe or repeated violations</li>
            </ul>

            <p className="text-sm text-muted-foreground mt-4">
              Staff decisions are final, but you may appeal bans through our Discord server.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

