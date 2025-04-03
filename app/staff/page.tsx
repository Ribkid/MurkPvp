import { Users, Award, Star } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

interface StaffMember {
  name: string
  role: string
  description?: string
  badgeColor?: string
}

interface NotableMember {
  name: string
  description: string
}

export default function StaffPage() {
  const staffMembers: StaffMember[] = [
    {
      name: "Ribkid",
      role: "Server Owner",
      description: "The creator and owner of MurkCraft",
      badgeColor: "bg-red-500 text-white",
    },
    {
      name: "Zaqweds",
      role: "Head Admin & Co-Owner",
      description: "Oversees server operations and administration",
      badgeColor: "bg-orange-500 text-white",
    },
    {
      name: "Mizan909",
      role: "Admin",
      badgeColor: "bg-yellow-500 text-white",
    },
    {
      name: "PurpleSheepLiv",
      role: "Admin",
      badgeColor: "bg-yellow-500 text-white",
    },
    {
      name: "OkGreyy",
      role: "Player Moderator",
      badgeColor: "bg-blue-500 text-white",
    },
    {
      name: "Heavy_Risk",
      role: "Player Moderator",
      badgeColor: "bg-blue-500 text-white",
    },
  ]

  const notableMembers: NotableMember[] = [
    {
      name: "Onixx1",
      description: "Our youngest player from Season One and also the most dangerous player from that season",
    },
    {
      name: "B1G_BR4IN",
      description: "The reason that Season Three happened and a motivating factor of the server",
    },
    {
      name: "Montunship",
      description: "A dedicated community member",
    },
    {
      name: "GmaxWailord1",
      description: "A young player who proved himself through building and loyalty",
    },
    {
      name: "Husky_Hat",
      description: "Our first player",
    },
    {
      name: "FinalWasTaken",
      description: "Co-owner for Season Two",
    },
    {
      name: "Casiutry",
      description: "Ribkid's mentor",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Server Staff</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">Meet the team that keeps MurkCraft running smoothly</p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Users className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Staff Members</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {staffMembers.map((member) => (
              <Card key={member.name} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12 border-2 border-primary">
                      <AvatarFallback className="bg-muted">{member.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        {member.name}
                        <Badge className={member.badgeColor}>{member.role}</Badge>
                      </CardTitle>
                      {member.description && (
                        <CardDescription className="text-sm">{member.description}</CardDescription>
                      )}
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-6">
            <Star className="h-6 w-6 text-yellow-500" />
            <h2 className="text-2xl font-bold">Notable Members</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {notableMembers.map((member) => (
              <Card key={member.name}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-muted rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <Award className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-bold">Server History</h2>
          </div>
          <p className="text-sm text-muted-foreground">
            MurkCraft has evolved through multiple seasons, each with its own unique community and memorable moments.
            Our staff and notable members have been instrumental in shaping the server into what it is today. From our
            humble beginnings to our current thriving community, we're proud of the journey we've taken together.
          </p>
        </div>
      </div>
    </div>
  )
}

