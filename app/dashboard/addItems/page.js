"use client";

import { supabase } from "@/db/supabase";
import { data } from "autoprefixer";
import { useState } from "react";
import { useForm } from "react-hook-form";

const addItemsPage = () => {

  const {
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = async (data) => {
    const item = {
      nama_pic: data.nama_pic,
      divisi: data.divisi,
      contact: data.contact,
      kategori_barang: data.kategori_barang,
      barang: data.barang,
      status: data.status,
      date_barang: data.date_barang,
      jumlah_barang: data.jumlah_barang,
      vendor: data.vendor,
      catatan_barang: data.catatan_barang,
      foto: data.foto,
    };
  }

  return (
    <div className="p-4 md:p-8">
      <div className="text-xl font-bold text-black">
        <h1>Add Items</h1>
      </div>
      <div className="mt-10">
        <div className="bg-gray-300 rounded p-4">
          <form>
            <div className="text-lg font-bold text-black p-2 ms-2">
              <h1>Data Pengaju</h1>
              <hr className="border-t-2 border-gray-700 w-full"></hr>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="ms-4 mt-2">
                {/* NAMA PIC */}
                <label className="block text-base font-medium leading-6 text-gray-900">
                  Nama PIC
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="nama_pic"
                    className="block border-0 rounded bg-white px-8 py-1.5 pl-2 text-black placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    placeholder="Masukkan Nama PIC"
                  />
                </div>
              </div>
              <div className="ms-4 mt-2">
                {/* DIVISI */}
                <label className="block text-base font-medium leading-6 text-gray-900">
                  Divisi
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="divisi"
                    className="block border-0 rounded bg-white px-8 py-1.5 pl-2 text-black placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    placeholder="Masukkan Divisi"
                  />
                </div>
              </div>
              <div className="ms-4 mt-2">
                {/* NO WHATSAPP */}
                <label className="block text-base font-medium leading-6 text-gray-900">
                  Nomor Telepon/ WhatsApp
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="contact"
                    className="block border-0 rounded bg-white px-8 py-1.5 pl-2 text-black placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    placeholder="Masukkan Nomor Telepon"
                  />
                </div>
              </div>
            </div>
            <div className="mt-3">
              <div className="text-lg font-bold text-black p-2 ms-2">
                <h1>Data Barang</h1>
                <hr className="border-t-2 border-gray-700 w-full"></hr>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="ms-4 mt-2">
                  {/* KATEGORI BARANG */}
                  <label className="block text-base font-medium leading-6 text-gray-900">
                    Kategori Barang
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="kategori_barang"
                      className="block border-0 rounded bg-white px-8 py-1.5 pl-2 text-black placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      placeholder="Masukkan Kategori Barang"
                    />
                  </div>
                </div>
                <div className="ms-4 mt-2">
                  {/* NAMA BARANG */}
                  <label className="block text-base font-medium leading-6 text-gray-900">
                    Nama Barang
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="barang"
                      className="block border-0 rounded bg-white px-8 py-1.5 pl-2 text-black placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      placeholder="Masukkan Nama Barang"
                    />
                  </div>
                </div>
                <div className="ms-4 mt-2">
                  {/* STATUS BARANG */}
                  <label className="block text-base font-medium leading-6 text-gray-900">
                    Status Barang
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="status"
                      className="block border-0 rounded bg-white px-8 py-1.5 pl-2 text-black placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      placeholder="Masukkan Status Barang"
                    />
                  </div>
                </div>
                <div className="ms-4 mt-2">
                  {/* TANGGAL PEMBELIAN */}
                  <label className="block text-base font-medium leading-6 text-gray-900">
                    Tanggal Pembelian Barang
                  </label>
                  <div className="mt-2">
                    <input
                      type="date"
                      name="date_barang"
                      className="block border-0 rounded bg-white px-8 py-1.5 pl-2 text-black placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <div className="flex flex-wrap gap-4">
                  <div className="ms-4 mt-2">
                    {/* JUMLAH BARANG */}
                    <label className="block text-base font-medium leading-6 text-gray-900">
                      Jumlah Barang
                    </label>
                    <div className="mt-2">
                      <input
                        type="number"
                        name="jumlah_barang"
                        className="block rounded bg-white px-8 py-2 pl-2 text-black placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        placeholder="Masukkan Jumlah Barang"
                      />
                    </div>
                  </div>
                  <div className="ms-4 mt-2">
                    {/* NAMA VENDOR */}
                    <label className="block text-base font-medium leading-6 text-gray-900">
                      Nama Vendor
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="vendor"
                        className="block rounded bg-white px-8 py-2 pl-2 text-black placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        placeholder="Masukkan Nama Vendor"
                      />
                    </div>
                  </div>
                  <div className="ms-4 mt-2">
                    {/* CATATAN BARANG */}
                    <label className="block text-base font-medium leading-6 text-gray-900">
                      Catatan Barang
                    </label>
                    <div className="mt-2">
                      <textarea
                        type="text"
                        name="catatan_barang"
                        className="block rounded bg-white px-12 py-2 pl-2 text-black placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        placeholder="Masukkan Catatan Barang"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <div className="flex flex-wrap gap-4">
                  <div className="ms-4">
                    {/* FOTO BARANG */}
                    <label className="block text-base font-medium leading-6 text-gray-900">
                      Foto Bukti Barang
                    </label>
                    <div className="mt-2 rounded bg-white px-16 py-3">
                      <div className="text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-300"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <div>
                          <label className="relative cursor-pointer rounded bg-white font-semibold text-teal-700 hover:text-teal-500">
                            <span>Upload a file</span>
                            <input
                              name="foto"
                              type="file"
                              className="sr-only"
                            />
                          </label>
                          <p className="pl-1 text-gray-500 text-xs">
                            or drag and drop
                          </p>
                        </div>
                        <p className="text-xs leading-5 text-gray-500">
                          PNG, JPG up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <div className="flex flex-wrap ms-3">
                  {/* BUTTON SUBMIT */}
                  <button
                    type="submit"
                    className="rounded bg-teal-500 hover:bg-teal-700 px-7 py-2 text-sm font-semibold"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default addItemsPage;
