"use client";
import React from "react";
import {Heading, Flex, Text, Button} from "@radix-ui/themes";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {MdOutlineKeyboardArrowDown} from "react-icons/md";

const Header: React.FC<{title: string}>= ({title}) => {
  const user = {
    name: "May K",
    avatar: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
  };
  return (
    <Flex direction="row" justify="between" mb="5">
      <Heading mb="2" size="8">
        {title}
      </Heading>
      <div>
        <div>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger className="select-none outline-none">
              <Flex direction="row" align="center" className=" bg-slate-100 pr-4 rounded-3xl cursor-pointer ">
                <img className="w-12 h-12 rounded-3xl object-cover" src={user?.avatar} />
                <Text size="3" ml="3" weight="bold">
                  {user?.name}
                </Text>
                <MdOutlineKeyboardArrowDown className="ml-2" size="24" />
              </Flex>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="bg-white mt-2 rounded-md shadow-lg w-52 mr-3">
              <DropdownMenu.Item className="px-4 py-3 hover:bg-slate-100 leading-none text-violet-11 text-[13px] select-none outline-none">Profile</DropdownMenu.Item>
              <DropdownMenu.Item className="px-4 py-3 hover:bg-slate-100 leading-none text-violet-11 text-[13px] select-none outline-none">Settings</DropdownMenu.Item>
              <DropdownMenu.Item className="px-4 py-3 hover:bg-slate-100 leading-none text-violet-11 text-[13px] select-none outline-none">Logout</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
      </div>
    </Flex>
  );
};

export default Header;
