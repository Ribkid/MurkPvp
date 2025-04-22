"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, Search, CheckCircle, Clock, AlertCircle } from "lucide-react"
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
import type { BugReport, Staff } from "@/lib/supabase"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function BugReportsPage() {
  const [reports, setReports] = useState<BugReport[]>([])
  const [staff, setStaff] = useState<Staff[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedReport, setSelectedReport] = useState<BugReport | null>(null)
  const [viewDialogOpen, setViewDialogOpen] = useState(false)
  const [responseDialogOpen, setResponseDialogOpen] = useState(false)
  const [response, setResponse] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")

  // Fetch bug reports and staff data
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch bug reports
        const { data: reportsData, error: reportsError } = await supabase
          .from("bug_reports")
          .select("*")
          .order("created_at", { ascending: false })

        if (reportsError) {
          throw reportsError
        }

        setReports(reportsData || [])

        // Fetch staff for assignment dropdown
        const { data: staffData, error: staffError } = await supabase.from("staff").select("id, username, role")

        if (staffError) {
          throw staffError
        }

        setStaff(staffData || [])
      } catch (err: any) {
        setError(err.message || "Failed to fetch data")
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
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

  const handleViewReport = (report: BugReport) => {
    setSelectedReport(report)
    setViewDialogOpen(true)
  }

  const handleRespondToReport = (report: BugReport) => {
    setSelectedReport(report)
    setResponseDialogOpen(true)
  }

  const handleUpdateStatus = async (reportId: string, newStatus: "pending" | "in-progress" | "resolved") => {
    try {
      const { error } = await supabase.from("bug_reports").update({ status: newStatus }).eq("id", reportId)

      if (error) {
        throw error
      }

      // Update local state
      setReports(reports.map((report) => (report.id === reportId ? { ...report, status: newStatus } : report)))
    } catch (err: any) {
      setError(err.message || "Failed to update status")
    }
  }

  const handleAssignReport = async (reportId: string, staffId: string | null) => {
    try {
      const { error } = await supabase.from("bug_reports").update({ assigned_to: staffId }).eq("id", reportId)

      if (error) {
        throw error
      }

      // Update local state
      setReports(reports.map((report) => (report.id === reportId ? { ...report, assigned_to: staffId } : report)))
    } catch (err: any) {
      setError(err.message || "Failed to assign report")
    }
  }

  const handleUpdatePriority = async (reportId: string, priority: "low" | "medium" | "high" | "critical") => {
    try {
      const { error } = await supabase.from("bug_reports").update({ priority }).eq("id", reportId)

      if (error) {
        throw error
      }

      // Update local state
      setReports(reports.map((report) => (report.id === reportId ? { ...report, priority } : report)))
    } catch (err: any) {
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
    const staffMember = staff.find((s) => s.id === staffId)
    return staffMember ? staffMember.username : "Unknown"
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
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Bug Reports</CardTitle>
          <CardDescription>Manage and respond to bug reports submitted by users.</CardDescription>
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
                      <td className="p-2 pl-4 font-medium">#{report.id.substring(0, 8)}</td>
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
                            {staff.map((staffMember) => (
                              <DropdownMenuItem
                                key={staffMember.id}
                                onClick={() => handleAssignReport(report.id, staffMember.id)}
                              >
                                {staffMember.username}
                              </DropdownMenuItem>
                            ))}
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
            <DialogTitle>Bug Report #{selectedReport?.id.substring(0, 8)}</DialogTitle>
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
            <DialogTitle>Respond to Bug Report #{selectedReport?.id.substring(0, 8)}</DialogTitle>
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
