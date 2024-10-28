"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { supabase } from "@/db/supabase";

const ReturnForm = () => {
  const { id } = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    nama: "",
    barang: "",
    vendor: "",
    contact: "",
    fotoURL: "",
    tgl_kembali: "",
  });

  const fetchItemDetail = async () => {

    const { data, error } = await supabase
      .from("storage")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Error fetching detail: ", error);
    } else {
      const { data: fotoData, error: fotoError } = supabase.storage
        .from("foto_barang")
        .getPublicUrl(data.foto_path);

      if (fotoError) {
        console.error("Error fetching foto URL: ", fotoError);
      } else {
        setFormData({
          nama: data.nama,
          barang: data.barang,
          vendor: data.vendor,
          contact: data.contact,
          fotoURL: fotoData.publicUrl,
          tgl_kembali: "",
        });
      }
    }
    setLoading(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from("return")
      .insert({ 
        nama: formData.nama,
        barang: formData.barang,
        vendor: formData.vendor,
        contact: formData.contact,
        tgl_kembali: formData.tgl_kembali,
      });

    if (error) {
      console.error("Error submitting form: ", error);
      alert("Failed to submit the form. Please try again.");
    } else {
      alert("Form submitted successfully!");
      router.push("/pengembalian");
    }
  };

  useEffect(() => {
    fetchItemDetail();
  }, [id]);

  return (
    <div className="p-4">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-10">
            <div className="text-black">
              {formData.fotoURL ? (
                <img
                  src={formData.fotoURL}
                  alt="Foto Barang"
                  className="w-64 h-64"
                />
              ) : (
                <p>No Photo Available</p>
              )}
            </div>
            <div className="text-black">
              <h1 className="text-2xl font-bold mb-2">{formData.barang}</h1>
              <p>Nama PIC: {formData.nama}</p>
              <p>Vendor: {formData.vendor}</p>
              <p>Nomor Telepon: {formData.contact}</p>
            </div>
          </div>
          <div className="ms-36">
            <label htmlFor="tgl_kembali" className="block mb-2 text-black">
              Tanggal Pengembalian
            </label>
            <input
              type="date"
              id="tgl_kembali"
              name="tgl_kembali"
              value={formData.tgl_kembali}
              onChange={handleInputChange}
              className="border  text-black rounded px-4 py-2"
              required
            />
          </div>
          <div className="flex gap-4 mt-4">
            <button
              type="button"
              onClick={() => router.push("/storage")}
              className="text-white bg-teal-500 hover:bg-teal-700 px-7 py-2 rounded"
            >
              Back
            </button>
            <button
              type="submit"
              className="text-white bg-blue-500 hover:bg-blue-700 px-7 py-2 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ReturnForm;
