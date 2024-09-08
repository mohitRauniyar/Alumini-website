
"use client";

import { Sidebar } from "flowbite-react";
import { MdSpaceDashboard, MdEventNote  } from "react-icons/md";
import { RiSearchEyeLine, RiMoneyRupeeCircleFill  } from "react-icons/ri";
import { FaSchool } from "react-icons/fa6";
import { FaSignOutAlt } from "react-icons/fa";
import { HiMiniInboxStack } from "react-icons/hi2";
import { Link } from "react-router-dom";




export default function Side_bar() {
  return (
    <Sidebar aria-label="Sidebar with logo branding example">
      <Sidebar.Logo img="" imgAlt=" logo">
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Link to='/alumini/dashboard'>
            <Sidebar.Item icon={MdSpaceDashboard}>
              Dashboard
            </Sidebar.Item>
          </Link>
          <Link to='/alumini/search'>
            <Sidebar.Item icon={RiSearchEyeLine}>
              Search
            </Sidebar.Item>
          </Link>
          <Link to='/alumini/jobs'>
            <Sidebar.Item icon={RiMoneyRupeeCircleFill}>
              Job Portal
            </Sidebar.Item>
          </Link>
          <Link to='/alumini/campus'>
          <Sidebar.Item icon={FaSchool}>
            Campus
          </Sidebar.Item>
          </Link>
          <Link to='/alumini/inbox'>
          <Sidebar.Item icon={HiMiniInboxStack }>
            Inbox
          </Sidebar.Item>
          </Link>
          <Link to='/alumini/events'>
          <Sidebar.Item icon={MdEventNote }>
            Events
          </Sidebar.Item>
          </Link>
          <Link to='/alumini/signout'>
          <Sidebar.Item icon={FaSignOutAlt} >
            Sign Out
          </Sidebar.Item>
          </Link>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
