// Materi: Fragment & Props key pada .map()

/* TODO:
  1. Lengkapi array 'daftarSiswa' minimal 3 data objek dengan properti:
     id (unik),
     nama (string),
     kelas (string).
  2. Bungkus hasil return utama komponen menggunakan Fragment (<>...</>) agar tidak menambah elemen pembungkus berlebih di DOM.
  3. Render 'daftarSiswa' menggunakan method .map() dan pasang props 'key={siswa.id}' pada elemen pembungkus tiap item (misalnya <section key={siswa.id}>).
  4. Tampilkan data 'nama' dan 'kelas' menggunakan interpolasi ({...}) di dalam item yang di-render.
*/

function DaftarSiswa() {
  const daftarSiswa = [
     {
      id: 1,
      nama: "fathi",
      kelas: "XI RPL"
    },
    {
      id: 2,
      nama: "dzhaabi",
      kelas: "XI TKJ"
    },
    {
      id: 3,
      nama: "beje",
      kelas: "XI RPL"
    }
  ];

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">
        Daftar siswa
      </h1>

      <div className="space-y-3">
         {daftarSiswa.map((siswa) => (
          <section
            key={siswa.id}
            className="border border-gray-200 rounded-xl p-5 shadow-sm bg-white"
          >
            <h2 className="text-lg font-bold text-gray-800">
              {siswa.nama}
            </h2>

            <p className="text-sm text-gray-500">
              Kelas {siswa.kelas}
            </p>
          </section>
        ))}
      </div>
    </>
  );
}

export default DaftarSiswa;

// 1. Mengapa props 'key' wajib dipasang pada elemen terluar di dalam .map() dan sebaiknya menggunakan ID unik?
//   Jawaban:
// 2. Apa fungsi Fragment (<>...</>) saat merender elemen di dalam komponen dibandingkan membungkusnya dengan <div>?
//   Jawaban:
