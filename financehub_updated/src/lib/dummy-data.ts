// src/lib/dummy-data.ts
import { 
  Employee, 
  Salary, 
  Leave, 
  LeaveBalance, 
  Bonus, 
  Payroll, 
  PaySlip,
  Tenant,
  User,
  Attendance
} from '@/types';

// Current tenant for multi-tenant support
export const currentTenant: Tenant = {
  id: 't1',
  name: 'Acme Corporation',
  subdomain: 'acme',
  logo: '/logos/acme-logo.png',
  primaryColor: '#3b82f6',
  secondaryColor: '#1e40af',
  address: '123 Business Avenue, Tech City, TC 10001',
  contactEmail: 'admin@acmecorp.com',
  contactPhone: '+1-555-123-4567',
  subscriptionPlan: 'enterprise',
  subscriptionStatus: 'active',
  createdAt: '2024-01-01T00:00:00Z',
  updatedAt: '2024-01-01T00:00:00Z'
};

// Current user for authentication
export const userRoles: UserRole[] = [
  {
    id: 'r1',
    name: 'Admin',
    description: 'Full system access with all permissions',
    permissions: ['all'],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: 'r2',
    name: 'HR Manager',
    description: 'Manage employees, attendance, leaves and payroll',
    permissions: ['employees:read', 'employees:write', 'attendance:read', 'attendance:write', 'leaves:read', 'leaves:write', 'payroll:read', 'payroll:write'],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: 'r3',
    name: 'Finance Manager',
    description: 'Manage salaries, bonuses and payroll',
    permissions: ['employees:read', 'salaries:read', 'salaries:write', 'bonuses:read', 'bonuses:write', 'payroll:read', 'payroll:write'],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: 'r4',
    name: 'Employee',
    description: 'View own profile, attendance and payslips',
    permissions: ['profile:read', 'attendance:read', 'leaves:read', 'payslips:read'],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  }
];

export const users: User[] = [
  {
    id: 'u1',
    tenantId: 't1',
    email: 'admin@acmecorp.com',
    firstName: 'Admin',
    lastName: 'User',
    role: 'admin',
    isActive: true,
    lastLogin: '2025-05-18T06:30:00Z',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: 'u2',
    tenantId: 't1',
    email: 'john.doe@acmecorp.com',
    firstName: 'John',
    lastName: 'Doe',
    role: 'employee',
    isActive: true,
    lastLogin: '2025-05-17T14:25:00Z',
    createdAt: '2020-01-15T00:00:00Z',
    updatedAt: '2025-05-17T14:25:00Z'
  },
  {
    id: 'u3',
    tenantId: 't1',
    email: 'jane.smith@acmecorp.com',
    firstName: 'Jane',
    lastName: 'Smith',
    role: 'employee',
    isActive: true,
    lastLogin: '2025-05-16T09:12:00Z',
    createdAt: '2021-03-10T00:00:00Z',
    updatedAt: '2025-05-16T09:12:00Z'
  },
  {
    id: 'u4',
    tenantId: 't1',
    email: 'michael.johnson@acmecorp.com',
    firstName: 'Michael',
    lastName: 'Johnson',
    role: 'employee',
    isActive: true,
    lastLogin: '2025-05-15T11:45:00Z',
    createdAt: '2019-06-05T00:00:00Z',
    updatedAt: '2025-05-15T11:45:00Z'
  },
  {
    id: 'u5',
    tenantId: 't1',
    email: 'emily.williams@acmecorp.com',
    firstName: 'Emily',
    lastName: 'Williams',
    role: 'employee',
    isActive: true,
    lastLogin: '2025-05-17T08:30:00Z',
    createdAt: '2022-01-20T00:00:00Z',
    updatedAt: '2025-05-17T08:30:00Z'
  },
  {
    id: 'u6',
    tenantId: 't1',
    email: 'david.brown@acmecorp.com',
    firstName: 'David',
    lastName: 'Brown',
    role: 'manager',
    isActive: true,
    lastLogin: '2025-05-18T07:15:00Z',
    createdAt: '2018-04-10T00:00:00Z',
    updatedAt: '2025-05-18T07:15:00Z'
  },
  {
    id: 'u7',
    tenantId: 't1',
    email: 'sarah.miller@acmecorp.com',
    firstName: 'Sarah',
    lastName: 'Miller',
    role: 'hr_manager',
    isActive: true,
    lastLogin: '2025-05-17T16:20:00Z',
    createdAt: '2019-08-15T00:00:00Z',
    updatedAt: '2025-05-17T16:20:00Z'
  },
  {
    id: 'u8',
    tenantId: 't1',
    email: 'robert.wilson@acmecorp.com',
    firstName: 'Robert',
    lastName: 'Wilson',
    role: 'finance_manager',
    isActive: true,
    lastLogin: '2025-05-16T15:10:00Z',
    createdAt: '2020-03-22T00:00:00Z',
    updatedAt: '2025-05-16T15:10:00Z'
  }
];

