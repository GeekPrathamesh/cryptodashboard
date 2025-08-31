import { CgProfile } from "react-icons/cg";
import { FaBars } from "react-icons/fa";

const Topnav = ({ title, toggleBar }) => {
  return (
    <div className="h-[64px] bg-[#FFFFFF] flex items-center justify-between md:px-30 px-15">
      <div className="flex items-center gap-10">
        <FaBars className="flex md:hidden cursor-pointer " onClick={toggleBar}  />
        <h1 className="font-bold text-[28px]">{title}</h1>
      </div>

      <CgProfile fontSize="35px" />
    </div>
  );
};

export default Topnav;
