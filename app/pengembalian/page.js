import { Button } from "@headlessui/react";
import Link from "next/link";
import React from "react";

import { TbClipboardText } from "react-icons/tb";
import { GrFormView } from "react-icons/gr";

const PengembalianPage = () => {
  return (
    <div className="p-4 md:p-8">
      <div className="text-xl font-bold text-black">
        <h1>Form Pengembalian</h1>
      </div>
      <div className="mt-10">
        <ul className="flex flex-wrap gap-4 md:gap-6 lg:gap-10">
          <li>
            <Link href="/pengembalian/form">
              <Button className="flex items-center gap-4 bg-teal-500 text-white hover:bg-teal-700 px-10 py-5 rounded shadow-xl">
                <TbClipboardText className="size-12" /> Form
              </Button>
            </Link>
          </li>
          <li>
            <Link href="/pengembalian/view">
              <Button className="flex items-center gap-4 bg-teal-500 text-white hover:bg-teal-700 px-10 py-5 rounded shadow-xl">
                <GrFormView className="size-12" /> View Form
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PengembalianPage;
