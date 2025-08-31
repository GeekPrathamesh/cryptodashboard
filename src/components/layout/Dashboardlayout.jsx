import { useState } from "react";
import Sidenav from "./Sidenav";
import Topnav from "./Topnav";


const Dashboardlayout = ({children}) => {

    const [open ,setopen] = useState(false);
    const toggleBar=()=>{
        setopen(!open);
    }
  return (
    <div className="flex">
      <Sidenav open={open} toggleBar={toggleBar} />
      <div className="flex flex-col flex-1">

      <Topnav title="Who Domain" toggleBar={toggleBar} />

      {children}

      </div>
    </div>
  );
};

export default Dashboardlayout;
