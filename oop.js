//table User
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

const user1 = new User('Yolanda', 20102003);
const user2 = new User('Srimul', 11042002);
 
console.log(user1);
console.log(user2);
 
user1.userLogin();
user1.userLogout();

user2.userLogin();
user2.userLogout();

console.log()

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
    console.log(`${this.idbarang} ${this.namabarang} ${this.deskripsi} ${this.stock} ${this.status} ${this.satuan} barang berhasil bertambah`);
  }
 
   barangBerkurang() {
    console.log(`${this.idbarang} ${this.namabarang} ${this.deskripsi} ${this.stock} ${this.status} ${this.satuan} barang berhasil berkurang`);
  }
  
}

const stockbarang1 = new StockBarang('1', 'Pen', 'Ada', 100,'tersedia', 'pcs');
const stockbarang2 = new StockBarang('2', 'Pencil', 'Tidak ada', 0,'tidak tersedia', 'pcs');
 
console.log(stockbarang1);
console.log(stockbarang2);
 
stockbarang1.barangBertambah();
stockbarang2.barangBerkurang();

