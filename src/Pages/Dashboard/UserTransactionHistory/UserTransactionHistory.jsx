import React from 'react';

const UserTransactionHistory = () => {
  // Sample data - replace with your actual data
  const transactions = [
    {
      id: 1,
      token: "TXN-001",
      date: "2025-09-19",
      price: "$50.00",
      status: "Completed"
    },
    {
      id: 2,
      token: "TXN-002",
      date: "2025-09-18",
      price: "$35.00",
      status: "Completed"
    },
    {
      id: 2,
      token: "TXN-002",
      date: "2025-09-18",
      price: "$35.00",
      status: "Completed"
    },
    {
      id: 2,
      token: "TXN-002",
      date: "2025-09-18",
      price: "$35.00",
      status: "Completed"
    },
    {
      id: 2,
      token: "TXN-002",
      date: "2025-09-18",
      price: "$35.00",
      status: "Completed"
    },
    {
      id: 2,
      token: "TXN-002",
      date: "2025-09-18",
      price: "$35.00",
      status: "Completed"
    },
    {
      id: 2,
      token: "TXN-002",
      date: "2025-09-18",
      price: "$35.00",
      status: "Completed"
    },
    {
      id: 2,
      token: "TXN-002",
      date: "2025-09-18",
      price: "$35.00",
      status: "Completed"
    },
    {
      id: 2,
      token: "TXN-002",
      date: "2025-09-18",
      price: "$35.00",
      status: "Completed"
    },
    {
      id: 2,
      token: "TXN-002",
      date: "2025-09-18",
      price: "$35.00",
      status: "Completed"
    },
    {
      id: 2,
      token: "TXN-002",
      date: "2025-09-18",
      price: "$35.00",
      status: "Completed"
    },
    {
      id: 2,
      token: "TXN-002",
      date: "2025-09-18",
      price: "$35.00",
      status: "Completed"
    },
    // Add more transactions as needed
  ];

  return (
    <div className='h-full'>
        <div className="p-4 min-h-[80%] bg-slate-900 overflow-auto">
            <h2 className="text-2xl font-bold mb-6 text-white">Transaction History</h2>
            <div className="overflow-x-auto">
                <table className="w-full bg-slate-800 rounded-lg">
                <thead className="bg-slate-700">
                    <tr className="text-white">
                    <th className="px-6 py-4 text-left">SL</th>
                    <th className="px-6 py-4 text-left">Token</th>
                    <th className="px-6 py-4 text-left">Date</th>
                    <th className="px-6 py-4 text-left">Price</th>
                    <th className="px-6 py-4 text-left">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction, index) => (
                    <tr 
                        key={transaction.id} 
                        className="border-b border-slate-700 text-gray-300 hover:bg-slate-700 transition-colors"
                    >
                        <td className="px-6 py-4">{index + 1}</td>
                        <td className="px-6 py-4">{transaction.token}</td>
                        <td className="px-6 py-4">{transaction.date}</td>
                        <td className="px-6 py-4">{transaction.price}</td>
                        <td className="px-6 py-4">
                        <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400">
                            {transaction.status}
                        </span>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>
    </div>
    
  );
};

export default UserTransactionHistory;