// Materi: Component, Props, Interpolasi

/* TODO:
  1. Buatlah komponen bernama 'StudentCard' yang menerima props:
  nama (string),
  kelas (string),
  statusLulus (boolean).
  2. Gunakan teknik Object Destructuring pada parameter fungsi komponen untuk menangkap props.
  3. Ubah teks statis di dalam card agar dinamis mengikuti data dari props.
  4. Panggil komponen 'StudentCard' sebanyak 3 kali di dalam komponen utama 'App' dengan data yang berbeda-beda.
*/


function StudentCard({name, kelas, statusLulus}) {

  return (
    <div className="border border-gray-200 rounded-xl p-5 shadow-sm bg-white flex justify-between items-center">
      <div>
        {/* Buat tulisan "Nama Siswa" menjadi dinamis dengan memanfaatkan interpolasi + props */}
        <h3 className="text-lg font-bold text-gray-800">{name}</h3>
        {/* Buat tulisan "Kelas" menjadi dinamis dengan memanfaatkan interpolasi + props */}
        <p className="text-sm text-gray-500">kelas {kelas}</p>
        {/* tulisan boolean */}
        <p className={`text-sm font-semibold mt-2 ${statusLulus ? "text-green-600" : "text-red-600"}`}>
          {statusLulus ? "Lulus" : "Belum Lulus"}
        </p>
      </div>
    </div>
  );
}

export default StudentCard;

// 1. Manfaat menggunakan teknik destructuring object untuk memanggil props ?
//   Jawaban:lebih mudahh mengambil nilai props nya dibanding yang menggunakan props.name dll
// 2. Sintaks Javascript tipe apa yang diizinkan ada di dalam interpolasi?
//   Jawaban:{}
