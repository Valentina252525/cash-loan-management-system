Wireframes for Cash Loan Management System
Customer Onboarding (/customers/create)
[Header: Logo | Nav: Customers | Loans | Staff | Reports]
[Main Content]
├── Title: "Create New Customer"
├── Form
│   ├── Name* [Text Input]
│   ├── Email* [Email Input]
│   ├── Phone [Tel Input]
│   ├── ID Number* [Text Input]
│   ├── Address [Textarea]
│   ├── Financial History
│   │   ├── Credit Score [Number Input]
│   │   ├── Previous Loans [Text Input, Comma-Separated]
│   ├── Document Upload [File Input]
│   └── [Submit Button]
[Footer: Copyright]

Customer Dashboard (/customers/[id])
[Header: Logo | Nav]
[Main Content]
├── Title: "Customer: [Name]"
├── Tabs: Overview | Loan History | Documents
├── Overview
│   ├── Email: [Display]
│   ├── Phone: [Display]
│   ├── ID Number: [Display]
│   ├── Address: [Display]
├── Loan History
│   ├── Table: Loan ID | Amount | Status | Due Date
├── Documents
│   ├── List: Document Name | Download Link
[Footer]

Loan Creation (/loans/create)
[Header: Logo | Nav]
[Main Content]
├── Title: "Create New Loan"
├── Form
│   ├── Customer [Dropdown: Select Customer ID]
│   ├── Loan Amount* [Number Input]
│   ├── Interest Rate* [Number Input]
│   ├── Loan Type [Select: Personal | Business | etc.]
│   ├── Repayment Schedule
│   │   ├── Term (Months) [Number Input]
│   │   ├── Generate Schedule [Button]
│   └── [Submit Button]
[Footer]

Admin Dashboard (/dashboard)
[Header: Logo | Nav]
[Main Content]
├── Title: "Admin Dashboard"
├── Metrics
│   ├── Total Loans Active: [Number]
│   ├── Total Amount Outstanding: [Currency]
│   ├── Recent Payments: [Table: Date | Amount | Loan ID]
│   ├── New Customers: [Number]
├── Quick Links
│   ├── Add Customer [Button]
│   ├── Create Loan [Button]
[Footer]
