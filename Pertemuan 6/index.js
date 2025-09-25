// index.js untuk mengetes/menjalankan program
const { lihatData, tambahData, hapusData } = require("./controller");

//memanggil fungsi untuk mencobanya 1 per 1
lihatData();      // memanggil fungsi lihatdata untuk menampilkan data awal
tambahData();     // memanggil fungsi tambahdata untuk menambah/push 2 data baru
lihatData();      // memanggil fungsi lihatdata lagi untuk melihat perubahan data
hapusData(2);     // memanggil fungsi hapusdata untuk menghapus data yang ada berdasarkan index (2)
lihatData();      // memanggil fungsi lihatdata lagi untuk melihat perubahan data
