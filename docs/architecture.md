System Architecture
Overview

Frontend: Next.js with TypeScript, Tailwind CSS for responsive UI.
Backend: Firebase Cloud Functions (Node.js/TypeScript) for logic.
Database: Firestore for data storage.
Storage: Firebase Storage for customer documents.
Authentication: Firebase Auth for role-based access.

Flow

User interacts with Next.js app (e.g., /customers/create).
Client-side logic (React) sends requests to Firebase SDK.
Cloud Functions handle complex operations (e.g., repayment schedule generation).
Firestore stores/retrieves data; Storage handles file uploads.
Auth ensures secure access.

Diagram
[User] → [Next.js App]
           ↓
[Firebase SDK] → [Cloud Functions]
           ↓
[Firestore | Storage | Auth]