export const companySettings: CompanySettings = {
  id: 'cs1',
  tenantId: 't1',
  companyName: 'Acme Corporation',
  legalName: 'Acme Corporation Inc.',
  taxId: 'AC-12345678',
  registrationNumber: 'REG-987654321',
  address: '123 Business Avenue',
  city: 'Tech City',
  state: 'TC',
  country: 'United States',
  postalCode: '10001',
  phone: '+1-555-123-4567',
  email: 'info@acmecorp.com',
  website: 'https://www.acmecorp.com',
  logo: '/logos/acme-logo.png',
  fiscalYearStart: '01-01',
  timezone: 'America/New_York',
  dateFormat: 'MM/DD/YYYY',
  currencyCode: 'USD',
  currencySymbol: '$',
  createdAt: '2024-01-01T00:00:00Z',
  updatedAt: '2024-01-01T00:00:00Z'
};

export const currentUser: User = {
  id: 'u1',
  tenantId: 't1',
  email: 'admin@acmecorp.com',
  firstName: 'Admin',
  lastName: 'User',
  role: 'admin',
  isActive: true,
  lastLogin: '2025-05-18T06:30:00Z',
  createdAt: '2024-01-01T00:00:00Z',
  updatedAt: '2024-01-01T00:00:00Z'
};

// Dummy employees data
export const employees: Employee[] = [
  {
    id: 'e1',
    tenantId: 't1',
    userId: 'u2',
    employeeId: 'EMP001',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@acmecorp.com',
    phone: '+1-555-111-2222',
    address: '456 Residential St, Tech City, TC 10002',
    dateOfBirth: '1985-05-15',
    gender: 'male',
    joiningDate: '2020-01-15',
    department: 'Engineering',
    designation: 'Senior Developer',
    reportingManager: 'e5',
    employmentType: 'full_time',
    status: 'active',
    bankName: 'Tech City Bank',
    accountNumber: '1234567890',
    ifscCode: 'TCB0001234',
    createdAt: '2020-01-15T00:00:00Z',
    updatedAt: '2024-04-10T00:00:00Z'
  },
  {
    id: 'e2',
    tenantId: 't1',
    userId: 'u3',
    employeeId: 'EMP002',
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@acmecorp.com',
    phone: '+1-555-222-3333',
    address: '789 Apartment Ave, Tech City, TC 10003',
    dateOfBirth: '1990-08-22',
    gender: 'female',
    joiningDate: '2021-03-10',
    department: 'Marketing',
    designation: 'Marketing Specialist',
    reportingManager: 'e6',
    employmentType: 'full_time',
    status: 'active',
    bankName: 'Tech City Bank',
    accountNumber: '2345678901',
    ifscCode: 'TCB0001234',
    createdAt: '2021-03-10T00:00:00Z',
    updatedAt: '2024-02-15T00:00:00Z'
  },
  {
    id: 'e3',
    tenantId: 't1',
    userId: 'u4',
    employeeId: 'EMP003',
    firstName: 'Michael',
    lastName: 'Johnson',
    email: 'michael.johnson@acmecorp.com',
    phone: '+1-555-333-4444',
    address: '101 Condo Lane, Tech City, TC 10004',
    dateOfBirth: '1988-11-30',
    gender: 'male',
    joiningDate: '2019-06-05',
    department: 'Finance',
    designation: 'Financial Analyst',
    reportingManager: 'e7',
    employmentType: 'full_time',
    status: 'active',
    bankName: 'Global Bank',
    accountNumber: '3456789012',
    ifscCode: 'GB0002345',
    createdAt: '2019-06-05T00:00:00Z',
    updatedAt: '2023-12-01T00:00:00Z'
  },
  {
    id: 'e4',
    tenantId: 't1',
    userId: 'u5',
    employeeId: 'EMP004',
    firstName: 'Emily',
    lastName: 'Williams',
    email: 'emily.williams@acmecorp.com',
    phone: '+1-555-444-5555',
    address: '202 House Rd, Tech City, TC 10005',
    dateOfBirth: '1992-04-18',
    gender: 'female',
    joiningDate: '2022-01-20',
    department: 'Human Resources',
    designation: 'HR Coordinator',
    reportingManager: 'e8',
    employmentType: 'full_time',
    status: 'active',
    bankName: 'Tech City Bank',
    accountNumber: '4567890123',
    ifscCode: 'TCB0001234',
    createdAt: '2022-01-20T00:00:00Z',
    updatedAt: '2024-03-15T00:00:00Z'
  },
  {
    id: 'e5',
    tenantId: 't1',
    userId: 'u6',
    employeeId: 'EMP005',
    firstName: 'David',
    lastName: 'Brown',
    email: 'david.brown@acmecorp.com',
    phone: '+1-555-555-6666',
    address: '303 Villa St, Tech City, TC 10006',
    dateOfBirth: '1980-09-25',
    gender: 'male',
    joiningDate: '2018-04-10',
    department: 'Engineering',
    designation: 'Engineering Manager',
    employmentType: 'full_time',
    status: 'active',
    bankName: 'Global Bank',
    accountNumber: '5678901234',
    ifscCode: 'GB0002345',
    createdAt: '2018-04-10T00:00:00Z',
    updatedAt: '2023-10-05T00:00:00Z'
  }
];

