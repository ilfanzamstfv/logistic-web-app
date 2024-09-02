import React from "react";

const PengembalianPage = () => {
  return (
    <div className="p-4 md:p-8">
      <div className="text-xl font-bold text-black">
        <h1>Form Pengembalian</h1>
      </div>
      <div className="mt-10">
        <form>
          <div className="flex flex-wrap gap-4">
            <div className="mt-2">
              <label
                for="#namabarang"
                className="block text-base font-medium leading-6 text-gray-900"
              >
                Nama Barang
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="#namabarang"
                  id="#namabarang"
                  className="block border border-gray-600 rounded bg-white px-8 py-1.5 pl-2 text-black sm:text-sm sm:leading-6"
                ></input>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PengembalianPage;
