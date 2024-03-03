// const { Sequelize } = require("sequelize");
// const config = require("../.././config.json"); // Ganti dengan lokasi file konfigurasi Anda

// const env = process.env.NODE_ENV || "development";
// const db = new Sequelize(config[env]);

// // Coba koneksi ke database
// try {
//   db.authenticate();
//   console.log("Koneksi database berhasil.");
//   db.sync({ alter: true })
//     .then(() => {
//       console.log("Tabel berhasil disinkronisasi dengan opsi alter.");
//       // ... Mulai aplikasi Anda di sini ...
//     })
//     .catch((error) => {
//       console.error("Gagal menyinkronkan tabel:", error);
//     });
// } catch (error) {
//   console.error("Gagal koneksi ke database:", error);
// }


// module.exports = db;
