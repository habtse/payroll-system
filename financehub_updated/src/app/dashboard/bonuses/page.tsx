"use client"

import * as React from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { bonuses, employees } from "@/lib/dummy-data"
import { formatCurrency, formatDate, getStatusColor } from "@/lib/utils"
import { Bonus } from "@/types"

export default function BonusesPage() {
  const [searchTerm, setSearchTerm] = React.useState("")
  const [bonuses, setBonuses] = React.useState<Bonus[]>([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [selectedBonus, setSelectedBonus] = React.useState<Bonus | null>(null)
  const [isAddDialogOpen, setIsAddDialogOpen] = React.useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = React.useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = React.useState(false)
  const [isViewDialogOpen, setIsViewDialogOpen] = React.useState(false)

  // Fetch bonuses on component mount
  React.useEffect(() => {
    const fetchBonuses = async () => {
      try {
        // In a real app, this would be an API call
        // const response = await fetch('/api/bonuses');
        // const data = await response.json();
        
        // Using dummy data instead
        const data = await import('@/lib/dummy-data').then(module => module.bonuses);
        setBonuses(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching bonuses:', error);
        setIsLoading(false);
      }
    };

    fetchBonuses();
  }, []);

  // Filter bonuses based on search term
  const filteredBonuses = React.useMemo(() => {
    return bonuses.filter(bonus => {
      const employee = employees.find(emp => emp.id === bonus.employeeId);
      const employeeName = employee ? `${employee.firstName} ${employee.lastName}` : '';
      
      return (
        employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bonus.bonusType.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bonus.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bonus.status.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  }, [bonuses, searchTerm]);

  // Get employee name by ID
  const getEmployeeName = (employeeId: string) => {
    const employee = employees.find(emp => emp.id === employeeId);
    return employee ? `${employee.firstName} ${employee.lastName}` : 'Unknown Employee';
  };

  // Handle bonus creation
  const handleCreateBonus = async (formData: FormData) => {
    // In a real app, this would be an API call
    // const response = await fetch('/api/bonuses', {
    //   method: 'POST',
    //   body: formData
    // });
    
    // For demo, just close the dialog
    setIsAddDialogOpen(false);
  };

  // Handle bonus update
  const handleUpdateBonus = async (formData: FormData) => {
    // In a real app, this would be an API call
    // const response = await fetch(`/api/bonuses/${selectedBonus?.id}`, {
    //   method: 'PUT',
    //   body: formData
    // });
    
    // For demo, just close the dialog
    setIsEditDialogOpen(false);
  };

  // Handle bonus deletion
  const handleDeleteBonus = async () => {
    // In a real app, this would be an API call
    // const response = await fetch(`/api/bonuses/${selectedBonus?.id}`, {
    //   method: 'DELETE'
    // });
    
    // For demo, just close the dialog
    setIsDeleteDialogOpen(false);
  };

  // Format bonus type for display
  const formatBonusType = (bonusType: string) => {
    return bonusType.charAt(0).toUpperCase() + bonusType.slice(1);
  };

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Bonus Management</h1>
        <Button onClick={() => setIsAddDialogOpen(true)}>Add Bonus</Button>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="w-1/3">
          <Input
            placeholder="Search bonuses..."
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
                <TableHead>Bonus Type</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Issue Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredBonuses.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-10">
                    No bonuses found
                  </TableCell>
                </TableRow>
              ) : (
                filteredBonuses.map((bonus) => (
                  <TableRow key={bonus.id}>
                    <TableCell>{getEmployeeName(bonus.employeeId)}</TableCell>
                    <TableCell>{formatBonusType(bonus.bonusType)}</TableCell>
                    <TableCell>{formatCurrency(bonus.amount)}</TableCell>
                    <TableCell>{formatDate(bonus.issueDate)}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(bonus.status)}`}>
                        {bonus.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setSelectedBonus(bonus);
                          setIsViewDialogOpen(true);
                        }}
                      >
                        View
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setSelectedBonus(bonus);
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
                          setSelectedBonus(bonus);
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

      {/* Add Bonus Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Add New Bonus</DialogTitle>
          </DialogHeader>
          <form className="grid gap-4 py-4" onSubmit={(e) => {
            e.preventDefault();
            handleCreateBonus(new FormData(e.currentTarget));
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
              <label htmlFor="bonusType">Bonus Type</label>
              <select id="bonusType" name="bonusType" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                <option value="performance">Performance Bonus</option>
                <option value="festival">Festival Bonus</option>
                <option value="annual">Annual Bonus</option>
                <option value="project">Project Completion Bonus</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="grid gap-2">
              <label htmlFor="amount">Amount</label>
              <Input id="amount" name="amount" type="number" min="0" step="0.01" required />
            </div>
            <div className="grid gap-2">
              <label htmlFor="issueDate">Issue Date</label>
              <Input id="issueDate" name="issueDate" type="date" required />
            </div>
            <div className="grid gap-2">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Please provide a description for this bonus"
                required
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="status">Status</label>
              <select id="status" name="status" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
                <option value="paid">Paid</option>
              </select>
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <Button type="button" variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">Save Bonus</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Edit Bonus Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Edit Bonus</DialogTitle>
          </DialogHeader>
          <form className="grid gap-4 py-4" onSubmit={(e) => {
            e.preventDefault();
            handleUpdateBonus(new FormData(e.currentTarget));
          }}>
            <div className="grid gap-2">
              <label htmlFor="employeeId">Employee</label>
              <select id="employeeId" name="employeeId" defaultValue={selectedBonus?.employeeId} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                {employees.map(employee => (
                  <option key={employee.id} value={employee.id}>
                    {employee.firstName} {employee.lastName}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid gap-2">
              <label htmlFor="bonusType">Bonus Type</label>
              <select id="bonusType" name="bonusType" defaultValue={selectedBonus?.bonusType} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                <option value="performance">Performance Bonus</option>
                <option value="festival">Festival Bonus</option>
                <option value="annual">Annual Bonus</option>
                <option value="project">Project Completion Bonus</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="grid gap-2">
              <label htmlFor="amount">Amount</label>
              <Input 
                id="amount" 
                name="amount" 
                type="number" 
                min="0" 
                step="0.01" 
                defaultValue={selectedBonus?.amount} 
                required 
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="issueDate">Issue Date</label>
              <Input 
                id="issueDate" 
                name="issueDate" 
                type="date" 
                defaultValue={selectedBonus?.issueDate.split('T')[0]} 
                required 
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                defaultValue={selectedBonus?.description}
                required
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="status">Status</label>
              <select id="status" name="status" defaultValue={selectedBonus?.status} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
                <option value="paid">Paid</option>
              </select>
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <Button type="button" variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">Update Bonus</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Delete Bonus Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Delete Bonus</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p>Are you sure you want to delete this bonus?</p>
            <p className="text-sm text-muted-foreground mt-2">This action cannot be undone.</p>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDeleteBonus}>
              Delete
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* View Bonus Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Bonus Details</DialogTitle>
          </DialogHeader>
          {selectedBonus && (
            <div className="py-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium text-sm text-muted-foreground">Employee</h3>
                  <p>{getEmployeeName(selectedBonus.employeeId)}</p>
                </div>
                <div>
                  <h3 className="font-medium text-sm text-muted-foreground">Bonus Type</h3>
                  <p>{formatBonusType(selectedBonus.bonusType)}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <h3 className="font-medium text-sm text-muted-foreground">Amount</h3>
                  <p>{formatCurrency(selectedBonus.amount)}</p>
                </div>
                <div>
                  <h3 className="font-medium text-sm text-muted-foreground">Issue Date</h3>
                  <p>{formatDate(selectedBonus.issueDate)}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <h3 className="font-medium text-sm text-muted-foreground">Status</h3>
                  <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(selectedBonus.status)}`}>
                    {selectedBonus.status}
                  </span>
                </div>
                {selectedBonus.approvedBy && (
                  <div>
                    <h3 className="font-medium text-sm text-muted-foreground">Approved By</h3>
                    <p>{getEmployeeName(selectedBonus.approvedBy)}</p>
                  </div>
                )}
              </div>
              <div className="mt-4">
                <h3 className="font-medium text-sm text-muted-foreground">Description</h3>
                <p className="mt-1">{selectedBonus.description}</p>
              </div>
              {selectedBonus.approvedAt && (
                <div className="mt-4">
                  <h3 className="font-medium text-sm text-muted-foreground">Approved On</h3>
                  <p>{formatDate(selectedBonus.approvedAt)}</p>
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
