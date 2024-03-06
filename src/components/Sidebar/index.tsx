"use client";

import profilePic from "@/assets/profile-pic.jpg";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { PiPenNibLight } from "react-icons/pi";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { TbSpeakerphone } from "react-icons/tb";
import { BiMessageSquareAdd } from "react-icons/bi";
import { IoIosAdd } from "react-icons/io";
import { useState } from "react";
import { RiExpandLeftRightLine } from "react-icons/ri";
import { Team } from "./Team";
import { Folders } from "./Folders";

export default function Sidebar() {
  const [folders, setFolders] = useState([
    {
      title: "Products",
      open: false,
      sub: ["Roadmap", "Feedback", "Performance", "Team", "Analytics"],
    },
    {
      title: "Sales",
      open: false,
      sub: ["Customers", "Sales", "Orders"],
    },
    {
      title: "Design",
      open: false,
      sub: ["Designs", "UX", "UI"],
    },
    {
      title: "Office",
      open: false,
      sub: [],
    },
    {
      title: "Legal",
      open: false,
      sub: [],
    },
  ]);

  const [team, setTeam] = useState([
    {
      Icon: PiPenNibLight,
      title: "Design team",
    },
    {
      Icon: TbSpeakerphone,
      title: "Marketing team",
    },
    {
      Icon: RiExpandLeftRightLine,
      title: "Development team",
    },
  ]);

  function createTeam() {
    setTeam((prev) => [
      ...prev,
      {
        Icon: MdOutlineDashboardCustomize,
        title: `Custom team ${team.length + 1}`,
      },
    ]);
  }

  function toggleFolder(itemIndex: number) {
    setFolders((prev) => {
      const newFolder = prev.map((item, index) =>
        index === itemIndex
          ? { open: !item.open, sub: item.sub, title: item.title }
          : item,
      );
      return newFolder;
    });
  }

  return (
    <aside className="w-1/5 min-w-80 space-y-6 p-4 border rounded-lg shadow-md overflow-y-auto">
      <div className="flex gap-3 justify-center">
        <div>
          <Image
            src={logo}
            alt="logo"
            className="rounded-md object-cover w-14 h-11"
            width={50}
            height={50}
          />
        </div>
        <div className="w-full flex justify-between">
          <div className="flex flex-col">
            <span className="text-green-500">INC</span>
            <span className="font-medium">InnovateHub</span>
          </div>
          <div className="flex items-center">
            <Image
              src={profilePic}
              alt="profile"
              className="rounded-full object-cover w-8 h-8"
              width={50}
              height={50}
            />
          </div>
        </div>
      </div>
      <div className="divide-y">
        {team.map(({ Icon, title }, index) => (
          <Team Icon={Icon} title={title} key={index} index={index + 1} />
        ))}
        <div
          onClick={createTeam}
          className="flex py-2 gap-2 text-green-500 hover:cursor-pointer hover:bg-gray-100"
        >
          <div className="flex w-8 justify-center items-center">
            <BiMessageSquareAdd />
          </div>
          <div className="flex w-full justify-between">
            <div>Create a team</div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex justify-between">
          <span className="text-green-500">Folders</span>
          <span>
            <IoIosAdd />
          </span>
        </div>

        <div>
          {folders.map(({ open, title, sub }, index) => (
            <Folders
              key={index}
              title={title}
              open={open}
              sub={sub}
              toggleFolder={() => toggleFolder(index)}
            />
          ))}
        </div>
      </div>
    </aside>
  );
}
