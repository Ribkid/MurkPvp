"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, Search, UserPlus, Shield, ShieldCheck, ShieldAlert, Crown } from "lucide-react"
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
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

// Predefined staff members
const predefinedStaff = [
  {
    id: "1",
    username: "Ribkid",
    email: "ribkid@murkcraft.com",
    role: "owner",
    created_at: "2022-01-01T00:00:00Z",
    last_sign_in: new Date().toISOString(),
  },
  {
    id: "2",
    username: "Zaqweds",
    email: "zaqweds@murkcraft.com",
    role: "co-owner",
    created_at: "2022-01-02T00:00:00Z",
    last_sign_in: new Date().toISOString(),
  },
  {
    id: "3",
    username: "Casuistry",
    email: "casuistry@murkcraft.com",
    role: "co-owner",
    created_at: "2022-01-03T00:00:00Z",
    last_sign_in: new Date().toISOString(),
  },
  {
    id: "4",
    username: "Okgreyy",
    email: "okgreyy@murkcraft.com",
    role: "admin",
    created_at: "2022-01-04T00:00:00Z",
    last_sign_in: new Date().toISOString(),
  },
  {
    id: "5",
    username: "Purplesheepliv",
    email: "purplesheepliv@murkcraft.com",
    role: "admin",
    created_at: "2022-01-05T00:00:00Z",
    last_sign_in: new Date().toISOString(),
  },
  {
    id: "6",
    username: "Acalrhys",
    email: "acalrhys@gmail.com",
    role: "admin",
    created_at: "2022-01-06T00:00:00Z",
    last_sign_in: new Date().toISOString(),
  },
]

export default function StaffManagementPage() {
  const [staff, setStaff] = useState(predefinedStaff)
  const [searchQuery, setSearchQuery] = useState("")
  const [addDialogOpen, setAddDialogOpen] = useState(false)
  const [editDialogOpen, setEditDialogOpen] = useState(false)
  const [selectedStaff, setSelectedStaff] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [newStaff, setNewStaff] = useState({
    username: "",
    role: "admin" as "owner" | "co-owner" | "admin" | "moderator" | "helper",
    email: "",
    password: "",
  })

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

  const handleAddStaff = () => {
    // Generate a unique ID
    const newId = (Math.max(...staff.map((s) => Number.parseInt(s.id))) + 1).toString()

    // Create new staff member
    const newStaffMember = {
      id: newId,
      username: newStaff.username,
      email: newStaff.email,
      role: newStaff.role,
      created_at: new Date().toISOString(),
      last_sign_in: null,
    }

    // Add to staff list
    setStaff([...staff, newStaffMember])

    // Reset form and close dialog
    setNewStaff({
      username: "",
      role: "admin",
      email: "",
      password: "",
    })
    setAddDialogOpen(false)
  }

  const handleEditStaff = () => {
    if (!selectedStaff) return

    // Update staff member
    setStaff(staff.map((member) => (member.id === selectedStaff.id ? selectedStaff : member)))
    setEditDialogOpen(false)
  }

  const handleDeleteStaff = (id: string) => {
    // Don't allow deletion of predefined staff
    if (Number.parseInt(id) <= 6) {
      setError("Cannot delete predefined staff members")
      return
    }

    // Remove from staff list
    setStaff(staff.filter((member) => member.id !== id))
  }

  const handleChangeRole = (member: any, newRole: "owner" | "co-owner" | "admin" | "moderator" | "helper") => {
    // Update role
    setStaff(staff.map((m) => (m.id === member.id ? { ...m, role: newRole } : m)))
  }

  const getRoleBadge = (role: string) => {
    switch (role) {
      case "owner":
        return <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300">Owner</Badge>
      case "co-owner":
        return <Badge className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300">Co-Owner</Badge>
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
      case "owner":
        return <Crown className="h-4 w-4 mr-2" />
      case "co-owner":
        return <Crown className="h-4 w-4 mr-2" />
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
                            <DropdownMenuItem
                              onClick={() => handleDeleteStaff(member.id)}
                              disabled={Number.parseInt(member.id) <= 6}
                            >
                              Delete
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuLabel>Change Role</DropdownMenuLabel>
                            <DropdownMenuItem
                              onClick={() => handleChangeRole(member, "owner")}
                              disabled={Number.parseInt(member.id) !== 1}
                            >
                              <Crown className="mr-2 h-4 w-4" /> Make Owner
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => handleChangeRole(member, "co-owner")}
                              disabled={Number.parseInt(member.id) <= 1}
                            >
                              <Crown className="mr-2 h-4 w-4" /> Make Co-Owner
                            </DropdownMenuItem>
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
                onValueChange={(value: "owner" | "co-owner" | "admin" | "moderator" | "helper") =>
                  setNewStaff({ ...newStaff, role: value })
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
                  disabled={Number.parseInt(selectedStaff.id) <= 6}
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
                  disabled={Number.parseInt(selectedStaff.id) <= 6}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-role" className="text-right">
                  Role
                </Label>
                <Select
                  value={selectedStaff.role}
                  onValueChange={(value: "owner" | "co-owner" | "admin" | "moderator" | "helper") =>
                    setSelectedStaff({
                      ...selectedStaff,
                      role: value,
                    })
                  }
                  disabled={Number.parseInt(selectedStaff.id) === 1}
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                  <SelectContent>
                    {Number.parseInt(selectedStaff.id) === 1 && <SelectItem value="owner">Owner</SelectItem>}
                    {(Number.parseInt(selectedStaff.id) === 2 || Number.parseInt(selectedStaff.id) === 3) && (
                      <SelectItem value="co-owner">Co-Owner</SelectItem>
                    )}
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
