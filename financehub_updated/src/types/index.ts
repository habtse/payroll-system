// src/types/index.ts

export interface Attendance {
  id: string;
  employeeId: string;
  date: string;
  checkInTime: string;
  checkOutTime: string | null;
  status: 'present' | 'absent' | 'late' | 'half-day' | 'work-from-home';
  workHours: number | null;
  notes: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface Tenant {
  id: string;
  name: string;
  subdomain: string;
  logo?: string;
  primaryColor: string;
  secondaryColor: string;
  address: string;
  contactEmail: string;
  contactPhone: string;
  subscriptionPlan: string;
  subscriptionStatus: 'active' | 'inactive' | 'trial';
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: string;
  tenantId: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'admin' | 'hr_manager' | 'finance_manager' | 'employee';
  isActive: boolean;
  lastLogin?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Employee {
  id: string;
  tenantId: string;
  userId: string;
  employeeId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  dateOfBirth: string;
  gender: 'male' | 'female' | 'other';
  joiningDate: string;
  department: string;
  designation: string;
  reportingManager?: string;
  employmentType: 'full_time' | 'part_time' | 'contract' | 'intern';
  status: 'active' | 'inactive' | 'on_leave' | 'terminated';
  bankName: string;
  accountNumber: string;
  ifscCode: string;
  createdAt: string;
  updatedAt: string;
}

export interface Salary {
  id: string;
  tenantId: string;
  employeeId: string;
  basicSalary: number;
  houseRentAllowance: number;
  transportAllowance: number;
  medicalAllowance: number;
  otherAllowances: number;
  grossSalary: number;
  taxDeduction: number;
  otherDeductions: number;
  netSalary: number;
  effectiveDate: string;
  previousSalary?: number;
  growthPercentage?: number;
  status: 'active' | 'inactive' | 'pending';
  createdAt: string;
  updatedAt: string;
}

export interface Leave {
  id: string;
  tenantId: string;
  employeeId: string;
  leaveType: 'annual' | 'sick' | 'maternity' | 'paternity' | 'unpaid' | 'other';
  startDate: string;
  endDate: string;
  duration: number;
  reason: string;
  status: 'pending' | 'approved' | 'rejected' | 'cancelled';
  approvedBy?: string;
  approvedAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface LeaveBalance {
  id: string;
  tenantId: string;
  employeeId: string;
  leaveType: 'annual' | 'sick' | 'maternity' | 'paternity' | 'unpaid' | 'other';
  totalAllowed: number;
  used: number;
  remaining: number;
  year: number;
  createdAt: string;
  updatedAt: string;
}

export interface Bonus {
  id: string;
  tenantId: string;
  employeeId: string;
  bonusType: 'performance' | 'festival' | 'annual' | 'project' | 'other';
  amount: number;
  description: string;
  issueDate: string;
  status: 'pending' | 'approved' | 'rejected' | 'paid';
  approvedBy?: string;
  approvedAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Payroll {
  id: string;
  tenantId: string;
  employeeId: string;
  month: number;
  year: number;
  basicSalary: number;
  totalAllowances: number;
  totalDeductions: number;
  totalBonus: number;
  grossEarnings: number;
  netSalary: number;
  paymentStatus: 'pending' | 'processing' | 'paid' | 'failed';
  paymentDate?: string;
  createdAt: string;
  updatedAt: string;
}

export interface PaySlip {
  id: string;
  tenantId: string;
  payrollId: string;
  employeeId: string;
  month: number;
  year: number;
  generatedOn: string;
  downloadUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
