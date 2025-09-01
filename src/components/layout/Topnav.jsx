import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaBars } from "react-icons/fa";

const Topnav = ({ title, toggleBar }) => {
  const [relate, setrelate] = useState(false);

  return (
    <div className="h-[64px] bg-[#FFFFFF] flex items-center justify-between md:px-30 px-15">
      <div className="flex items-center gap-10">
        <FaBars
          className="flex md:hidden cursor-pointer "
          onClick={toggleBar}
        />
        <h1 className="font-bold text-[28px]">{title}</h1>
      </div>
      <div className="relative ">
        <CgProfile
          fontSize="35px"
          onClick={() => {
            setrelate(!relate);
          }}
          className="cursor-pointer"
          color="#5F00D9"
        />
        {relate && (
          <div className="absolute top-10 w-[130px] left-[-47px]">
            <ul className="flex flex-col gap-2 p-2 ">
              <li
                onClick={() => {
                  setrelate(!relate);
                }}
                className="bg-[#F3F3F7] text-center hover:outline cursor-pointer hover:bg-[#6e12e7] hover:text-white rounded"
              >
                Sign In?
              </li>
              <li
                onClick={() => {
                  setrelate(!relate);
                }}
                className="bg-[#F3F3F7] text-center hover:outline cursor-pointer hover:bg-[#6e12e7] hover:text-white rounded"
              >
                Acount info
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Topnav;
