/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ProfileInfo from "../Card/ProfileInfo";
import { RiNotification3Line } from "react-icons/ri";
import { RiMessage3Line } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { SlBriefcase } from "react-icons/sl";
import Notification from "../Notification/Notification";


const NavBar2 = ({ userInfo }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showNotifications, setShowNotifications] = useState(false);


  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications);
    // console.log(showNotifications)

  };


  useEffect(() => {
    // Update time every second
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString();
  const formattedDate = currentTime.toLocaleDateString();


  return (
    // <div className="flex items-center justify-between px-3 py-2 bg-white lg:px-6 drop-shadow">
    //   <h2 className="py-2 text-sm font-medium text-black lg:text-xl">AlumConnect</h2>

    //   <div className="flex items-center justify-between gap-4">
    //     <div className="hidden flex-col px-3 text-[14px] border-r-2 text-slate-600  lg:flex">
    //       <span className="whitespace-nowrap">{formattedDate} </span>
    //       <span>{formattedTime}</span>
    //     </div>
    //     <div className="flex items-center justify-between gap-1 lg:gap-7 ">
    //       <div className="flex flex-col items-center justify-center gap-1">
    //         <SlCalender size={18} />
    //         <p className="text-xs">Events</p>
    //       </div>
    //       <div className="flex flex-col items-center justify-center gap-1">
    //         <SlBriefcase size={18} />
    //         <p className="text-xs">Carrier</p>
    //       </div>
    //     </div>
    //     <div className="flex items-center justify-between h-12 gap-4 px-4 border-l-2 border-r-2 hover:cursor-pointer">
    //       <RiMessage3Line size={21} className="" />
    //       <div className="relative">
    //         <RiNotification3Line size={21} onClick={handleNotificationClick} />
            
    //         <div className="absolute w-2 h-2 bg-red-700 rounded-full -right-1 -top-1 "></div>


    //       </div>
    //     </div>
    //     {
    //           showNotifications && <Notification />

    //         }
    //     <ProfileInfo userInfo={userInfo} />
    //   </div>

    // </div>
    <div className="flex items-center justify-between px-3 py-2 bg-white drop-shadow lg:px-6">
  <h2 className="py-2 text-xs font-medium text-black lg:text-xl">AlumConnect</h2>

  <div className="flex items-center justify-between gap-2 lg:gap-4">
    <div className="flex-col hidden px-3 text-xs border-r-2 lg:text-sm text-slate-600 lg:flex">
      <span className="whitespace-nowrap">{formattedDate}</span>
      <span>{formattedTime}</span>
    </div>
    
    <div className="flex items-center gap-2 lg:gap-7">
      <div className="flex flex-col items-center gap-1">
        <SlCalender size={16} />
        <p className="text-xs lg:text-sm">Events</p>
      </div>
      <div className="flex flex-col items-center gap-1">
        <SlBriefcase size={16} />
        <p className="text-xs lg:text-sm">Career</p>
      </div>
    </div>

    <div className="flex items-center h-12 gap-2 px-2 border-l-2 border-r-2 hover:cursor-pointer lg:gap-4 lg:px-4">
      <RiMessage3Line size={18} />
      <div className="relative">
        <RiNotification3Line size={18} onClick={handleNotificationClick} />
        <div className="absolute w-2 h-2 bg-red-700 rounded-full -right-1 -top-1"></div>
      </div>
    </div>

    {showNotifications && <Notification />}

    <ProfileInfo userInfo={userInfo} />
  </div>
</div>

  )
}

export default NavBar2