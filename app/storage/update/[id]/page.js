"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/db/supabase";
import { useRouter, useParams } from "next/navigation";

const updatePage = () => {
  const { id } = useParams();
  const [item, setItem] = useState({
    nama: "",
    divisi: "",
    contact: "",
    kategori_barang: "",
    barang: "",
    status: "",
    vendor: "",
    tgl_beli: "",
    jumlah_barang: "",
    catatan: "",
  });
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const fetchItemDetail = async () => {
    const { data, error } = await supabase
      .from("storage")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Error fetching data:", error);
    } else {
      setItem(data);
    }
  };

  useEffect(() => {
    fetchItemDetail();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("storage").update(item).eq("id", id);

    setLoading(false);

    if (error) {
      console.error("Error updating data: ", error);
      alert("Failed to update item.");
    } else {
      alert("Item updated successfully!");
      router.push("/storage");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-black text-2xl font-bold mb-5">Update Data</h1>
      <form onSubmit={handleUpdate} className="space-y-4">
        <div className="bg-gray-300 rounded">
          <div className="flex flex-wrap gap-4 ms-4">
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Barang
              </label>
              <input
                type="text"
                name="barang"
                value={item.barang}
                onChange={handleChange}
                className="block rounded bg-white px-8 py-2 pl-2 text-black placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Nama PIC
              </label>
              <input
                type="text"
                name="nama"
                value={item.nama}
                onChange={handleChange}
                className="block rounded bg-white px-8 py-2 pl-2 text-black placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Divisi
              </label>
              <input
                type="text"
                name="divisi"
                value={item.divisi}
                onChange={handleChange}
                className="block rounded bg-white px-8 py-2 pl-2 text-black placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Nomor Telepon
              </label>
              <input
                type="text"
                name="contact"
                value={item.contact}
                onChange={handleChange}
                className="block rounded bg-white px-8 py-2 pl-2 text-black placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-4 ms-4">
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Kategori Barang
              </label>
              <input
                type="text"
                name="kat_barang"
                value={item.kategori_barang}
                onChange={handleChange}
                className="block rounded bg-white px-8 py-2 pl-2 text-black placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Status
              </label>
              <input
                type="text"
                name="status"
                value={item.status}
                onChange={handleChange}
                className="block rounded bg-white px-8 py-2 pl-2 text-black placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Vendor
              </label>
              <input
                type="text"
                name="vendor"
                value={item.vendor}
                onChange={handleChange}
                className="block rounded bg-white px-8 py-2 pl-2 text-black placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-4 ms-4">
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Tanggal Beli
              </label>
              <input
                type="date"
                name="tgl_beli"
                value={item.tgl_beli}
                onChange={handleChange}
                className="block rounded bg-white px-8 py-2 pl-2 text-black placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Jumlah Barang
              </label>
              <input
                type="number"
                name="jumlah_barang"
                value={item.jumlah_barang}
                onChange={handleChange}
                className="block rounded bg-white px-8 py-2 pl-2 text-black placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Catatan Barang
              </label>
              <textarea
                type="text"
                name="catatan"
                value={item.catatan}
                onChange={handleChange}
                className="block rounded bg-white px-8 py-2 pl-2 text-black placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-4 mt-4 ms-4">
            <button
              type="button"
              onClick={() => router.push(`/storage/details/${id}`)}
              className="rounded bg-teal-500 hover:bg-teal-700 px-7 py-2 text-sm font-semibold"
            >
              Back
            </button>
            <button
              type="submit"
              className="rounded bg-blue-500 hover:bg-blue-700 px-7 py-2 text-sm font-semibold"
            >
              {loading ? "Updating..." : "Update"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default updatePage;
