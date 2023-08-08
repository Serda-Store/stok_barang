//table user
class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  userLogin() {
    console.log(`${this.username} ${this.password} berhasil login`);
  }

  userLogout() {
    console.log(`${this.username} berhasil logout`);
  }
}

const user1 = new User("Yolanda", 20102003);
const user2 = new User("Srimul", 11042002);

console.log(user1);
console.log(user2);

user1.userLogin();
user1.userLogout();

user2.userLogin();
user2.userLogout();

console.log();

//table Stock Barang
class StockBarang {
  constructor(idbarang, namabarang, deskripsi, stock, status, satuan) {
    this.idbarang = idbarang;
    this.namabarang = namabarang;
    this.deskripsi = deskripsi;
    this.stock = stock;
    this.status = status;
    this.satuan = satuan;
  }

  barangBertambah() {
    console.log(
      `${this.idbarang} ${this.namabarang} ${this.deskripsi} ${this.stock} ${this.status} ${this.satuan} barang berhasil bertambah`
    );
  }

  barangBerkurang() {
    console.log(
      `${this.idbarang} ${this.namabarang} ${this.deskripsi} ${this.stock} ${this.status} ${this.satuan} barang berhasil berkurang`
    );
  }
}

const stockbarang1 = new StockBarang(1, "Pen", "Ada", 100, "tersedia", "pcs");
const stockbarang2 = new StockBarang(
  2,
  "Pencil",
  "Tidak ada",
  0,
  "tidak tersedia",
  "pcs"
);

console.log(stockbarang1);
console.log(stockbarang2);

stockbarang1.barangBertambah();
stockbarang2.barangBerkurang();

console.log();

//table Barang Masuk
class BarangMasuk {
  constructor(idmasuk, idbarang, tanggal, keterangan, satuan) {
    this.idmasuk = idmasuk;
    this.idbarang = idbarang;
    this.tanggal = tanggal;
    this.keterangan = keterangan;
    this.satuan = satuan;
  }

  daftarBarang() {
    console.log(
      `${this.idmasuk} ${this.idbarang} ${this.tanggal} ${this.keterangan} ${this.satuan} barang berhasil masuk`
    );
  }
}

const barangmasuk = new BarangMasuk(
  3,
  1,
  "Eraser",
  8082023,
  "masuk 100",
  "pcs"
);

console.log(barangmasuk);

barangmasuk.daftarBarang();

console.log();

//table Barang Keluar

class BarangKeluar {
  constructor(idkeluar, idbarang, tanggal, penerima, satuan) {
    this.idkeluar = idkeluar;
    this.idbarang = idbarang;
    this.tanggal = tanggal;
    this.penerima = penerima;
    this.satuan = satuan;
  }

  daftarKeluar() {
    console.log(
      `${this.idkeluar} ${this.idbarang} ${this.tanggal} ${this.penerima} ${this.satuan} barang berhasil keluar`
    );
  }
}

const barangkeluar = new BarangKeluar(
  3,
  1,
  "Eraser",
  8082023,
  "konsumen",
  "pcs"
);

console.log(barangkeluar);

barangkeluar.daftarKeluar();

console.log();
