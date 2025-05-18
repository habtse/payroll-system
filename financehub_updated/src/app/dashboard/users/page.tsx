"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "@/components/ui/checkbox"
import { users, userRoles } from "@/lib/dummy-data"
import { format } from "date-fns"
import { Eye, Lock, MoreHorizontal, PenSquare, Plus, Search, Trash2, UserPlus } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = React.useState("")
  const [isAddDialogOpen, setIsAddDialogOpen] = React.useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = React.useState(false)
  const [isViewDialogOpen, setIsViewDialogOpen] = React.useState(false)
  const [isRoleDialogOpen, setIsRoleDialogOpen] = React.useState(false)
  const [selectedUser, setSelectedUser] = React.useState<any>(null)
  const [selectedRole, setSelectedRole] = React.useState<any>(null)
  
  // Form state for adding/editing users
  const [firstName, setFirstName] = React.useState("")
  const [lastName, setLastName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [role, setRole] = React.useState("")
  const [isActive, setIsActive] = React.useState(true)
  
  // Form state for roles
  const [roleName, setRoleName] = React.useState("")
  const [roleDescription, setRoleDescription] = React.useState("")
  const [permissions, setPermissions] = React.useState<string[]>([])
  
  // Filter users based on search term
  const filteredUsers = React.useMemo(() => {
    return users.filter(user => 
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  // Handle add user
  const handleAddUser = () => {
    // In a real app, this would be an API call
    console.log("Adding user:", { firstName, lastName, email, role, isActive });
    resetForm();
    setIsAddDialogOpen(false);
  };

  // Handle edit user
  const handleEditUser = () => {
    if (!selectedUser) return;
    
    // In a real app, this would be an API call
    console.log("Editing user:", { id: selectedUser.id, firstName, lastName, email, role, isActive });
    resetForm();
    setIsEditDialogOpen(false);
  };

  // Handle delete user
  const handleDeleteUser = (userId: string) => {
    // In a real app, this would be an API call
    console.log("Deleting user:", userId);
  };

  // Handle add role
  const handleAddRole = () => {
    // In a real app, this would be an API call
    console.log("Adding role:", { name: roleName, description: roleDescription, permissions });
    resetRoleForm();
    setIsRoleDialogOpen(false);
  };

  // Handle edit role
  const handleEditRole = () => {
    if (!selectedRole) return;
    
    // In a real app, this would be an API call
    console.log("Editing role:", { id: selectedRole.id, name: roleName, description: roleDescription, permissions });
    resetRoleForm();
    setIsRoleDialogOpen(false);
  };

  // Handle delete role
  const handleDeleteRole = (roleId: string) => {
    // In a real app, this would be an API call
    console.log("Deleting role:", roleId);
  };

  // Reset user form
  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setRole("");
    setIsActive(true);
    setSelectedUser(null);
  };

  // Reset role form
  const resetRoleForm = () => {
    setRoleName("");
    setRoleDescription("");
    setPermissions([]);
    setSelectedRole(null);
  };

  // Open edit dialog
  const openEditDialog = (user: any) => {
    setSelectedUser(user);
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setEmail(user.email);
    setRole(user.role);
    setIsActive(user.isActive);
    setIsEditDialogOpen(true);
  };

  // Open view dialog
  const openViewDialog = (user: any) => {
    setSelectedUser(user);
    setIsViewDialogOpen(true);
  };

  // Open edit role dialog
  const openEditRoleDialog = (role: any) => {
    setSelectedRole(role);
    setRoleName(role.name);
    setRoleDescription(role.description);
    setPermissions(role.permissions);
    setIsRoleDialogOpen(true);
  };

  // Format date
  const formatDate = (dateString: string) => {
    return format(new Date(dateString), "PPP");
  };

  // Get role name by role id
  const getRoleName = (roleId: string) => {
    const role = userRoles.find(r => r.id === roleId);
    return role ? role.name : roleId;
  };

  // Get role badge color
  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'admin':
        return 'bg-red-500';
      case 'hr_manager':
        return 'bg-blue-500';
      case 'finance_manager':
        return 'bg-green-500';
      case 'manager':
        return 'bg-yellow-500';
      case 'employee':
        return 'bg-gray-500';
      default:
        return 'bg-gray-500';
    }
  };

  // Available permissions
  const availablePermissions = [
    { id: 'employees:read', label: 'View Employees' },
    { id: 'employees:write', label: 'Manage Employees' },
    { id: 'attendance:read', label: 'View Attendance' },
    { id: 'attendance:write', label: 'Manage Attendance' },
    { id: 'leaves:read', label: 'View Leaves' },
    { id: 'leaves:write', label: 'Manage Leaves' },
    { id: 'salaries:read', label: 'View Salaries' },
    { id: 'salaries:write', label: 'Manage Salaries' },
    { id: 'bonuses:read', label: 'View Bonuses' },
    { id: 'bonuses:write', label: 'Manage Bonuses' },
    { id: 'payroll:read', label: 'View Payroll' },
    { id: 'payroll:write', label: 'Manage Payroll' },
    { id: 'reports:read', label: 'View Reports' },
    { id: 'settings:read', label: 'View Settings' },
    { id: 'settings:write', label: 'Manage Settings' },
    { id: 'users:read', label: 'View Users' },
    { id: 'users:write', label: 'Manage Users' },
    { id: 'roles:read', label: 'View Roles' },
    { id: 'roles:write', label: 'Manage Roles' },
  ];

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">User Management</h1>
        <Button onClick={() => setIsAddDialogOpen(true)}>
          <UserPlus className="mr-2 h-4 w-4" /> Add User
        </Button>
      </div>

      <Tabs defaultValue="users" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="roles">Roles & Permissions</TabsTrigger>
        </TabsList>
        
        {/* Users Tab */}
        <TabsContent value="users" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>All Users</CardTitle>
              <CardDescription>
                Manage user accounts and access
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-6">
                <div className="w-full md:w-1/3">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search users..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-8"
                    />
                  </div>
                </div>
                <div>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Filter by role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Roles</SelectItem>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="hr_manager">HR Manager</SelectItem>
                      <SelectItem value="finance_manager">Finance Manager</SelectItem>
                      <SelectItem value="manager">Manager</SelectItem>
                      <SelectItem value="employee">Employee</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Last Login</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredUsers.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={6} className="text-center py-10">
                          No users found
                        </TableCell>
                      </TableRow>
                    ) : (
                      filteredUsers.map((user) => (
                        <TableRow key={user.id}>
                          <TableCell>
                            <div className="font-medium">{user.firstName} {user.lastName}</div>
                          </TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>
                            <Badge className={getRoleBadgeColor(user.role)}>
                              {user.role.charAt(0).toUpperCase() + user.role.replace('_', ' ').slice(1)}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            {user.isActive ? (
                              <Badge className="bg-green-500">Active</Badge>
                            ) : (
                              <Badge variant="outline">Inactive</Badge>
                            )}
                          </TableCell>
                          <TableCell>{formatDate(user.lastLogin)}</TableCell>
                          <TableCell className="text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuItem onClick={() => openViewDialog(user)}>
                                  <Eye className="mr-2 h-4 w-4" /> View Details
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => openEditDialog(user)}>
                                  <PenSquare className="mr-2 h-4 w-4" /> Edit User
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Lock className="mr-2 h-4 w-4" /> Reset Password
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem 
                                  className="text-red-600"
                                  onClick={() => handleDeleteUser(user.id)}
                                >
                                  <Trash2 className="mr-2 h-4 w-4" /> Delete User
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Roles Tab */}
        <TabsContent value="roles" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Roles & Permissions</CardTitle>
                <CardDescription>
                  Manage user roles and their permissions
                </CardDescription>
              </div>
              <Button onClick={() => {
                resetRoleForm();
                setIsRoleDialogOpen(true);
              }}>
                <Plus className="mr-2 h-4 w-4" /> Add Role
              </Button>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Role Name</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Users</TableHead>
                      <TableHead>Permissions</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {userRoles.map((role) => (
                      <TableRow key={role.id}>
                        <TableCell>
                          <div className="font-medium">{role.name}</div>
                        </TableCell>
                        <TableCell>{role.description}</TableCell>
                        <TableCell>
                          {users.filter(u => u.role.toLowerCase() === role.name.toLowerCase()).length}
                        </TableCell>
                        <TableCell>
                          {role.permissions.includes('all') ? (
                            <Badge className="bg-purple-500">All Permissions</Badge>
                          ) : (
                            <div className="flex flex-wrap gap-1">
                              {role.permissions.length > 2 ? (
                                <>
                                  <Badge className="bg-blue-500">{role.permissions.length} Permissions</Badge>
                                </>
                              ) : (
                                role.permissions.map((permission, index) => (
                                  <Badge key={index} variant="outline">{permission}</Badge>
                                ))
                              )}
                            </div>
                          )}
                        </TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => openEditRoleDialog(role)}
                          >
                            <PenSquare className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDeleteRole(role.id)}
                            disabled={users.some(u => u.role.toLowerCase() === role.name.toLowerCase())}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Add User Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Add New User</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="John"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john.doe@example.com"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="role">Role</Label>
              <Select value={role} onValueChange={setRole}>
                <SelectTrigger id="role">
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="hr_manager">HR Manager</SelectItem>
                  <SelectItem value="finance_manager">Finance Manager</SelectItem>
                  <SelectItem value="manager">Manager</SelectItem>
                  <SelectItem value="employee">Employee</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                id="active"
                checked={isActive}
                onCheckedChange={setIsActive}
              />
              <Label htmlFor="active">Active Account</Label>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddUser}>
              Add User
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit User Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Edit User</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="edit-firstName">First Name</Label>
                <Input
                  id="edit-firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-lastName">Last Name</Label>
                <Input
                  id="edit-lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="edit-email">Email</Label>
              <Input
                id="edit-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="edit-role">Role</Label>
              <Select value={role} onValueChange={setRole}>
                <SelectTrigger id="edit-role">
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="hr_manager">HR Manager</SelectItem>
                  <SelectItem value="finance_manager">Finance Manager</SelectItem>
                  <SelectItem value="manager">Manager</SelectItem>
                  <SelectItem value="employee">Employee</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                id="edit-active"
                checked={isActive}
                onCheckedChange={setIsActive}
              />
              <Label htmlFor="edit-active">Active Account</Label>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleEditUser}>
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* View User Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>User Details</DialogTitle>
          </DialogHeader>
          {selectedUser && (
            <div className="py-4">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <h3 className="font-medium text-sm text-muted-foreground mb-1">Name</h3>
                  <p>{selectedUser.firstName} {selectedUser.lastName}</p>
                </div>
                <div>
                  <h3 className="font-medium text-sm text-muted-foreground mb-1">Email</h3>
                  <p>{selectedUser.email}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <h3 className="font-medium text-sm text-muted-foreground mb-1">Role</h3>
                  <Badge className={getRoleBadgeColor(selectedUser.role)}>
                    {selectedUser.role.charAt(0).toUpperCase() + selectedUser.role.replace('_', ' ').slice(1)}
                  </Badge>
                </div>
                <div>
                  <h3 className="font-medium text-sm text-muted-foreground mb-1">Status</h3>
                  {selectedUser.isActive ? (
                    <Badge className="bg-green-500">Active</Badge>
                  ) : (
                    <Badge variant="outline">Inactive</Badge>
                  )}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <h3 className="font-medium text-sm text-muted-foreground mb-1">Last Login</h3>
                  <p>{formatDate(selectedUser.lastLogin)}</p>
                </div>
                <div>
                  <h3 className="font-medium text-sm text-muted-foreground mb-1">Created On</h3>
                  <p>{formatDate(selectedUser.createdAt)}</p>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="font-medium text-sm text-muted-foreground mb-2">Permissions</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedUser.role === 'admin' ? (
                    <Badge className="bg-purple-500">All Permissions</Badge>
                  ) : (
                    userRoles.find(r => r.name.toLowerCase() === selectedUser.role)?.permissions.map((permission: string, index: number) => (
                      <Badge key={index} variant="outline">{permission}</Badge>
                    ))
                  )}
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button onClick={() => setIsViewDialogOpen(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Add/Edit Role Dialog */}
      <Dialog open={isRoleDialogOpen} onOpenChange={setIsRoleDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>{selectedRole ? 'Edit Role' : 'Add New Role'}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="roleName">Role Name</Label>
              <Input
                id="roleName"
                value={roleName}
                onChange={(e) => setRoleName(e.target.value)}
                placeholder="e.g., HR Assistant"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="roleDescription">Description</Label>
              <Input
                id="roleDescription"
                value={roleDescription}
                onChange={(e) => setRoleDescription(e.target.value)}
                placeholder="Brief description of this role"
              />
            </div>
            <div className="grid gap-2">
              <Label className="mb-2">Permissions</Label>
              <div className="flex items-center space-x-2 mb-4">
                <Checkbox 
                  id="all-permissions"
                  checked={permissions.includes('all')}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setPermissions(['all']);
                    } else {
                      setPermissions([]);
                    }
                  }}
                />
                <label
                  htmlFor="all-permissions"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Grant all permissions
                </label>
              </div>
              
              {!permissions.includes('all') && (
                <div className="grid grid-cols-2 gap-2">
                  {availablePermissions.map((permission) => (
                    <div key={permission.id} className="flex items-center space-x-2">
                      <Checkbox 
                        id={permission.id}
                        checked={permissions.includes(permission.id)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setPermissions([...permissions, permission.id]);
                          } else {
                            setPermissions(permissions.filter(p => p !== permission.id));
                          }
                        }}
                      />
                      <label
                        htmlFor={permission.id}
                        className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {permission.label}
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsRoleDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={selectedRole ? handleEditRole : handleAddRole}>
              {selectedRole ? 'Save Changes' : 'Add Role'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
