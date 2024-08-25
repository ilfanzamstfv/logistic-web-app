"use client";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useState } from "react";

const StoragePage = () => {
  // Placeholder state for the storage data
  const [data, setData] = useState([]);

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 p-6 bg-white">

        {/* Page Title */}
        <h1 className="text-3xl font-bold mb-6">Storage</h1>

        {/* Table or Message if no data */}
        {data.length === 0 ? (
          <p className="mb-4">Tidak ada data storage yang tersedia</p>
        ) : (
          <table className="min-w-full bg-white border">
            <thead>
              <tr>
                <th className="py-2 border">Nama PIC</th>
                <th className="py-2 border">Divisi</th>
                <th className="py-2 border">Contact</th>
                <th className="py-2 border">Kategori</th>
                <th className="py-2 border">Barang</th>
                <th className="py-2 border">Keterangan</th>
                <th className="py-2 border">Status</th>
                <th className="py-2 border">Vendor</th>
                <th className="py-2 border">Pengembalian</th>
                <th className="py-2 border">Foto Barang</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="py-2 border">{item.namaPic}</td>
                  <td className="py-2 border">{item.divisi}</td>
                  <td className="py-2 border">{item.contact}</td>
                  <td className="py-2 border">{item.kategori}</td>
                  <td className="py-2 border">{item.barang}</td>
                  <td className="py-2 border">{item.keterangan}</td>
                  <td className="py-2 border">{item.status}</td>
                  <td className="py-2 border">{item.vendor}</td>
                  <td className="py-2 border">{item.pengembalian}</td>
                  <td className="py-2 border">{item.fotoBarang}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* Save PDF Button */}
        <button className="mt-6 px-4 py-2 bg-teal-500 text-white rounded hover:">
          Save to
        </button>
      </div>
    </div>
  );
};

export default StoragePage;