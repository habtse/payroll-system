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
import { Textarea } from "@/components/ui/textarea"
import { attendances, employees } from "@/lib/dummy-data"
import { Attendance } from "@/types"
import { format } from "date-fns"
import { CalendarIcon, Clock, Edit, Eye, Plus, Search, Trash2 } from "lucide-react"

export default function AttendancePage() {
  const [searchTerm, setSearchTerm] = React.useState("")
  const [attendanceList, setAttendanceList] = React.useState<Attendance[]>([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [selectedDate, setSelectedDate] = React.useState<Date>(new Date())
  const [isAddDialogOpen, setIsAddDialogOpen] = React.useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = React.useState(false)
  const [isViewDialogOpen, setIsViewDialogOpen] = React.useState(false)
  const [selectedAttendance, setSelectedAttendance] = React.useState<Attendance | null>(null)
  const [selectedEmployee, setSelectedEmployee] = React.useState<string>("")
  const [checkInTime, setCheckInTime] = React.useState<string>("")
  const [checkOutTime, setCheckOutTime] = React.useState<string>("")
  const [attendanceStatus, setAttendanceStatus] = React.useState<string>("present")
  const [notes, setNotes] = React.useState<string>("")

  // Fetch attendance data on component mount
  React.useEffect(() => {
    const fetchAttendance = async () => {
      try {
        // In a real app, this would be an API call
        // const response = await fetch('/api/attendance');
        // const data = await response.json();
        
        // Using dummy data instead
        setTimeout(() => {
          setAttendanceList(attendances);
          setIsLoading(false);
        }, 500);
      } catch (error) {
        console.error('Error fetching attendance data:', error);
        setIsLoading(false);
      }
    };

    fetchAttendance();
  }, []);

  // Filter attendance based on search term and selected date
  const filteredAttendance = React.useMemo(() => {
    const formattedDate = format(selectedDate, 'yyyy-MM-dd');
    
    return attendanceList.filter(attendance => {
      const employee = employees.find(emp => emp.id === attendance.employeeId);
      const employeeName = employee ? `${employee.firstName} ${employee.lastName}` : '';
      
      const matchesSearch = 
        employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        attendance.status.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesDate = attendance.date === formattedDate;
      
      return matchesSearch && matchesDate;
    });
  }, [attendanceList, searchTerm, selectedDate]);

  // Get employee name by ID
  const getEmployeeName = (employeeId: string) => {
    const employee = employees.find(emp => emp.id === employeeId);
    return employee ? `${employee.firstName} ${employee.lastName}` : 'Unknown Employee';
  };

  // Format time for display
  const formatTime = (time: string | null) => {
    if (!time) return 'N/A';
    return time;
  };

  // Calculate work hours
  const calculateWorkHours = (checkIn: string, checkOut: string) => {
    if (!checkIn || !checkOut) return 0;
    
    const [checkInHours, checkInMinutes] = checkIn.split(':').map(Number);
    const [checkOutHours, checkOutMinutes] = checkOut.split(':').map(Number);
    
    const checkInMinutesTotal = checkInHours * 60 + checkInMinutes;
    const checkOutMinutesTotal = checkOutHours * 60 + checkOutMinutes;
    
    const diffMinutes = checkOutMinutesTotal - checkInMinutesTotal;
    return Math.round((diffMinutes / 60) * 100) / 100;
  };

  // Handle add attendance
  const handleAddAttendance = () => {
    const formattedDate = format(selectedDate, 'yyyy-MM-dd');
    const workHours = checkInTime && checkOutTime 
      ? calculateWorkHours(checkInTime, checkOutTime)
      : null;
    
    const newAttendance: Attendance = {
      id: `a${attendanceList.length + 1}`,
      employeeId: selectedEmployee,
      date: formattedDate,
      checkInTime: checkInTime || null,
      checkOutTime: checkOutTime || null,
      status: attendanceStatus as 'present' | 'absent' | 'late' | 'half-day' | 'work-from-home',
      workHours,
      notes: notes || null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    setAttendanceList(prev => [...prev, newAttendance]);
    resetForm();
    setIsAddDialogOpen(false);
  };

  // Handle edit attendance
  const handleEditAttendance = () => {
    if (!selectedAttendance) return;
    
    const workHours = checkInTime && checkOutTime 
      ? calculateWorkHours(checkInTime, checkOutTime)
      : null;
    
    const updatedAttendance: Attendance = {
      ...selectedAttendance,
      employeeId: selectedEmployee,
      checkInTime: checkInTime || null,
      checkOutTime: checkOutTime || null,
      status: attendanceStatus as 'present' | 'absent' | 'late' | 'half-day' | 'work-from-home',
      workHours,
      notes: notes || null,
      updatedAt: new Date().toISOString()
    };
    
    setAttendanceList(prev => 
      prev.map(attendance => 
        attendance.id === selectedAttendance.id ? updatedAttendance : attendance
      )
    );
    
    resetForm();
    setIsEditDialogOpen(false);
  };

  // Handle delete attendance
  const handleDeleteAttendance = (id: string) => {
    setAttendanceList(prev => prev.filter(attendance => attendance.id !== id));
  };

  // Reset form
  const resetForm = () => {
    setSelectedEmployee("");
    setCheckInTime("");
    setCheckOutTime("");
    setAttendanceStatus("present");
    setNotes("");
    setSelectedAttendance(null);
  };

  // Open edit dialog
  const openEditDialog = (attendance: Attendance) => {
    setSelectedAttendance(attendance);
    setSelectedEmployee(attendance.employeeId);
    setCheckInTime(attendance.checkInTime || "");
    setCheckOutTime(attendance.checkOutTime || "");
    setAttendanceStatus(attendance.status);
    setNotes(attendance.notes || "");
    setIsEditDialogOpen(true);
  };

  // Open view dialog
  const openViewDialog = (attendance: Attendance) => {
    setSelectedAttendance(attendance);
    setIsViewDialogOpen(true);
  };

  // Get status badge color
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'present':
        return <Badge className="bg-green-500">Present</Badge>;
      case 'absent':
        return <Badge className="bg-red-500">Absent</Badge>;
      case 'late':
        return <Badge className="bg-yellow-500">Late</Badge>;
      case 'half-day':
        return <Badge className="bg-blue-500">Half Day</Badge>;
      case 'work-from-home':
        return <Badge className="bg-purple-500">WFH</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Attendance Management</h1>
        <Button onClick={() => setIsAddDialogOpen(true)}>
          <Plus className="mr-2 h-4 w-4" /> Add Attendance
        </Button>
      </div>

      <Tabs defaultValue="daily" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="daily">Daily Attendance</TabsTrigger>
          <TabsTrigger value="employee">Employee Attendance</TabsTrigger>
          <TabsTrigger value="summary">Attendance Summary</TabsTrigger>
        </TabsList>
        
        {/* Daily Attendance Tab */}
        <TabsContent value="daily" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Daily Attendance Record</CardTitle>
              <CardDescription>
                View and manage attendance records for a specific date
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
                        {format(selectedDate, "PPP")}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={(date) => date && setSelectedDate(date)}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
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
                        <TableHead>Check In</TableHead>
                        <TableHead>Check Out</TableHead>
                        <TableHead>Work Hours</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Notes</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredAttendance.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={7} className="text-center py-10">
                            No attendance records found for {format(selectedDate, "PPP")}
                          </TableCell>
                        </TableRow>
                      ) : (
                        filteredAttendance.map((attendance) => (
                          <TableRow key={attendance.id}>
                            <TableCell>{getEmployeeName(attendance.employeeId)}</TableCell>
                            <TableCell>{formatTime(attendance.checkInTime)}</TableCell>
                            <TableCell>{formatTime(attendance.checkOutTime)}</TableCell>
                            <TableCell>{attendance.workHours !== null ? `${attendance.workHours} hrs` : 'N/A'}</TableCell>
                            <TableCell>{getStatusBadge(attendance.status)}</TableCell>
                            <TableCell>{attendance.notes || '-'}</TableCell>
                            <TableCell className="text-right">
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => openViewDialog(attendance)}
                              >
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => openEditDialog(attendance)}
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => handleDeleteAttendance(attendance.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Employee Attendance Tab */}
        <TabsContent value="employee" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Employee Attendance History</CardTitle>
              <CardDescription>
                View attendance history for specific employees
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-6">
                <div className="w-full md:w-1/3">
                  <Select onValueChange={(value) => setSelectedEmployee(value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an employee" />
                    </SelectTrigger>
                    <SelectContent>
                      {employees.map((employee) => (
                        <SelectItem key={employee.id} value={employee.id}>
                          {employee.firstName} {employee.lastName}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {selectedEmployee ? (
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Check In</TableHead>
                        <TableHead>Check Out</TableHead>
                        <TableHead>Work Hours</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Notes</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {attendanceList
                        .filter(a => a.employeeId === selectedEmployee)
                        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                        .map((attendance) => (
                          <TableRow key={attendance.id}>
                            <TableCell>{format(new Date(attendance.date), "PPP")}</TableCell>
                            <TableCell>{formatTime(attendance.checkInTime)}</TableCell>
                            <TableCell>{formatTime(attendance.checkOutTime)}</TableCell>
                            <TableCell>{attendance.workHours !== null ? `${attendance.workHours} hrs` : 'N/A'}</TableCell>
                            <TableCell>{getStatusBadge(attendance.status)}</TableCell>
                            <TableCell>{attendance.notes || '-'}</TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </div>
              ) : (
                <div className="flex justify-center items-center h-64 text-muted-foreground">
                  Please select an employee to view attendance history
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Attendance Summary Tab */}
        <TabsContent value="summary" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Present Today</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {attendanceList.filter(a => 
                    a.date === format(new Date(), 'yyyy-MM-dd') && 
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
                  {attendanceList.filter(a => 
                    a.date === format(new Date(), 'yyyy-MM-dd') && 
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
                <CardTitle className="text-sm font-medium">Late Arrivals</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {attendanceList.filter(a => 
                    a.date === format(new Date(), 'yyyy-MM-dd') && 
                    a.status === 'late'
                  ).length}
                </div>
                <p className="text-xs text-muted-foreground">
                  Today's late arrivals
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Working From Home</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {attendanceList.filter(a => 
                    a.date === format(new Date(), 'yyyy-MM-dd') && 
                    a.status === 'work-from-home'
                  ).length}
                </div>
                <p className="text-xs text-muted-foreground">
                  Remote workers today
                </p>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Attendance Overview</CardTitle>
              <CardDescription>
                Summary of attendance records by department
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Department</TableHead>
                      <TableHead>Total Employees</TableHead>
                      <TableHead>Present</TableHead>
                      <TableHead>Absent</TableHead>
                      <TableHead>Late</TableHead>
                      <TableHead>WFH</TableHead>
                      <TableHead>Attendance Rate</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {/* Group by department and calculate stats */}
                    {Object.entries(
                      employees.reduce((acc, employee) => {
                        if (!acc[employee.department]) {
                          acc[employee.department] = {
                            total: 0,
                            present: 0,
                            absent: 0,
                            late: 0,
                            wfh: 0
                          };
                        }
                        
                        acc[employee.department].total += 1;
                        
                        const todayAttendance = attendanceList.find(a => 
                          a.employeeId === employee.id && 
                          a.date === format(new Date(), 'yyyy-MM-dd')
                        );
                        
                        if (todayAttendance) {
                          if (todayAttendance.status === 'present') {
                            acc[employee.department].present += 1;
                          } else if (todayAttendance.status === 'absent') {
                            acc[employee.department].absent += 1;
                          } else if (todayAttendance.status === 'late') {
                            acc[employee.department].late += 1;
                          } else if (todayAttendance.status === 'work-from-home') {
                            acc[employee.department].wfh += 1;
                          }
                        }
                        
                        return acc;
                      }, {} as Record<string, { total: number, present: number, absent: number, late: number, wfh: number }>)
                    ).map(([department, data]) => (
                      <TableRow key={department}>
                        <TableCell>{department}</TableCell>
                        <TableCell>{data.total}</TableCell>
                        <TableCell>{data.present}</TableCell>
                        <TableCell>{data.absent}</TableCell>
                        <TableCell>{data.late}</TableCell>
                        <TableCell>{data.wfh}</TableCell>
                        <TableCell>
                          {Math.round(((data.present + data.late + data.wfh) / data.total) * 100)}%
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

      {/* Add Attendance Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Add Attendance Record</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="employee">Employee</Label>
              <Select value={selectedEmployee} onValueChange={setSelectedEmployee}>
                <SelectTrigger id="employee">
                  <SelectValue placeholder="Select an employee" />
                </SelectTrigger>
                <SelectContent>
                  {employees.map((employee) => (
                    <SelectItem key={employee.id} value={employee.id}>
                      {employee.firstName} {employee.lastName}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="date">Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    id="date"
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {format(selectedDate, "PPP")}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={(date) => date && setSelectedDate(date)}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="checkIn">Check In Time</Label>
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="checkIn"
                    type="time"
                    value={checkInTime}
                    onChange={(e) => setCheckInTime(e.target.value)}
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="checkOut">Check Out Time</Label>
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="checkOut"
                    type="time"
                    value={checkOutTime}
                    onChange={(e) => setCheckOutTime(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="status">Status</Label>
              <Select value={attendanceStatus} onValueChange={setAttendanceStatus}>
                <SelectTrigger id="status">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="present">Present</SelectItem>
                  <SelectItem value="absent">Absent</SelectItem>
                  <SelectItem value="late">Late</SelectItem>
                  <SelectItem value="half-day">Half Day</SelectItem>
                  <SelectItem value="work-from-home">Work From Home</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="notes">Notes (Optional)</Label>
              <Textarea
                id="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Add any notes about this attendance record"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddAttendance} disabled={!selectedEmployee}>
              Add Record
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Attendance Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Edit Attendance Record</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="edit-employee">Employee</Label>
              <Select value={selectedEmployee} onValueChange={setSelectedEmployee}>
                <SelectTrigger id="edit-employee">
                  <SelectValue placeholder="Select an employee" />
                </SelectTrigger>
                <SelectContent>
                  {employees.map((employee) => (
                    <SelectItem key={employee.id} value={employee.id}>
                      {employee.firstName} {employee.lastName}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="edit-checkIn">Check In Time</Label>
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="edit-checkIn"
                    type="time"
                    value={checkInTime}
                    onChange={(e) => setCheckInTime(e.target.value)}
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-checkOut">Check Out Time</Label>
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="edit-checkOut"
                    type="time"
                    value={checkOutTime}
                    onChange={(e) => setCheckOutTime(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="edit-status">Status</Label>
              <Select value={attendanceStatus} onValueChange={setAttendanceStatus}>
                <SelectTrigger id="edit-status">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="present">Present</SelectItem>
                  <SelectItem value="absent">Absent</SelectItem>
                  <SelectItem value="late">Late</SelectItem>
                  <SelectItem value="half-day">Half Day</SelectItem>
                  <SelectItem value="work-from-home">Work From Home</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="edit-notes">Notes (Optional)</Label>
              <Textarea
                id="edit-notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Add any notes about this attendance record"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleEditAttendance}>
              Update Record
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* View Attendance Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Attendance Details</DialogTitle>
          </DialogHeader>
          {selectedAttendance && (
            <div className="py-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium text-sm text-muted-foreground">Employee</h3>
                  <p>{getEmployeeName(selectedAttendance.employeeId)}</p>
                </div>
                <div>
                  <h3 className="font-medium text-sm text-muted-foreground">Date</h3>
                  <p>{format(new Date(selectedAttendance.date), "PPP")}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <h3 className="font-medium text-sm text-muted-foreground">Check In Time</h3>
                  <p>{formatTime(selectedAttendance.checkInTime)}</p>
                </div>
                <div>
                  <h3 className="font-medium text-sm text-muted-foreground">Check Out Time</h3>
                  <p>{formatTime(selectedAttendance.checkOutTime)}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <h3 className="font-medium text-sm text-muted-foreground">Work Hours</h3>
                  <p>{selectedAttendance.workHours !== null ? `${selectedAttendance.workHours} hours` : 'N/A'}</p>
                </div>
                <div>
                  <h3 className="font-medium text-sm text-muted-foreground">Status</h3>
                  <div className="mt-1">{getStatusBadge(selectedAttendance.status)}</div>
                </div>
              </div>
              
              {selectedAttendance.notes && (
                <div className="mt-4">
                  <h3 className="font-medium text-sm text-muted-foreground">Notes</h3>
                  <p>{selectedAttendance.notes}</p>
                </div>
              )}
              
              <div className="grid grid-cols-2 gap-4 mt-4 text-sm text-muted-foreground">
                <div>
                  <p>Created: {format(new Date(selectedAttendance.createdAt), "PPP p")}</p>
                </div>
                <div>
                  <p>Updated: {format(new Date(selectedAttendance.updatedAt), "PPP p")}</p>
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
    </div>
  )
}
