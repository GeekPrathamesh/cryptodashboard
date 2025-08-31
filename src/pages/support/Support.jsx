import React from "react";
import Dashboardlayout from "../../components/layout/Dashboardlayout";
import { MdOutlineMail } from "react-icons/md";

const Support = () => {
  return (
    <Dashboardlayout>
      <div className="h-auto md:h-[calc(100vh-80px)] bg-[#F3F3F7] rounded-xl p-4  gap-4 mb-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:p-4  max-w-[1200px] sm:ml-auto   ">
          <div className=" p-4 rounded gap-2 flex flex-col max-h-[200px] ">
            <div>
              <MdOutlineMail fontSize="30px" color="#5F00D9" />
            </div>
            <h1 className="text-[32px]">Contact Us</h1>
            <p className="max-w-[380px]">
              Have a question or just want to know more? Feel free to reach out
              to us.
            </p>
          </div>
          <div className="bg-white p-5 rounded col-span-2">
            <div className="flex flex-col gap-3">
              <p className="font-bold">
                You will receive response within 24 hours of time of submit.
              </p>
              <form action="" className="flex flex-col gap-6">
                <div className="flex gap-2 flex-col md:flex-row ">
                  <div className="flex flex-col w-full min-w-[150px]"><label htmlFor="name">Name</label><input type="text" placeholder="Prathamesh" name="name" id="name" className="px-4 py-1 border-2  rounded-md border-gray-100" /></div>
                  <div className="flex flex-col w-full"><label htmlFor="Sirname">Surname</label><input id="Sirname" type="text" name="Sirname" placeholder="Teli." className="px-4 py-1 border-2 rounded-md border-gray-100" /></div>
                </div>

                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col w-full"><label htmlFor="email">Email</label><input type="email" id="email" placeholder="pratham@gmail.com" className="px-4 py-1 border-2 rounded-md border-gray-100" /></div>
                                    <div className="flex flex-col w-full"><label htmlFor="Message">Message</label><textarea rows={5} name="Message" id="Message"  placeholder="pratham@gmail.com" className="px-4 py-1 border-2 rounded-md border-gray-100" /></div>
                </div>
                <div className="flex items-center gap-2 "><input type="checkbox" id="checkbox" /><label htmlFor="checkbox">I agree with <span className="text-[#5F00D9]">Terms & Conditions.</span></label></div>

                <div className="flex flex-col gap-4">
                  <button className="rounded-md bg-[#6f12ea] py-2 w-[90%] mx-auto  text-white hover:bg-[#8324ff]">Send a Message</button>
                  <button className="rounded-md bg-[#6f12ea] py-2 w-[90%]  mx-auto text-white hover:bg-[#8324ff]">Book a Meeting</button>
                </div>
              </form>
            </div>
          </div>

          
        </div>
      </div>
    </Dashboardlayout>
  );
};

export default Support;
