"use client";
import React, { useEffect, useState } from "react";
import { supabase } from "@/db/supabase";
import { FaEye } from "react-icons/fa";
import { useRouter } from "next/navigation";

const StoragePage = () => {
  const [storageData, setStorageData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  const fetchData = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("storage").select("*");

    if (error) {
      console.error("Error fetching data:", error);
      setError("Error fetching data. Please try again later.");
    } else {
      setStorageData(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDetail = (id) => {
    router.push(`/storage/details/${id}`);
  };

  return (
    <div className="p-4 md:p-8">
      <div className="text-xl font-bold text-black">
        <h1>Storage</h1>
      </div>

      {loading ? (
        <p className="mt-3 text-teal-500">Loading data...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="mt-10">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border">
              <thead className="bg-teal-500">
                <tr>
                  <th className="py-2 px-4 border">Nama PIC</th>
                  <th className="py-2 px-4 border">Divisi</th>
                  <th className="py-2 px-4 border">Kategori</th>
                  <th className="py-2 px-4 border">Barang</th>
                  <th className="py-2 px-4 border">Status</th>
                  <th className="py-2 px-4 border">Tanggal Beli</th>
                  <th className="py-2 px-4 border">Detail</th>
                </tr>
              </thead>
              <tbody className="text-black">
                {storageData.length > 0 ? (
                  storageData.map((item) => (
                    <tr key={item.id}>
                      <td className="py-2 px-4 border">{item.nama}</td>
                      <td className="py-2 px-4 border">{item.divisi}</td>
                      <td className="py-2 px-4 border">
                        {item.kategori_barang}
                      </td>
                      <td className="py-2 px-4 border">{item.barang}</td>
                      <td className="py-2 px-4 border">{item.status}</td>
                      <td className="py-2 px-4 border">{item.tgl_beli}</td>
                      <td className="py-2 px-4 border">
                        <button
                          className="bg-teal-500 text-white hover:bg-teal-600 flex text-center rounded items-center justify-center mx-auto"
                          onClick={() => handleDetail(item.id)}
                        >
                          <FaEye />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="py-4 text-center text-black">
                      Data kosong
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default StoragePage;
