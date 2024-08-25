"use client";

import { Button } from "@headlessui/react";
import React from "react";
import Link from "next/link";

import { MdAddBox } from "react-icons/md";
import { FaBoxArchive } from "react-icons/fa6";
import { TbClipboardText } from "react-icons/tb";

const Dashboard = () => {
  return (
    <div className="p-4 md:p-8"> 
      <div className="text-xl font-bold text-black">
        <h1>Dashboard</h1>
      </div>
      <div className="mt-10">
        <div>
          <ul className="flex flex-wrap gap-4 md:gap-6 lg:gap-10">
            <li>
              <Link href="/dashboard/addItems">
                <Button className="flex items-center gap-4 bg-teal-500 text-white hover:bg-teal-700 px-10 py-5 rounded shadow-xl">
                  <MdAddBox className="size-12" /> Add Item
                </Button>
              </Link>
            </li>
            <li>
              <Link href="#">
                <Button className="flex items-center gap-4 bg-teal-500 text-white hover:bg-teal-700 px-10 py-5 rounded shadow-xl">
                  <FaBoxArchive className="size-12" /> Storage
                </Button>
              </Link>
            </li>
            <li>
              <Link href="#">
                <Button className="flex items-center gap-4 bg-teal-500 text-white hover:bg-teal-700 px-10 py-5 rounded shadow-xl">
                  <TbClipboardText className="size-12" /> Form Pengembalian
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
