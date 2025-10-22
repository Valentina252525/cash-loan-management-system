Firestore Database Schema
Collections
customers

Document ID: Auto-generated (e.g., customer_001)
Fields:
name: String
email: String
phone: String
idNumber: String
address: String
financialHistory: { creditScore: Number, previousLoans: Array }
documentUrls: Array


Indexes:
Composite: email (ASC), name (ASC) for search efficiency.



loans

Document ID: Auto-generated
Fields:
customerId: String (references customers)
amount: Number
interestRate: Number
status: String (Pending | Approved | Disbursed | Active | Paid Off | Default)
loanType: String
createdAt: Timestamp
repaymentSchedule: Array<{ dueDate: Timestamp, amountDue: Number, paid: Boolean }>


Subcollection: repayments
Fields: { dueDate: Timestamp, amountDue: Number, paid: Boolean }


Indexes:
Composite: customerId (ASC), status (ASC).



payments

Document ID: Auto-generated
Fields:
loanId: String (references loans)
amount: Number
paymentDate: Timestamp
transactionId: String
method: String (Selcom Pay | Manual)


Indexes:
Composite: loanId (ASC), paymentDate (DESC).



staff

Document ID: Auto-generated
Fields:
name: String
email: String
role: String (Admin | Manager | Staff)
permissions: Array
performanceMetrics: { loansDisbursed: Number, paymentsCollected: Number, customerSatisfaction: Number }
leaveRequests: Array<{ id: String, startDate: Timestamp, endDate: Timestamp, status: String }>


Indexes:
Composite: email (ASC), role (ASC).



Security Rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
