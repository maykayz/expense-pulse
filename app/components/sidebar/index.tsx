"use client";

import React from "react";
import {Flex} from "@radix-ui/themes";
import Link from "next/link";
import {IconButton} from "@radix-ui/themes";
import {TbMoneybag} from "react-icons/tb";
import {RiBubbleChartLine, RiLogoutCircleRLine, RiUserLine} from "react-icons/ri";
import {AiOutlineTransaction} from "react-icons/ai";
import {IoWalletOutline} from "react-icons/io5";
import {usePathname} from "next/navigation";
import classNames from "classnames";

const Sidebar = ({width}: {width: number}) => {
  // const currentRoute =
  const pathname = usePathname();

  const navLinkClass = (isActive: boolean) => {
    return classNames({
      "text-slate-300": !isActive,
      "text-white": isActive,
      "cursor-pointer": true,
    });
  };

  const menu = [
    {
      name: "Overview",
      icon: (isActive: boolean) => <RiBubbleChartLine size="24" className={navLinkClass(isActive)} />,
      path: "/overview",
    },
    {
      name: "Expense",
      icon: (isActive: boolean) => <AiOutlineTransaction size="24" className={navLinkClass(isActive)} />,
      path: "/expense",
    },
    {
      name: "Wallet",
      icon: (isActive: boolean) => <IoWalletOutline size="24" className={navLinkClass(isActive)} />,
      path: "/wallet",
    },
    {
      name: "Profile",
      icon: (isActive: boolean) => <RiUserLine size="24" className={navLinkClass(isActive)} />,
      path: "/profile",
    },
  ];
  return (
    <div className="h-screen" style={{width: `${width}px`}}>
      <Flex direction="column" justify="between" align="center" py="5" className="flex-1 h-full">
        <Flex direction="column" align="center">
          <Link href="/overview">
            <IconButton className="cursor-pointer" radius="full" variant="soft" mb="9">
              <TbMoneybag size="70" className="text-white" />
            </IconButton>
          </Link>
          {menu.map((item) => (
            <Link href={item.path} key={item.path}>
              <IconButton className="cursor-pointer" radius="full" variant="soft" my="4">
                {item.icon(pathname === item.path)}
              </IconButton>
            </Link>
          ))}
        </Flex>
        <Link href="/overview">
          <IconButton className="cursor-pointer" radius="full" variant="soft" my="3">
            <RiLogoutCircleRLine size="24" className={`text-slate-300`} />
          </IconButton>
        </Link>
      </Flex>
    </div>
  );
};

export default Sidebar;
