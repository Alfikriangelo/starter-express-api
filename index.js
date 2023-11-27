const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.json([
    {
      id: 1,
      nama: 'Alfikri',
      nim: '1103223015',
      kelas: 'TK-46-06',
      nama_provinsi: "Riau",
      nama_kota: "Pekanbaru",
      nama_kecamatan: "Marpoyan Damai",
      nama_desa: "Tangkerang Tengah"
    },
    {
      id: 2,
      nama: 'Muhammad Rafa Ihsanuddin Yazzar',
      nim: '1101220011',
      kelas: 'TT-46-10',
      nama_provinsi: "Jawa Tengah",
      nama_kota: "Semarang",
      nama_kecamatan: "Semarang Barat",
      nama_desa: "Kembangarum"
    },
    {
      id: 3,
      nama: 'Ailsa Zahrany B. M',
      nim: '1101220103',
      kelas: 'TT-46-03',
      nama_provinsi: "Jawa Barat",
      nama_kota: "Majalengka",
      nama_kecamatan: "Palasah",
      nama_desa: "Enggalwangi"
    },
    {
      id: 4,
      nama: 'Ivan Ronaldo Lumbanraja',
      nim: '1102213255',
      kelas: 'EL-46-05',
      nama_provinsi: "Sumatera Utara",
      nama_kota: "Balige",
      nama_kecamatan: "Toba",
      nama_desa: "Haumabange"
    },
  ]);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
