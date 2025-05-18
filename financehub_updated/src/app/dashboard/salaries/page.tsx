"use client"

import * as React from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { salaries, employees } from "@/lib/dummy-data"
import { formatCurrency, formatDate, getStatusColor } from "@/lib/utils"
import { Salary } from "@/types"

export default function SalariesPage() {
  const [searchTerm, setSearchTerm] = React.useState("")
  const [salaries, setSalaries] = React.useState<Salary[]>([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [selectedSalary, setSelectedSalary] = React.useState<Salary | null>(null)
  const [isAddDialogOpen, setIsAddDialogOpen] = React.useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = React.useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = React.useState(false)
  const [isViewDialogOpen, setIsViewDialogOpen] = React.useState(false)

  // Fetch salaries on component mount
  React.useEffect(() => {
    const fetchSalaries = async () => {
      try {
        // In a real app, this would be an API call
        // const response = await fetch('/api/salaries');
        // const data = await response.json();
        
        // Using dummy data instead
        const data = await import('@/lib/dummy-data').then(module => module.salaries);
        setSalaries(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching salaries:', error);
        setIsLoading(false);
      }
    };

    fetchSalaries();
  }, []);

  // Filter salaries based on search term
  const filteredSalaries = React.useMemo(() => {
    return salaries.filter(salary => {
      const employee = employees.find(emp => emp.id === salary.employeeId);
      const employeeName = employee ? `${employee.firstName} ${employee.lastName}` : '';
      
      return (
        employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        salary.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
        salary.netSalary.toString().includes(searchTerm)
      );
    });
  }, [salaries, searchTerm]);

  // Get employee name by ID
  const getEmployeeName = (employeeId: string) => {
    const employee = employees.find(emp => emp.id === employeeId);
    return employee ? `${employee.firstName} ${employee.lastName}` : 'Unknown Employee';
  };

  // Handle salary creation
  const handleCreateSalary = async (formData: FormData) => {
    // In a real app, this would be an API call
    // const response = await fetch('/api/salaries', {
    //   method: 'POST',
    //   body: formData
    // });
    
    // For demo, just close the dialog
    setIsAddDialogOpen(false);
  };

  // Handle salary update
  const handleUpdateSalary = async (formData: FormData) => {
    // In a real app, this would be an API call
    // const response = await fetch(`/api/salaries/${selectedSalary?.id}`, {
    //   method: 'PUT',
    //   body: formData
    // });
    
    // For demo, just close the dialog
    setIsEditDialogOpen(false);
  };

  // Handle salary deletion
  const handleDeleteSalary = async () => {
    // In a real app, this would be an API call
    // const response = await fetch(`/api/salaries/${selectedSalary?.id}`, {
    //   method: 'DELETE'
    // });
    
    // For demo, just close the dialog
    setIsDeleteDialogOpen(false);
  };

  // Calculate growth percentage
  const calculateGrowthPercentage = (currentSalary: number, previousSalary: number) => {
    if (!previousSalary) return 0;
    return ((currentSalary - previousSalary) / previousSalary) * 100;
  };

  // Calculate gross salary
  const calculateGrossSalary = (
    basicSalary: number,
    houseRentAllowance: number,
    transportAllowance: number,
    medicalAllowance: number,
    otherAllowances: number
  ) => {
    return basicSalary + houseRentAllowance + transportAllowance + medicalAllowance + otherAllowances;
  };

  // Calculate net salary
  const calculateNetSalary = (grossSalary: number, taxDeduction: number, otherDeductions: number) => {
    return grossSalary - taxDeduction - otherDeductions;
  };

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Salary Management</h1>
        <Button onClick={() => setIsAddDialogOpen(true)}>Add Salary</Button>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="w-1/3">
          <Input
            placeholder="Search salaries..."
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
                <TableHead>Basic Salary</TableHead>
                <TableHead>Gross Salary</TableHead>
                <TableHead>Net Salary</TableHead>
                <TableHead>Growth %</TableHead>
                <TableHead>Effective Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredSalaries.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={8} className="text-center py-10">
                    No salaries found
                  </TableCell>
                </TableRow>
              ) : (
                filteredSalaries.map((salary) => (
                  <TableRow key={salary.id}>
                    <TableCell>{getEmployeeName(salary.employeeId)}</TableCell>
                    <TableCell>{formatCurrency(salary.basicSalary)}</TableCell>
                    <TableCell>{formatCurrency(salary.grossSalary)}</TableCell>
                    <TableCell>{formatCurrency(salary.netSalary)}</TableCell>
                    <TableCell>
                      {salary.growthPercentage ? (
                        <span className={salary.growthPercentage > 0 ? "text-green-600" : "text-red-600"}>
                          {salary.growthPercentage.toFixed(2)}%
                        </span>
                      ) : (
                        "N/A"
                      )}
                    </TableCell>
                    <TableCell>{formatDate(salary.effectiveDate)}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(salary.status)}`}>
                        {salary.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setSelectedSalary(salary);
                          setIsViewDialogOpen(true);
                        }}
                      >
                        View
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setSelectedSalary(salary);
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
                          setSelectedSalary(salary);
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

      {/* Add Salary Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Add New Salary</DialogTitle>
          </DialogHeader>
          <form className="grid gap-4 py-4" onSubmit={(e) => {
            e.preventDefault();
            handleCreateSalary(new FormData(e.currentTarget));
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
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <label htmlFor="basicSalary">Basic Salary</label>
                <Input id="basicSalary" name="basicSalary" type="number" min="0" step="0.01" required />
              </div>
              <div className="grid gap-2">
                <label htmlFor="houseRentAllowance">House Rent Allowance</label>
                <Input id="houseRentAllowance" name="houseRentAllowance" type="number" min="0" step="0.01" required />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <label htmlFor="transportAllowance">Transport Allowance</label>
                <Input id="transportAllowance" name="transportAllowance" type="number" min="0" step="0.01" required />
              </div>
              <div className="grid gap-2">
                <label htmlFor="medicalAllowance">Medical Allowance</label>
                <Input id="medicalAllowance" name="medicalAllowance" type="number" min="0" step="0.01" required />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <label htmlFor="otherAllowances">Other Allowances</label>
                <Input id="otherAllowances" name="otherAllowances" type="number" min="0" step="0.01" required />
              </div>
              <div className="grid gap-2">
                <label htmlFor="taxDeduction">Tax Deduction</label>
                <Input id="taxDeduction" name="taxDeduction" type="number" min="0" step="0.01" required />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <label htmlFor="otherDeductions">Other Deductions</label>
                <Input id="otherDeductions" name="otherDeductions" type="number" min="0" step="0.01" required />
              </div>
              <div className="grid gap-2">
                <label htmlFor="effectiveDate">Effective Date</label>
                <Input id="effectiveDate" name="effectiveDate" type="date" required />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <label htmlFor="previousSalary">Previous Salary (Optional)</label>
                <Input id="previousSalary" name="previousSalary" type="number" min="0" step="0.01" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="status">Status</label>
                <select id="status" name="status" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="pending">Pending</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <Button type="button" variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">Save Salary</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Edit Salary Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Edit Salary</DialogTitle>
          </DialogHeader>
          <form className="grid gap-4 py-4" onSubmit={(e) => {
            e.preventDefault();
            handleUpdateSalary(new FormData(e.currentTarget));
          }}>
            <div className="grid gap-2">
              <label htmlFor="employeeId">Employee</label>
              <select id="employeeId" name="employeeId" defaultValue={selectedSalary?.employeeId} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                {employees.map(employee => (
                  <option key={employee.id} value={employee.id}>
                    {employee.firstName} {employee.lastName}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <label htmlFor="basicSalary">Basic Salary</label>
                <Input 
                  id="basicSalary" 
                  name="basicSalary" 
                  type="number" 
                  min="0" 
                  step="0.01" 
                  defaultValue={selectedSalary?.basicSalary} 
                  required 
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="houseRentAllowance">House Rent Allowance</label>
                <Input 
                  id="houseRentAllowance" 
                  name="houseRentAllowance" 
                  type="number" 
                  min="0" 
                  step="0.01" 
                  defaultValue={selectedSalary?.houseRentAllowance} 
                  required 
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <label htmlFor="transportAllowance">Transport Allowance</label>
                <Input 
                  id="transportAllowance" 
                  name="transportAllowance" 
                  type="number" 
                  min="0" 
                  step="0.01" 
                  defaultValue={selectedSalary?.transportAllowance} 
                  required 
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="medicalAllowance">Medical Allowance</label>
                <Input 
                  id="medicalAllowance" 
                  name="medicalAllowance" 
                  type="number" 
                  min="0" 
                  step="0.01" 
                  defaultValue={selectedSalary?.medicalAllowance} 
                  required 
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <label htmlFor="otherAllowances">Other Allowances</label>
                <Input 
                  id="otherAllowances" 
                  name="otherAllowances" 
                  type="number" 
                  min="0" 
                  step="0.01" 
                  defaultValue={selectedSalary?.otherAllowances} 
                  required 
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="taxDeduction">Tax Deduction</label>
                <Input 
                  id="taxDeduction" 
                  name="taxDeduction" 
                  type="number" 
                  min="0" 
                  step="0.01" 
                  defaultValue={selectedSalary?.taxDeduction} 
                  required 
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <label htmlFor="otherDeductions">Other Deductions</label>
                <Input 
                  id="otherDeductions" 
                  name="otherDeductions" 
                  type="number" 
                  min="0" 
                  step="0.01" 
                  defaultValue={selectedSalary?.otherDeductions} 
                  required 
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="effectiveDate">Effective Date</label>
                <Input 
                  id="effectiveDate" 
                  name="effectiveDate" 
                  type="date" 
                  defaultValue={selectedSalary?.effectiveDate.split('T')[0]} 
                  required 
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <label htmlFor="previousSalary">Previous Salary</label>
                <Input 
                  id="previousSalary" 
                  name="previousSalary" 
                  type="number" 
                  min="0" 
                  step="0.01" 
                  defaultValue={selectedSalary?.previousSalary} 
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="status">Status</label>
                <select id="status" name="status" defaultValue={selectedSalary?.status} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="pending">Pending</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <Button type="button" variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">Update Salary</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Delete Salary Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Delete Salary</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p>Are you sure you want to delete this salary record?</p>
            <p className="text-sm text-muted-foreground mt-2">This action cannot be undone.</p>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDeleteSalary}>
              Delete
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* View Salary Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Salary Details</DialogTitle>
          </DialogHeader>
          {selectedSalary && (
            <div className="py-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium text-sm text-muted-foreground">Employee</h3>
                  <p>{getEmployeeName(selectedSalary.employeeId)}</p>
                </div>
                <div>
                  <h3 className="font-medium text-sm text-muted-foreground">Effective Date</h3>
                  <p>{formatDate(selectedSalary.effectiveDate)}</p>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="font-medium text-base border-b pb-2 mb-3">Earnings</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium text-sm text-muted-foreground">Basic Salary</h3>
                    <p>{formatCurrency(selectedSalary.basicSalary)}</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-sm text-muted-foreground">House Rent Allowance</h3>
                    <p>{formatCurrency(selectedSalary.houseRentAllowance)}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-3">
                  <div>
                    <h3 className="font-medium text-sm text-muted-foreground">Transport Allowance</h3>
                    <p>{formatCurrency(selectedSalary.transportAllowance)}</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-sm text-muted-foreground">Medical Allowance</h3>
                    <p>{formatCurrency(selectedSalary.medicalAllowance)}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-3">
                  <div>
                    <h3 className="font-medium text-sm text-muted-foreground">Other Allowances</h3>
                    <p>{formatCurrency(selectedSalary.otherAllowances)}</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-sm text-muted-foreground">Gross Salary</h3>
                    <p className="font-semibold">{formatCurrency(selectedSalary.grossSalary)}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="font-medium text-base border-b pb-2 mb-3">Deductions</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium text-sm text-muted-foreground">Tax Deduction</h3>
                    <p>{formatCurrency(selectedSalary.taxDeduction)}</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-sm text-muted-foreground">Other Deductions</h3>
                    <p>{formatCurrency(selectedSalary.otherDeductions)}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-3">
                  <div>
                    <h3 className="font-medium text-sm text-muted-foreground">Total Deductions</h3>
                    <p>{formatCurrency(selectedSalary.taxDeduction + selectedSalary.otherDeductions)}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 border-t pt-3">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium text-sm text-muted-foreground">Net Salary</h3>
                    <p className="font-bold text-lg">{formatCurrency(selectedSalary.netSalary)}</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-sm text-muted-foreground">Status</h3>
                    <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(selectedSalary.status)}`}>
                      {selectedSalary.status}
                    </span>
                  </div>
                </div>
                {selectedSalary.previousSalary && (
                  <div className="grid grid-cols-2 gap-4 mt-3">
                    <div>
                      <h3 className="font-medium text-sm text-muted-foreground">Previous Salary</h3>
                      <p>{formatCurrency(selectedSalary.previousSalary)}</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-sm text-muted-foreground">Growth Percentage</h3>
                      <p className={selectedSalary.growthPercentage && selectedSalary.growthPercentage > 0 ? "text-green-600" : "text-red-600"}>
                        {selectedSalary.growthPercentage ? `${selectedSalary.growthPercentage.toFixed(2)}%` : "N/A"}
                      </p>
                    </div>
                  </div>
                )}
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
