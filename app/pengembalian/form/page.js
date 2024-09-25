"use client";

import React, { useState } from "react";
import { supabase } from "@/db/supabase";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const formPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const item = {
        nama: data.nama,
        barang: data.barang,
        kategori_barang: data.kategori_barang,
        tgl_pinjam: data.tgl_pinjam,
        tgl_kembali: data.tgl_kembali,
      };

      const { error } = await supabase.from("return").insert(item);

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

  const handleNavigation = () => {
    router.push("/pengembalian/view");
  };

  return (
    <div className="p-4 md:p-8">
      <div className="text-xl font-bold text-black">
        <h1>Form Pengembalian</h1>
      </div>
      <div className="mt-4 text-base text-black">
        <p>Form pengembalian ini diisi hanya untuk barang sewa</p>
      </div>
      <div className="mt-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-wrap gap-4">
            <div className="mt-2">
              <label className="block text-base font-medium leading-6 text-gray-900">
                Nama PIC
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  className="block border border-gray-600 rounded bg-white px-8 py-1.5 pl-2 text-black sm:text-sm sm:leading-6"
                  {...register("nama")}
                />
                {errors.nama && (
                  <span className="text-red-500 text-sm">
                    Kolom nama harus diisi
                  </span>
                )}
              </div>
            </div>
            <div className="mt-2">
              <label className="block text-base font-medium leading-6 text-gray-900">
                Nama Barang
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  className="block border border-gray-600 rounded bg-white px-8 py-1.5 pl-2 text-black sm:text-sm sm:leading-6"
                  {...register("barang")}
                />
                {errors.barang && (
                  <span className="text-red-500 text-sm">
                    Kolom barang harus diisi
                  </span>
                )}
              </div>
            </div>
            <div className="mt-2">
              <label className="block text-base font-medium leading-6 text-gray-900">
                Kategori Barang
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  className="block border border-gray-600 rounded bg-white px-8 py-1.5 pl-2 text-black sm:text-sm sm:leading-6"
                  {...register("kategori_barang")}
                />
                {errors.barang && (
                  <span className="text-red-500 text-sm">
                    Kolom kategori barang harus diisi
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 mt-4">
            <div className="mt-2">
              <label className="block text-base font-medium leading-6 text-gray-900">
                Tanggal Pinjam
              </label>
              <div className="mt-2">
                <input
                  type="date"
                  className="block border border-gray-600 rounded bg-white px-8 py-1.5 pl-2 text-black sm:text-sm sm:leading-6"
                  {...register("tgl_pinjam")}
                />
                {errors.tgl_pinjam && (
                  <span className="text-red-500 text-sm">
                    Tanggal pinjam harus diisi
                  </span>
                )}
              </div>
            </div>
            <div className="mt-2">
              <label className="block text-base font-medium leading-6 text-gray-900">
                Tanggal Kembali
              </label>
              <div className="mt-2">
                <input
                  type="date"
                  className="block border border-gray-600 rounded bg-white px-8 py-1.5 pl-2 text-black sm:text-sm sm:leading-6"
                  {...register("tgl_kembali")}
                />
                {errors.tgl_kembali && (
                  <span className="text-red-500 text-sm">
                    Tanggal kembali harus diisi
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-4">
            <div>
              <button
                type="submit"
                className="rounded bg-teal-500 hover:bg-teal-700 px-7 py-2 text-sm font-semibold"
                disabled={loading}
              >
                {loading ? "Menyimpan..." : "Submit"}
              </button>
            </div>
            <div>
              <button
                type="button"
                onClick={handleNavigation}
                className="rounded bg-teal-500 hover:bg-teal-700 px-7 py-2 text-sm font-semibold"
              >
                View Form
              </button>
            </div>
          </div>
          {message && (
            <div className="mt-4 text-sm text-teal-600">{message}</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default formPage;
