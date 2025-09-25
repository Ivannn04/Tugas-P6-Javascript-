// controller.js
let data = require("./data");

// function untuk mlihat data menggunakan map
function lihatData() {
  console.log("=== Daftar Data ===");
  data.map((item, index) => {
    console.log(`${index + 1}. Nama: ${item.nama}, Umur: ${item.umur}, Alamat: ${item.alamat}, Email: ${item.email}`);
  });
}

// function untuk menambah 2 data
function tambahData() {
  data.push(
    { nama: "Seno", umur: 29, alamat: "Bekasi", email: "seno@mail.com" },
    { nama: "cecil", umur: 20, alamat: "Jakarta", email: "Cecil@mail.com" }
  );
  console.log("Data berhasil ditambahkan!");
}

// function untuk menghapus data berdasarkan index
function hapusData(index) {
  if (index >= 0 && index < data.length) {
    let deleted = data.splice(index, 1);
    console.log(`Data ${deleted[0].nama} berhasil dihapus`);
  } else {
    console.log("Index tidak valid!");
  }
}

//export function lihatdata, tambahdata, hapusdata
module.exports = { lihatData, tambahData, hapusData };