// Dummy salaries data
export const salaries: Salary[] = [
  {
    id: 's1',
    tenantId: 't1',
    employeeId: 'e1',
    basicSalary: 85000,
    houseRentAllowance: 25500,
    transportAllowance: 8500,
    medicalAllowance: 8500,
    otherAllowances: 4250,
    grossSalary: 131750,
    taxDeduction: 26350,
    otherDeductions: 6587.5,
    netSalary: 98812.5,
    effectiveDate: '2024-04-01',
    previousSalary: 80000,
    growthPercentage: 6.25,
    status: 'active',
    createdAt: '2024-03-25T00:00:00Z',
    updatedAt: '2024-03-25T00:00:00Z'
  },
  {
    id: 's2',
    tenantId: 't1',
    employeeId: 'e2',
    basicSalary: 65000,
    houseRentAllowance: 19500,
    transportAllowance: 6500,
    medicalAllowance: 6500,
    otherAllowances: 3250,
    grossSalary: 100750,
    taxDeduction: 20150,
    otherDeductions: 5037.5,
    netSalary: 75562.5,
    effectiveDate: '2024-04-01',
    previousSalary: 60000,
    growthPercentage: 8.33,
    status: 'active',
    createdAt: '2024-03-25T00:00:00Z',
    updatedAt: '2024-03-25T00:00:00Z'
  },
  {
    id: 's3',
    tenantId: 't1',
    employeeId: 'e3',
    basicSalary: 70000,
    houseRentAllowance: 21000,
    transportAllowance: 7000,
    medicalAllowance: 7000,
    otherAllowances: 3500,
    grossSalary: 108500,
    taxDeduction: 21700,
    otherDeductions: 5425,
    netSalary: 81375,
    effectiveDate: '2024-04-01',
    previousSalary: 67000,
    growthPercentage: 4.48,
    status: 'active',
    createdAt: '2024-03-25T00:00:00Z',
    updatedAt: '2024-03-25T00:00:00Z'
  },
  {
    id: 's4',
    tenantId: 't1',
    employeeId: 'e4',
    basicSalary: 55000,
    houseRentAllowance: 16500,
    transportAllowance: 5500,
    medicalAllowance: 5500,
    otherAllowances: 2750,
    grossSalary: 85250,
    taxDeduction: 17050,
    otherDeductions: 4262.5,
    netSalary: 63937.5,
    effectiveDate: '2024-04-01',
    previousSalary: 52000,
    growthPercentage: 5.77,
    status: 'active',
    createdAt: '2024-03-25T00:00:00Z',
    updatedAt: '2024-03-25T00:00:00Z'
  },
  {
    id: 's5',
    tenantId: 't1',
    employeeId: 'e5',
    basicSalary: 110000,
    houseRentAllowance: 33000,
    transportAllowance: 11000,
    medicalAllowance: 11000,
    otherAllowances: 5500,
    grossSalary: 170500,
    taxDeduction: 34100,
    otherDeductions: 8525,
    netSalary: 127875,
    effectiveDate: '2024-04-01',
    previousSalary: 105000,
    growthPercentage: 4.76,
    status: 'active',
    createdAt: '2024-03-25T00:00:00Z',
    updatedAt: '2024-03-25T00:00:00Z'
  }
];

