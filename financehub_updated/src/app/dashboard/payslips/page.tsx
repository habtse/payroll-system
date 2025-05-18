"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { payslips, employees, payrolls } from "@/lib/dummy-data"
import { format } from "date-fns"
import { Download, FileText, Printer, Search } from "lucide-react"

export default function PayslipsPage() {
  const [searchTerm, setSearchTerm] = React.useState("")
  const [isViewDialogOpen, setIsViewDialogOpen] = React.useState(false)
  const [selectedPayslip, setSelectedPayslip] = React.useState<any>(null)
  
  // Filter payslips based on search term
  const filteredPayslips = React.useMemo(() => {
    return payslips.filter(payslip => {
      const employee = employees.find(e => e.id === payslip.employeeId);
      const employeeName = employee ? `${employee.firstName} ${employee.lastName}` : '';
      const employeeId = employee ? employee.employeeId : '';
      
      return employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
             employeeId.toLowerCase().includes(searchTerm.toLowerCase()) ||
             `${payslip.month}/${payslip.year}`.includes(searchTerm);
    });
  }, [searchTerm]);

  // Get employee name by ID
  const getEmployeeName = (employeeId: string) => {
    const employee = employees.find(e => e.id === employeeId);
    return employee ? `${employee.firstName} ${employee.lastName}` : 'Unknown Employee';
  };

  // Get employee ID by ID
  const getEmployeeId = (employeeId: string) => {
    const employee = employees.find(e => e.id === employeeId);
    return employee ? employee.employeeId : 'Unknown';
  };

  // Get month name
  const getMonthName = (month: number) => {
    const months = [
      'January', 'February', 'March', 'April', 
      'May', 'June', 'July', 'August', 
      'September', 'October', 'November', 'December'
    ];
    return months[month - 1];
  };

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(amount);
  };

  // View payslip details
  const viewPayslip = (payslip: any) => {
    setSelectedPayslip(payslip);
    setIsViewDialogOpen(true);
  };

  // Get payroll details for a payslip
  const getPayrollDetails = (payrollId: string) => {
    return payrolls.find(p => p.id === payrollId);
  };

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Pay Slips</h1>
        <Button>
          <Download className="mr-2 h-4 w-4" /> Download All
        </Button>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All Pay Slips</TabsTrigger>
          <TabsTrigger value="recent">Recent</TabsTrigger>
          <TabsTrigger value="archived">Archived</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
        </TabsList>
        
        {/* All Pay Slips Tab */}
        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>All Pay Slips</CardTitle>
              <CardDescription>
                View and download employee pay slips
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-6">
                <div className="w-full md:w-1/3">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search pay slips..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-8"
                    />
                  </div>
                </div>
                <div>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Filter by period" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Periods</SelectItem>
                      <SelectItem value="2025-04">April 2025</SelectItem>
                      <SelectItem value="2025-03">March 2025</SelectItem>
                      <SelectItem value="2025-02">February 2025</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Employee</TableHead>
                      <TableHead>Employee ID</TableHead>
                      <TableHead>Period</TableHead>
                      <TableHead>Generated On</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredPayslips.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={6} className="text-center py-10">
                          No pay slips found
                        </TableCell>
                      </TableRow>
                    ) : (
                      filteredPayslips.map((payslip) => (
                        <TableRow key={payslip.id}>
                          <TableCell>{getEmployeeName(payslip.employeeId)}</TableCell>
                          <TableCell>{getEmployeeId(payslip.employeeId)}</TableCell>
                          <TableCell>{getMonthName(payslip.month)} {payslip.year}</TableCell>
                          <TableCell>{format(new Date(payslip.generatedOn), "PPP")}</TableCell>
                          <TableCell>
                            <Badge className="bg-green-500">Generated</Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => viewPayslip(payslip)}
                            >
                              <FileText className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Printer className="h-4 w-4" />
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
        </TabsContent>
        
        {/* Recent Pay Slips Tab */}
        <TabsContent value="recent" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Pay Slips</CardTitle>
              <CardDescription>
                Pay slips generated in the last 3 months
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Employee</TableHead>
                      <TableHead>Employee ID</TableHead>
                      <TableHead>Period</TableHead>
                      <TableHead>Generated On</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {payslips.map((payslip) => (
                      <TableRow key={payslip.id}>
                        <TableCell>{getEmployeeName(payslip.employeeId)}</TableCell>
                        <TableCell>{getEmployeeId(payslip.employeeId)}</TableCell>
                        <TableCell>{getMonthName(payslip.month)} {payslip.year}</TableCell>
                        <TableCell>{format(new Date(payslip.generatedOn), "PPP")}</TableCell>
                        <TableCell>
                          <Badge className="bg-green-500">Generated</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => viewPayslip(payslip)}
                          >
                            <FileText className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Printer className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Download className="h-4 w-4" />
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
        
        {/* Archived Pay Slips Tab */}
        <TabsContent value="archived" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Archived Pay Slips</CardTitle>
              <CardDescription>
                Historical pay slips from previous years
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center items-center h-64">
                <div className="text-center">
                  <p className="text-muted-foreground mb-4">No archived pay slips found</p>
                  <Button variant="outline">Import Historical Data</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Templates Tab */}
        <TabsContent value="templates" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Pay Slip Templates</CardTitle>
              <CardDescription>
                Manage and customize pay slip templates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-md">Default Template</CardTitle>
                    <CardDescription>Standard pay slip layout</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="aspect-[3/4] bg-gray-100 rounded-md flex items-center justify-center mb-2">
                      <FileText className="h-12 w-12 text-gray-400" />
                    </div>
                    <div className="flex justify-between">
                      <Badge>Active</Badge>
                      <Button variant="ghost" size="sm">Edit</Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-md">Detailed Template</CardTitle>
                    <CardDescription>Comprehensive breakdown</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="aspect-[3/4] bg-gray-100 rounded-md flex items-center justify-center mb-2">
                      <FileText className="h-12 w-12 text-gray-400" />
                    </div>
                    <div className="flex justify-between">
                      <Badge variant="outline">Inactive</Badge>
                      <Button variant="ghost" size="sm">Edit</Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-dashed">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-md">Create New Template</CardTitle>
                    <CardDescription>Design a custom template</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="aspect-[3/4] bg-gray-50 rounded-md flex items-center justify-center mb-2 border-2 border-dashed border-gray-200">
                      <Button variant="ghost">
                        <FileText className="h-12 w-12 text-gray-300" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* View Pay Slip Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="sm:max-w-[700px]">
          <DialogHeader>
            <DialogTitle>Pay Slip Details</DialogTitle>
          </DialogHeader>
          {selectedPayslip && (
            <div className="py-4">
              <div className="border rounded-lg p-6 mb-4">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-1">Pay Slip</h2>
                    <p className="text-muted-foreground">
                      {getMonthName(selectedPayslip.month)} {selectedPayslip.year}
                    </p>
                  </div>
                  <div className="text-right">
                    <h3 className="font-bold">Acme Corporation</h3>
                    <p className="text-sm text-muted-foreground">123 Business Avenue</p>
                    <p className="text-sm text-muted-foreground">Tech City, TC 10001</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b">
                  <div>
                    <h3 className="font-medium text-sm text-muted-foreground mb-1">Employee</h3>
                    <p className="font-medium">{getEmployeeName(selectedPayslip.employeeId)}</p>
                    <p className="text-sm">{getEmployeeId(selectedPayslip.employeeId)}</p>
                  </div>
                  <div className="text-right">
                    <h3 className="font-medium text-sm text-muted-foreground mb-1">Pay Period</h3>
                    <p className="font-medium">{getMonthName(selectedPayslip.month)} 1-30, {selectedPayslip.year}</p>
                    <p className="text-sm">Payment Date: {format(new Date(selectedPayslip.generatedOn), "PPP")}</p>
                  </div>
                </div>
                
                {/* Earnings Section */}
                <div className="mb-6">
                  <h3 className="font-bold mb-2">Earnings</h3>
                  <div className="grid grid-cols-3 gap-4 mb-1 text-sm font-medium text-muted-foreground">
                    <div>Description</div>
                    <div className="text-right">Rate</div>
                    <div className="text-right">Amount</div>
                  </div>
                  
                  {selectedPayslip.payrollId && (() => {
                    const payroll = getPayrollDetails(selectedPayslip.payrollId);
                    if (!payroll) return null;
                    
                    return (
                      <>
                        <div className="grid grid-cols-3 gap-4 py-1 text-sm border-b">
                          <div>Basic Salary</div>
                          <div className="text-right">Monthly</div>
                          <div className="text-right">{formatCurrency(payroll.basicSalary)}</div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 py-1 text-sm border-b">
                          <div>House Rent Allowance</div>
                          <div className="text-right">30%</div>
                          <div className="text-right">{formatCurrency(payroll.totalAllowances * 0.6)}</div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 py-1 text-sm border-b">
                          <div>Transport Allowance</div>
                          <div className="text-right">10%</div>
                          <div className="text-right">{formatCurrency(payroll.totalAllowances * 0.2)}</div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 py-1 text-sm border-b">
                          <div>Medical Allowance</div>
                          <div className="text-right">10%</div>
                          <div className="text-right">{formatCurrency(payroll.totalAllowances * 0.2)}</div>
                        </div>
                        {payroll.totalBonus > 0 && (
                          <div className="grid grid-cols-3 gap-4 py-1 text-sm border-b">
                            <div>Performance Bonus</div>
                            <div className="text-right">One-time</div>
                            <div className="text-right">{formatCurrency(payroll.totalBonus)}</div>
                          </div>
                        )}
                        <div className="grid grid-cols-3 gap-4 py-2 font-medium">
                          <div>Total Earnings</div>
                          <div className="text-right"></div>
                          <div className="text-right">{formatCurrency(payroll.grossEarnings)}</div>
                        </div>
                      </>
                    );
                  })()}
                </div>
                
                {/* Deductions Section */}
                <div className="mb-6">
                  <h3 className="font-bold mb-2">Deductions</h3>
                  <div className="grid grid-cols-3 gap-4 mb-1 text-sm font-medium text-muted-foreground">
                    <div>Description</div>
                    <div className="text-right">Rate</div>
                    <div className="text-right">Amount</div>
                  </div>
                  
                  {selectedPayslip.payrollId && (() => {
                    const payroll = getPayrollDetails(selectedPayslip.payrollId);
                    if (!payroll) return null;
                    
                    // Calculate attendance deduction (20% of total deductions for this example)
                    const attendanceDeduction = payroll.totalDeductions * 0.2;
                    const taxDeduction = payroll.totalDeductions * 0.7;
                    const otherDeductions = payroll.totalDeductions * 0.1;
                    
                    return (
                      <>
                        <div className="grid grid-cols-3 gap-4 py-1 text-sm border-b">
                          <div>Income Tax</div>
                          <div className="text-right">Progressive</div>
                          <div className="text-right">{formatCurrency(taxDeduction)}</div>
                        </div>
                        {attendanceDeduction > 0 && (
                          <div className="grid grid-cols-3 gap-4 py-1 text-sm border-b">
                            <div>Attendance Deduction</div>
                            <div className="text-right">Per day</div>
                            <div className="text-right">{formatCurrency(attendanceDeduction)}</div>
                          </div>
                        )}
                        <div className="grid grid-cols-3 gap-4 py-1 text-sm border-b">
                          <div>Insurance Premium</div>
                          <div className="text-right">Fixed</div>
                          <div className="text-right">{formatCurrency(otherDeductions)}</div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 py-2 font-medium">
                          <div>Total Deductions</div>
                          <div className="text-right"></div>
                          <div className="text-right">{formatCurrency(payroll.totalDeductions)}</div>
                        </div>
                      </>
                    );
                  })()}
                </div>
                
                {/* Net Pay Section */}
                <div className="bg-gray-50 p-4 rounded-md">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-bold">Net Pay</h3>
                      <p className="text-sm text-muted-foreground">Amount credited to bank account</p>
                    </div>
                    <div className="text-right">
                      {selectedPayslip.payrollId && (() => {
                        const payroll = getPayrollDetails(selectedPayslip.payrollId);
                        return payroll ? (
                          <p className="text-2xl font-bold">{formatCurrency(payroll.netSalary)}</p>
                        ) : null;
                      })()}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between">
                <Button variant="outline">
                  <Printer className="mr-2 h-4 w-4" /> Print
                </Button>
                <Button>
                  <Download className="mr-2 h-4 w-4" /> Download PDF
                </Button>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsViewDialogOpen(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
