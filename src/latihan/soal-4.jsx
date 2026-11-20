// Materi: Controlled Form (useState, value, onChange, onSubmit)

import { useState } from "react";

/* TODO:
  1. Buat state menggunakan useState untuk menyimpan input form (misalnya 'nama' dan 'kelas', atau objek state form).
  2. Hubungkan input dengan state melalui atribut 'value' dan event 'onChange' agar menjadi Controlled Input.
  3. Tangani pengiriman form menggunakan event 'onSubmit' pada elemen <form> dan cegah reload halaman dengan e.preventDefault().
  4. Tampilkan hasil input secara langsung (live preview) atau tampilkan data yang baru disubmit menggunakan interpolasi ({...}).
*/

function FormSiswa() {
  const [nama, setNama] = useState("");
  const [kelas, setKelas] = useState("");
  const [dataSiswa, setDataSiswa] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    
   setDataSiswa({
      nama: nama,
      kelas: kelas
    });

    setNama("");
    setKelas("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-5 border border-gray-200 rounded-xl bg-white max-w-md"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Nama Siswa</label>
        {/* Hubungkan input ini dengan state menggunakan value dan onChange */}
        <input
          type="text"
          placeholder="Masukkan nama siswa"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Kelas</label>
        {/* Hubungkan input ini dengan state menggunakan value dan onChange */}
       <input
          type="text"
          placeholder="Masukkan kelass"
          value={kelas}
          onChange={(e) => setKelas(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
        />
      </div>

      <button type="submit" className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium">
        Simpan Data
      </button>

       {dataSiswa && (
        <div className="p-3 bg-green-50 rounded-lg text-sm text-gray-700">
          <h3 className="font-bold text-green-700 mb-2">
            Data Berhasil Disimpan!
          </h3>

          <p>Nama: {dataSiswa.nama}</p>
          <p>Kelas: {dataSiswa.kelas}</p>
        </div>
      )}
    </form>
  );
}

export default FormSiswa;

// 1. Apa yang dimaksud dengan Controlled Component / Controlled Form di React, dan apa peran atribut 'value' serta 'onChange'?
//   Jawaban:
// 2. Mengapa kita perlu memanggil e.preventDefault() di dalam handler onSubmit pada form React?
//   Jawaban:
