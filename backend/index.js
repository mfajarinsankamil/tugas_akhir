import express from "express";
import mysql from "mysql";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
// import jwt from "jsonwebtoken";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["POST, GET, PUT, DELETE"],
    credentials: true,
  })
);

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_sekolah",
  dateStrings: "date",
});

// verifyUser,
app.get("/BerandaAdmin", (req, res) => {
  return res.json({ Status: "Success", name: req.name });
});

app.post("/Login", (req, res) => {
  const sql = "SELECT * FROM login WHERE email = ? AND password = ?";
  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) return res.json({ Message: "Login Error" });
    if (data.length > 0) {
      // const name = data[0].name;
      // const token = jwt.sign({ name }, "our-jsonwebtoken-secret-key", {
      //   expiresIn: "1d",
      // });
      // res.cookie("token", token);
      return res.json({ Status: "Success" });
    } else {
      return res.json({ Message: "Email atau Password Salah" });
    }
  });
});

app.get("/Logout", (req, res) => {
  res.clearCookie("token");
  return res.json({ Status: "Success" });
});

app.post("/LoginAdmin", (req, res) => {
  const sql = "SELECT * FROM login WHERE email = ? AND password = ?";
  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
});

app.put("/UpdateEmailPasswordAdmin/:id", (req, res) => {
  const sql = "update login set email = ?, password = ? where id = ?";
  const values = [req.body.email, req.body.password];
  const id = req.params.id;
  db.query(sql, [...values, id], (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
});

app.get("/GetRecordEmailPasswordAdmin/:id", (req, res) => {
  const id = req.params.id;
  const sql = "select id, email, password from login where id = ?";
  db.query(sql, [id], (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
});
// ================================== INFORMASI ========================================================
app.get("/Informations", (req, res) => {
  const sql = "SELECT * FROM informasi";
  db.query(sql, (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
});

app.post("/CreateInformasiAdmin", (req, res) => {
  const sql = "INSERT INTO informasi (judul, keterangan) VALUES (?)";
  const values = [req.body.judul, req.body.keterangan];
  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
});

app.put("/UpdateInformasiAdmin/:id", (req, res) => {
  const sql = "update informasi set judul = ?, keterangan = ? where id = ?";
  const values = [req.body.judul, req.body.keterangan];
  const id = req.params.id;
  db.query(sql, [...values, id], (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
});

app.delete("/DeleteInformasiAdmin/:id", (req, res) => {
  const sql = "delete from informasi where id = ?";
  const id = req.params.id;
  db.query(sql, [id], (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
});

app.get("/GetRecordInformasiAdmin/:id", (req, res) => {
  const id = req.params.id;
  const sql = "select id, judul, keterangan from informasi where id = ?";
  db.query(sql, [id], (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
});
// ================================== INFORMASI ========================================================

// ================================== PESERTA DIDIK ========================================================
app.get("/Pesdik", (req, res) => {
  const sql = "SELECT * FROM pesdik";
  db.query(sql, (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
});

app.post("/CreatePesdikAdmin", (req, res) => {
  const sql =
    "INSERT INTO pesdik (nama, nisn, tgl_lahir, jenis_kelamin, kelas, alamat) VALUES (?)";
  const values = [
    req.body.nama,
    req.body.nisn,
    req.body.tgl_lahir,
    req.body.jenis_kelamin,
    req.body.kelas,
    req.body.alamat,
  ];
  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
});

app.put("/UpdatePesdikAdmin/:id", (req, res) => {
  const sql =
    "update pesdik set nama = ?, nisn = ?, tgl_lahir = ?, jenis_kelamin = ?, kelas = ?, alamat = ? where id = ?";
  const values = [
    req.body.nama,
    req.body.nisn,
    req.body.tgl_lahir,
    req.body.jenis_kelamin,
    req.body.kelas,
    req.body.alamat,
  ];
  const id = req.params.id;
  db.query(sql, [...values, id], (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
});

app.delete("/DeletePesdikAdmin/:id", (req, res) => {
  const sql = "delete from pesdik where id = ?";
  const id = req.params.id;
  db.query(sql, [id], (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
});

app.get("/GetRecordPesdikAdmin/:id", (req, res) => {
  const id = req.params.id;
  const sql =
    "select id, nama, nisn, tgl_lahir, jenis_kelamin, kelas, alamat from pesdik where id = ?";
  db.query(sql, [id], (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
});

// ================================== PESERTA DIDIK ========================================================

// ================================== SEKOLAH ========================================================
app.get("/Sekolah", (req, res) => {
  const sql = "SELECT * FROM sekolah";
  db.query(sql, (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
});

app.put("/UpdateSekolahAdmin/:id", (req, res) => {
  const sql =
    "update sekolah set npsn = ?, status = ?, nama_sekolah = ?, nama_yayasan = ?, skp_sekolah = ?, tgl_skp_sekolah = ?, ski_sekolah = ?, tgl_ski_sekolah = ?, kbutuhan_khusus = ?, nama_bank = ?, cbg_kcp_unit = ?, rekening_atasnma = ?, status_bos = ?, sertifikat_iso = ?, smbr_listrik = ?, daya_listrik = ?, kcp_internet = ? where id = ?";
  const values = [
    req.body.npsn,
    req.body.status,
    req.body.nama_sekolah,
    req.body.nama_yayasan,
    req.body.skp_sekolah,
    req.body.tgl_skp_sekolah,
    req.body.ski_sekolah,
    req.body.tgl_ski_sekolah,
    req.body.kbutuhan_khusus,
    req.body.nama_bank,
    req.body.cbg_kcp_unit,
    req.body.rekening_atasnma,
    req.body.status_bos,
    req.body.sertifikat_iso,
    req.body.smbr_listrik,
    req.body.daya_listrik,
    req.body.kcp_internet,
  ];
  const id = req.params.id;
  db.query(sql, [...values, id], (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
});

app.get("/GetRecordSekolahAdmin/:id", (req, res) => {
  const id = req.params.id;
  const sql =
    "select id, npsn, status, nama_sekolah, nama_yayasan, skp_sekolah, tgl_skp_sekolah, ski_sekolah, tgl_ski_sekolah, kbutuhan_khusus, nama_bank, cbg_kcp_unit, rekening_atasnma, status_bos, sertifikat_iso, smbr_listrik, daya_listrik, kcp_internet from sekolah where id = ?";
  db.query(sql, [id], (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
});
// ================================== SEKOLAH ========================================================

// ============================= VISI =======================================
app.get("/Visi", (req, res) => {
  const sql = "SELECT * FROM visi";
  db.query(sql, (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
});

app.post("/CreateVisiAdmin", (req, res) => {
  const sql = "INSERT INTO visi (no, isi_ket) VALUES (?)";
  const values = [req.body.no, req.body.isi_ket];
  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
});

app.put("/UpdateVisiAdmin/:id", (req, res) => {
  const sql = "update visi set no = ?, isi_ket = ? where id = ?";
  const values = [req.body.no, req.body.isi_ket];
  const id = req.params.id;
  db.query(sql, [...values, id], (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
});

app.delete("/DeleteVisiAdmin/:id", (req, res) => {
  const sql = "delete from visi where id = ?";
  const id = req.params.id;
  db.query(sql, [id], (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
});

app.get("/GetRecordVisiAdmin/:id", (req, res) => {
  const id = req.params.id;
  const sql = "select id, no, isi_ket from visi where id = ?";
  db.query(sql, [id], (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
});
// ============================= VISI =======================================

// ============================= MISI =======================================
app.get("/Misi", (req, res) => {
  const sql = "SELECT * FROM misi";
  db.query(sql, (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
});

app.post("/CreateMisiAdmin", (req, res) => {
  const sql = "INSERT INTO misi (no, isi_ket) VALUES (?)";
  const values = [req.body.no, req.body.isi_ket];
  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
});

app.put("/UpdateMisiAdmin/:id", (req, res) => {
  const sql = "update misi set no = ?, isi_ket = ? where id = ?";
  const values = [req.body.no, req.body.isi_ket];
  const id = req.params.id;
  db.query(sql, [...values, id], (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
});

app.delete("/DeleteMisiAdmin/:id", (req, res) => {
  const sql = "delete from misi where id = ?";
  const id = req.params.id;
  db.query(sql, [id], (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
});

app.get("/GetRecordMisiAdmin/:id", (req, res) => {
  const id = req.params.id;
  const sql = "select id, no, isi_ket from misi where id = ?";
  db.query(sql, [id], (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
});
// ============================= MISI =======================================

// ============================= TUJUAN =======================================
app.get("/Tujuan", (req, res) => {
  const sql = "SELECT * FROM tujuan";
  db.query(sql, (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
});

app.post("/CreateTujuanAdmin", (req, res) => {
  const sql = "INSERT INTO tujuan (no, isi_ket) VALUES (?)";
  const values = [req.body.no, req.body.isi_ket];
  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
});

app.put("/UpdateTujuanAdmin/:id", (req, res) => {
  const sql = "update tujuan set no = ?, isi_ket = ? where id = ?";
  const values = [req.body.no, req.body.isi_ket];
  const id = req.params.id;
  db.query(sql, [...values, id], (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
});

app.delete("/DeleteTujuanAdmin/:id", (req, res) => {
  const sql = "delete from tujuan where id = ?";
  const id = req.params.id;
  db.query(sql, [id], (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
});

app.get("/GetRecordTujuanAdmin/:id", (req, res) => {
  const id = req.params.id;
  const sql = "select id, no, isi_ket from tujuan where id = ?";
  db.query(sql, [id], (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
});
// ============================= TUJUAN =======================================

// ================================== KEPSEK IDENTITAS ========================================================

app.get("/KepsekIdentitas", (req, res) => {
  const sql = "SELECT * FROM kepsekiden";
  db.query(sql, (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
});

app.put("/UpdateKepsekidenAdmin/:id", (req, res) => {
  const sql =
    "update kepsekiden set nama = ?, jenis_kelamin = ?, nip = ?, tmpt_lahir = ?, tgl_lahir = ?, alamat = ?, agama =?, kwn = ?, bb = ?, tinggi = ?, gol_darah = ? where id = ?";
  const values = [
    req.body.nama,
    req.body.jenis_kelamin,
    req.body.nip,
    req.body.tmpt_lahir,
    req.body.tgl_lahir,
    req.body.alamat,
    req.body.agama,
    req.body.kwn,
    req.body.bb,
    req.body.tinggi,
    req.body.gol_darah,
  ];
  const id = req.params.id;
  db.query(sql, [...values, id], (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
});

app.post("/CreateKepsekidenAdmin", (req, res) => {
  const sql =
    "INSERT INTO kepsekiden (nama, jenis_kelamin, nip, tmpt_lahir, tgl_lahir, alamat, agama, kwn, bb, tinggi, gol_darah) VALUES (?)";
  const values = [
    req.body.nama,
    req.body.jenis_kelamin,
    req.body.nip,
    req.body.tmpt_lahir,
    req.body.tgl_lahir,
    req.body.alamat,
    req.body.agama,
    req.body.kwn,
    req.body.bb,
    req.body.tinggi,
    req.body.gol_darah,
  ];
  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
});

app.delete("/DeleteKepsekidenAdmin/:id", (req, res) => {
  const sql = "delete from kepsekiden where id = ?";
  const id = req.params.id;
  db.query(sql, [id], (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
});

app.get("/GetRecordKepsekidenAdmin/:id", (req, res) => {
  const id = req.params.id;
  const sql =
    "select id, nama, jenis_kelamin, nip, tmpt_lahir, tgl_lahir, alamat, agama, kwn, bb, tinggi, gol_darah from kepsekiden where id = ?";
  db.query(sql, [id], (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
});
// ===========================Kepsek Identitas==========================================

// ===========================Kepsek Riwayat Pendidikan==========================================
app.get("/KepsekRipen", (req, res) => {
  const sql = "SELECT * FROM kepsekripen";
  db.query(sql, (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
});

app.put("/UpdateKepsekripenAdmin/:id", (req, res) => {
  const sql =
    "update kepsekripen set nama_pendidikan = ?, jurusan = ?, thn_lulus = ?, tempat = ? where id = ?";
  const values = [
    req.body.nama_pendidikan,
    req.body.jurusan,
    req.body.thn_lulus,
    req.body.tempat,
  ];
  const id = req.params.id;
  db.query(sql, [...values, id], (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
});

app.post("/CreateKepsekripenAdmin", (req, res) => {
  const sql =
    "INSERT INTO kepsekripen (nama_pendidikan, jurusan, thn_lulus, tempat) VALUES (?)";
  const values = [
    req.body.nama_pendidikan,
    req.body.jurusan,
    req.body.thn_lulus,
    req.body.tempat,
  ];
  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
});

app.delete("/DeleteKepsekripenAdmin/:id", (req, res) => {
  const sql = "delete from kepsekripen where id = ?";
  const id = req.params.id;
  db.query(sql, [id], (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
});

app.get("/GetRecordKepsekripenAdmin/:id", (req, res) => {
  const id = req.params.id;
  const sql =
    "select id, nama_pendidikan, jurusan, thn_lulus, tempat from kepsekripen where id = ?";
  db.query(sql, [id], (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
});
// ===========================Kepsek Riwayat Pendidikan==========================================

// ===========================Kepsek Riwayat Kepangkatan==========================================
app.get("/KepsekRipang", (req, res) => {
  const sql = "SELECT * FROM kepsekripang";
  db.query(sql, (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
});

app.put("/UpdateKepsekripangAdmin/:id", (req, res) => {
  const sql =
    "update kepsekripang set pangkat = ?, gol_ruang = ?, tmt = ?, no_tanggal = ? where id = ?";
  const values = [
    req.body.pangkat,
    req.body.gol_ruang,
    req.body.tmt,
    req.body.no_tanggal,
  ];
  const id = req.params.id;
  db.query(sql, [...values, id], (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
});

app.post("/CreateKepsekripangAdmin", (req, res) => {
  const sql =
    "INSERT INTO kepsekripang (pangkat, gol_ruang, tmt, no_tanggal) VALUES (?)";
  const values = [
    req.body.pangkat,
    req.body.gol_ruang,
    req.body.tmt,
    req.body.no_tanggal,
  ];
  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
});

app.delete("/DeleteKepsekripangAdmin/:id", (req, res) => {
  const sql = "delete from kepsekripang where id = ?";
  const id = req.params.id;
  db.query(sql, [id], (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
});

app.get("/GetRecordKepsekripangAdmin/:id", (req, res) => {
  const id = req.params.id;
  const sql =
    "select id, pangkat, gol_ruang, tmt, no_tanggal from kepsekripang where id = ?";
  db.query(sql, [id], (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
});
// ===========================Kepsek Riwayat Kepangkatan==========================================

// =========================== GURU ==========================================
app.get("/Guru", (req, res) => {
  const sql = "SELECT * FROM guru";
  db.query(sql, (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
});

app.put("/UpdateGuruAdmin/:id", (req, res) => {
  const sql =
    "update guru set no = ?, nama = ?, jns_kelamin = ?, tmpt_lahir = ?, tgl_lahir = ?, alamat = ?, agama = ?, kwn = ?, bb = ?, tinggi = ?, gol_darah = ? where id = ?";
  const values = [
    req.body.no,
    req.body.nama,
    req.body.jns_kelamin,
    req.body.tmpt_lahir,
    req.body.tgl_lahir,
    req.body.alamat,
    req.body.agama,
    req.body.kwn,
    req.body.bb,
    req.body.tinggi,
    req.body.gol_darah,
  ];
  const id = req.params.id;
  db.query(sql, [...values, id], (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
});

app.post("/CreateGuruAdmin", (req, res) => {
  const sql =
    "INSERT INTO guru (no, nama, jns_kelamin, tmpt_lahir, tgl_lahir, alamat, agama, kwn, bb, tinggi, gol_darah) VALUES (?)";
  const values = [
    req.body.no,
    req.body.nama,
    req.body.jns_kelamin,
    req.body.tmpt_lahir,
    req.body.tgl_lahir,
    req.body.alamat,
    req.body.agama,
    req.body.kwn,
    req.body.bb,
    req.body.tinggi,
    req.body.gol_darah,
  ];
  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
});

app.delete("/DeleteGuruAdmin/:id", (req, res) => {
  const sql = "delete from guru where id = ?";
  const id = req.params.id;
  db.query(sql, [id], (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
});

app.get("/GetRecordGuruAdmin/:id", (req, res) => {
  const id = req.params.id;
  const sql =
    "select id, no, nama, jns_kelamin, tmpt_lahir, tgl_lahir, alamat, agama, kwn, bb, tinggi, gol_darah from guru where id = ?";
  db.query(sql, [id], (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
});

// =========================== sarpas ==========================================
app.get("/Sarpas", (req, res) => {
  const sql = "SELECT * FROM sarpas";
  db.query(sql, (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
});

app.post("/CreateSarpasAdmin", (req, res) => {
  const sql = "INSERT INTO sarpas (no, nama_sarpas, data1, data2) VALUES (?)";
  const values = [
    req.body.no,
    req.body.nama_sarpas,
    req.body.data1,
    req.body.data2,
  ];
  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
});

app.put("/UpdateSarpasAdmin/:id", (req, res) => {
  const sql =
    "update sarpas set no = ?, nama_sarpas = ?, data1 = ?, data2 = ? where id = ?";
  const values = [
    req.body.no,
    req.body.nama_sarpas,
    req.body.data1,
    req.body.data2,
  ];
  const id = req.params.id;
  db.query(sql, [...values, id], (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
});

app.get("/GetRecordSarpasAdmin/:id", (req, res) => {
  const id = req.params.id;
  const sql =
    "select id, no, nama_sarpas, data1, data2 from sarpas where id = ?";
  db.query(sql, [id], (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
});

// =========================== GURU ==========================================

// =========================== GURU ==========================================
app.get("/Kontak", (req, res) => {
  const sql = "SELECT * FROM kontak";
  db.query(sql, (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
});

app.put("/UpdateKontakAdmin/:id", (req, res) => {
  const sql =
    "update kontak set no_tlpn = ?, email = ?, alamat = ?, gmaps = ? where id = ?";
  const values = [
    req.body.no_tlpn,
    req.body.email,
    req.body.alamat,
    req.body.gmaps,
  ];
  const id = req.params.id;
  db.query(sql, [...values, id], (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
});

app.get("/GetRecordKontakAdmin/:id", (req, res) => {
  const id = req.params.id;
  const sql =
    "select id, no_tlpn, email, alamat, gmaps from kontak where id = ?";
  db.query(sql, [id], (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
});

// =========================== GURU ==========================================

// app.get("/kegiatan", (req, res) => {
//   const sql = "SELECT * FROM student";
//   db.query(sql, (err, data) => {
//     if (err) {
//       return res.json({ Error: "Error" });
//     }
//     return res.json(data);
//   });
// });

// =========================Pesdik Admin=========================

app.listen(8001, () => {
  console.log("Running");
});
