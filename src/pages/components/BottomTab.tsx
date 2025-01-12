import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import Calendar from "@/assets/icons/calendar.svg";
import Home from "@/assets/icons/home-line.svg";
import Menu from "@/assets/icons/menu.svg";
import Message from "@/assets/icons/message-text-square.svg";
import Search from "@/assets/icons/search-md.svg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const BottomTabItem: React.FC<{
  title: string;
  isActive?: boolean;
  img: string | StaticImport;
}> = ({ title, isActive, img }) => {
  return (
    <div
      className={cn(
        "rounded-sm flex flex-col justify-center items-center",
        isActive && "bg-gray-50"
      )}
    >
      <Image src={img} alt="Icon" width={18} height={18} />
      <span className={cn("text-sm ", isActive && "text-orange-600")}>
        {title}
      </span>
    </div>
  );
};

const BottomTab: React.FC = () => {
  return (
    <div className="flex flex-row justify-between">
      <BottomTabItem img={Home} title="홈" />
      <BottomTabItem img={Search} title="검색" isActive />
      <BottomTabItem img={Message} title="피드" />
      <BottomTabItem img={Calendar} title="내 예약" />
      <BottomTabItem img={Menu} title="메뉴" />
    </div>
  );
};

export default BottomTab;
