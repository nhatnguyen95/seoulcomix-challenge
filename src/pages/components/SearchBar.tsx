import React, { useEffect, useState } from "react";

import { useDebounce } from "use-debounce";
import { cn } from "@/lib/utils";
import { Input } from "../../components/ui/input";
import Image from "next/image";
import Magnifier from "@/assets/icons/magnifier.svg";

export type SearchInputProps = {
  onSearch: (text: string) => void;
  placeholder?: string;
  className?: string;
};

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder,
  onSearch,
  className,
}) => {
  const [searchText, setSearchText] = useState("");
  const [debouncedSearchText] = useDebounce(searchText, 500);

  useEffect(() => {
    onSearch(debouncedSearchText);
  }, [debouncedSearchText, onSearch]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <div className={cn("flex items-center shadow-lg", className)}>
      <div className="relative w-full">
        <Input
          type="text"
          value={searchText}
          onChange={handleSearchChange}
          placeholder={placeholder}
          className="w-full h-[40px] rounded-lg px-4 py-2 pl-10 "
        />
        <span className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400">
          <Image src={Magnifier} alt="Icon" width={24} height={24} />
        </span>
      </div>
    </div>
  );
};

export default SearchInput;
