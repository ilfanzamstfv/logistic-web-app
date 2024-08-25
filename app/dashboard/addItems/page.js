"use client";

import { Button } from "@headlessui/react";
import Link from "next/link";

const addItemsPage = () => {
  return (
    <div className="p-4 md:p-8">
      <div className="text-xl font-bold text-black">
        <h1>Add Items</h1>
      </div>
      <div className="mt-10">
        <div>
          <ul className="flex flex-wrap">
            <li>
              <Link href="/dashboard/addItems">
                <Button className="flex items-center bg-teal-500 text-white text-base hover:bg-teal-700 px-1 py-2 rounded w-full sm:w-auto">
                  <div>Barang Beli</div>
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/addItems">
                <Button className="flex items-center bg-gray-500 text-white text-base hover:bg-teal-500 px-1 py-2 rounded w-full sm:w-auto">
                  <div>Barang Sewa</div>
                </Button>
              </Link>
            </li>
          </ul>
        </div>
        <div className="bg-gray-300 rounded p-4">
          <div className="text-lg font-bold text-black p-2 ms-2">
            <h1>Data Pengaju</h1>
            <hr className="border-t-2 border-gray-700 w-full"></hr>
          </div>
          <form className="flex flex-wrap gap-4">
            <div className="ms-4 mt-2">
              <label
                for="#namaPIC"
                className="block text-base font-medium leading-6 text-gray-900"
              >
                Nama PIC
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="#namaPIC"
                  id="#namaPIC"
                  className="block border-0 rounded bg-white px-8 py-1.5 pl-2 text-black placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  placeholder="Masukkan Nama PIC"
                />
              </div>
            </div>
            <div className="ms-4 mt-2">
              <label
                for="#divisi"
                className="block text-base font-medium leading-6 text-gray-900"
              >
                Divisi
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="#divisi"
                  id="#divisi"
                  className="block border-0 rounded bg-white px-8 py-1.5 pl-2 text-black placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  placeholder="Masukkan Divisi"
                />
              </div>
            </div>
            <div className="ms-4 mt-2">
              <label
                for="#notelepon"
                className="block text-base font-medium leading-6 text-gray-900"
              >
                Nomor Telepon/ WhatsApp
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="#notelepon"
                  id="#notelepon"
                  className="block border-0 rounded bg-white px-8 py-1.5 pl-2 text-black placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  placeholder="Masukkan Nomor Telepon"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default addItemsPage;
