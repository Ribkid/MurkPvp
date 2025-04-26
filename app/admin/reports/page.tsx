"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, Search, CheckCircle, Clock, AlertCircle, RefreshCw } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { supabase } from "@/lib/supabase"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

// Mock data for bug reports
const mockReports = [
  {
    id: "1",
    username: "DragonSlayer123",
    category: "enchantments",
    description:
      "Veinminer enchantment is not working properly on diamond ore blocks. When I mine one block, it should mine the entire vein, but it only mines 2-3 blocks at most.",
    location: "Survival world, mining level around Y=12",
    status: "pending",
    priority: "medium",
    created_at: new Date().toISOString(),
    assigned_to: null,
  },
  {
    id: "2",
    username: "LandLord55",
    category: "lands",
    description:
      "Unable to declare war on another land. When I use the /lands war declare command, it says 'You cannot declare war on this land' even though we're not allies.",
    location: "Main survival server",
    status: "in-progress",
    priority: "high",
    created_at: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
    assigned_to: null,
  },
  {
    id: "3",
    username: "SkillMaster",
    category: "valhalla",
    description:
      "ValhallaMMO skill points are not applying correctly. I allocated 3 points to the Mining skill tree, but only 1 point seems to be taking effect.",
    location: "Character skill menu",
    status: "resolved",
    priority: "medium",
    created_at: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
    assigned_to: null,
  },
]

