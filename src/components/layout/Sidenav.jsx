import { RxDashboard } from "react-icons/rx";
import { GrTransaction } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";



const Sidenav = ({ open, toggleBar }) => {

  const location = useLocation();


  const sideNavlinks = [
    { icon: RxDashboard, text: "Dashboard", link: "/" },
    { icon: GrTransaction, text: "Transactions", link: "/transactions" },
  ];

  return (
    <div className={`${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 fixed lg:relative w-[220px] h-screen bg-[#FFFFFF] p-1 flex-col  overflow-hidden top-0 left-0 transition-transform duration-300 z-50 flex justify-between`}>

      {/* Header */}
        <div>
          {open && <div className="absolute right-3 top-2 cursor-pointer" onClick={toggleBar}><IoMdClose fontSize="1.5rem" /></div>}

        <h1 className="text-[20px] text-center pt-[40px] text-[#5F00D9] font-bold">
          @Team Nerve
        </h1>

        {/* Scrollable Middle Section */}
        <div className="flex flex-col gap-1 pt-6 pb-4  max-h-[500px] overflow-y-auto ">
          {sideNavlinks.map((sidelink, index) => (
                  <Link to={sidelink.link}       key={`${sidelink.text}-${index}`}>
            <div
              className={`flex items-center justify-start gap-3 mx-1 py-3 px-4 rounded-lg hover:bg-[#EEEEF4] hover:font-bold ${location.pathname===sidelink.link? "bg-[#EEEEF4]" :" bg-white" }`}
        
            >
              <sidelink.icon />
              <p className="text-[14px]">{sidelink.text}</p>
            </div>      </Link>

          ))}
        </div>
      </div>

      {/* Footer */}
      <Link to="/support">
<div className="flex items-center justify-start gap-3 mx-1 py-3 px-4 rounded-lg hover:bg-[#EEEEF4] hover:font-bold mb-3">
        <BiSupport />
        <p className="text-[14px]">Support</p>
      </div></Link>

    </div>
  );
};

export default Sidenav;
