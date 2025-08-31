import React, { useState } from "react";
import Dashboardlayout from "../../components/layout/Dashboardlayout";
import { CiSearch } from "react-icons/ci";

const Transaction = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["ALL", "DEPOSIT", "WITHDRAW", "TRADE"];

  
  const transactions = [
    { id: "TXN001", date: "2025-09-01 14:32", type: "Credit", amount: "$150.00", status: "Completed" },
    { id: "TXN002", date: "2025-09-01 12:15", type: "Debit", amount: "$50.00", status: "Pending" },
    { id: "TXN003", date: "2025-08-31 18:45", type: "Credit", amount: "$200.00", status: "Completed" },
    { id: "TXN004", date: "2025-08-31 09:20", type: "Debit", amount: "$75.00", status: "Failed" },
    { id: "TXN005", date: "2025-08-30 21:10", type: "Credit", amount: "$300.00", status: "Completed" },
    { id: "TXN006", date: "2025-08-30 10:05", type: "Debit", amount: "$120.00", status: "Pending" },
  ];



  const [search , setsearch] = useState(transactions);

  const setChange=(e)=>{
  const value = e.target.value.trim().toLowerCase();

  if (value === "") {
    setsearch(transactions); // Reset to original list
    return;
  }
let newSearchval = search.filter((each)=> (each.id.toLowerCase().includes(e.target.value) || each.date.toLowerCase().includes(e.target.value) || each.type.toLowerCase().includes(e.target.value) || each.amount.toLowerCase().includes(e.target.value) || each.status.toLowerCase().includes(e.target.value)))

setsearch(newSearchval);
  }



  return (

<Dashboardlayout>
  <div className="h-auto md:h-[calc(100vh-64px)] bg-[#F3F3F7] rounded-xl p-4 flex flex-col gap-4">
    {/* Tabs + Search */}
    <div className="bg-white rounded-lg shadow-sm p-2 md:p-4">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-0">
        
        {/* Tabs */}
        <div className="flex flex-row gap-5 md:gap-5 flex-wrap md:flex-nowrap overflow-x-auto">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex-1 min-w-[80px] text-center py-2 font-medium transition-colors flex items-center justify-center gap-2 ${
                activeTab === index
                  ? "border-b-2 border-purple-600 text-purple-600"
                  : "text-gray-500"
              }`}
            >
              {tab}
              <p className="bg-[#dadee2] px-2 rounded-2xl text-xs">{index}</p>
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="flex items-center gap-2 border rounded-md px-2 py-1 bg-white mt-2 md:mt-0 w-full md:w-auto">
          <CiSearch fontSize="20px" />
          <input
            type="text"
            placeholder="Search by ID or destination"
            className="outline-none px-2 py-1 w-full md:w-auto" onChange={setChange}
          />
        </div>
      </div>


       {/* Transaction Content */}
{activeTab === 0 && 


    <div className="overflow-x-auto mt-5">
      <table className="min-w-full border border-gray-200 text-sm text-gray-700">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="px-4 py-2 border">ID</th>
            <th className="px-4 py-2 border">Date & Time</th>
            <th className="px-4 py-2 border">Type</th>
            <th className="px-4 py-2 border">Amount</th>
            <th className="px-4 py-2 border">Status</th>
          </tr>
        </thead>
        <tbody>
          {search.map((txn, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-4 py-2 border">{txn.id}</td>
              <td className="px-4 py-2 border">{txn.date}</td>
              <td className="px-4 py-2 border">{txn.type}</td>
              <td className="px-4 py-2 border">{txn.amount}</td>
              <td className={`px-4 py-2 border font-semibold
                ${txn.status === "Completed" ? "text-green-600" :
                  txn.status === "Pending" ? "text-yellow-500" :
                  "text-red-500"}`}>
                {txn.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

} 
    </div>

  </div>
</Dashboardlayout>


  );
};

export default Transaction;