export default function BugReportsPage() {
  const [reports, setReports] = useState<any[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedReport, setSelectedReport] = useState<any | null>(null)
  const [viewDialogOpen, setViewDialogOpen] = useState(false)
  const [responseDialogOpen, setResponseDialogOpen] = useState(false)
  const [response, setResponse] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isInitializing, setIsInitializing] = useState(false)
  const [initSuccess, setInitSuccess] = useState(false)

  // Function to initialize the database
  const initializeDatabase = async () => {
    try {
      setIsInitializing(true)
      setError(null)

      const response = await fetch("/api/init-database", {
        method: "POST",
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to initialize database")
      }

      setInitSuccess(true)
      fetchReports() // Fetch reports after initializing
    } catch (err: any) {
      console.error("Error initializing database:", err)
      setError(err.message || "Failed to initialize database")
    } finally {
      setIsInitializing(false)
    }
  }

  // Function to fetch bug reports
  const fetchReports = async () => {
    try {
      setIsLoading(true)
      setError(null)

      // Try to fetch from Supabase
      if (supabase) {
        const { data, error } = await supabase.from("bug_reports").select("*").order("created_at", { ascending: false })

        if (error) {
          if (error.message.includes("does not exist")) {
            // Table doesn't exist, use mock data
            console.log("Bug reports table doesn't exist, using mock data")
            setReports(mockReports)
          } else {
            throw error
          }
        } else {
          // Use real data if available
          setReports(data || [])
        }
      } else {
        // Fallback to mock data if Supabase is not available
        setReports(mockReports)
      }
    } catch (err: any) {
      console.error("Error fetching bug reports:", err)
      setError(err.message || "Failed to fetch bug reports")
      // Use mock data as fallback
      setReports(mockReports)
    } finally {
      setIsLoading(false)
    }
  }

  // Fetch bug reports on component mount
  useEffect(() => {
    fetchReports()
  }, [])

  const filteredReports = reports.filter((report) => {
    // Filter by status
    if (statusFilter !== "all" && report.status !== statusFilter) {
      return false
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      return (
        report.username.toLowerCase().includes(query) ||
        report.description.toLowerCase().includes(query) ||
        report.category.toLowerCase().includes(query)
      )
    }

    return true
  })

  const handleViewReport = (report: any) => {
    setSelectedReport(report)
    setViewDialogOpen(true)
  }

  const handleRespondToReport = (report: any) => {
    setSelectedReport(report)
    setResponseDialogOpen(true)
  }

  const handleUpdateStatus = async (reportId: string, newStatus: string) => {
    try {
      if (supabase) {
        const { error } = await supabase.from("bug_reports").update({ status: newStatus }).eq("id", reportId)

        if (error) {
          throw error
        }
      }

      // Update local state
      setReports(reports.map((report) => (report.id === reportId ? { ...report, status: newStatus } : report)))
    } catch (err: any) {
      console.error("Error updating status:", err)
      setError(err.message || "Failed to update status")
    }
  }

  const handleAssignReport = async (reportId: string, staffId: string | null) => {
    try {
      if (supabase) {
        const { error } = await supabase.from("bug_reports").update({ assigned_to: staffId }).eq("id", reportId)

        if (error) {
          throw error
        }
      }

      // Update local state
      setReports(reports.map((report) => (report.id === reportId ? { ...report, assigned_to: staffId } : report)))
    } catch (err: any) {
      console.error("Error assigning report:", err)
      setError(err.message || "Failed to assign report")
    }
  }

  const handleUpdatePriority = async (reportId: string, priority: string) => {
    try {
      if (supabase) {
        const { error } = await supabase.from("bug_reports").update({ priority }).eq("id", reportId)

        if (error) {
          throw error
        }
      }

      // Update local state
      setReports(reports.map((report) => (report.id === reportId ? { ...report, priority } : report)))
    } catch (err: any) {
      console.error("Error updating priority:", err)
      setError(err.message || "Failed to update priority")
    }
  }

  const handleSubmitResponse = async () => {
    if (!selectedReport) return

    try {
      // In a real app, this would send the response to the user via email or notification
      console.log(`Responding to report #${selectedReport.id} with: ${response}`)

      // Update the report status to resolved
      await handleUpdateStatus(selectedReport.id, "resolved")

      // Close the dialog and reset the response
      setResponseDialogOpen(false)
      setResponse("")
    } catch (err: any) {
      console.error("Error submitting response:", err)
      setError(err.message || "Failed to submit response")
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge variant="outline" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400">
            Pending
          </Badge>
        )
      case "in-progress":
        return (
          <Badge variant="outline" className="bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400">
            In Progress
          </Badge>
        )
      case "resolved":
        return (
          <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
            Resolved
          </Badge>
        )
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "low":
        return <Badge className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300">Low</Badge>
      case "medium":
        return <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">Medium</Badge>
      case "high":
        return <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300">High</Badge>
      case "critical":
        return <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">Critical</Badge>
      default:
        return <Badge>Unknown</Badge>
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString() + " " + date.toLocaleTimeString()
  }

  const getAssignedStaffName = (staffId: string | null) => {
    if (!staffId) return "Unassigned"

    // Map staff IDs to names (in a real app, this would come from the database)
    const staffMap: Record<string, string> = {
      "1": "Ribkid",
      "2": "Zaqweds",
      "3": "Casuistry",
      "4": "Okgreyy",
      "5": "Purplesheepliv",
      "6": "Acalrhys",
    }

    return staffMap[staffId] || "Unknown"
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Bug Reports</h1>
        <p className="text-muted-foreground">Manage and respond to bug reports submitted by users.</p>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
          {error.includes("does not exist") && (
            <Button variant="outline" size="sm" className="mt-2" onClick={initializeDatabase} disabled={isInitializing}>
              {isInitializing ? "Initializing..." : "Initialize Database"}
            </Button>
          )}
        </Alert>
      )}

      {initSuccess && (
        <Alert className="bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-400">
          <CheckCircle className="h-4 w-4" />
          <AlertTitle>Database Initialized</AlertTitle>
          <AlertDescription>The bug reports table has been created successfully.</AlertDescription>
        </Alert>
      )}

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search reports..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Reports</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
              <SelectItem value="resolved">Resolved</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon" onClick={fetchReports} title="Refresh">
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Bug Reports</CardTitle>
            <CardDescription>Manage and respond to bug reports submitted by users.</CardDescription>
          </div>
          <Button variant="outline" onClick={initializeDatabase} disabled={isInitializing}>
            {isInitializing ? "Initializing..." : "Initialize Database"}
          </Button>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/50 text-left">
                  <th className="p-2 pl-4">ID</th>
                  <th className="p-2">User</th>
                  <th className="p-2">Category</th>
                  <th className="p-2">Status</th>
                  <th className="p-2">Priority</th>
                  <th className="p-2">Date</th>
                  <th className="p-2">Assigned To</th>
                  <th className="p-2 text-right pr-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredReports.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="p-4 text-center text-muted-foreground">
                      No bug reports found
                    </td>
                  </tr>
                ) : (
                  filteredReports.map((report) => (
                    <tr key={report.id} className="border-b hover:bg-muted/50">
                      <td className="p-2 pl-4 font-medium">
                        #{typeof report.id === "string" ? report.id.substring(0, 8) : report.id}
                      </td>
                      <td className="p-2">{report.username}</td>
                      <td className="p-2 capitalize">{report.category}</td>
                      <td className="p-2">{getStatusBadge(report.status)}</td>
                      <td className="p-2">{getPriorityBadge(report.priority)}</td>
                      <td className="p-2">{formatDate(report.created_at)}</td>
                      <td className="p-2">{getAssignedStaffName(report.assigned_to)}</td>
                      <td className="p-2 text-right pr-4">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Actions</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem onClick={() => handleViewReport(report)}>View Details</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleRespondToReport(report)}>Respond</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuLabel>Status</DropdownMenuLabel>
                            <DropdownMenuItem onClick={() => handleUpdateStatus(report.id, "pending")}>
                              <Clock className="mr-2 h-4 w-4" /> Mark as Pending
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleUpdateStatus(report.id, "in-progress")}>
                              <AlertCircle className="mr-2 h-4 w-4" /> Mark as In Progress
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleUpdateStatus(report.id, "resolved")}>
                              <CheckCircle className="mr-2 h-4 w-4" /> Mark as Resolved
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuLabel>Priority</DropdownMenuLabel>
                            <DropdownMenuItem onClick={() => handleUpdatePriority(report.id, "low")}>
                              Low
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleUpdatePriority(report.id, "medium")}>
                              Medium
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleUpdatePriority(report.id, "high")}>
                              High
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleUpdatePriority(report.id, "critical")}>
                              Critical
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuLabel>Assign To</DropdownMenuLabel>
                            <DropdownMenuItem onClick={() => handleAssignReport(report.id, "1")}>
                              Ribkid
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleAssignReport(report.id, "2")}>
                              Zaqweds
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleAssignReport(report.id, "3")}>
                              Casuistry
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleAssignReport(report.id, "4")}>
                              Okgreyy
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleAssignReport(report.id, "5")}>
                              Purplesheepliv
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleAssignReport(report.id, "6")}>
                              Acalrhys
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleAssignReport(report.id, null)}>
                              Unassign
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* View Report Dialog */}
      <Dialog open={viewDialogOpen} onOpenChange={setViewDialogOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>
              Bug Report #{selectedReport?.id.substring ? selectedReport?.id.substring(0, 8) : selectedReport?.id}
            </DialogTitle>
            <DialogDescription>
              Submitted by {selectedReport?.username} on {selectedReport && formatDate(selectedReport.created_at)}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 gap-4">
              <div className="space-y-1">
                <p className="text-sm font-medium">Status</p>
                <div>{selectedReport && getStatusBadge(selectedReport.status)}</div>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">Priority</p>
                <div>{selectedReport && getPriorityBadge(selectedReport.priority)}</div>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">Category</p>
                <div className="capitalize">{selectedReport?.category}</div>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">Assigned To</p>
                <div>{selectedReport && getAssignedStaffName(selectedReport.assigned_to)}</div>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium">Description</p>
              <p className="text-sm">{selectedReport?.description}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium">Location</p>
              <p className="text-sm">{selectedReport?.location}</p>
            </div>
          </div>
          <div className="flex justify-between">
            <Button variant="outline" onClick={() => setViewDialogOpen(false)}>
              Close
            </Button>
            <Button
              onClick={() => {
                setViewDialogOpen(false)
                handleRespondToReport(selectedReport!)
              }}
            >
              Respond
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Respond to Report Dialog */}
      <Dialog open={responseDialogOpen} onOpenChange={setResponseDialogOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>
              Respond to Bug Report #
              {selectedReport?.id.substring ? selectedReport?.id.substring(0, 8) : selectedReport?.id}
            </DialogTitle>
            <DialogDescription>
              Send a response to {selectedReport?.username} regarding their bug report.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="space-y-1">
              <p className="text-sm font-medium">Bug Description</p>
              <p className="text-sm">{selectedReport?.description}</p>
            </div>
            <div className="space-y-2">
              <label htmlFor="response" className="text-sm font-medium">
                Your Response
              </label>
              <Textarea
                id="response"
                placeholder="Type your response here..."
                rows={5}
                value={response}
                onChange={(e) => setResponse(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="status" className="text-sm font-medium">
                Update Status
              </label>
              <Select defaultValue="resolved">
                <SelectTrigger id="status">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="resolved">Resolved</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex justify-between">
            <Button variant="outline" onClick={() => setResponseDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSubmitResponse} disabled={!response.trim()}>
              Send Response
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
