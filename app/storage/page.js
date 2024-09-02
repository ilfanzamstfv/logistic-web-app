"use client";
import { useState } from "react";

const testPage = () => {
  const [data, setData] = useState([]);

  return (
    <div className="p-4 md:p-8">
      <div className="text-xl font-bold text-black">
        <h1>Storage</h1>
      </div>
      <div className="mt-10">
        <div className="p-4">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="py-2 border bg-teal-500">Nama PIC</th>
                <th className="py-2 border bg-teal-500">Divisi</th>
                <th className="py-2 border bg-teal-500">Contact</th>
                <th className="py-2 border bg-teal-500">Kategori</th>
                <th className="py-2 border bg-teal-500">Barang</th>
                <th className="py-2 border bg-teal-500">Keterangan</th>
                <th className="py-2 border bg-teal-500">Status</th>
                <th className="py-2 border bg-teal-500">Vendor</th>
                <th className="py-2 border bg-teal-500">Pengembalian</th>
                <th className="py-2 border bg-teal-500">Foto Barang</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="py-2 border">{}</td>
                  <td className="py-2 border">{}</td>
                  <td className="py-2 border">{}</td>
                  <td className="py-2 border">{}</td>
                  <td className="py-2 border">{}</td>
                  <td className="py-2 border">{}</td>
                  <td className="py-2 border">{}</td>
                  <td className="py-2 border">{}</td>
                  <td className="py-2 border">{}</td>
                  <td className="py-2 border">{}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default testPage;
