"use client";

import { Sidebar } from "flowbite-react";
import { MdSpaceDashboard, MdEventNote, MdSettingsSuggest } from "react-icons/md";
import { RiSearchEyeLine, RiMoneyRupeeCircleFill } from "react-icons/ri";
import { FaSchool } from "react-icons/fa6";
import { FaSignOutAlt } from "react-icons/fa";
import { HiMiniInboxStack } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Side_bar() {
  const navigate = useNavigate();
  const handleSignout = async () => {
    try {
      const res = await fetch("http://localhost:9001/api/alumini/signout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.text();

      if (res.ok) {
        toast.success(data || "Signed out successfully!");
        navigate("/");
      } else {
        toast.error(data || "Signout failed");
      }
    } catch (error) {
      toast.error("An error occurred during sign out.");
    }
  };
  return (
    <Sidebar aria-label="Sidebar with logo branding example">
      <Sidebar.Logo img="./src/assets/logo2.jpg" imgAlt=" logo"></Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Link to="/alumini/dashboard">
            <Sidebar.Item icon={MdSpaceDashboard} as="div">
              Dashboard
            </Sidebar.Item>
          </Link>
          <Link to="/alumini/search">
            <Sidebar.Item icon={RiSearchEyeLine} as="div">
              Search
            </Sidebar.Item>
          </Link>
          <Link to="/alumini/jobs">
            <Sidebar.Item icon={RiMoneyRupeeCircleFill} as="div">
              Job Portal
            </Sidebar.Item>
          </Link>
          <Link to="/alumini/campus">
            <Sidebar.Item icon={FaSchool} as="div">
              Campus
            </Sidebar.Item>
          </Link>
          <Link to="/alumini/inbox">
            <Sidebar.Item icon={HiMiniInboxStack} as="div">
              Inbox
            </Sidebar.Item>
          </Link>
          <Link to="/alumini/events">
            <Sidebar.Item icon={MdEventNote} as="div">
              Events
            </Sidebar.Item>
          </Link>
          <Link to="/alumini/settings">
            <Sidebar.Item icon={MdSettingsSuggest} as="div">
              Settings
            </Sidebar.Item>
          </Link>
          <Sidebar.Item
            onClick={handleSignout}
            icon={FaSignOutAlt}
            className="cursor-pointer"
            as="div"
          >
            Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
