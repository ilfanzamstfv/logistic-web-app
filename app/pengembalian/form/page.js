import React from "react";

const formPage = () => {
  return (
    <div className="p-4 md:p-8">
      <div className="text-xl font-bold text-black">
        <h1>Form Pengembalian</h1>
      </div>
      <div className="mt-10">
        <form>
          <div className="flex flex-wrap gap-4">
            <div className="mt-2">
              <label className="block text-base font-medium leading-6 text-gray-900">
                Nama PIC
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="#namapic"
                  className="block border border-gray-600 rounded bg-white px-8 py-1.5 pl-2 text-black sm:text-sm sm:leading-6"
                ></input>
              </div>
            </div>
            <div className="mt-2">
              <label className="block text-base font-medium leading-6 text-gray-900">
                Nama Barang
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="#namabarang"
                  className="block border border-gray-600 rounded bg-white px-8 py-1.5 pl-2 text-black sm:text-sm sm:leading-6"
                ></input>
              </div>
            </div>
            <div className="mt-2">
              <label className="block text-base font-medium leading-6 text-gray-900">
                Kategori Barang
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="#kategoribarang"
                  className="block border border-gray-600 rounded bg-white px-8 py-1.5 pl-2 text-black sm:text-sm sm:leading-6"
                ></input>
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
                  name="#tglpinjam"
                  className="block border border-gray-600 rounded bg-white px-8 py-1.5 pl-2 text-black sm:text-sm sm:leading-6"
                ></input>
              </div>
            </div>
            <div className="mt-2">
              <label className="block text-base font-medium leading-6 text-gray-900">
                Tanggal Kembali
              </label>
              <div className="mt-2">
                <input
                  type="date"
                  name="#tglbalik"
                  className="block border border-gray-600 rounded bg-white px-8 py-1.5 pl-2 text-black sm:text-sm sm:leading-6"
                ></input>
              </div>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap">
            <button
              type="submit"
              className="rounded bg-teal-500 hover:bg-teal-700 px-7 py-2 text-sm font-semibold"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default formPage;
