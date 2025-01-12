import { cn } from "@/lib/utils";
import React from "react";

const TabBarItem: React.FC<{ title: string; isActive?: boolean }> = ({
  title,
  isActive,
}) => {
  return (
    <div className={cn("p-2 rounded-sm", isActive && "bg-gray-50")}>
      <span>{title}</span>
    </div>
  );
};

const TabBar: React.FC = () => {
  return (
    <div className="flex flex-row justify-around">
      <TabBarItem title="전체" isActive />
      <TabBarItem title="스시·해산물" />
      <TabBarItem title="장어" />
      <TabBarItem title="덴푸라" />
      <TabBarItem title="돈카츠·쿠시카츠" />
    </div>
  );
};

export default TabBar;
