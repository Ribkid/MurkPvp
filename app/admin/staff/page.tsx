"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, Search, UserPlus, Shield, ShieldCheck, ShieldAlert } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { supabase } from "@/lib/supabase"
import type { Staff } from "@/lib/supabase"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

export default function StaffManagementPage() {
  const [staff, setStaff] = useState<Staff[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [addDialogOpen, setAddDialogOpen] = useState(false)
  const [editDialogOpen, setEditDialogOpen] = useState(false)
  const [selectedStaff, setSelectedStaff] = useState<Staff | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")
  const [newStaff, setNewStaff] = useState({
    username: "",
    role: "helper" as "admin" | "moderator" | "helper",
    email: "",
    password: "",
  })

  // Fetch staff data
  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const { data, error } = await supabase.from("staff").select("*").order("created_at", { ascending: false })

        if (error) {
          throw error
        }

        setStaff(data || [])
      } catch (err: any) {
        setError(err.message || "Failed to fetch staff data")
      } finally {
        setIsLoading(false)
      }
    }

    fetchStaff()
  }, [])

  const filteredStaff = staff.filter((member) => {
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      return (
        member.username.toLowerCase().includes(query) ||
        member.email.toLowerCase().includes(query) ||
        member.role.toLowerCase().includes(query)
      )
    }
    return true
  })

  const handleAddStaff = async () => {
    try {
      setError("")

      // Create user in Auth
      const { data, error } = await supabase.auth.signUp({
        email: newStaff.email,
        password: newStaff.password,
        options: {
          data: {
            username: newStaff.username,
            role: newStaff.role,
          },
        },
      })

      if (error) {
        throw error
      }

      if (data.user) {
        // Add user to staff table
        const { error: insertError } = await supabase.from("staff").insert({
          id: data.user.id,
          username: newStaff.username,
          email: newStaff.email,
          role: newStaff.role,
          created_at: new Date().toISOString(),
        })

        if (insertError) {
          throw insertError
        }

        // Refresh staff list
        const { data: updatedStaff } = await supabase
          .from("staff")
          .select("*")
          .order("created_at", { ascending: false })

        setStaff(updatedStaff || [])

        // Reset form and close dialog
        setNewStaff({
          username: "",
          role: "helper",
          email: "",
          password: "",
        })
        setAddDialogOpen(false)
      }
    } catch (err: any) {
      setError(err.message || "Failed to add staff member")
    }
  }

  const handleEditStaff = async () => {
    if (!selectedStaff) return

    try {
      setError("")

      // Update staff in database
      const { error } = await supabase
        .from("staff")
        .update({
          username: selectedStaff.username,
          email: selectedStaff.email,
          role: selectedStaff.role,
        })
        .eq("id", selectedStaff.id)

      if (error) {
        throw error
      }

      // Refresh staff list
      const { data: updatedStaff } = await supabase.from("staff").select("*").order("created_at", { ascending: false })

      setStaff(updatedStaff || [])
      setEditDialogOpen(false)
    } catch (err: any) {
      setError(err.message || "Failed to update staff member")
    }
  }

  const handleDeleteStaff = async (id: string) => {
    try {
      setError("")

      // Delete from staff table
      const { error } = await supabase.from("staff").delete().eq("id", id)

      if (error) {
        throw error
      }

      // Remove from auth (in a real app, you'd use admin functions for this)
      // This is simplified for demo purposes

      // Update staff list
      setStaff(staff.filter((member) => member.id !== id))
    } catch (err: any) {
      setError(err.message || "Failed to delete staff member")
    }
  }

  const handleChangeRole = async (member: Staff, newRole: "admin" | "moderator" | "helper") => {
    try {
      setError("")

      // Update role in database
      const { error } = await supabase.from("staff").update({ role: newRole }).eq("id", member.id)

      if (error) {
        throw error
      }

      // Update local state
      setStaff(staff.map((m) => (m.id === member.id ? { ...m, role: newRole } : m)))
    } catch (err: any) {
      setError(err.message || "Failed to update role")
    }
  }

  const getRoleBadge = (role: string) => {
    switch (role) {
      case "admin":
        return <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">Admin</Badge>
      case "moderator":
        return <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">Moderator</Badge>
      case "helper":
        return <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">Helper</Badge>
      default:
        return <Badge>Unknown</Badge>
    }
  }

  const getRoleIcon = (role: string) => {
    switch (role) {
      case "admin":
        return <ShieldAlert className="h-4 w-4 mr-2" />
      case "moderator":
        return <ShieldCheck className="h-4 w-4 mr-2" />
      case "helper":
        return <Shield className="h-4 w-4 mr-2" />
      default:
        return null
    }
  }

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "Never"
    const date = new Date(dateString)
    return date.toLocaleDateString() + " " + date.toLocaleTimeString()
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
        <h1 className="text-3xl font-bold tracking-tight">Staff Management</h1>
        <p className="text-muted-foreground">Manage staff members and their permissions.</p>
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
            placeholder="Search staff members..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button onClick={() => setAddDialogOpen(true)}>
          <UserPlus className="mr-2 h-4 w-4" />
          Add Staff Member
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Staff Members</CardTitle>
          <CardDescription>Manage staff members and their roles.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/50 text-left">
                  <th className="p-2 pl-4">Username</th>
                  <th className="p-2">Role</th>
                  <th className="p-2">Email</th>
                  <th className="p-2">Created</th>
                  <th className="p-2">Last Sign In</th>
                  <th className="p-2 text-right pr-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredStaff.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="p-4 text-center text-muted-foreground">
                      No staff members found
                    </td>
                  </tr>
                ) : (
                  filteredStaff.map((member) => (
                    <tr key={member.id} className="border-b hover:bg-muted/50">
                      <td className="p-2 pl-4 font-medium">{member.username}</td>
                      <td className="p-2">{getRoleBadge(member.role)}</td>
                      <td className="p-2">{member.email}</td>
                      <td className="p-2">{formatDate(member.created_at)}</td>
                      <td className="p-2">{formatDate(member.last_sign_in)}</td>
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
                            <DropdownMenuItem
                              onClick={() => {
                                setSelectedStaff(member)
                                setEditDialogOpen(true)
                              }}
                            >
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleDeleteStaff(member.id)}>Delete</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuLabel>Change Role</DropdownMenuLabel>
                            <DropdownMenuItem onClick={() => handleChangeRole(member, "admin")}>
                              <ShieldAlert className="mr-2 h-4 w-4" /> Make Admin
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleChangeRole(member, "moderator")}>
                              <ShieldCheck className="mr-2 h-4 w-4" /> Make Moderator
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleChangeRole(member, "helper")}>
                              <Shield className="mr-2 h-4 w-4" /> Make Helper
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

      {/* Add Staff Dialog */}
      <Dialog open={addDialogOpen} onOpenChange={setAddDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Staff Member</DialogTitle>
            <DialogDescription>Add a new staff member to the admin panel.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input
                id="username"
                value={newStaff.username}
                onChange={(e) => setNewStaff({ ...newStaff, username: e.target.value })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={newStaff.email}
                onChange={(e) => setNewStaff({ ...newStaff, email: e.target.value })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="password" className="text-right">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                value={newStaff.password}
                onChange={(e) => setNewStaff({ ...newStaff, password: e.target.value })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="role" className="text-right">
                Role
              </Label>
              <Select
                value={newStaff.role}
                onValueChange={(value: "admin" | "moderator" | "helper") => setNewStaff({ ...newStaff, role: value })}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="moderator">Moderator</SelectItem>
                  <SelectItem value="helper">Helper</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setAddDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddStaff}>Add Staff Member</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Staff Dialog */}
      <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Staff Member</DialogTitle>
            <DialogDescription>Edit staff member details.</DialogDescription>
          </DialogHeader>
          {selectedStaff && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-username" className="text-right">
                  Username
                </Label>
                <Input
                  id="edit-username"
                  value={selectedStaff.username}
                  onChange={(e) => setSelectedStaff({ ...selectedStaff, username: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-email" className="text-right">
                  Email
                </Label>
                <Input
                  id="edit-email"
                  type="email"
                  value={selectedStaff.email}
                  onChange={(e) => setSelectedStaff({ ...selectedStaff, email: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-role" className="text-right">
                  Role
                </Label>
                <Select
                  value={selectedStaff.role}
                  onValueChange={(value: "admin" | "moderator" | "helper") =>
                    setSelectedStaff({
                      ...selectedStaff,
                      role: value,
                    })
                  }
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="moderator">Moderator</SelectItem>
                    <SelectItem value="helper">Helper</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setEditDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleEditStaff}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
