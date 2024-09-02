import React from "react";
import { Disclosure, DisclosureButton } from "@headlessui/react";
import { GiHamburgerMenu } from "react-icons/gi";

// Icons Import
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBoxArchive } from "react-icons/fa6";
import { LuScanLine } from "react-icons/lu";
import { TbClipboardText } from "react-icons/tb";
import { MdLogin } from "react-icons/md";

function Sidebar() {
  return (
    <div>
      <Disclosure as="nav">
        <DisclosureButton className="fixed top-4 right-4 inline-flex items-center peer justify-center border-solid border-teal-500 border-2 bg-white rounded-md p-2 text-teal-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:rind-white group hover:bg-teal-500">
          <GiHamburgerMenu
            className="block md:hidden h-6 w-6"
            aria-hidden="true"
          />
        </DisclosureButton>
        <div className="p-6 w-1/2 h-screen bg-teal-500 z-20 fixed top-0 -left-96 lg:w-60 lg:left-0 peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
          <div className="flex flex-col justify-start items-center">
            <h1 className="text-xl text-center cursor-pointer font-bold text-white pb-4 w-full">
              Eventory
            </h1>
            <div className="my-4 pb-4">
              <div className="flex mb-2 justify-start p-2 border-b border-white">
                <h3 className="text-base text-white font-semibold">Pages</h3>
              </div>
              {/* DASHBOARD */}
              <a href="/dashboard">
                <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-emerald-800 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <AiOutlineDashboard className="text-2xl text-white group-hover:text-white" />
                  <h3 className="text-base text-white group-hover:text-white font-normal">
                    Dashboard
                  </h3>
                </div>
              </a>
              {/* STORAGE */}
              <a href="/storage">
                <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-emerald-800 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <FaBoxArchive className="text-2xl text-white group-hover:text-white" />
                  <h3 className="text-base text-white group-hover:text-white font-normal">
                    Storage
                  </h3>
                </div>
              </a>
              {/* SCAN ITEM */}
              <a href="/scan">
                <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-emerald-800 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <LuScanLine className="text-2xl text-white group-hover:text-white" />
                  <h3 className="text-base text-white group-hover:text-white font-normal">
                    Scan Item
                  </h3>
                </div>
              </a>
              {/* FORM KEMBALI */}
              <a href="/pengembalian">
                <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-emerald-800 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <TbClipboardText className="text-2xl text-white group-hover:text-white" />
                  <h3 className="text-base text-white group-hover:text-white font-normal">
                    Form Pengembalian
                  </h3>
                </div>
              </a>
              <div className="flex mb-2 mt-6 justify-start p-2 border-b border-white">
                <h3 className="text-base text-white font-semibold">Privacy</h3>
              </div>
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-emerald-800 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdLogin className="text-2xl text-white group-hover:text-white" />
                <h3 className="text-base text-white font-normal">Login</h3>
              </div>
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
  );
}

export default Sidebar;
