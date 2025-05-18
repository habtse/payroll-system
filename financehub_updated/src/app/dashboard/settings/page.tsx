"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { companySettings } from "@/lib/dummy-data"
import { CalendarIcon, Check, Globe, Mail, MapPin, Phone, Plus, Save } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import { Badge } from "@/components/ui/badge"
// import { toast } from "@/components/ui/use-toast"
// import { ToastAction } from "@/components/ui/toast"

export default function SettingsPage() {
  // Company Information
  const [companyName, setCompanyName] = React.useState(companySettings.companyName)
  const [legalName, setLegalName] = React.useState(companySettings.legalName)
  const [taxId, setTaxId] = React.useState(companySettings.taxId)
  const [registrationNumber, setRegistrationNumber] = React.useState(companySettings.registrationNumber)
  
  // Contact Information
  const [address, setAddress] = React.useState(companySettings.address)
  const [city, setCity] = React.useState(companySettings.city)
  const [state, setState] = React.useState(companySettings.state)
  const [country, setCountry] = React.useState(companySettings.country)
  const [postalCode, setPostalCode] = React.useState(companySettings.postalCode)
  const [phone, setPhone] = React.useState(companySettings.phone)
  const [email, setEmail] = React.useState(companySettings.email)
  const [website, setWebsite] = React.useState(companySettings.website)
  
  // System Settings
  const [fiscalYearStart, setFiscalYearStart] = React.useState<Date | undefined>(
    new Date(new Date().getFullYear(), parseInt(companySettings.fiscalYearStart.split('-')[0]) - 1, parseInt(companySettings.fiscalYearStart.split('-')[1]))
  )
  const [timezone, setTimezone] = React.useState(companySettings.timezone)
  const [dateFormat, setDateFormat] = React.useState(companySettings.dateFormat)
  const [currencyCode, setCurrencyCode] = React.useState(companySettings.currencyCode)
  const [currencySymbol, setCurrencySymbol] = React.useState(companySettings.currencySymbol)
  
  // Payroll Settings
  const [payrollCutoffDay, setPayrollCutoffDay] = React.useState("25")
  const [payrollProcessingDay, setPayrollProcessingDay] = React.useState("28")
  const [paymentMethod, setPaymentMethod] = React.useState("bank_transfer")
  const [taxCalculationMethod, setTaxCalculationMethod] = React.useState("progressive")
  
  // Leave Settings
  const [annualLeaveAllowance, setAnnualLeaveAllowance] = React.useState("20")
  const [sickLeaveAllowance, setSickLeaveAllowance] = React.useState("10")
  const [leaveApprovalWorkflow, setLeaveApprovalWorkflow] = React.useState("manager_hr")
  const [leaveCarryForwardLimit, setLeaveCarryForwardLimit] = React.useState("5")
  
  // Handle save settings
  const handleSaveSettings = (section: string) => {
    // In a real app, this would be an API call
    console.log(`Saving ${section} settings`);
    
    // Show success toast
    toast({
      title: "Settings saved",
      description: `Your ${section} settings have been saved successfully.`,
      action: (
        <ToastAction altText="OK">OK</ToastAction>
      ),
    });
  };

  // Available timezones (simplified list)
  const timezones = [
    "America/New_York",
    "America/Chicago",
    "America/Denver",
    "America/Los_Angeles",
    "America/Toronto",
    "Europe/London",
    "Europe/Paris",
    "Europe/Berlin",
    "Asia/Tokyo",
    "Asia/Singapore",
    "Australia/Sydney",
    "Pacific/Auckland"
  ];

  // Available date formats
  const dateFormats = [
    { value: "MM/DD/YYYY", label: "MM/DD/YYYY (US)" },
    { value: "DD/MM/YYYY", label: "DD/MM/YYYY (UK/EU)" },
    { value: "YYYY-MM-DD", label: "YYYY-MM-DD (ISO)" },
    { value: "DD.MM.YYYY", label: "DD.MM.YYYY (German)" }
  ];

  // Available currencies
  const currencies = [
    { code: "USD", symbol: "$", name: "US Dollar" },
    { code: "EUR", symbol: "€", name: "Euro" },
    { code: "GBP", symbol: "£", name: "British Pound" },
    { code: "JPY", symbol: "¥", name: "Japanese Yen" },
    { code: "CAD", symbol: "C$", name: "Canadian Dollar" },
    { code: "AUD", symbol: "A$", name: "Australian Dollar" },
    { code: "INR", symbol: "₹", name: "Indian Rupee" },
    { code: "CNY", symbol: "¥", name: "Chinese Yuan" }
  ];

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Company Settings</h1>
      </div>

      <Tabs defaultValue="company" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="company">Company Info</TabsTrigger>
          <TabsTrigger value="system">System Settings</TabsTrigger>
          <TabsTrigger value="payroll">Payroll Settings</TabsTrigger>
          <TabsTrigger value="leave">Leave Settings</TabsTrigger>
        </TabsList>
        
        {/* Company Information Tab */}
        <TabsContent value="company" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Company Information</CardTitle>
              <CardDescription>
                Basic information about your company
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="companyName">Company Name</Label>
                    <Input
                      id="companyName"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="legalName">Legal Name</Label>
                    <Input
                      id="legalName"
                      value={legalName}
                      onChange={(e) => setLegalName(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="taxId">Tax ID</Label>
                    <Input
                      id="taxId"
                      value={taxId}
                      onChange={(e) => setTaxId(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="registrationNumber">Registration Number</Label>
                    <Input
                      id="registrationNumber"
                      value={registrationNumber}
                      onChange={(e) => setRegistrationNumber(e.target.value)}
                    />
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Contact Information</h3>
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="address">Address</Label>
                      <Textarea
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        rows={2}
                      />
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="state">State/Province</Label>
                        <Input
                          id="state"
                          value={state}
                          onChange={(e) => setState(e.target.value)}
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="postalCode">Postal Code</Label>
                        <Input
                          id="postalCode"
                          value={postalCode}
                          onChange={(e) => setPostalCode(e.target.value)}
                        />
                      </div>
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor="country">Country</Label>
                      <Input
                        id="country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                      />
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="phone">Phone</Label>
                        <div className="flex">
                          <Phone className="mr-2 h-4 w-4 mt-3 text-muted-foreground" />
                          <Input
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <div className="flex">
                          <Mail className="mr-2 h-4 w-4 mt-3 text-muted-foreground" />
                          <Input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="website">Website</Label>
                        <div className="flex">
                          <Globe className="mr-2 h-4 w-4 mt-3 text-muted-foreground" />
                          <Input
                            id="website"
                            value={website}
                            onChange={(e) => setWebsite(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Company Logo</h3>
                  <div className="flex items-center gap-4">
                    <div className="w-32 h-32 border rounded-md flex items-center justify-center">
                      <img 
                        src={companySettings.logo} 
                        alt="Company Logo" 
                        className="max-w-full max-h-full p-2"
                      />
                    </div>
                    <div>
                      <Button variant="outline" className="mb-2">Upload New Logo</Button>
                      <p className="text-sm text-muted-foreground">
                        Recommended size: 200x200 pixels. Max file size: 2MB.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button onClick={() => handleSaveSettings('company')}>
                    <Save className="mr-2 h-4 w-4" /> Save Changes
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* System Settings Tab */}
        <TabsContent value="system" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>System Settings</CardTitle>
              <CardDescription>
                Configure system-wide settings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="fiscalYearStart">Fiscal Year Start</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          id="fiscalYearStart"
                          variant="outline"
                          className="w-full justify-start text-left font-normal"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {fiscalYearStart ? format(fiscalYearStart, "MMMM d") : "Select date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={fiscalYearStart}
                          onSelect={setFiscalYearStart}
                          initialFocus
                          month={fiscalYearStart}
                          onMonthChange={() => {}}
                          captionLayout="dropdown-buttons"
                          fromYear={2020}
                          toYear={2030}
                          disabled={(date) => {
                            // Only allow selecting days that are the first of the month
                            return date.getDate() !== 1;
                          }}
                        />
                      </PopoverContent>
                    </Popover>
                    <p className="text-sm text-muted-foreground">
                      First day of your fiscal year
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <Select value={timezone} onValueChange={setTimezone}>
                      <SelectTrigger id="timezone">
                        <SelectValue placeholder="Select timezone" />
                      </SelectTrigger>
                      <SelectContent>
                        {timezones.map((tz) => (
                          <SelectItem key={tz} value={tz}>{tz}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="dateFormat">Date Format</Label>
                    <Select value={dateFormat} onValueChange={setDateFormat}>
                      <SelectTrigger id="dateFormat">
                        <SelectValue placeholder="Select date format" />
                      </SelectTrigger>
                      <SelectContent>
                        {dateFormats.map((format) => (
                          <SelectItem key={format.value} value={format.value}>{format.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="currency">Currency</Label>
                    <Select 
                      value={currencyCode} 
                      onValueChange={(value) => {
                        setCurrencyCode(value);
                        const currency = currencies.find(c => c.code === value);
                        if (currency) {
                          setCurrencySymbol(currency.symbol);
                        }
                      }}
                    >
                      <SelectTrigger id="currency">
                        <SelectValue placeholder="Select currency" />
                      </SelectTrigger>
                      <SelectContent>
                        {currencies.map((currency) => (
                          <SelectItem key={currency.code} value={currency.code}>
                            {currency.symbol} - {currency.name} ({currency.code})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <div className="flex items-center mt-2">
                      <Label htmlFor="currencySymbol" className="mr-2">Symbol:</Label>
                      <Input
                        id="currencySymbol"
                        value={currencySymbol}
                        onChange={(e) => setCurrencySymbol(e.target.value)}
                        className="w-16"
                      />
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Email Notifications</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Payroll Processing</h4>
                        <p className="text-sm text-muted-foreground">
                          Send notifications when payroll is processed
                        </p>
                      </div>
                      <div>
                        <Select defaultValue="all">
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select recipients" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Employees</SelectItem>
                            <SelectItem value="admin">Admins Only</SelectItem>
                            <SelectItem value="none">Disabled</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Leave Requests</h4>
                        <p className="text-sm text-muted-foreground">
                          Send notifications for leave request status changes
                        </p>
                      </div>
                      <div>
                        <Select defaultValue="all">
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select recipients" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Involved</SelectItem>
                            <SelectItem value="requester">Requester Only</SelectItem>
                            <SelectItem value="none">Disabled</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">System Updates</h4>
                        <p className="text-sm text-muted-foreground">
                          Send notifications about system updates and maintenance
                        </p>
                      </div>
                      <div>
                        <Select defaultValue="admin">
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select recipients" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Users</SelectItem>
                            <SelectItem value="admin">Admins Only</SelectItem>
                            <SelectItem value="none">Disabled</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button onClick={() => handleSaveSettings('system')}>
                    <Save className="mr-2 h-4 w-4" /> Save Changes
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Payroll Settings Tab */}
        <TabsContent value="payroll" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Payroll Settings</CardTitle>
              <CardDescription>
                Configure payroll processing settings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="payrollCutoffDay">Payroll Cutoff Day</Label>
                    <Select value={payrollCutoffDay} onValueChange={setPayrollCutoffDay}>
                      <SelectTrigger id="payrollCutoffDay">
                        <SelectValue placeholder="Select day" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="20">20th of every month</SelectItem>
                        <SelectItem value="25">25th of every month</SelectItem>
                        <SelectItem value="last">Last day of every month</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-sm text-muted-foreground">
                      Last day for attendance and time tracking
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="payrollProcessingDay">Payroll Processing Day</Label>
                    <Select value={payrollProcessingDay} onValueChange={setPayrollProcessingDay}>
                      <SelectTrigger id="payrollProcessingDay">
                        <SelectValue placeholder="Select day" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="25">25th of every month</SelectItem>
                        <SelectItem value="28">28th of every month</SelectItem>
                        <SelectItem value="last">Last day of every month</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-sm text-muted-foreground">
                      Day when payroll is processed
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="paymentMethod">Default Payment Method</Label>
                    <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                      <SelectTrigger id="paymentMethod">
                        <SelectValue placeholder="Select method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bank_transfer">Bank Transfer</SelectItem>
                        <SelectItem value="check">Check</SelectItem>
                        <SelectItem value="cash">Cash</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="taxCalculationMethod">Tax Calculation Method</Label>
                    <Select value={taxCalculationMethod} onValueChange={setTaxCalculationMethod}>
                      <SelectTrigger id="taxCalculationMethod">
                        <SelectValue placeholder="Select method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="progressive">Progressive Tax</SelectItem>
                        <SelectItem value="flat">Flat Rate Tax</SelectItem>
                        <SelectItem value="custom">Custom Formula</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Salary Components</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">House Rent Allowance</h4>
                        <p className="text-sm text-muted-foreground">
                          Default percentage of basic salary
                        </p>
                      </div>
                      <div className="flex items-center">
                        <Input
                          type="number"
                          defaultValue="30"
                          className="w-20 mr-2"
                        />
                        <span>%</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Transport Allowance</h4>
                        <p className="text-sm text-muted-foreground">
                          Default percentage of basic salary
                        </p>
                      </div>
                      <div className="flex items-center">
                        <Input
                          type="number"
                          defaultValue="10"
                          className="w-20 mr-2"
                        />
                        <span>%</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Medical Allowance</h4>
                        <p className="text-sm text-muted-foreground">
                          Default percentage of basic salary
                        </p>
                      </div>
                      <div className="flex items-center">
                        <Input
                          type="number"
                          defaultValue="10"
                          className="w-20 mr-2"
                        />
                        <span>%</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Other Allowances</h4>
                        <p className="text-sm text-muted-foreground">
                          Default percentage of basic salary
                        </p>
                      </div>
                      <div className="flex items-center">
                        <Input
                          type="number"
                          defaultValue="5"
                          className="w-20 mr-2"
                        />
                        <span>%</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button onClick={() => handleSaveSettings('payroll')}>
                    <Save className="mr-2 h-4 w-4" /> Save Changes
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Leave Settings Tab */}
        <TabsContent value="leave" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Leave Settings</CardTitle>
              <CardDescription>
                Configure leave policies and allowances
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="annualLeaveAllowance">Annual Leave Allowance</Label>
                    <div className="flex items-center">
                      <Input
                        id="annualLeaveAllowance"
                        type="number"
                        value={annualLeaveAllowance}
                        onChange={(e) => setAnnualLeaveAllowance(e.target.value)}
                        className="w-20 mr-2"
                      />
                      <span>days per year</span>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="sickLeaveAllowance">Sick Leave Allowance</Label>
                    <div className="flex items-center">
                      <Input
                        id="sickLeaveAllowance"
                        type="number"
                        value={sickLeaveAllowance}
                        onChange={(e) => setSickLeaveAllowance(e.target.value)}
                        className="w-20 mr-2"
                      />
                      <span>days per year</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="leaveApprovalWorkflow">Leave Approval Workflow</Label>
                    <Select value={leaveApprovalWorkflow} onValueChange={setLeaveApprovalWorkflow}>
                      <SelectTrigger id="leaveApprovalWorkflow">
                        <SelectValue placeholder="Select workflow" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="manager">Manager Only</SelectItem>
                        <SelectItem value="manager_hr">Manager then HR</SelectItem>
                        <SelectItem value="hr">HR Only</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="leaveCarryForwardLimit">Leave Carry Forward Limit</Label>
                    <div className="flex items-center">
                      <Input
                        id="leaveCarryForwardLimit"
                        type="number"
                        value={leaveCarryForwardLimit}
                        onChange={(e) => setLeaveCarryForwardLimit(e.target.value)}
                        className="w-20 mr-2"
                      />
                      <span>days maximum</span>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Leave Types</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-4 gap-4 font-medium text-sm text-muted-foreground">
                      <div>Leave Type</div>
                      <div>Paid/Unpaid</div>
                      <div>Default Allowance</div>
                      <div>Requires Documentation</div>
                    </div>
                    
                    <div className="grid grid-cols-4 gap-4 items-center">
                      <div>Annual Leave</div>
                      <div>
                        <Badge>Paid</Badge>
                      </div>
                      <div className="flex items-center">
                        <Input
                          type="number"
                          defaultValue="20"
                          className="w-16 mr-2"
                        />
                        <span className="text-sm">days</span>
                      </div>
                      <div>
                        <Select defaultValue="no">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="yes">Yes</SelectItem>
                            <SelectItem value="no">No</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-4 gap-4 items-center">
                      <div>Sick Leave</div>
                      <div>
                        <Badge>Paid</Badge>
                      </div>
                      <div className="flex items-center">
                        <Input
                          type="number"
                          defaultValue="10"
                          className="w-16 mr-2"
                        />
                        <span className="text-sm">days</span>
                      </div>
                      <div>
                        <Select defaultValue="yes">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="yes">Yes</SelectItem>
                            <SelectItem value="no">No</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-4 gap-4 items-center">
                      <div>Maternity Leave</div>
                      <div>
                        <Badge>Paid</Badge>
                      </div>
                      <div className="flex items-center">
                        <Input
                          type="number"
                          defaultValue="90"
                          className="w-16 mr-2"
                        />
                        <span className="text-sm">days</span>
                      </div>
                      <div>
                        <Select defaultValue="yes">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="yes">Yes</SelectItem>
                            <SelectItem value="no">No</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-4 gap-4 items-center">
                      <div>Unpaid Leave</div>
                      <div>
                        <Badge variant="outline">Unpaid</Badge>
                      </div>
                      <div className="flex items-center">
                        <Input
                          type="number"
                          defaultValue="30"
                          className="w-16 mr-2"
                        />
                        <span className="text-sm">days</span>
                      </div>
                      <div>
                        <Select defaultValue="yes">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="yes">Yes</SelectItem>
                            <SelectItem value="no">No</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full">
                      <Plus className="mr-2 h-4 w-4" /> Add Leave Type
                    </Button>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button onClick={() => handleSaveSettings('leave')}>
                    <Save className="mr-2 h-4 w-4" /> Save Changes
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
