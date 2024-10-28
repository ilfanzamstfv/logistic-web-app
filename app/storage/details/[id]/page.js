"use client";
import { supabase } from "@/db/supabase";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

const viewDetail = () => {
  const { id } = useParams();
  const [itemDetail, setItemDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fotoURL, setFotoURL] = useState(null);
  const router = useRouter();

  const backToStorage = () => {
    router.push("/storage");
  };

  const fetchItemDetail = async () => {
    if (!id) return;

    const { data, error } = await supabase
      .from("storage")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Error fetching detail: ", error);
    } else {
      setItemDetail(data);

      if (data.foto_path) {
        const { data: fotoData, error: fotoError } = supabase.storage
          .from("foto_barang")
          .getPublicUrl(data.foto_path);

        if (fotoError) {
          console.error("Error fetching foto URL: ", fotoError);
        } else {
          setFotoURL(fotoData.publicUrl);
        }
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchItemDetail();
  }, [id]);

  const handleDelete = async () => {
    const { error } = await supabase.from("storage").delete().eq("id", id);

    if (error) {
      console.error("Error deleting data: ", error);
      alert("Error deleting data, please try again.");
    } else {
      router.push("/storage");
    }
  };

  const handleUpdate = () => {
    router.push(`/storage/update/${id}`);
  };

  const navigateToPengembalian = () => {
    router.push(`/storage/return/${id}`);
  };

  return (
    <div className="p-4">
      {loading ? (
        <p>Loading...</p>
      ) : itemDetail ? (
        <div className="flex flex-wrap gap-10">
          <div className="text-black">
            {fotoURL ? (
              <img src={fotoURL} alt="Foto Barang" className="w-64 h-64" />
            ) : (
              <p>No Photo Available</p>
            )}
          </div>
          <div className="text-black">
            <h1 className="text-2xl font-bold mb-5">{itemDetail.barang}</h1>
            <p>Nama PIC: {itemDetail.nama}</p>
            <p>Divisi: {itemDetail.divisi}</p>
            <p>Nomor Telepon: {itemDetail.contact}</p>
            <p>Kategori Barang: {itemDetail.kategori_barang}</p>
            <p>Status: {itemDetail.status}</p>
            <p>Vendor: {itemDetail.vendor}</p>
            <p>Tanggal Beli: {itemDetail.tgl_beli}</p>
            <p>Jumlah Barang: {itemDetail.jumlah_barang}</p>
            <p>Catatan Barang: {itemDetail.catatan}</p>
          </div>
        </div>
      ) : (
        <p>No detail</p>
      )}
      <div className="flex mt-5 gap-4">
        <button
          className="text-white rounded bg-teal-500 hover:bg-teal-700 px-7 py-2 text-sm font-semibold"
          onClick={backToStorage}
        >
          Back
        </button>
        <button
          className="text-white rounded bg-red-600 hover:bg-red-800 px-7 py-2 text-sm font-semibold"
          onClick={handleDelete}
        >
          Delete
        </button>
        <button
          className="text-white rounded bg-blue-500 hover:bg-blue-700 px-7 py-2 text-sm font-semibold"
          onClick={handleUpdate}
        >
          Update
        </button>
        <button
          className="text-white rounded bg-yellow-500 hover:bg-yellow-700 px-7 py-2 text-sm font-semibold"
          onClick={navigateToPengembalian}
        >
          Form Pengembalian
        </button>
      </div>
    </div>
  );
};

export default viewDetail;