// Dummy leaves data
export const leaves: Leave[] = [
  {
    id: 'l1',
    tenantId: 't1',
    employeeId: 'e1',
    leaveType: 'annual',
    startDate: '2025-06-10',
    endDate: '2025-06-15',
    duration: 5,
    reason: 'Family vacation',
    status: 'pending',
    createdAt: '2025-05-15T00:00:00Z',
    updatedAt: '2025-05-15T00:00:00Z'
  },
  {
    id: 'l2',
    tenantId: 't1',
    employeeId: 'e2',
    leaveType: 'sick',
    startDate: '2025-05-20',
    endDate: '2025-05-21',
    duration: 2,
    reason: 'Not feeling well',
    status: 'approved',
    approvedBy: 'e6',
    approvedAt: '2025-05-18T00:00:00Z',
    createdAt: '2025-05-17T00:00:00Z',
    updatedAt: '2025-05-18T00:00:00Z'
  },
  {
    id: 'l3',
    tenantId: 't1',
    employeeId: 'e3',
    leaveType: 'annual',
    startDate: '2025-07-05',
    endDate: '2025-07-10',
    duration: 5,
    reason: 'Personal time off',
    status: 'pending',
    createdAt: '2025-05-16T00:00:00Z',
    updatedAt: '2025-05-16T00:00:00Z'
  },
  {
    id: 'l4',
    tenantId: 't1',
    employeeId: 'e4',
    leaveType: 'other',
    startDate: '2025-05-25',
    endDate: '2025-05-25',
    duration: 1,
    reason: 'Family emergency',
    status: 'approved',
    approvedBy: 'e8',
    approvedAt: '2025-05-17T00:00:00Z',
    createdAt: '2025-05-17T00:00:00Z',
    updatedAt: '2025-05-17T00:00:00Z'
  },
  {
    id: 'l5',
    tenantId: 't1',
    employeeId: 'e1',
    leaveType: 'sick',
    startDate: '2025-04-15',
    endDate: '2025-04-16',
    duration: 2,
    reason: 'Doctor appointment',
    status: 'approved',
    approvedBy: 'e5',
    approvedAt: '2025-04-14T00:00:00Z',
    createdAt: '2025-04-13T00:00:00Z',
    updatedAt: '2025-04-14T00:00:00Z'
  }
];

// Dummy leave balances data
export const leaveBalances: LeaveBalance[] = [
  {
    id: 'lb1',
    tenantId: 't1',
    employeeId: 'e1',
    leaveType: 'annual',
    totalAllowed: 20,
    used: 5,
    remaining: 15,
    year: 2025,
    createdAt: '2025-01-01T00:00:00Z',
    updatedAt: '2025-05-15T00:00:00Z'
  },
  {
    id: 'lb2',
    tenantId: 't1',
    employeeId: 'e1',
    leaveType: 'sick',
    totalAllowed: 10,
    used: 2,
    remaining: 8,
    year: 2025,
    createdAt: '2025-01-01T00:00:00Z',
    updatedAt: '2025-04-14T00:00:00Z'
  },
  {
    id: 'lb3',
    tenantId: 't1',
    employeeId: 'e2',
    leaveType: 'annual',
    totalAllowed: 18,
    used: 0,
    remaining: 18,
    year: 2025,
    createdAt: '2025-01-01T00:00:00Z',
    updatedAt: '2025-01-01T00:00:00Z'
  },
  {
    id: 'lb4',
    tenantId: 't1',
    employeeId: 'e2',
    leaveType: 'sick',
    totalAllowed: 10,
    used: 2,
    remaining: 8,
    year: 2025,
    createdAt: '2025-01-01T00:00:00Z',
    updatedAt: '2025-05-18T00:00:00Z'
  },
  {
    id: 'lb5',
    tenantId: 't1',
    employeeId: 'e3',
    leaveType: 'annual',
    totalAllowed: 22,
    used: 0,
    remaining: 22,
    year: 2025,
    createdAt: '2025-01-01T00:00:00Z',
    updatedAt: '2025-01-01T00:00:00Z'
  }
];

