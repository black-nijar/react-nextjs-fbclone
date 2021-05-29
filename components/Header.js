import React from "react";
import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <div>
      <h1>Header</h1>
      <div className="flex items-center">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
          width={50}
          height={50}
          layout="fixed"
        />
      </div>
      <div className="flex">
        <SearchIcon className="h-6" />
        <input placeholder="Search Facebook" type="text" />
      </div>
    </div>
  );
};

export default Header;
