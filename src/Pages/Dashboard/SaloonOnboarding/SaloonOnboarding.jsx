import React, { useState } from 'react';

const SaloonOnboarding = () => {
    const [searchTerm, setSearchTerm] = useState("");
    // Sample data - replace with your actual data
    const transactions = [
        {
            id: 1,
            token: "TXN-001",
            date: "2025-09-19",
            price: "৳ 50.00",
            status: "Completed"
        },
        {
            id: 2,
            token: "TXN-002",
            date: "2025-09-18",
            price: "৳ 35.00",
            status: "Completed"
        },
        {
            id: 2,
            token: "TXN-002",
            date: "2025-09-18",
            price: "৳ 35.00",
            status: "Completed"
        },
        {
            id: 2,
            token: "TXN-002",
            date: "2025-09-18",
            price: "৳ 35.00",
            status: "Completed"
        },
        {
            id: 2,
            token: "TXN-002",
            date: "2025-09-18",
            price: "৳ 35.00",
            status: "Completed"
        },
        {
            id: 2,
            token: "TXN-002",
            date: "2025-09-18",
            price: "৳ 35.00",
            status: "Completed"
        },
        {
            id: 2,
            token: "TXN-002",
            date: "2025-09-18",
            price: "৳ 35.00",
            status: "Completed"
        },
        {
            id: 2,
            token: "TXN-002",
            date: "2025-09-18",
            price: "৳ 35.00",
            status: "Completed"
        },
        {
            id: 2,
            token: "TXN-002",
            date: "2025-09-18",
            price: "৳ 35.00",
            status: "Completed"
        },
        {
            id: 2,
            token: "TXN-002",
            date: "2025-09-18",
            price: "৳ 35.00",
            status: "Completed"
        },
        {
            id: 2,
            token: "TXN-002",
            date: "2025-09-18",
            price: "৳ 35.00",
            status: "Completed"
        },
        {
            id: 2,
            token: "TXN-002",
            date: "2025-09-18",
            price: "৳ 35.00",
            status: "Completed"
        },
        // Add more transactions as needed
    ];

    const filteredTransactions = transactions.filter((t) =>
        Object.values(t).some((value) =>
            String(value).toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    return (
        <div className="h-[90vh] overflow-hidden rounded-2xl">
            <div className="p-4 h-full bg-slate-900 overflow-auto">
                <h2 className="text-2xl font-bold mb-6 text-white bg-slate-700 rounded-xl sticky top-0 z-10 p-4">Transaction History</h2>
                
                <div className="mb-4">
                <input
                    type="text" 
                    placeholder="Search transactions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 rounded-md bg-slate-800 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                </div>

                <div className="overflow-x-auto">
                <table className="w-full bg-slate-800 rounded-lg">
                    
                    <thead className="bg-slate-700">
                    <tr className="text-white">
                        <th className="px-6 py-2 text-left">SL</th>
                        <th className="px-6 py-2 text-left">Token</th>
                        <th className="px-6 py-2 text-left">Date</th>
                        <th className="px-6 py-2 text-left">Price</th>
                        <th className="px-6 py-2 text-left">Status</th>
                    </tr>
                    </thead>

                    <tbody>
                    {filteredTransactions.map((transaction, index) => (
                        <tr
                        key={index} // better: use `transaction.id` if unique
                        className="border-b border-slate-700 text-gray-300 hover:bg-slate-700 transition-colors"
                        >
                            <td className="px-6 py-2">{index + 1}</td>
                            <td className="px-6 py-2">{transaction.token}</td>
                            <td className="px-6 py-2">{transaction.date}</td>
                            <td className="px-6 py-2">{transaction.price}</td>
                            <td className="px-6 py-2">
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

export default SaloonOnboarding;