// Dummy bonuses data
export const bonuses: Bonus[] = [
  {
    id: 'b1',
    tenantId: 't1',
    employeeId: 'e1',
    bonusType: 'performance',
    amount: 10000,
    description: 'Annual performance bonus',
    issueDate: '2025-04-15',
    status: 'paid',
    approvedBy: 'e5',
    approvedAt: '2025-04-10T00:00:00Z',
    createdAt: '2025-04-01T00:00:00Z',
    updatedAt: '2025-04-15T00:00:00Z'
  },
  {
    id: 'b2',
    tenantId: 't1',
    employeeId: 'e2',
    bonusType: 'performance',
    amount: 7500,
    description: 'Annual performance bonus',
    issueDate: '2025-04-15',
    status: 'paid',
    approvedBy: 'e6',
    approvedAt: '2025-04-10T00:00:00Z',
    createdAt: '2025-04-01T00:00:00Z',
    updatedAt: '2025-04-15T00:00:00Z'
  },
  {
    id: 'b3',
    tenantId: 't1',
    employeeId: 'e3',
    bonusType: 'performance',
    amount: 8000,
    description: 'Annual performance bonus',
    issueDate: '2025-04-15',
    status: 'paid',
    approvedBy: 'e7',
    approvedAt: '2025-04-10T00:00:00Z',
    createdAt: '2025-04-01T00:00:00Z',
    updatedAt: '2025-04-15T00:00:00Z'
  },
  {
    id: 'b4',
    tenantId: 't1',
    employeeId: 'e1',
    bonusType: 'project',
    amount: 5000,
    description: 'Project completion bonus - Client Portal',
    issueDate: '2025-05-30',
    status: 'pending',
    createdAt: '2025-05-15T00:00:00Z',
    updatedAt: '2025-05-15T00:00:00Z'
  },
  {
    id: 'b5',
    tenantId: 't1',
    employeeId: 'e5',
    bonusType: 'performance',
    amount: 15000,
    description: 'Annual performance bonus',
    issueDate: '2025-04-15',
    status: 'paid',
    approvedBy: 'u1',
    approvedAt: '2025-04-10T00:00:00Z',
    createdAt: '2025-04-01T00:00:00Z',
    updatedAt: '2025-04-15T00:00:00Z'
  }
];

// Dummy payrolls data
export const payrolls: Payroll[] = [
  {
    id: 'p1',
    tenantId: 't1',
    employeeId: 'e1',
    month: 4,
    year: 2025,
    basicSalary: 85000,
    totalAllowances: 46750,
    totalDeductions: 32937.5,
    totalBonus: 10000,
    grossEarnings: 141750,
    netSalary: 108812.5,
    paymentStatus: 'paid',
    paymentDate: '2025-04-30T00:00:00Z',
    createdAt: '2025-04-28T00:00:00Z',
    updatedAt: '2025-04-30T00:00:00Z'
  },
  {
    id: 'p2',
    tenantId: 't1',
    employeeId: 'e2',
    month: 4,
    year: 2025,
    basicSalary: 65000,
    totalAllowances: 35750,
    totalDeductions: 25187.5,
    totalBonus: 7500,
    grossEarnings: 108250,
    netSalary: 83062.5,
    paymentStatus: 'paid',
    paymentDate: '2025-04-30T00:00:00Z',
    createdAt: '2025-04-28T00:00:00Z',
    updatedAt: '2025-04-30T00:00:00Z'
  },
  {
    id: 'p3',
    tenantId: 't1',
    employeeId: 'e3',
    month: 4,
    year: 2025,
    basicSalary: 70000,
    totalAllowances: 38500,
    totalDeductions: 27125,
    totalBonus: 8000,
    grossEarnings: 116500,
    netSalary: 89375,
    paymentStatus: 'paid',
    paymentDate: '2025-04-30T00:00:00Z',
    createdAt: '2025-04-28T00:00:00Z',
    updatedAt: '2025-04-30T00:00:00Z'
  },
  {
    id: 'p4',
    tenantId: 't1',
    employeeId: 'e4',
    month: 4,
    year: 2025,
    basicSalary: 55000,
    totalAllowances: 30250,
    totalDeductions: 21312.5,
    totalBonus: 0,
    grossEarnings: 85250,
    netSalary: 63937.5,
    paymentStatus: 'paid',
    paymentDate: '2025-04-30T00:00:00Z',
    createdAt: '2025-04-28T00:00:00Z',
    updatedAt: '2025-04-30T00:00:00Z'
  },
  {
    id: 'p5',
    tenantId: 't1',
    employeeId: 'e5',
    month: 4,
    year: 2025,
    basicSalary: 110000,
    totalAllowances: 60500,
    totalDeductions: 42625,
    totalBonus: 15000,
    grossEarnings: 185500,
    netSalary: 142875,
    paymentStatus: 'paid',
    paymentDate: '2025-04-30T00:00:00Z',
    createdAt: '2025-04-28T00:00:00Z',
    updatedAt: '2025-04-30T00:00:00Z'
  }
];

