"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "@/db/supabase";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const viewFormPage = () => {
  const router = useRouter();
  const { id } = useParams();
  const handleNavigation = () => {
    router.push("/pengembalian");
  };

  const [formData, setFormData] = useState({
    id: "",
    nama: "",
    barang: "",
    vendor: "",
    contact: "",
    tgl_kembali: "",
    foto_path: "",
    fotoURL: "",
  });

  const fetchData = async () => {
    const { data, error } = await supabase
      .from("return")
      .select("*")
      .limit(1)
      .single();

    if (error) {
      console.error("Error fetching data:", error);
    } else {
      setFormData({
        id: data.id,
        nama: data.nama,
        barang: data.barang,
        vendor: data.vendor,
        contact: data.contact,
        tgl_kembali: data.tgl_kembali,
        foto_path: data.foto_path,
      });

      if (data.foto_path) {
        const { data: fotoData, error: fotoError } = supabase.storage
          .from("foto_barang")
          .getPublicUrl(data.foto_path);

        if (fotoError) {
          console.error("error fetching foto URL: ", fotoError);
        } else {
          setFormData((prevState) => ({
            ...prevState,
            fotoURL: fotoData.publicUrl,
          }));
        }
      }
    }
  };

  const deleteData = async () => {
    const confirmation = window.confirm(
      "Apakah anda ingin menghapus data ini?"
    );

    if (confirmation) {
      const { error } = await supabase
        .from("return")
        .delete()
        .eq("id", formData.id);

      if (error) {
        console.error("Error deleting data:", error);
      } else {
        alert("Data berhasil dihapus");

        setFormData({
          id: "",
          nama: "",
          barang: "",
          vendor: "",
          contact: "",
          tgl_kembali: "",
          foto_path: "",
          fotoURL: "",
        });
      }
    }
  };

  const generatePDF = () => {
    const input = document.getElementById("form-content");
    html2canvas(input, {
      scale: 2,
      useCORS: true,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "pt",
        format: "a4",
      });

      const imgWidth = pdf.internal.pageSize.getWidth();
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("form_pengembalian.pdf");
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-4 md:p-8">
      <div className="text-xl text-black font-bold">
        <h1>View Form</h1>
      </div>
      <div className="bg-gray-300 rounded" id="form-content">
        <div className="p-2 ms-2 mt-10 text-xl text-black font-bold text-center">
          <h1>Form Pengembalian</h1>
        </div>
        <div className="text-black mt-3 p-2 ms-2">
          <div className="flex">
            <p>Nama PIC :</p>
            <p className="ms-2">{formData.nama}</p>
          </div>
          <div className="mt-3 flex">
            <p>Nama Barang :</p>
            <p className="ms-2">{formData.barang}</p>
          </div>
          <div className="mt-3 flex">
            <p>Vendor :</p>
            <p className="ms-2">{formData.vendor}</p>
          </div>
          <div className="mt-3 flex">
            <p>Nomor Telepon :</p>
            <p className="ms-2">{formData.contact}</p>
          </div>
          <div className="mt-3 flex">
            <p>Tanggal Kembali :</p>
            <p className="ms-2">{formData.tgl_kembali}</p>
          </div>
          <div className="flex flex-col items-center">
            {formData.fotoURL ? (
              <img src={formData.fotoURL}
              alt="foto barang"
              className="w-64 h-64 object-cover mt-3 mb-4" />
            ) : ( 
              <p> No photo available </p>
            )}
          </div>
          <div className="mt-5 flex flex-wrap gap-4">
            <div className="mt-5">
              <button
                type="button"
                className="text-white rounded bg-teal-500 hover:bg-teal-700 px-7 py-2 text-sm font-semibold"
                onClick={handleNavigation}
              >
                Back
              </button>
            </div>
            <div className="mt-5">
              <button
                type="button"
                className="text-white rounded bg-red-600 hover:bg-red-800 px-7 py-2 text-sm font-semibold"
                onClick={deleteData}
              >
                Delete
              </button>
            </div>
            <div className="mt-5">
              <button
                type="submit"
                className="text-white rounded bg-blue-500 hover:bg-blue-700 px-7 py-2 text-sm font-semibold"
                onClick={generatePDF}
              >
                Cetak Form
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default viewFormPage;
