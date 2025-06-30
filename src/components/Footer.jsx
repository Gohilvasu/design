import React from "react";

const Footer = () => {
  return (
    <div class="max-lg:sticky max-lg:bottom-0 max-lg:left-4 xl:static xl:bottom-auto xl:left-auto xl:pe-36 lg:flex lg:justify-end z-2 max-lg:ps-2 max-lg:pb-2 ">
      <button class="flex items-center justify-center bg-[#FEB8EE] p-2 max-lg:rounded-full xl:rounded-none xl:justify-evenly xl:w-xs text-[14px] font-mono font-normal leading-5.5 shadow-md">
        <img src="/croco.png" alt="Help Icon" class="xl:mr-2" />
        <span class="hidden lg:inline">NEED HELP? CHAT TO AN EXPERT</span>
      </button>
    </div>
  );
};

export default Footer;
