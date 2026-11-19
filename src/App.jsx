// Panggil komponen yang telah dibuat disini agar tampil ke browser

import DaftarSiswa from "./latihan/soal-3";

function App() {
  return (
    <div className="w-screen flex justify-center pt-10">
      {/* Panggil komponen dari soal latihan dibawah sini*/}

      {/* Khusus soal 3, Panggil di dalam div ini*/}
      <div className="flex flex-col gap-3">
        <DaftarSiswa />
      </div>
    </div>
  );
}

export default App;
