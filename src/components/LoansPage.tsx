"use client";

import { Card, CardBody } from "@nextui-org/react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function LoansPage() {
  const [loans, setLoans] = useState([
    { id: 1, borrower: "Jane Doe", amount: 1200, status: "Active" },
    { id: 2, borrower: "John Smith", amount: 800, status: "Pending" },
    { id: 3, borrower: "Alice Johnson", amount: 1500, status: "Completed" },
  ]);

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Loans</h1>
        <Button className="bg-primary text-white">+ New Loan</Button>
      </div>

      <Card className="shadow-md border border-gray-200">
        <CardBody>
          <table className="min-w-full text-sm text-gray-700">
            <thead className="border-b bg-gray-50 text-gray-600 uppercase text-xs">
              <tr>
                <th className="py-3 px-4 text-left">ID</th>
                <th className="py-3 px-4 text-left">Borrower</th>
                <th className="py-3 px-4 text-left">Amount</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loans.map((loan) => (
                <tr key={loan.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{loan.id}</td>
                  <td className="py-3 px-4">{loan.borrower}</td>
                  <td className="py-3 px-4">${loan.amount}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs ${
                        loan.status === "Active"
                          ? "bg-green-100 text-green-600"
                          : loan.status === "Pending"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {loan.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <Button size="sm" variant="outline">
                      View
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
}
