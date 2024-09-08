
"use client";

import { Sidebar } from "flowbite-react";
import { MdSpaceDashboard, MdEventNote  } from "react-icons/md";
import { RiSearchEyeLine, RiMoneyRupeeCircleFill  } from "react-icons/ri";
import { FaSchool } from "react-icons/fa6";
import { FaSignOutAlt } from "react-icons/fa";
import { HiMiniInboxStack } from "react-icons/hi2";




export default function Side_bar() {
  return (
    <Sidebar aria-label="Sidebar with logo branding example">
      <Sidebar.Logo href="#" img="./src/assets/logo.webp" imgAlt="Flowbite logo">
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={MdSpaceDashboard}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={RiSearchEyeLine}>
            Search
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={RiMoneyRupeeCircleFill}>
            Job Portal
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={FaSchool}>
            Campus
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiMiniInboxStack }>
            Inbox
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={MdEventNote }>
            Events
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={FaSignOutAlt}>
            Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
