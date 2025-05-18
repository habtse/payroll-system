module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/lib/utils.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn),
    "formatCurrency": (()=>formatCurrency),
    "formatDate": (()=>formatDate),
    "getInitials": (()=>getInitials),
    "getStatusColor": (()=>getStatusColor)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}
function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}
function getInitials(firstName, lastName) {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
}
function getStatusColor(status) {
    const statusColors = {
        active: 'bg-green-100 text-green-800',
        inactive: 'bg-gray-100 text-gray-800',
        pending: 'bg-yellow-100 text-yellow-800',
        approved: 'bg-green-100 text-green-800',
        rejected: 'bg-red-100 text-red-800',
        cancelled: 'bg-gray-100 text-gray-800',
        paid: 'bg-blue-100 text-blue-800',
        processing: 'bg-purple-100 text-purple-800',
        failed: 'bg-red-100 text-red-800',
        'on_leave': 'bg-blue-100 text-blue-800',
        terminated: 'bg-red-100 text-red-800'
    };
    return statusColors[status] || 'bg-gray-100 text-gray-800';
}
}}),
"[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, variant, size, asChild = false, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 45,
        columnNumber: 7
    }, this);
});
Button.displayName = "Button";
;
}}),
"[project]/src/lib/dummy-data.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/lib/dummy-data.ts
__turbopack_context__.s({
    "attendances": (()=>attendances),
    "bonuses": (()=>bonuses),
    "companySettings": (()=>companySettings),
    "currentTenant": (()=>currentTenant),
    "currentUser": (()=>currentUser),
    "employees": (()=>employees),
    "getEmployeeName": (()=>getEmployeeName),
    "getMonthName": (()=>getMonthName),
    "leaveBalances": (()=>leaveBalances),
    "leaves": (()=>leaves),
    "payrolls": (()=>payrolls),
    "payslips": (()=>payslips),
    "salaries": (()=>salaries),
    "userRoles": (()=>userRoles),
    "users": (()=>users)
});
const currentTenant = {
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
const userRoles = [
    {
        id: 'r1',
        name: 'Admin',
        description: 'Full system access with all permissions',
        permissions: [
            'all'
        ],
        createdAt: '2024-01-01T00:00:00Z',
        updatedAt: '2024-01-01T00:00:00Z'
    },
    {
        id: 'r2',
        name: 'HR Manager',
        description: 'Manage employees, attendance, leaves and payroll',
        permissions: [
            'employees:read',
            'employees:write',
            'attendance:read',
            'attendance:write',
            'leaves:read',
            'leaves:write',
            'payroll:read',
            'payroll:write'
        ],
        createdAt: '2024-01-01T00:00:00Z',
        updatedAt: '2024-01-01T00:00:00Z'
    },
    {
        id: 'r3',
        name: 'Finance Manager',
        description: 'Manage salaries, bonuses and payroll',
        permissions: [
            'employees:read',
            'salaries:read',
            'salaries:write',
            'bonuses:read',
            'bonuses:write',
            'payroll:read',
            'payroll:write'
        ],
        createdAt: '2024-01-01T00:00:00Z',
        updatedAt: '2024-01-01T00:00:00Z'
    },
    {
        id: 'r4',
        name: 'Employee',
        description: 'View own profile, attendance and payslips',
        permissions: [
            'profile:read',
            'attendance:read',
            'leaves:read',
            'payslips:read'
        ],
        createdAt: '2024-01-01T00:00:00Z',
        updatedAt: '2024-01-01T00:00:00Z'
    }
];
const users = [
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
const companySettings = {
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
const currentUser = {
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
const employees = [
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
const salaries = [
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
const leaves = [
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
const leaveBalances = [
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
const bonuses = [
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
const payrolls = [
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
const payslips = [
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
const attendances = [
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
const getEmployeeName = (employeeId)=>{
    const employee = employees.find((emp)=>emp.id === employeeId);
    return employee ? `${employee.firstName} ${employee.lastName}` : 'Unknown Employee';
};
const getMonthName = (month)=>{
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    return months[month - 1];
};
}}),
"[project]/src/components/sidebar.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Sidebar": (()=>Sidebar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dummy$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/dummy-data.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function Sidebar({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("pb-12", className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4 py-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 py-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mb-2 px-2 text-lg font-semibold tracking-tight",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dummy$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["currentTenant"].name
                        }, void 0, false, {
                            fileName: "[project]/src/components/sidebar.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "secondary",
                                className: "w-full justify-start",
                                asChild: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/dashboard",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            className: "mr-2 h-4 w-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    width: "7",
                                                    height: "9",
                                                    x: "3",
                                                    y: "3",
                                                    rx: "1"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sidebar.tsx",
                                                    lineNumber: 32,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    width: "7",
                                                    height: "5",
                                                    x: "14",
                                                    y: "3",
                                                    rx: "1"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sidebar.tsx",
                                                    lineNumber: 33,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    width: "7",
                                                    height: "9",
                                                    x: "14",
                                                    y: "12",
                                                    rx: "1"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sidebar.tsx",
                                                    lineNumber: 34,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    width: "7",
                                                    height: "5",
                                                    x: "3",
                                                    y: "16",
                                                    rx: "1"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sidebar.tsx",
                                                    lineNumber: 35,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sidebar.tsx",
                                            lineNumber: 22,
                                            columnNumber: 17
                                        }, this),
                                        "Dashboard"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sidebar.tsx",
                                    lineNumber: 21,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sidebar.tsx",
                                lineNumber: 20,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/sidebar.tsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sidebar.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 py-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mb-2 px-2 text-lg font-semibold tracking-tight",
                            children: "Employee Management"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sidebar.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    className: "w-full justify-start",
                                    asChild: true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/dashboard/employees",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                className: "mr-2 h-4 w-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sidebar.tsx",
                                                        lineNumber: 59,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "9",
                                                        cy: "7",
                                                        r: "4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sidebar.tsx",
                                                        lineNumber: 60,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M22 21v-2a4 4 0 0 0-3-3.87"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sidebar.tsx",
                                                        lineNumber: 61,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M16 3.13a4 4 0 0 1 0 7.75"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sidebar.tsx",
                                                        lineNumber: 62,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sidebar.tsx",
                                                lineNumber: 49,
                                                columnNumber: 17
                                            }, this),
                                            "Employees"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sidebar.tsx",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sidebar.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    className: "w-full justify-start",
                                    asChild: true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/dashboard/salaries",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                className: "mr-2 h-4 w-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sidebar.tsx",
                                                    lineNumber: 79,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sidebar.tsx",
                                                lineNumber: 69,
                                                columnNumber: 17
                                            }, this),
                                            "Salaries"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sidebar.tsx",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sidebar.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    className: "w-full justify-start",
                                    asChild: true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/dashboard/attendance",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                className: "mr-2 h-4 w-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M8 2v4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sidebar.tsx",
                                                        lineNumber: 96,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M16 2v4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sidebar.tsx",
                                                        lineNumber: 97,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        width: "18",
                                                        height: "18",
                                                        x: "3",
                                                        y: "4",
                                                        rx: "2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sidebar.tsx",
                                                        lineNumber: 98,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M3 10h18"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sidebar.tsx",
                                                        lineNumber: 99,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "m9 16 2 2 4-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sidebar.tsx",
                                                        lineNumber: 100,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sidebar.tsx",
                                                lineNumber: 86,
                                                columnNumber: 17
                                            }, this),
                                            "Attendance"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sidebar.tsx",
                                        lineNumber: 85,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sidebar.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    className: "w-full justify-start",
                                    asChild: true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/dashboard/leaves",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                className: "mr-2 h-4 w-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        width: "18",
                                                        height: "18",
                                                        x: "3",
                                                        y: "4",
                                                        rx: "2",
                                                        ry: "2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sidebar.tsx",
                                                        lineNumber: 117,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "16",
                                                        x2: "16",
                                                        y1: "2",
                                                        y2: "6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sidebar.tsx",
                                                        lineNumber: 118,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "8",
                                                        x2: "8",
                                                        y1: "2",
                                                        y2: "6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sidebar.tsx",
                                                        lineNumber: 119,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "3",
                                                        x2: "21",
                                                        y1: "10",
                                                        y2: "10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sidebar.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sidebar.tsx",
                                                lineNumber: 107,
                                                columnNumber: 17
                                            }, this),
                                            "Leaves"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sidebar.tsx",
                                        lineNumber: 106,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sidebar.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    className: "w-full justify-start",
                                    asChild: true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/dashboard/bonuses",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                className: "mr-2 h-4 w-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "12",
                                                        cy: "12",
                                                        r: "10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sidebar.tsx",
                                                        lineNumber: 137,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sidebar.tsx",
                                                        lineNumber: 138,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M12 18V6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sidebar.tsx",
                                                        lineNumber: 139,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sidebar.tsx",
                                                lineNumber: 127,
                                                columnNumber: 17
                                            }, this),
                                            "Bonuses"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sidebar.tsx",
                                        lineNumber: 126,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sidebar.tsx",
                                    lineNumber: 125,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sidebar.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sidebar.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 py-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mb-2 px-2 text-lg font-semibold tracking-tight",
                            children: "Payroll"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sidebar.tsx",
                            lineNumber: 147,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    className: "w-full justify-start",
                                    asChild: true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/dashboard/payroll",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                className: "mr-2 h-4 w-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2h0V5z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sidebar.tsx",
                                                        lineNumber: 163,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M2 9v1c0 1.1.9 2 2 2h1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sidebar.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M16 11h0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sidebar.tsx",
                                                        lineNumber: 165,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sidebar.tsx",
                                                lineNumber: 153,
                                                columnNumber: 17
                                            }, this),
                                            "Payroll"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sidebar.tsx",
                                        lineNumber: 152,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sidebar.tsx",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    className: "w-full justify-start",
                                    asChild: true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/dashboard/payslips",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                className: "mr-2 h-4 w-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sidebar.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                        points: "14 2 14 8 20 8"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sidebar.tsx",
                                                        lineNumber: 183,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "16",
                                                        x2: "8",
                                                        y1: "13",
                                                        y2: "13"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sidebar.tsx",
                                                        lineNumber: 184,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "16",
                                                        x2: "8",
                                                        y1: "17",
                                                        y2: "17"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sidebar.tsx",
                                                        lineNumber: 185,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "10",
                                                        x2: "8",
                                                        y1: "9",
                                                        y2: "9"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sidebar.tsx",
                                                        lineNumber: 186,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sidebar.tsx",
                                                lineNumber: 172,
                                                columnNumber: 17
                                            }, this),
                                            "Pay Slips"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sidebar.tsx",
                                        lineNumber: 171,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sidebar.tsx",
                                    lineNumber: 170,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sidebar.tsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sidebar.tsx",
                    lineNumber: 146,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 py-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mb-2 px-2 text-lg font-semibold tracking-tight",
                            children: "Reports"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sidebar.tsx",
                            lineNumber: 194,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                className: "w-full justify-start",
                                asChild: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/dashboard/reports",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            className: "mr-2 h-4 w-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M21 8v13H3V8"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sidebar.tsx",
                                                    lineNumber: 210,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M1 3h22v5H1z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sidebar.tsx",
                                                    lineNumber: 211,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M10 12h4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sidebar.tsx",
                                                    lineNumber: 212,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sidebar.tsx",
                                            lineNumber: 200,
                                            columnNumber: 17
                                        }, this),
                                        "Reports & Analytics"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sidebar.tsx",
                                    lineNumber: 199,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sidebar.tsx",
                                lineNumber: 198,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/sidebar.tsx",
                            lineNumber: 197,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sidebar.tsx",
                    lineNumber: 193,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 py-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mb-2 px-2 text-lg font-semibold tracking-tight",
                            children: "Administration"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sidebar.tsx",
                            lineNumber: 220,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    className: "w-full justify-start",
                                    asChild: true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/dashboard/users",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                className: "mr-2 h-4 w-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sidebar.tsx",
                                                        lineNumber: 236,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "9",
                                                        cy: "7",
                                                        r: "4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sidebar.tsx",
                                                        lineNumber: 237,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M22 21v-2a4 4 0 0 0-3-3.87"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sidebar.tsx",
                                                        lineNumber: 238,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M16 3.13a4 4 0 0 1 0 7.75"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sidebar.tsx",
                                                        lineNumber: 239,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sidebar.tsx",
                                                lineNumber: 226,
                                                columnNumber: 17
                                            }, this),
                                            "User Management"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sidebar.tsx",
                                        lineNumber: 225,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sidebar.tsx",
                                    lineNumber: 224,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    className: "w-full justify-start",
                                    asChild: true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/dashboard/settings",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                className: "mr-2 h-4 w-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sidebar.tsx",
                                                        lineNumber: 256,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "12",
                                                        cy: "12",
                                                        r: "3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sidebar.tsx",
                                                        lineNumber: 257,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sidebar.tsx",
                                                lineNumber: 246,
                                                columnNumber: 17
                                            }, this),
                                            "Company Settings"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sidebar.tsx",
                                        lineNumber: 245,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sidebar.tsx",
                                    lineNumber: 244,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sidebar.tsx",
                            lineNumber: 223,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sidebar.tsx",
                    lineNumber: 219,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sidebar.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sidebar.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/dashboard/layout.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>DashboardLayout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sidebar.tsx [app-ssr] (ecmascript)");
"use client";
;
;
function DashboardLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:block w-64 border-r",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sidebar"], {}, void 0, false, {
                    fileName: "[project]/src/app/dashboard/layout.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/layout.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/layout.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/layout.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/layout.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__34d5b95e._.js.map