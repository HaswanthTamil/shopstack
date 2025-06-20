"use client"

import Image from "next/image"
import Location from "./Location"
import SearchBar from "./SearchBar"
import InitLocalStorage from "@/lib/InitLocalStorage"
import HeaderAccounts from "./HeaderAccounts"
import { useState, useEffect } from "react"

interface HeaderProps {
  onSearch: (value: string) => void
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [isSignedIn, setIsSignedIn] = useState(false)
  useEffect(() => {
    const storedValue = localStorage.getItem("isSignedIn")
    const parsed = storedValue === "true"
    setIsSignedIn(parsed)
  }, [])
  return (
    <div className="flex flex-col items-center justify-between mb-0 sm:mb-4">
      <div className="header bg-gray-900 px-0 py-1 m-0 flex flex-row w-[100vw] text-white">
        <div className="header-left flex px-2 py-1 w-2/3 items-center gap-1">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={50}
            height={50}
            className="block sm:hidden invert"
          />
          <Image
            src={"/shopstack.png"}
            alt="logo"
            width={100}
            height={70}
            className="hidden sm:block invert"
          />
          <Location />

          <div className="header-search hidden sm:block text-white flex-grow">
            <SearchBar
              classAtr="search w-full border-2 border-red-400 rounded-md mt-1"
              onSearch={onSearch}
            />
          </div>
        </div>
        <div className="header-right flex px-3 py-1 w-1/3 text-white items-center justify-end gap-1">
          <HeaderAccounts isSignedIn={isSignedIn} />
        </div>
      </div>

      <SearchBar
        classAtr="search block sm:hidden w-5/6 border-2 border-red-400 rounded-md mt-1"
        onSearch={onSearch}
      />
      <InitLocalStorage />
    </div>
  )
}

export default Header
