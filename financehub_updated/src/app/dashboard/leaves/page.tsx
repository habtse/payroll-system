"use client"

import * as React from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { leaves, employees } from "@/lib/dummy-data"
import { formatDate, getStatusColor } from "@/lib/utils"
import { Leave } from "@/types"

export default function LeavesPage() {
  const [searchTerm, setSearchTerm] = React.useState("")
  const [leaves, setLeaves] = React.useState<Leave[]>([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [selectedLeave, setSelectedLeave] = React.useState<Leave | null>(null)
  const [isAddDialogOpen, setIsAddDialogOpen] = React.useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = React.useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = React.useState(false)
  const [isViewDialogOpen, setIsViewDialogOpen] = React.useState(false)

  // Fetch leaves on component mount
  React.useEffect(() => {
    const fetchLeaves = async () => {
      try {
        // In a real app, this would be an API call
        // const response = await fetch('/api/leaves');
        // const data = await response.json();
        
        // Using dummy data instead
        const data = await import('@/lib/dummy-data').then(module => module.leaves);
        setLeaves(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching leaves:', error);
        setIsLoading(false);
      }
    };

    fetchLeaves();
  }, []);

  // Filter leaves based on search term
  const filteredLeaves = React.useMemo(() => {
    return leaves.filter(leave => {
      const employee = employees.find(emp => emp.id === leave.employeeId);
      const employeeName = employee ? `${employee.firstName} ${employee.lastName}` : '';
      
      return (
        employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        leave.leaveType.toLowerCase().includes(searchTerm.toLowerCase()) ||
        leave.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
        formatDate(leave.startDate).toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  }, [leaves, searchTerm]);

  // Get employee name by ID
  const getEmployeeName = (employeeId: string) => {
    const employee = employees.find(emp => emp.id === employeeId);
    return employee ? `${employee.firstName} ${employee.lastName}` : 'Unknown Employee';
  };

  // Handle leave creation
  const handleCreateLeave = async (formData: FormData) => {
    // In a real app, this would be an API call
    // const response = await fetch('/api/leaves', {
    //   method: 'POST',
    //   body: formData
    // });
    
    // For demo, just close the dialog
    setIsAddDialogOpen(false);
  };

  // Handle leave update
  const handleUpdateLeave = async (formData: FormData) => {
    // In a real app, this would be an API call
    // const response = await fetch(`/api/leaves/${selectedLeave?.id}`, {
    //   method: 'PUT',
    //   body: formData
    // });
    
    // For demo, just close the dialog
    setIsEditDialogOpen(false);
  };

  // Handle leave deletion
  const handleDeleteLeave = async () => {
    // In a real app, this would be an API call
    // const response = await fetch(`/api/leaves/${selectedLeave?.id}`, {
    //   method: 'DELETE'
    // });
    
    // For demo, just close the dialog
    setIsDeleteDialogOpen(false);
  };

  // Format leave type for display
  const formatLeaveType = (leaveType: string) => {
    return leaveType.charAt(0).toUpperCase() + leaveType.slice(1);
  };

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Leave Management</h1>
        <Button onClick={() => setIsAddDialogOpen(true)}>Request Leave</Button>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="w-1/3">
          <Input
            placeholder="Search leaves..."
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
                <TableHead>Employee</TableHead>
                <TableHead>Leave Type</TableHead>
                <TableHead>Start Date</TableHead>
                <TableHead>End Date</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredLeaves.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-10">
                    No leaves found
                  </TableCell>
                </TableRow>
              ) : (
                filteredLeaves.map((leave) => (
                  <TableRow key={leave.id}>
                    <TableCell>{getEmployeeName(leave.employeeId)}</TableCell>
                    <TableCell>{formatLeaveType(leave.leaveType)}</TableCell>
                    <TableCell>{formatDate(leave.startDate)}</TableCell>
                    <TableCell>{formatDate(leave.endDate)}</TableCell>
                    <TableCell>{leave.duration} day{leave.duration > 1 ? 's' : ''}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(leave.status)}`}>
                        {leave.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setSelectedLeave(leave);
                          setIsViewDialogOpen(true);
                        }}
                      >
                        View
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setSelectedLeave(leave);
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
                          setSelectedLeave(leave);
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

      {/* Add Leave Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Request Leave</DialogTitle>
          </DialogHeader>
          <form className="grid gap-4 py-4" onSubmit={(e) => {
            e.preventDefault();
            handleCreateLeave(new FormData(e.currentTarget));
          }}>
            <div className="grid gap-2">
              <label htmlFor="employeeId">Employee</label>
              <select id="employeeId" name="employeeId" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                {employees.map(employee => (
                  <option key={employee.id} value={employee.id}>
                    {employee.firstName} {employee.lastName}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid gap-2">
              <label htmlFor="leaveType">Leave Type</label>
              <select id="leaveType" name="leaveType" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                <option value="annual">Annual Leave</option>
                <option value="sick">Sick Leave</option>
                <option value="maternity">Maternity Leave</option>
                <option value="paternity">Paternity Leave</option>
                <option value="unpaid">Unpaid Leave</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <label htmlFor="startDate">Start Date</label>
                <Input id="startDate" name="startDate" type="date" required />
              </div>
              <div className="grid gap-2">
                <label htmlFor="endDate">End Date</label>
                <Input id="endDate" name="endDate" type="date" required />
              </div>
            </div>
            <div className="grid gap-2">
              <label htmlFor="reason">Reason</label>
              <textarea
                id="reason"
                name="reason"
                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Please provide a reason for your leave request"
                required
              />
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <Button type="button" variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">Submit Request</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Edit Leave Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Edit Leave Request</DialogTitle>
          </DialogHeader>
          <form className="grid gap-4 py-4" onSubmit={(e) => {
            e.preventDefault();
            handleUpdateLeave(new FormData(e.currentTarget));
          }}>
            <div className="grid gap-2">
              <label htmlFor="employeeId">Employee</label>
              <select id="employeeId" name="employeeId" defaultValue={selectedLeave?.employeeId} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                {employees.map(employee => (
                  <option key={employee.id} value={employee.id}>
                    {employee.firstName} {employee.lastName}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid gap-2">
              <label htmlFor="leaveType">Leave Type</label>
              <select id="leaveType" name="leaveType" defaultValue={selectedLeave?.leaveType} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                <option value="annual">Annual Leave</option>
                <option value="sick">Sick Leave</option>
                <option value="maternity">Maternity Leave</option>
                <option value="paternity">Paternity Leave</option>
                <option value="unpaid">Unpaid Leave</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <label htmlFor="startDate">Start Date</label>
                <Input 
                  id="startDate" 
                  name="startDate" 
                  type="date" 
                  defaultValue={selectedLeave?.startDate.split('T')[0]} 
                  required 
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="endDate">End Date</label>
                <Input 
                  id="endDate" 
                  name="endDate" 
                  type="date" 
                  defaultValue={selectedLeave?.endDate.split('T')[0]} 
                  required 
                />
              </div>
            </div>
            <div className="grid gap-2">
              <label htmlFor="reason">Reason</label>
              <textarea
                id="reason"
                name="reason"
                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                defaultValue={selectedLeave?.reason}
                required
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="status">Status</label>
              <select id="status" name="status" defaultValue={selectedLeave?.status} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <Button type="button" variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">Update Request</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Delete Leave Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Delete Leave Request</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p>Are you sure you want to delete this leave request?</p>
            <p className="text-sm text-muted-foreground mt-2">This action cannot be undone.</p>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDeleteLeave}>
              Delete
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* View Leave Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Leave Request Details</DialogTitle>
          </DialogHeader>
          {selectedLeave && (
            <div className="py-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium text-sm text-muted-foreground">Employee</h3>
                  <p>{getEmployeeName(selectedLeave.employeeId)}</p>
                </div>
                <div>
                  <h3 className="font-medium text-sm text-muted-foreground">Leave Type</h3>
                  <p>{formatLeaveType(selectedLeave.leaveType)}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <h3 className="font-medium text-sm text-muted-foreground">Start Date</h3>
                  <p>{formatDate(selectedLeave.startDate)}</p>
                </div>
                <div>
                  <h3 className="font-medium text-sm text-muted-foreground">End Date</h3>
                  <p>{formatDate(selectedLeave.endDate)}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <h3 className="font-medium text-sm text-muted-foreground">Duration</h3>
                  <p>{selectedLeave.duration} day{selectedLeave.duration > 1 ? 's' : ''}</p>
                </div>
                <div>
                  <h3 className="font-medium text-sm text-muted-foreground">Status</h3>
                  <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(selectedLeave.status)}`}>
                    {selectedLeave.status}
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="font-medium text-sm text-muted-foreground">Reason</h3>
                <p className="mt-1">{selectedLeave.reason}</p>
              </div>
              {selectedLeave.approvedBy && (
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <h3 className="font-medium text-sm text-muted-foreground">Approved By</h3>
                    <p>{getEmployeeName(selectedLeave.approvedBy)}</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-sm text-muted-foreground">Approved On</h3>
                    <p>{selectedLeave.approvedAt ? formatDate(selectedLeave.approvedAt) : 'N/A'}</p>
                  </div>
                </div>
              )}
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
