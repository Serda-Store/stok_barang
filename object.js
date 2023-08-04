const login = {
  id_user: "1",
  username: "user1",
  password: "password123",
  email: "user1@example.com",
};
console.log(login);

const stock = {
  id_barang: 1,
  nama_barang: "pen",
  deskripsi: "ada",
  stock: 100,
  status: "terseddia",
  gambar: "gambar1",
  satuan: "pcs",
};
console.log(stock);

const barangMasuk = {
  id_masuk: 1,
  id_barang: 1,
  tanggal: 20042002,
  keterangan: "masuk1",
  gambar: "gambar1",
  satuan: "pcs",
};
console.log(barangMasuk);

const barangKeluar = {
  id_keluar: 1,
  id_barang: 1,
  tanggal: 11042002,
  penerima: "konsumen1",
  gambar: "gambar1",
  satuan: "pcs",
};
console.log(barangKeluar);
