// Panggil komponen yang telah dibuat disini agar tampil ke browser
import StudentCard from "./latihan/soal-1";
import TaskItem from "./latihan/soal-2";
import FormSiswa from "./latihan/soal-4";
import ScoreCounter from "./latihan/soal-5";

import DaftarSiswa from "./latihan/soal-3";

function App() {
  return (
    <div className="w-screen flex justify-center pt-10 grid">
      {/* Panggil komponen dari soal latihan dibawah sini*/}
      <StudentCard
          name="Fathi"
          kelas="sebelasbe"
          statusLulus={true}
        />

        <StudentCard
          name="Ahmad"
          kelas="delapaan"
          statusLulus={false}
        />

        <StudentCard
          name="Budi"
          kelas="udalulus"
          statusLulus={true}
        />

        <TaskItem
        judul="Mengerjakan tugas React"
        prioritas="tinggi"
        selesai={false}
      />

      <TaskItem
        judul="Belajar Tailwind CSS"
        prioritas="sedang"
        selesai={true}
      />

      <TaskItem 
        judul="Membuat halaman website"
        prioritas="rendah"
        selesai={false}
      />

      <FormSiswa />

      {/* Khusus soal 3, Panggil di dalam div ini*/}
      <div className="flex flex-col gap-3">
        <DaftarSiswa />
      </div>

      <ScoreCounter />
    </div>
  );
}

export default App;
