"use client"

import * as React from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { employees, getEmployeeName } from "@/lib/dummy-data"
import { formatDate, getStatusColor } from "@/lib/utils"
import { Employee } from "@/types"

export default function EmployeesPage() {
  const [searchTerm, setSearchTerm] = React.useState("")
  const [employees, setEmployees] = React.useState<Employee[]>([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [selectedEmployee, setSelectedEmployee] = React.useState<Employee | null>(null)
  const [isAddDialogOpen, setIsAddDialogOpen] = React.useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = React.useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = React.useState(false)
  const [isViewDialogOpen, setIsViewDialogOpen] = React.useState(false)

  // Fetch employees on component mount
  React.useEffect(() => {
    const fetchEmployees = async () => {
      try {
        // In a real app, this would be an API call
        // const response = await fetch('/api/employees');
        // const data = await response.json();
        
        // Using dummy data instead
        const data = await import('@/lib/dummy-data').then(module => module.employees);
        setEmployees(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching employees:', error);
        setIsLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  // Filter employees based on search term
  const filteredEmployees = React.useMemo(() => {
    return employees.filter(employee => 
      employee.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.employeeId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.designation.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [employees, searchTerm]);

  // Handle employee creation
  const handleCreateEmployee = async (formData: FormData) => {
    // In a real app, this would be an API call
    // const response = await fetch('/api/employees', {
    //   method: 'POST',
    //   body: formData
    // });
    
    // For demo, just close the dialog
    setIsAddDialogOpen(false);
  };

  // Handle employee update
  const handleUpdateEmployee = async (formData: FormData) => {
    // In a real app, this would be an API call
    // const response = await fetch(`/api/employees/${selectedEmployee?.id}`, {
    //   method: 'PUT',
    //   body: formData
    // });
    
    // For demo, just close the dialog
    setIsEditDialogOpen(false);
  };

  // Handle employee deletion
  const handleDeleteEmployee = async () => {
    // In a real app, this would be an API call
    // const response = await fetch(`/api/employees/${selectedEmployee?.id}`, {
    //   method: 'DELETE'
    // });
    
    // For demo, just close the dialog
    setIsDeleteDialogOpen(false);
  };

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Employees</h1>
        <Button onClick={() => setIsAddDialogOpen(true)}>Add Employee</Button>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="w-1/3">
          <Input
            placeholder="Search employees..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-sm"
          />
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      ) : (
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Employee ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Designation</TableHead>
                <TableHead>Joining Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredEmployees.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-10">
                    No employees found
                  </TableCell>
                </TableRow>
              ) : (
                filteredEmployees.map((employee) => (
                  <TableRow key={employee.id}>
                    <TableCell>{employee.employeeId}</TableCell>
                    <TableCell>
                      <div className="font-medium">{employee.firstName} {employee.lastName}</div>
                      <div className="text-sm text-muted-foreground">{employee.email}</div>
                    </TableCell>
                    <TableCell>{employee.department}</TableCell>
                    <TableCell>{employee.designation}</TableCell>
                    <TableCell>{formatDate(employee.joiningDate)}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(employee.status)}`}>
                        {employee.status.replace('_', ' ')}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setSelectedEmployee(employee);
                          setIsViewDialogOpen(true);
                        }}
                      >
                        View
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setSelectedEmployee(employee);
                          setIsEditDialogOpen(true);
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-500 hover:text-red-700"
                        onClick={() => {
                          setSelectedEmployee(employee);
                          setIsDeleteDialogOpen(true);
                        }}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      )}

      {/* Add Employee Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Add New Employee</DialogTitle>
          </DialogHeader>
          <form className="grid gap-4 py-4" onSubmit={(e) => {
            e.preventDefault();
            handleCreateEmployee(new FormData(e.currentTarget));
          }}>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <label htmlFor="firstName">First Name</label>
                <Input id="firstName" name="firstName" required />
              </div>
              <div className="grid gap-2">
                <label htmlFor="lastName">Last Name</label>
                <Input id="lastName" name="lastName" required />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <label htmlFor="email">Email</label>
                <Input id="email" name="email" type="email" required />
              </div>
              <div className="grid gap-2">
                <label htmlFor="phone">Phone</label>
                <Input id="phone" name="phone" required />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <label htmlFor="department">Department</label>
                <Input id="department" name="department" required />
              </div>
              <div className="grid gap-2">
                <label htmlFor="designation">Designation</label>
                <Input id="designation" name="designation" required />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <label htmlFor="joiningDate">Joining Date</label>
                <Input id="joiningDate" name="joiningDate" type="date" required />
              </div>
              <div className="grid gap-2">
                <label htmlFor="employmentType">Employment Type</label>
                <select id="employmentType" name="employmentType" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                  <option value="full_time">Full Time</option>
                  <option value="part_time">Part Time</option>
                  <option value="contract">Contract</option>
                  <option value="intern">Intern</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <Button type="button" variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">Save Employee</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Edit Employee Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Edit Employee</DialogTitle>
          </DialogHeader>
          <form className="grid gap-4 py-4" onSubmit={(e) => {
            e.preventDefault();
            handleUpdateEmployee(new FormData(e.currentTarget));
          }}>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <label htmlFor="firstName">First Name</label>
                <Input id="firstName" name="firstName" defaultValue={selectedEmployee?.firstName} required />
              </div>
              <div className="grid gap-2">
                <label htmlFor="lastName">Last Name</label>
                <Input id="lastName" name="lastName" defaultValue={selectedEmployee?.lastName} required />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <label htmlFor="email">Email</label>
                <Input id="email" name="email" type="email" defaultValue={selectedEmployee?.email} required />
              </div>
              <div className="grid gap-2">
                <label htmlFor="phone">Phone</label>
                <Input id="phone" name="phone" defaultValue={selectedEmployee?.phone} required />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <label htmlFor="department">Department</label>
                <Input id="department" name="department" defaultValue={selectedEmployee?.department} required />
              </div>
              <div className="grid gap-2">
                <label htmlFor="designation">Designation</label>
                <Input id="designation" name="designation" defaultValue={selectedEmployee?.designation} required />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <label htmlFor="status">Status</label>
                <select id="status" name="status" defaultValue={selectedEmployee?.status} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="on_leave">On Leave</option>
                  <option value="terminated">Terminated</option>
                </select>
              </div>
              <div className="grid gap-2">
                <label htmlFor="employmentType">Employment Type</label>
                <select id="employmentType" name="employmentType" defaultValue={selectedEmployee?.employmentType} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                  <option value="full_time">Full Time</option>
                  <option value="part_time">Part Time</option>
                  <option value="contract">Contract</option>
                  <option value="intern">Intern</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <Button type="button" variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">Update Employee</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Delete Employee Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Delete Employee</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p>Are you sure you want to delete {selectedEmployee?.firstName} {selectedEmployee?.lastName}?</p>
            <p className="text-sm text-muted-foreground mt-2">This action cannot be undone.</p>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDeleteEmployee}>
              Delete
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* View Employee Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Employee Details</DialogTitle>
          </DialogHeader>
          {selectedEmployee && (
            <div className="py-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium text-sm text-muted-foreground">Employee ID</h3>
                  <p>{selectedEmployee.employeeId}</p>
                </div>
                <div>
                  <h3 className="font-medium text-sm text-muted-foreground">Full Name</h3>
                  <p>{selectedEmployee.firstName} {selectedEmployee.lastName}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <h3 className="font-medium text-sm text-muted-foreground">Email</h3>
                  <p>{selectedEmployee.email}</p>
                </div>
                <div>
                  <h3 className="font-medium text-sm text-muted-foreground">Phone</h3>
                  <p>{selectedEmployee.phone}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <h3 className="font-medium text-sm text-muted-foreground">Department</h3>
                  <p>{selectedEmployee.department}</p>
                </div>
                <div>
                  <h3 className="font-medium text-sm text-muted-foreground">Designation</h3>
                  <p>{selectedEmployee.designation}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <h3 className="font-medium text-sm text-muted-foreground">Joining Date</h3>
                  <p>{formatDate(selectedEmployee.joiningDate)}</p>
                </div>
                <div>
                  <h3 className="font-medium text-sm text-muted-foreground">Status</h3>
                  <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(selectedEmployee.status)}`}>
                    {selectedEmployee.status.replace('_', ' ')}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <h3 className="font-medium text-sm text-muted-foreground">Employment Type</h3>
                  <p>{selectedEmployee.employmentType.replace('_', ' ')}</p>
                </div>
                <div>
                  <h3 className="font-medium text-sm text-muted-foreground">Reporting Manager</h3>
                  <p>{selectedEmployee.reportingManager ? getEmployeeName(selectedEmployee.reportingManager) : 'None'}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <h3 className="font-medium text-sm text-muted-foreground">Bank Name</h3>
                  <p>{selectedEmployee.bankName}</p>
                </div>
                <div>
                  <h3 className="font-medium text-sm text-muted-foreground">Account Number</h3>
                  <p>••••••{selectedEmployee.accountNumber.slice(-4)}</p>
                </div>
              </div>
            </div>
          )}
          <div className="flex justify-end">
            <Button variant="outline" onClick={() => setIsViewDialogOpen(false)}>
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
