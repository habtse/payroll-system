"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { employees, salaries, bonuses, attendances } from "@/lib/dummy-data"
import { format, startOfMonth, endOfMonth, eachDayOfInterval, getMonth, getYear } from "date-fns"
import { CalendarIcon, Check, Download, FileText, Filter, Plus, Search } from "lucide-react"

export default function PayrollPage() {
  const [searchTerm, setSearchTerm] = React.useState("")
  const [selectedMonth, setSelectedMonth] = React.useState<Date>(new Date())
  const [isGenerateDialogOpen, setIsGenerateDialogOpen] = React.useState(false)
  const [selectedEmployees, setSelectedEmployees] = React.useState<string[]>([])
  const [isLoading, setIsLoading] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)
  
  // Get all employees
  const allEmployees = React.useMemo(() => {
    return employees.map(employee => ({
      id: employee.id,
      name: `${employee.firstName} ${employee.lastName}`,
      employeeId: employee.employeeId,
      department: employee.department,
      designation: employee.designation
    }));
  }, []);

  // Calculate payroll data for the selected month
  const payrollData = React.useMemo(() => {
    const monthStart = startOfMonth(selectedMonth);
    const monthEnd = endOfMonth(selectedMonth);
    const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });
    
    return allEmployees.map(employee => {
      // Get employee salary
      const salary = salaries.find(s => s.employeeId === employee.id);
      
      // Get employee bonuses for the month
      const employeeBonuses = bonuses.filter(b => 
        b.employeeId === employee.id && 
        b.status === 'paid' &&
        new Date(b.issueDate).getMonth() === getMonth(selectedMonth) &&
        new Date(b.issueDate).getFullYear() === getYear(selectedMonth)
      );
      
      const totalBonus = employeeBonuses.reduce((sum, bonus) => sum + bonus.amount, 0);
      
      // Get attendance for the month
      const employeeAttendance = attendances.filter(a => 
        a.employeeId === employee.id &&
        new Date(a.date).getMonth() === getMonth(selectedMonth) &&
        new Date(a.date).getFullYear() === getYear(selectedMonth)
      );
      
      // Calculate attendance-based deductions
      const absentDays = employeeAttendance.filter(a => a.status === 'absent').length;
      const halfDays = employeeAttendance.filter(a => a.status === 'half-day').length;
      
      const workingDays = daysInMonth.length - 8; // Assuming 8 weekend days
      const attendanceDeduction = salary ? 
        (absentDays * (salary.basicSalary / workingDays)) + 
        (halfDays * (salary.basicSalary / workingDays / 2)) 
        : 0;
      
      // Calculate net salary
      const basicSalary = salary?.basicSalary || 0;
      const allowances = salary ? 
        salary.houseRentAllowance + 
        salary.transportAllowance + 
        salary.medicalAllowance + 
        salary.otherAllowances 
        : 0;
      
      const deductions = (salary?.taxDeduction || 0) + 
        (salary?.otherDeductions || 0) + 
        attendanceDeduction;
      
      const netSalary = basicSalary + allowances + totalBonus - deductions;
      
      return {
        ...employee,
        basicSalary,
        allowances,
        totalBonus,
        deductions,
        attendanceDeduction,
        netSalary,
        absentDays,
        halfDays,
        status: 'pending' // Default status for new payroll
      };
    });
  }, [allEmployees, selectedMonth]);

  // Filter payroll data based on search term
  const filteredPayroll = React.useMemo(() => {
    return payrollData.filter(employee => 
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.employeeId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.department.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [payrollData, searchTerm]);

  // Handle select all employees
  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedEmployees(allEmployees.map(e => e.id));
    } else {
      setSelectedEmployees([]);
    }
  };

  // Handle select individual employee
  const handleSelectEmployee = (employeeId: string, checked: boolean) => {
    if (checked) {
      setSelectedEmployees(prev => [...prev, employeeId]);
    } else {
      setSelectedEmployees(prev => prev.filter(id => id !== employeeId));
    }
  };

  // Handle generate payroll
  const handleGeneratePayroll = () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setIsGenerateDialogOpen(false);
        setSelectedEmployees([]);
      }, 3000);
    }, 2000);
  };

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(amount);
  };

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Payroll Processing</h1>
        <Button onClick={() => setIsGenerateDialogOpen(true)}>
          <Plus className="mr-2 h-4 w-4" /> Generate Payroll
        </Button>
      </div>

      <Tabs defaultValue="monthly" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="monthly">Monthly Payroll</TabsTrigger>
          <TabsTrigger value="history">Payroll History</TabsTrigger>
          <TabsTrigger value="settings">Payroll Settings</TabsTrigger>
        </TabsList>
        
        {/* Monthly Payroll Tab */}
        <TabsContent value="monthly" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Payroll Processing</CardTitle>
              <CardDescription>
                Generate and manage payroll for employees
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <div className="w-full md:w-1/3">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search employees..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-8"
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full md:w-auto justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {format(selectedMonth, "MMMM yyyy")}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={selectedMonth}
                        onSelect={(date) => date && setSelectedMonth(date)}
                        initialFocus
                        captionLayout="dropdown-buttons"
                        fromYear={2020}
                        toYear={2030}
                      />
                    </PopoverContent>
                  </Popover>
                  <Button variant="outline">
                    <Filter className="mr-2 h-4 w-4" /> Filter
                  </Button>
                </div>
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12">
                        <Checkbox 
                          onCheckedChange={(checked) => 
                            handleSelectAll(checked as boolean)
                          }
                          checked={selectedEmployees.length === allEmployees.length}
                        />
                      </TableHead>
                      <TableHead>Employee</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>Basic Salary</TableHead>
                      <TableHead>Allowances</TableHead>
                      <TableHead>Bonus</TableHead>
                      <TableHead>Deductions</TableHead>
                      <TableHead>Net Salary</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredPayroll.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={10} className="text-center py-10">
                          No payroll data found for {format(selectedMonth, "MMMM yyyy")}
                        </TableCell>
                      </TableRow>
                    ) : (
                      filteredPayroll.map((employee) => (
                        <TableRow key={employee.id}>
                          <TableCell>
                            <Checkbox 
                              checked={selectedEmployees.includes(employee.id)}
                              onCheckedChange={(checked) => 
                                handleSelectEmployee(employee.id, checked as boolean)
                              }
                            />
                          </TableCell>
                          <TableCell>
                            <div className="font-medium">{employee.name}</div>
                            <div className="text-sm text-muted-foreground">{employee.employeeId}</div>
                          </TableCell>
                          <TableCell>{employee.department}</TableCell>
                          <TableCell>{formatCurrency(employee.basicSalary)}</TableCell>
                          <TableCell>{formatCurrency(employee.allowances)}</TableCell>
                          <TableCell>{formatCurrency(employee.totalBonus)}</TableCell>
                          <TableCell>
                            <div>{formatCurrency(employee.deductions)}</div>
                            {employee.attendanceDeduction > 0 && (
                              <div className="text-xs text-red-500">
                                Attendance: {formatCurrency(employee.attendanceDeduction)}
                              </div>
                            )}
                          </TableCell>
                          <TableCell className="font-medium">{formatCurrency(employee.netSalary)}</TableCell>
                          <TableCell>
                            <Badge className={
                              employee.status === 'paid' ? 'bg-green-500' : 
                              employee.status === 'processing' ? 'bg-blue-500' : 
                              'bg-yellow-500'
                            }>
                              {employee.status.charAt(0).toUpperCase() + employee.status.slice(1)}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="icon">
                              <FileText className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Download className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Payroll Amount</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {formatCurrency(filteredPayroll.reduce((sum, employee) => sum + employee.netSalary, 0))}
                </div>
                <p className="text-xs text-muted-foreground">
                  For {format(selectedMonth, "MMMM yyyy")}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {filteredPayroll.length}
                </div>
                <p className="text-xs text-muted-foreground">
                  Active employees
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Attendance Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {formatCurrency(filteredPayroll.reduce((sum, employee) => sum + employee.attendanceDeduction, 0))}
                </div>
                <p className="text-xs text-muted-foreground">
                  Total attendance-based deductions
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        {/* Payroll History Tab */}
        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Payroll History</CardTitle>
              <CardDescription>
                View and download previous payroll records
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">Recent Payroll Cycles</h3>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Filter by year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Years</SelectItem>
                      <SelectItem value="2025">2025</SelectItem>
                      <SelectItem value="2024">2024</SelectItem>
                      <SelectItem value="2023">2023</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Period</TableHead>
                        <TableHead>Employees</TableHead>
                        <TableHead>Total Amount</TableHead>
                        <TableHead>Generated On</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>April 2025</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell>{formatCurrency(488062.5)}</TableCell>
                        <TableCell>Apr 28, 2025</TableCell>
                        <TableCell>
                          <Badge className="bg-green-500">Completed</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            <Download className="mr-2 h-4 w-4" /> Download
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>March 2025</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell>{formatCurrency(476250)}</TableCell>
                        <TableCell>Mar 29, 2025</TableCell>
                        <TableCell>
                          <Badge className="bg-green-500">Completed</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            <Download className="mr-2 h-4 w-4" /> Download
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>February 2025</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell>{formatCurrency(465000)}</TableCell>
                        <TableCell>Feb 27, 2025</TableCell>
                        <TableCell>
                          <Badge className="bg-green-500">Completed</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            <Download className="mr-2 h-4 w-4" /> Download
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Payroll Settings Tab */}
        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Payroll Settings</CardTitle>
              <CardDescription>
                Configure payroll processing settings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">General Settings</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="payroll-date">Payroll Processing Date</Label>
                      <Select defaultValue="25">
                        <SelectTrigger id="payroll-date">
                          <SelectValue placeholder="Select date" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="25">25th of every month</SelectItem>
                          <SelectItem value="28">28th of every month</SelectItem>
                          <SelectItem value="last">Last day of every month</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="payment-method">Default Payment Method</Label>
                      <Select defaultValue="bank">
                        <SelectTrigger id="payment-method">
                          <SelectValue placeholder="Select method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="bank">Bank Transfer</SelectItem>
                          <SelectItem value="check">Check</SelectItem>
                          <SelectItem value="cash">Cash</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Attendance Settings</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="attendance-cutoff">Attendance Cutoff Date</Label>
                      <Select defaultValue="20">
                        <SelectTrigger id="attendance-cutoff">
                          <SelectValue placeholder="Select date" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="20">20th of every month</SelectItem>
                          <SelectItem value="22">22nd of every month</SelectItem>
                          <SelectItem value="25">25th of every month</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="attendance-deduction" defaultChecked />
                        <label
                          htmlFor="attendance-deduction"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Enable attendance-based deductions
                        </label>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Automatically deduct salary for absent days and half days
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Tax Settings</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="tax-calculation">Tax Calculation Method</Label>
                      <Select defaultValue="progressive">
                        <SelectTrigger id="tax-calculation">
                          <SelectValue placeholder="Select method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="progressive">Progressive Tax</SelectItem>
                          <SelectItem value="flat">Flat Rate Tax</SelectItem>
                          <SelectItem value="custom">Custom Formula</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="tax-auto" defaultChecked />
                        <label
                          htmlFor="tax-auto"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Automatic tax calculation
                        </label>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Automatically calculate taxes based on salary and local regulations
                      </p>
                    </div>
                  </div>
                </div>
                
                <Button>Save Settings</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Generate Payroll Dialog */}
      <Dialog open={isGenerateDialogOpen} onOpenChange={setIsGenerateDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Generate Payroll</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <div className="mb-4">
              <Label className="mb-2 block">Payroll Period</Label>
              <div className="font-medium">{format(selectedMonth, "MMMM yyyy")}</div>
            </div>
            
            <div className="mb-4">
              <Label className="mb-2 block">Selected Employees</Label>
              <div className="font-medium">{selectedEmployees.length} of {allEmployees.length} employees</div>
              <p className="text-sm text-muted-foreground mt-1">
                {selectedEmployees.length === 0 
                  ? "No employees selected. Please select employees to generate payroll."
                  : selectedEmployees.length === allEmployees.length
                    ? "All employees selected."
                    : "Only selected employees will be included in this payroll run."}
              </p>
            </div>
            
            <div className="mb-4">
              <Label className="mb-2 block">Total Payroll Amount</Label>
              <div className="font-medium">
                {formatCurrency(
                  filteredPayroll
                    .filter(emp => selectedEmployees.includes(emp.id))
                    .reduce((sum, emp) => sum + emp.netSalary, 0)
                )}
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="generate-payslips" defaultChecked />
                <label
                  htmlFor="generate-payslips"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Generate pay slips for all employees
                </label>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="send-email" defaultChecked />
                <label
                  htmlFor="send-email"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Send email notifications to employees
                </label>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsGenerateDialogOpen(false)}>
              Cancel
            </Button>
            <Button 
              onClick={handleGeneratePayroll} 
              disabled={isLoading || selectedEmployees.length === 0}
            >
              {isLoading ? (
                <>
                  <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></div>
                  Processing...
                </>
              ) : isSuccess ? (
                <>
                  <Check className="mr-2 h-4 w-4" />
                  Success!
                </>
              ) : (
                'Generate Payroll'
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
