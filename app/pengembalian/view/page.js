import React from "react";

const viewFormPage = () => {
  return (
    <div className="p-4 md:p-8">
      <div className="text-xl text-black font-bold">
        <h1>View Form</h1>
      </div>
      <div className="mt-10 text-xl text-black font-bold">
        <h1>Form Pengembalian</h1>
      </div>
      <div className="text-black mt-3">
        <div className="flex">
          <p>Nama PIC :</p>
          <p>Text</p>
        </div>
        <div className="mt-3 flex">
          <p>Nama Barang :</p>
          <p>Text</p>
        </div>
        <div className="mt-3 flex">
          <p>Kategori Barang :</p>
          <p>Text</p>
        </div>
        <div className="mt-3 flex">
          <p>Tanggal Pinjam :</p>
          <p>Text</p>
        </div>
        <div className="mt-3 flex">
          <p>Tanggal Kembali :</p>
          <p>Text</p>
        </div>
        <div className="mt-5">
          <button
            type="submit"
            className="text-white rounded bg-teal-500 hover:bg-teal-700 px-7 py-2 text-sm font-semibold"
          >
            Save to PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default viewFormPage;
