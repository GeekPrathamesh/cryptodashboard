import React, { useState } from "react";
import { FaCircleInfo } from "react-icons/fa6";
import { RiMoneyEuroCircleLine } from "react-icons/ri";
import { VscGraphLine } from "react-icons/vsc";

const Mainlayout = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Portfolio", "Transactions", "Settings"];

  return (
<div className="h-auto md:h-[calc(100vh-64px)] bg-[#F3F3F7] rounded-xl px-4 flex flex-col gap-4">

<div className="w-full max-w-[1000px] bg-white mx-auto mt-6 flex flex-col lg:flex-row gap-8 justify-around items-start p-4 rounded-xl">

        <div className="flex flex-col gap-1">
          <p className="flex items-center gap-1 relative group cursor-pointer text-[#535D66]">
            Total Portfolio Value
            <FaCircleInfo className="text-gray-500" />
            {/* Tooltip */}
            <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all rounded bg-black text-white text-xs px-2 py-1 whitespace-nowrap">
              This shows your total portfolio value
            </span>
          </p>
          <h1>₹ 112,312.24</h1>
        </div>

        <div className="flex flex-col gap-1">
          {" "}
          <p className="text-[#535D66]">Wallet Balances</p>
          <div className="flex flex-row  gap-5">
            {" "}
            <h1 className="flex gap-1 items-center ">
              ₹ 112,312.24
              <p className="bg-gray-400 rounded-[8px] p-1 text-[12px] ">BTC</p>
            </h1>
            <h1 className="flex gap-1 items-center">
              ₹1300.00
              <p className="bg-gray-400 rounded-[8px] p-1 text-[12px] ">INR</p>
            </h1>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="bg-[#5F00D9] text-white text-sm leading-none min-h-0 px-3 py-0.5 rounded h-8">
            Deposit
          </button>
          <button className="bg-[#5F00D9] text-white text-sm leading-none min-h-0 px-3 py-0.5 rounded ml-2 h-8">
            Withdraw
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 max-w-[1000px] mx-auto  w-full mb-5">
        <div className="bg-white p-7 w-full flex flex-col gap-3 rounded-2xl ">
          <div className="flex justify-between">
            <div className="flex flex-col gap-1">
              <p className="text-[#535D66]">Current price</p>
              <div className="flex flex-row  gap-5">
                <h1 className="flex gap-1 items-center text-[24px] ">
                  ₹ 26,312.24
                  <VscGraphLine fontSize="20px" color="green" />
                </h1>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="bg-[#5F00D9] text-white text-sm leading-none min-h-0 px-3 py-0.5 rounded h-8">
                Deposit
              </button>
              <button className="bg-[#5F00D9] text-white text-sm leading-none min-h-0 px-3 py-0.5 rounded ml-2 h-8">
                Withdraw
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-7">
            <div className="flex border-b border-gray-300">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex-1 text-center py-2 font-medium transition-colors
              ${
                activeTab === index
                  ? "border-b-2 border-purple-600 text-purple-600"
                  : "text-gray-500"
              }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <img src="/vector.png" alt="graph" className="m-auto" />{" "}
            <div className="flex flex-row justify-around text-[#797E82]">
              <p>7.15 PM</p>
              <p>8.15 PM</p>
              <p>9.15 PM</p>
              <p>10.15 PM</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 w-full flex flex-col  rounded-2xl justify-between ">
          <p className="text-[#535D66] text-[18px] mb-4">Recent Transactions</p>
          <div className="flex flex-col gap-8 max-h-[200px] overflow-y-auto mb-3">
          <div className="flex flex-row justify-between items-center md:px-9 border-b border-gray-200 ">
            <div className="flex items-center gap-2"><RiMoneyEuroCircleLine fontSize="2rem" />
            <div>
                          
              <p>INR Deposit</p>
              <p>2022-06-09 7:06 PM</p>
            </div></div>

            <p>+ ₹81,123.10</p>
          </div>
                    <div className="flex flex-row justify-between items-center md:px-9 border-b border-gray-200 ">
            <div className="flex items-center gap-2"><RiMoneyEuroCircleLine fontSize="2rem" />
            <div>
                          
              <p>INR Deposit</p>
              <p>2022-06-09 7:06 PM</p>
            </div></div>

            <p>+ ₹81,123.10</p>
          </div>
                    <div className="flex flex-row justify-between items-center md:px-9 border-b border-gray-200 ">
            <div className="flex items-center gap-2"><RiMoneyEuroCircleLine fontSize="2rem" />
            <div>
                          
              <p>INR Deposit</p>
              <p>2022-06-09 7:06 PM</p>
            </div></div>

            <p>+ ₹81,123.10</p>
          </div>
          <div className="flex flex-row justify-between items-center md:px-9 border-b border-gray-200 ">
            <div className="flex items-center gap-2"><RiMoneyEuroCircleLine fontSize="2rem" />
            <div>
                          
              <p>INR Deposit</p>
              <p>2022-06-09 7:06 PM</p>
            </div></div>

            <p>+ ₹81,123.10</p>
          </div><div className="flex flex-row justify-between items-center md:px-9 border-b border-gray-200 ">
            <div className="flex items-center gap-2"><RiMoneyEuroCircleLine fontSize="2rem" />
            <div>
                          
              <p>INR Deposit</p>
              <p>2022-06-09 7:06 PM</p>
            </div></div>

            <p>+ ₹81,123.10</p>
          </div>
                    <div className="flex flex-row justify-between items-center md:px-9 border-b border-gray-200 ">
            <div className="flex items-center gap-2"><RiMoneyEuroCircleLine fontSize="2rem" />
            <div>
                          
              <p>INR Deposit</p>
              <p>2022-06-09 7:06 PM</p>
            </div></div>

            <p>+ ₹81,123.10</p>
          </div>
          </div>
          <button className="bg-[#EEEEF4] w-[80%] mx-auto py-2 rounded-sm">View All</button>
        </div>
        <div className="bg-white p-4 rounded-2xl flex flex-col items-start "><span className="bg-[#5F00D9] rounded-sm py-1 px-1 text-white text-sm">Loans</span><p>Learn more about Loans – Keep your Bitcoin, access it’s value without selling it</p></div>
        <div className=" p-4 rounded-2xl flex flex-col items-start bg-[url('/Visual.png')] bg-cover bg-center bg-[#5F00D9]"><span className="bg-white text-[#5F00D9] rounded-sm py-1 px-1 text-sm">Loans</span><p>Learn more about Loans – Keep your Bitcoin, access it’s value without selling it</p></div>
      </div>
    </div>
  );
};

export default Mainlayout;