// Dummy payslips data
export const payslips: PaySlip[] = [
  {
    id: 'ps1',
    tenantId: 't1',
    payrollId: 'p1',
    employeeId: 'e1',
    month: 4,
    year: 2025,
    generatedOn: '2025-04-28T00:00:00Z',
    downloadUrl: '/payslips/2025/04/EMP001.pdf',
    createdAt: '2025-04-28T00:00:00Z',
    updatedAt: '2025-04-28T00:00:00Z'
  },
  {
    id: 'ps2',
    tenantId: 't1',
    payrollId: 'p2',
    employeeId: 'e2',
    month: 4,
    year: 2025,
    generatedOn: '2025-04-28T00:00:00Z',
    downloadUrl: '/payslips/2025/04/EMP002.pdf',
    createdAt: '2025-04-28T00:00:00Z',
    updatedAt: '2025-04-28T00:00:00Z'
  },
  {
    id: 'ps3',
    tenantId: 't1',
    payrollId: 'p3',
    employeeId: 'e3',
    month: 4,
    year: 2025,
    generatedOn: '2025-04-28T00:00:00Z',
    downloadUrl: '/payslips/2025/04/EMP003.pdf',
    createdAt: '2025-04-28T00:00:00Z',
    updatedAt: '2025-04-28T00:00:00Z'
  },
  {
    id: 'ps4',
    tenantId: 't1',
    payrollId: 'p4',
    employeeId: 'e4',
    month: 4,
    year: 2025,
    generatedOn: '2025-04-28T00:00:00Z',
    downloadUrl: '/payslips/2025/04/EMP004.pdf',
    createdAt: '2025-04-28T00:00:00Z',
    updatedAt: '2025-04-28T00:00:00Z'
  },
  {
    id: 'ps5',
    tenantId: 't1',
    payrollId: 'p5',
    employeeId: 'e5',
    month: 4,
    year: 2025,
    generatedOn: '2025-04-28T00:00:00Z',
    downloadUrl: '/payslips/2025/04/EMP005.pdf',
    createdAt: '2025-04-28T00:00:00Z',
    updatedAt: '2025-04-28T00:00:00Z'
  }
];

