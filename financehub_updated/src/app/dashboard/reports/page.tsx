"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { employees, salaries, leaves, bonuses, payrolls, attendances } from "@/lib/dummy-data"
import { formatCurrency, formatDate } from "@/lib/utils"
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from 'recharts'

export default function ReportsPage() {
  // Department-wise salary distribution data
  const departmentSalaryData = React.useMemo(() => {
    const departments: Record<string, { count: number, totalSalary: number }> = {};
    
    employees.forEach(employee => {
      const employeeSalary = salaries.find(s => s.employeeId === employee.id);
      if (employeeSalary) {
        if (!departments[employee.department]) {
          departments[employee.department] = { count: 0, totalSalary: 0 };
        }
        departments[employee.department].count += 1;
        departments[employee.department].totalSalary += employeeSalary.netSalary;
      }
    });
    
    return Object.entries(departments).map(([department, data]) => ({
      department,
      averageSalary: data.totalSalary / data.count,
      totalSalary: data.totalSalary,
      employeeCount: data.count
    }));
  }, []);

  // Leave utilization data
  const leaveUtilizationData = React.useMemo(() => {
    const leaveTypes: Record<string, number> = {
      annual: 0,
      sick: 0,
      maternity: 0,
      paternity: 0,
      unpaid: 0,
      other: 0
    };
    
    leaves.forEach(leave => {
      leaveTypes[leave.leaveType] += leave.duration;
    });
    
    return Object.entries(leaveTypes).map(([type, days]) => ({
      type: type.charAt(0).toUpperCase() + type.slice(1),
      days
    }));
  }, []);

  // Bonus distribution data
  const bonusDistributionData = React.useMemo(() => {
    const bonusTypes: Record<string, number> = {
      performance: 0,
      festival: 0,
      annual: 0,
      project: 0,
      other: 0
    };
    
    bonuses.forEach(bonus => {
      bonusTypes[bonus.bonusType] += bonus.amount;
    });
    
    return Object.entries(bonusTypes).map(([type, amount]) => ({
      type: type.charAt(0).toUpperCase() + type.slice(1),
      amount
    }));
  }, []);

  // Monthly payroll trend data
  const monthlyPayrollData = React.useMemo(() => {
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    
    // Generate dummy data for the past 12 months
    return months.map((month, index) => {
      // Use actual data for April (index 3) from our dummy data
      if (index === 3) {
        const totalNetSalary = payrolls.reduce((sum, payroll) => sum + payroll.netSalary, 0);
        const totalGrossSalary = payrolls.reduce((sum, payroll) => sum + payroll.grossEarnings, 0);
        return {
          month,
          netSalary: totalNetSalary,
          grossSalary: totalGrossSalary
        };
      }
      
      // Generate random data for other months
      const baseValue = 400000 + Math.random() * 100000;
      return {
        month,
        netSalary: baseValue * 0.75,
        grossSalary: baseValue
      };
    });
  }, []);

  // Attendance status distribution data
  const attendanceStatusData = React.useMemo(() => {
    const statusCounts: Record<string, number> = {
      present: 0,
      absent: 0,
      late: 0,
      'half-day': 0,
      'work-from-home': 0
    };
    
    attendances.forEach(attendance => {
      statusCounts[attendance.status]++;
    });
    
    return Object.entries(statusCounts).map(([status, count]) => ({
      status: status.charAt(0).toUpperCase() + status.replace('-', ' ').slice(1),
      count
    }));
  }, []);

  // Department-wise attendance data
  const departmentAttendanceData = React.useMemo(() => {
    const departments: Record<string, { 
      total: number, 
      present: number, 
      absent: number, 
      late: number, 
      wfh: number 
    }> = {};
    
    employees.forEach(employee => {
      if (!departments[employee.department]) {
        departments[employee.department] = { 
          total: 0, 
          present: 0, 
          absent: 0, 
          late: 0, 
          wfh: 0 
        };
      }
      
      departments[employee.department].total += 1;
      
      // Get the most recent attendance record for this employee
      const latestAttendance = [...attendances]
        .filter(a => a.employeeId === employee.id)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];
      
      if (latestAttendance) {
        if (latestAttendance.status === 'present') {
          departments[employee.department].present += 1;
        } else if (latestAttendance.status === 'absent') {
          departments[employee.department].absent += 1;
        } else if (latestAttendance.status === 'late') {
          departments[employee.department].late += 1;
        } else if (latestAttendance.status === 'work-from-home') {
          departments[employee.department].wfh += 1;
        }
      }
    });
    
    return Object.entries(departments).map(([department, data]) => ({
      department,
      total: data.total,
      present: data.present,
      absent: data.absent,
      late: data.late,
      wfh: data.wfh,
      attendanceRate: Math.round(((data.present + data.late + data.wfh) / data.total) * 100)
    }));
  }, []);

  // COLORS for charts
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Reports & Analytics</h1>
        <div>
          <Button className="mr-2">Export to PDF</Button>
          <Button variant="outline">Export to Excel</Button>
        </div>
      </div>

      <Tabs defaultValue="payroll" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="payroll">Payroll Summary</TabsTrigger>
          <TabsTrigger value="department">Department Analysis</TabsTrigger>
          <TabsTrigger value="leave">Leave Utilization</TabsTrigger>
          <TabsTrigger value="bonus">Bonus Distribution</TabsTrigger>
          <TabsTrigger value="attendance">Attendance Analytics</TabsTrigger>
        </TabsList>
        
        {/* Payroll Summary Tab */}
        <TabsContent value="payroll" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Net Salary (Current Month)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {formatCurrency(payrolls.reduce((sum, payroll) => sum + payroll.netSalary, 0))}
                </div>
                <p className="text-xs text-muted-foreground">
                  +2.5% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Gross Earnings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {formatCurrency(payrolls.reduce((sum, payroll) => sum + payroll.grossEarnings, 0))}
                </div>
                <p className="text-xs text-muted-foreground">
                  +3.2% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Employees Paid</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {payrolls.length}
                </div>
                <p className="text-xs text-muted-foreground">
                  +1 from last month
                </p>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Monthly Payroll Trend</CardTitle>
              <CardDescription>Net vs Gross Salary over the past 12 months</CardDescription>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={monthlyPayrollData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip formatter={(value) => formatCurrency(value as number)} />
                    <Legend />
                    <Line type="monotone" dataKey="grossSalary" stroke="#8884d8" name="Gross Salary" />
                    <Line type="monotone" dataKey="netSalary" stroke="#82ca9d" name="Net Salary" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Payrolls</CardTitle>
                <CardDescription>Latest processed payrolls</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 text-sm font-medium text-muted-foreground">
                    <div>Employee</div>
                    <div>Date</div>
                    <div className="text-right">Amount</div>
                  </div>
                  {payrolls.slice(0, 5).map((payroll) => {
                    const employee = employees.find(e => e.id === payroll.employeeId);
                    return (
                      <div key={payroll.id} className="grid grid-cols-3 text-sm">
                        <div>{employee ? `${employee.firstName} ${employee.lastName}` : 'Unknown'}</div>
                        <div>{payroll.paymentDate ? formatDate(payroll.paymentDate) : 'Pending'}</div>
                        <div className="text-right font-medium">{formatCurrency(payroll.netSalary)}</div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Deductions Summary</CardTitle>
                <CardDescription>Breakdown of total deductions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={[
                          { name: 'Tax', value: payrolls.reduce((sum, p) => sum + p.totalDeductions * 0.8, 0) },
                          { name: 'Insurance', value: payrolls.reduce((sum, p) => sum + p.totalDeductions * 0.15, 0) },
                          { name: 'Other', value: payrolls.reduce((sum, p) => sum + p.totalDeductions * 0.05, 0) }
                        ]}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {[0, 1, 2].map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => formatCurrency(value as number)} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        {/* Department Analysis Tab */}
        <TabsContent value="department" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Department-wise Salary Distribution</CardTitle>
              <CardDescription>Average and total salary by department</CardDescription>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={departmentSalaryData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="department" />
                    <YAxis />
                    <Tooltip formatter={(value) => formatCurrency(value as number)} />
                    <Legend />
                    <Bar dataKey="averageSalary" name="Average Salary" fill="#8884d8" />
                    <Bar dataKey="totalSalary" name="Total Salary" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Department Headcount</CardTitle>
                <CardDescription>Number of employees by department</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={departmentSalaryData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="employeeCount"
                        label={({ department, employeeCount, percent }) => 
                          `${department}: ${employeeCount} (${(percent * 100).toFixed(0)}%)`
                        }
                      >
                        {departmentSalaryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Department Details</CardTitle>
                <CardDescription>Salary statistics by department</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-4 text-sm font-medium text-muted-foreground">
                    <div>Department</div>
                    <div>Employees</div>
                    <div>Avg. Salary</div>
                    <div className="text-right">Total Salary</div>
                  </div>
                  {departmentSalaryData.map((dept, index) => (
                    <div key={index} className="grid grid-cols-4 text-sm">
                      <div>{dept.department}</div>
                      <div>{dept.employeeCount}</div>
                      <div>{formatCurrency(dept.averageSalary)}</div>
                      <div className="text-right font-medium">{formatCurrency(dept.totalSalary)}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        {/* Leave Utilization Tab */}
        <TabsContent value="leave" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Leave Utilization by Type</CardTitle>
              <CardDescription>Number of days taken by leave type</CardDescription>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={leaveUtilizationData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="type" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="days" name="Days" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Leave Status Distribution</CardTitle>
                <CardDescription>Distribution of leave requests by status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={[
                          { name: 'Approved', value: leaves.filter(l => l.status === 'approved').length },
                          { name: 'Pending', value: leaves.filter(l => l.status === 'pending').length },
                          { name: 'Rejected', value: leaves.filter(l => l.status === 'rejected').length },
                          { name: 'Cancelled', value: leaves.filter(l => l.status === 'cancelled').length }
                        ]}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, value, percent }) => 
                          `${name}: ${value} (${(percent * 100).toFixed(0)}%)`
                        }
                      >
                        {[0, 1, 2, 3].map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Recent Leave Requests</CardTitle>
                <CardDescription>Latest leave requests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-4 text-sm font-medium text-muted-foreground">
                    <div>Employee</div>
                    <div>Type</div>
                    <div>Duration</div>
                    <div className="text-right">Status</div>
                  </div>
                  {leaves.slice(0, 5).map((leave) => {
                    const employee = employees.find(e => e.id === leave.employeeId);
                    return (
                      <div key={leave.id} className="grid grid-cols-4 text-sm">
                        <div>{employee ? `${employee.firstName} ${employee.lastName}` : 'Unknown'}</div>
                        <div>{leave.leaveType.charAt(0).toUpperCase() + leave.leaveType.slice(1)}</div>
                        <div>{leave.duration} day{leave.duration > 1 ? 's' : ''}</div>
                        <div className="text-right font-medium">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            leave.status === 'approved' ? 'bg-green-100 text-green-800' :
                            leave.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                            leave.status === 'rejected' ? 'bg-red-100 text-red-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {leave.status.charAt(0).toUpperCase() + leave.status.slice(1)}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        {/* Bonus Distribution Tab */}
        <TabsContent value="bonus" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Bonus Distribution by Type</CardTitle>
              <CardDescription>Total bonus amount by type</CardDescription>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={bonusDistributionData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="type" />
                    <YAxis />
                    <Tooltip formatter={(value) => formatCurrency(value as number)} />
                    <Legend />
                    <Bar dataKey="amount" name="Amount" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Bonus Status Distribution</CardTitle>
                <CardDescription>Distribution of bonuses by status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={[
                          { name: 'Paid', value: bonuses.filter(b => b.status === 'paid').length },
                          { name: 'Pending', value: bonuses.filter(b => b.status === 'pending').length },
                          { name: 'Approved', value: bonuses.filter(b => b.status === 'approved').length },
                          { name: 'Rejected', value: bonuses.filter(b => b.status === 'rejected').length }
                        ]}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, value, percent }) => 
                          `${name}: ${value} (${(percent * 100).toFixed(0)}%)`
                        }
                      >
                        {[0, 1, 2, 3].map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Recent Bonuses</CardTitle>
                <CardDescription>Latest bonus payments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-4 text-sm font-medium text-muted-foreground">
                    <div>Employee</div>
                    <div>Type</div>
                    <div>Amount</div>
                    <div className="text-right">Status</div>
                  </div>
                  {bonuses.slice(0, 5).map((bonus) => {
                    const employee = employees.find(e => e.id === bonus.employeeId);
                    return (
                      <div key={bonus.id} className="grid grid-cols-4 text-sm">
                        <div>{employee ? `${employee.firstName} ${employee.lastName}` : 'Unknown'}</div>
                        <div>{bonus.bonusType.charAt(0).toUpperCase() + bonus.bonusType.slice(1)}</div>
                        <div>{formatCurrency(bonus.amount)}</div>
                        <div className="text-right font-medium">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            bonus.status === 'paid' ? 'bg-blue-100 text-blue-800' :
                            bonus.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                            bonus.status === 'approved' ? 'bg-green-100 text-green-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {bonus.status.charAt(0).toUpperCase() + bonus.status.slice(1)}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Attendance Analytics Tab */}
        <TabsContent value="attendance" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Present Today</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {attendances.filter(a => 
                    a.date === new Date().toISOString().split('T')[0] && 
                    (a.status === 'present' || a.status === 'late' || a.status === 'work-from-home')
                  ).length}
                </div>
                <p className="text-xs text-muted-foreground">
                  Out of {employees.length} employees
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Absent Today</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {attendances.filter(a => 
                    a.date === new Date().toISOString().split('T')[0] && 
                    a.status === 'absent'
                  ).length}
                </div>
                <p className="text-xs text-muted-foreground">
                  Out of {employees.length} employees
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Average Work Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {(attendances
                    .filter(a => a.workHours !== null)
                    .reduce((sum, a) => sum + (a.workHours || 0), 0) / 
                    attendances.filter(a => a.workHours !== null).length
                  ).toFixed(2)} hrs
                </div>
                <p className="text-xs text-muted-foreground">
                  Based on all attendance records
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Attendance Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {Math.round((attendances.filter(a => 
                    a.status === 'present' || a.status === 'late' || a.status === 'work-from-home' || a.status === 'half-day'
                  ).length / attendances.length) * 100)}%
                </div>
                <p className="text-xs text-muted-foreground">
                  Overall attendance rate
                </p>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Attendance Status Distribution</CardTitle>
              <CardDescription>Distribution of attendance records by status</CardDescription>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={attendanceStatusData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="status" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" name="Count" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Department Attendance Rate</CardTitle>
                <CardDescription>Attendance rate by department</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={departmentAttendanceData}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="department" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="attendanceRate" name="Attendance Rate (%)" fill="#82ca9d" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Department Attendance Details</CardTitle>
                <CardDescription>Detailed attendance by department</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-6 text-sm font-medium text-muted-foreground">
                    <div>Department</div>
                    <div>Total</div>
                    <div>Present</div>
                    <div>Absent</div>
                    <div>Late</div>
                    <div>WFH</div>
                  </div>
                  {departmentAttendanceData.map((dept, index) => (
                    <div key={index} className="grid grid-cols-6 text-sm">
                      <div>{dept.department}</div>
                      <div>{dept.total}</div>
                      <div>{dept.present}</div>
                      <div>{dept.absent}</div>
                      <div>{dept.late}</div>
                      <div>{dept.wfh}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
