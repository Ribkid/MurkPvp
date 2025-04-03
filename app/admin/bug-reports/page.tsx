import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays } from "lucide-react"

export default async function BugReportsAdminPage() {
  // In a real implementation, you would fetch this data from your database
  // For now, we'll use placeholder data
  const bugReports = [
    {
      id: 1,
      username: "Player123",
      title: "Can't teleport to spawn",
      category: "gameplay",
      description: "When I try to use /spawn, nothing happens. No error message, just nothing.",
      steps: "1. Try to use /spawn command\n2. Nothing happens",
      status: "new",
      created_at: "2023-07-20T14:30:00Z",
    },
    {
      id: 2,
      username: "MinerGuy42",
      title: "Valhalla MMO skills not leveling up",
      category: "plugin",
      description: "I've been mining for hours but my mining skill in Valhalla MMO isn't increasing.",
      steps: "1. Mine blocks\n2. Check skills with /vmmo skills\n3. Notice mining skill isn't increasing",
      status: "in-progress",
      created_at: "2023-07-19T10:15:00Z",
    },
    {
      id: 3,
      username: "CraftMaster99",
      title: "Server lag in new world",
      category: "performance",
      description: "Experiencing severe lag in the new world with leveled mobs. TPS drops to around 10.",
      steps: "1. Enter the new world\n2. Walk around for a few minutes\n3. Notice significant lag spikes",
      status: "resolved",
      created_at: "2023-07-18T08:45:00Z",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-blue-500/20 text-blue-500 border-blue-500/50"
      case "in-progress":
        return "bg-yellow-500/20 text-yellow-500 border-yellow-500/50"
      case "resolved":
        return "bg-green-500/20 text-green-500 border-green-500/50"
      default:
        return ""
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Bug Reports Admin</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">Manage and track bug reports submitted by players</p>
      </div>

      <div className="grid gap-6 mb-12">
        {bugReports.map((report) => (
          <Card key={report.id}>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    {report.title}
                    <Badge className={getStatusColor(report.status)}>
                      {report.status.charAt(0).toUpperCase() + report.status.slice(1)}
                    </Badge>
                  </CardTitle>
                  <CardDescription className="flex items-center gap-1 mt-1">
                    <CalendarDays className="h-3 w-3" />
                    {new Date(report.created_at).toLocaleDateString()} by {report.username}
                  </CardDescription>
                </div>
                <Badge variant="outline">{report.category}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium mb-1">Description:</h3>
                  <p className="text-sm text-muted-foreground">{report.description}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-1">Steps to Reproduce:</h3>
                  <p className="text-sm text-muted-foreground whitespace-pre-line">{report.steps}</p>
                </div>
                {/* In a real implementation, you would add action buttons here */}
                <div className="flex gap-2 pt-2">
                  <button className="text-xs px-2 py-1 rounded bg-muted hover:bg-muted/80">Mark In Progress</button>
                  <button className="text-xs px-2 py-1 rounded bg-muted hover:bg-muted/80">Mark Resolved</button>
                  <button className="text-xs px-2 py-1 rounded bg-muted hover:bg-muted/80">Add Comment</button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