// Dummy attendance data
export const attendances: Attendance[] = [
  {
    id: 'a1',
    employeeId: 'e1',
    date: '2025-05-17',
    checkInTime: '09:05:23',
    checkOutTime: '18:10:45',
    status: 'present',
    workHours: 9.08,
    notes: null,
    createdAt: '2025-05-17T09:05:23Z',
    updatedAt: '2025-05-17T18:10:45Z'
  },
  {
    id: 'a2',
    employeeId: 'e2',
    date: '2025-05-17',
    checkInTime: '08:55:12',
    checkOutTime: '17:30:05',
    status: 'present',
    workHours: 8.58,
    notes: null,
    createdAt: '2025-05-17T08:55:12Z',
    updatedAt: '2025-05-17T17:30:05Z'
  },
  {
    id: 'a3',
    employeeId: 'e3',
    date: '2025-05-17',
    checkInTime: '09:30:45',
    checkOutTime: '18:45:30',
    status: 'late',
    workHours: 9.25,
    notes: 'Traffic delay',
    createdAt: '2025-05-17T09:30:45Z',
    updatedAt: '2025-05-17T18:45:30Z'
  },
  {
    id: 'a4',
    employeeId: 'e4',
    date: '2025-05-17',
    checkInTime: '09:00:18',
    checkOutTime: '17:45:22',
    status: 'present',
    workHours: 8.75,
    notes: null,
    createdAt: '2025-05-17T09:00:18Z',
    updatedAt: '2025-05-17T17:45:22Z'
  },
  {
    id: 'a5',
    employeeId: 'e5',
    date: '2025-05-17',
    checkInTime: '08:45:30',
    checkOutTime: '18:30:15',
    status: 'present',
    workHours: 9.75,
    notes: null,
    createdAt: '2025-05-17T08:45:30Z',
    updatedAt: '2025-05-17T18:30:15Z'
  },
  {
    id: 'a6',
    employeeId: 'e1',
    date: '2025-05-16',
    checkInTime: '08:58:45',
    checkOutTime: '18:05:30',
    status: 'present',
    workHours: 9.11,
    notes: null,
    createdAt: '2025-05-16T08:58:45Z',
    updatedAt: '2025-05-16T18:05:30Z'
  },
  {
    id: 'a7',
    employeeId: 'e2',
    date: '2025-05-16',
    checkInTime: '09:10:22',
    checkOutTime: '17:45:18',
    status: 'late',
    workHours: 8.58,
    notes: 'Doctor appointment in morning',
    createdAt: '2025-05-16T09:10:22Z',
    updatedAt: '2025-05-16T17:45:18Z'
  },
  {
    id: 'a8',
    employeeId: 'e3',
    date: '2025-05-16',
    checkInTime: '09:00:10',
    checkOutTime: '18:15:45',
    status: 'present',
    workHours: 9.26,
    notes: null,
    createdAt: '2025-05-16T09:00:10Z',
    updatedAt: '2025-05-16T18:15:45Z'
  },
  {
    id: 'a9',
    employeeId: 'e4',
    date: '2025-05-16',
    checkInTime: null,
    checkOutTime: null,
    status: 'absent',
    workHours: 0,
    notes: 'Sick leave',
    createdAt: '2025-05-16T00:00:00Z',
    updatedAt: '2025-05-16T00:00:00Z'
  },
  {
    id: 'a10',
    employeeId: 'e5',
    date: '2025-05-16',
    checkInTime: '08:50:15',
    checkOutTime: '18:20:30',
    status: 'present',
    workHours: 9.5,
    notes: null,
    createdAt: '2025-05-16T08:50:15Z',
    updatedAt: '2025-05-16T18:20:30Z'
  },
  {
    id: 'a11',
    employeeId: 'e1',
    date: '2025-05-15',
    checkInTime: '09:00:00',
    checkOutTime: '13:30:00',
    status: 'half-day',
    workHours: 4.5,
    notes: 'Left early for personal reasons',
    createdAt: '2025-05-15T09:00:00Z',
    updatedAt: '2025-05-15T13:30:00Z'
  },
  {
    id: 'a12',
    employeeId: 'e2',
    date: '2025-05-15',
    checkInTime: '09:05:45',
    checkOutTime: '18:00:30',
    status: 'present',
    workHours: 8.92,
    notes: null,
    createdAt: '2025-05-15T09:05:45Z',
    updatedAt: '2025-05-15T18:00:30Z'
  },
  {
    id: 'a13',
    employeeId: 'e3',
    date: '2025-05-15',
    checkInTime: '09:15:20',
    checkOutTime: '18:30:10',
    status: 'late',
    workHours: 9.25,
    notes: 'Public transport delay',
    createdAt: '2025-05-15T09:15:20Z',
    updatedAt: '2025-05-15T18:30:10Z'
  },
  {
    id: 'a14',
    employeeId: 'e4',
    date: '2025-05-15',
    checkInTime: '08:45:00',
    checkOutTime: '17:50:15',
    status: 'present',
    workHours: 9.08,
    notes: null,
    createdAt: '2025-05-15T08:45:00Z',
    updatedAt: '2025-05-15T17:50:15Z'
  },
  {
    id: 'a15',
    employeeId: 'e5',
    date: '2025-05-15',
    checkInTime: '09:00:00',
    checkOutTime: '18:00:00',
    status: 'work-from-home',
    workHours: 9,
    notes: 'Working remotely today',
    createdAt: '2025-05-15T09:00:00Z',
    updatedAt: '2025-05-15T18:00:00Z'
  }
];

// Helper function to get employee name by ID
export const getEmployeeName = (employeeId: string): string => {
  const employee = employees.find(emp => emp.id === employeeId);
  return employee ? `${employee.firstName} ${employee.lastName}` : 'Unknown Employee';
};

// Helper function to get month name
export const getMonthName = (month: number): string => {
  const months = [
    'January', 'February', 'March', 'April', 
    'May', 'June', 'July', 'August', 
    'September', 'October', 'November', 'December'
  ];
  return months[month - 1];
};
