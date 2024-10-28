"use client";

import { supabase } from "@/db/supabase";
import { useForm } from "react-hook-form";
import React, { useState } from "react";

const addItemsPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const file = data.foto?.[0];

      const fileName = `${Date.now()}_${file.name}`;

      const { data: fileData, error: uploadError } = await supabase.storage
        .from("foto_barang")
        .upload(fileName, file);

      if (uploadError) {
        throw new Error(uploadError.message);
      }

      const { publicURL } = supabase.storage
        .from("foto_barang")
        .getPublicUrl(fileName);

      const item = {
        nama: data.nama,
        divisi: data.divisi,
        contact: data.contact,
        kategori_barang: data.kategori_barang,
        barang: data.barang,
        status: data.status,
        tgl_beli: data.tgl_beli,
        jumlah_barang: data.jumlah_barang,
        vendor: data.vendor,
        catatan: data.catatan,
        foto_url: publicURL,
      };

      const { error } = await supabase.from("storage").insert(item);

      if (error) {
        throw new Error(error.message);
      }

      setMessage("Data berhasil disimpan!");
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 md:p-8">
      <div className="text-xl font-bold text-black">
        <h1>Add Items</h1>
      </div>
      <div className="mt-10">
        <div className="bg-gray-300 rounded p-4">
          <form onSubmit={handleSubmit(onSubmit)}>
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
                    className="block border-0 rounded bg-white px-8 py-1.5 pl-2 text-black placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    placeholder="Masukkan Nama PIC"
                    {...register("nama")}
                  />
                  {errors.nama && (
                    <span className="text-red-500 text-sm">
                      Kolom harus diisi
                    </span>
                  )}
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
                    className="block border-0 rounded bg-white px-8 py-1.5 pl-2 text-black placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    placeholder="Masukkan Divisi"
                    {...register("divisi")}
                  />
                  {errors.divisi && (
                    <span className="text-red-500 text-sm">
                      Kolom harus diisi
                    </span>
                  )}
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
                    className="block border-0 rounded bg-white px-8 py-1.5 pl-2 text-black placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    placeholder="Masukkan Nomor Telepon"
                    {...register("contact")}
                  />
                  {errors.contact && (
                    <span className="text-red-500 text-sm">
                      Kolom harus diisi
                    </span>
                  )}
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
                      className="block border-0 rounded bg-white px-8 py-1.5 pl-2 text-black placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      placeholder="Masukkan Kategori Barang"
                      {...register("kategori_barang")}
                    />
                    {errors.kategori_barang && (
                      <span className="text-red-500 text-sm">
                        Kolom harus diisi
                      </span>
                    )}
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
                      className="block border-0 rounded bg-white px-8 py-1.5 pl-2 text-black placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      placeholder="Masukkan Nama Barang"
                      {...register("barang")}
                    />
                    {errors.barang && (
                      <span className="text-red-500 text-sm">
                        Kolom harus diisi
                      </span>
                    )}
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
                      className="block border-0 rounded bg-white px-8 py-1.5 pl-2 text-black placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      placeholder="Masukkan Status Barang"
                      {...register("status")}
                    />
                    {errors.status && (
                      <span className="text-red-500 text-sm">
                        Kolom harus diisi
                      </span>
                    )}
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
                      className="block border-0 rounded bg-white px-8 py-1.5 pl-2 text-black placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      {...register("tgl_beli")}
                    />
                    {errors.date_barang && (
                      <span className="text-red-500 text-sm">
                        Kolom harus diisi
                      </span>
                    )}
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
                        {...register("jumlah_barang")}
                      />
                      {errors.jumlah_barang && (
                        <span className="text-red-500 text-sm">
                          Kolom harus diisi
                        </span>
                      )}
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
                        {...register("vendor")}
                      />
                      {errors.vendor && (
                        <span className="text-red-500 text-sm">
                          Kolom harus diisi
                        </span>
                      )}
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
                        name="catatan"
                        className="block rounded bg-white px-12 py-2 pl-2 text-black placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        placeholder="Masukkan Catatan Barang"
                        {...register("catatan")}
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
                    <div className="mt-2">
                      <input
                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none bg-white border-gray-600 placeholder-gray-400"
                        type="file"
                        accept="image/*"
                        {...register("foto", { required: true })}
                      />
                      {errors.foto && (
                        <span className="text-red-500 text-sm">
                          {errors.foto.message}
                        </span>
                      )}
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
                    disabled={loading}
                  >
                    {loading ? "Mengirim..." : "Submit"}
                  </button>
                </div>
                {message && (
                  <div className="mt-4 ms-3 text-sm text-teal-600">
                    {message}
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default addItemsPage;
