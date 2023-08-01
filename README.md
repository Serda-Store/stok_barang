# Serda Store

## Deskripsi Proyek

Sistem Informasi Barang Serba Store adalah sebuah aplikasi berbasis web yang bertujuan untuk membantu mengelola inventaris atau stok barang pada suatu usaha. Aplikasi ini dirancang khusus untuk para staff yang ada di Serda Store untuk meningkatkan efisiensi dan transparansi dalam proses manajemen persediaan barang, sehingga memudahkan dalam melacak, mengelola, dan mengoptimalkan persediaan barang yang ada di usaha tersebut.

## Fitur Utama

1. Login : halaman pertama yang ditampilkan ketika pengguna (para staff) ingin mengakses Sistem Informasi Barang. Fitur ini memungkinksn pengguna (para staff) untuk melakukan autentifikasi dengan menginputkan ID pekerja (atau username) dan password mereka. Autentikasi ini bertujuan untuk memverifikasi identitas pengguna dan memastikan bahwa hanya pengguna yang memiliki otorisasi yang benar yang dapat mengakses data dan fitur dalam sistem.

   _Komponen Halaman Login_

   - Input ID Pekerja : penggguna diminta untuk memasukkan ID pekerja atau username mereka
   - Input Password : pengguna diminta untuk memasukkan password yang sesuai dengan akun mereka
   - Tombol Login : tombol yang digunakan untuk mengerimkan data login dan mencoba mengautentifikasi pengguna

   _Fungsi Halaman Login_

   - Memverifikasi Keaslian Pengguna: Setelah pengguna memasukkan ID pekerja dan password, sistem akan memverifikasi apakah kombinasi tersebut cocok dengan data yang ada dalam database pengguna.
   - Memberikan Akses Terbatas: Jika autentikasi berhasil, pengguna akan diizinkan untuk mengakses halaman-halaman dan fitur-fitur yang sesuai dengan hak akses yang dimilikinya (misalnya, akses ke halaman stok barang, barang masuk, atau barang keluar).
   - Menangani Kesalahan Login: Jika autentikasi gagal
     (misalnya, karena ID pekerja atau password yang salah), sistem akan memberikan pesan kesalahan yang sesuai dan meminta pengguna untuk memasukkan informasi login yang benar.

---

2. Logout : fitur yang memungkinkan pengguna untuk keluar atau log-out dari Sistem Informasi Barang "Serda Store". Tombol log-out akan hadir setiap halaman, termasuk halaman stock barang, halaman barang masuk, dan halaman barang keluar. Fitur ini memungkinkan pengguna untuk mengamankan akun mereka saat tidak sedang menggunakan sistem, sehingga menjaga kerahasiaan dan integritas informasi yang disimpan dalam Sistem Informasi Barang "Serda Store".

   _Fungsi Halaman Logout_

   - Mengamankan Akses: Setelah pengguna menekan tombol Log Out, mereka akan keluar dari akun mereka dan mengakhiri sesi aktif. Ini memastikan bahwa akses ke halaman-halaman dan fitur-fitur yang terbatas hanya dapat diakses oleh pengguna yang berwenang dengan akun yang benar.
   - Kembali ke Halaman Login: Setelah berhasil logout, pengguna akan diarahkan kembali ke Halaman Login. Pengguna harus memasukkan kembali ID pekerja dan password untuk masuk kembali ke dalam sistem.

---

3. Stock Barang : halaman stok barang pada Sistem Informasi Barang "Serda Store" memungkinkan pengguna (para staff) untuk mengelola dam melihat daftar barang yang ada di gudang atau barang baru yang belum pernah masuk ke gudang. Halaman ini akan menampilkan tabel yang berisi informasi rinci tentang setiap barang, termasuk nomor identifikasi, gambar, deskripsi, jumlah stok, satuan, aksi, dan status.

   _Komponen Halaman Stock Barang_

   - Tabel Barang : tabel ini akan menampilkan daftar barang yang ada di gudang atau barang yang akan masuk ke gudang. Setiap baris dalam tabel akan mencantumkan informasi tentang barang tertentu, seperti nomor identifikasi (No); gambar representatif barang (Gambar); deskripsi singkat barang (Deskripsi); jumlah stok barang (Stok); satuan barang (Satuan); tombol aksi untuk mengedit atau menghapus barang (Aksi), dan status baran (Status) yang terdiri dari barang habis, barang hampir habis, barang tersedia.
   - Tombol Pencarian (Search) : tombol ini memungkinkan pengguna untuk mencari barang tertentu berdasarkan kriteria tertentu, seperti nama barang atau nomor identifikasi. Setelah tombol ini ditekan, daftar barang dalam tabel akan diperbaharui sesuai dengan hasil pencarian.
   - Tombol Cetak Laporan : tombil ini memungkinkan pengguna untuk mencetak laporan atau ringkasan dari daftar barang yang ditampilkan dalam tabel. Laporan ini dapat bermanfaat untuk monitoring stok.

   _Fungsi Halaman Stock Barang_

   - Menampilkan Informasi Barang: Tabel dalam halaman ini akan memberikan gambaran lengkap tentang setiap barang yang ada di gudang atau yang belum pernah masuk. Informasi tersebut termasuk nomor identifikasi, gambar, deskripsi singkat, jumlah stok, satuan, status, dan tombol aksi untuk mengedit atau menghapus barang.
   - Mengelola Persediaan Barang: Pengguna dapat menggunakan tombol aksi di setiap baris barang untuk melakukan tindakan seperti mengedit informasi barang atau menghapus barang yang sudah tidak digunakan lagi.
   - Mencari Barang Secara Efisien: Fitur pencarian memungkinkan pengguna untuk mencari barang berdasarkan kriteria tertentu, sehingga pengguna dapat dengan cepat menemukan barang yang dibutuhkan tanpa perlu melihat seluruh daftar barang.
   - Cetak Laporan: Dengan adanya tombol cetak laporan, pengguna dapat mencetak laporan berisi ringkasan informasi dari daftar barang yang ditampilkan dalam tabel, sehingga memudahkan dalam pemantauan stok dan analisis persediaan.

---

4. Barang Masuk : halaman dalam Sistem Informasi Barang "Serda Store" yang memungkinkan pengguna untuk menginput data tentang barang yang akan masuk ke dalam gudang. Halaman ini akan mencatat transaksi masuk barang, seperti pembelian atau pengiriman barang dari pemasok ke gudang.

   _Komponen Halaman Barang Masuk_

   - Tabel Transaksi Masuk: Tabel ini akan menampilkan daftar transaksi masuk barang yang telah dicatat. Setiap baris dalam tabel akan mencantumkan informasi tentang transaksi masuk tertentu, seperti tanggal transaksi (Tanggal), nomor nota (Nota), gambar representatif barang (Gambar), nama barang (Nama Barang), jumlah barang yang masuk (Jumlah), satuan barang (Satuan), keterangan transaksi (Keterangan), tombol aksi untuk mengedit atau menghapus transaksi (Aksi), dan waktu transaksi (Waktu) yang mencakup informasi tanggal, bulan, dan tahun.
   - Searching Bar: Kotak pencarian ini memungkinkan pengguna untuk mencari transaksi masuk berdasarkan kriteria tertentu, seperti nomor nota atau nama barang. Setelah melakukan pencarian, tabel transaksi masuk akan diperbarui sesuai dengan hasil pencarian.
   - Tombol Barang Masuk: Tombol ini akan membuka formulir atau halaman khusus untuk memasukkan data tentang barang yang akan masuk ke dalam gudang. Pengguna dapat mengisi informasi seperti tanggal transaksi, nomor nota, gambar barang, nama barang, jumlah barang, satuan, dan keterangan transaksi.
   - Tombol Cetak Laporan: Tombol ini memungkinkan pengguna untuk mencetak laporan atau ringkasan dari daftar transaksi masuk barang yang ditampilkan dalam tabel. Laporan ini dapat bermanfaat untuk keperluan audit, pemantauan inventaris, atau pencatatan.

   _Fungsi Halaman Barang Masuk_

   - Mencatat Transaksi Masuk Barang: Halaman ini memungkinkan pengguna untuk mencatat setiap transaksi masuk barang yang terjadi, seperti saat melakukan pembelian dari pemasok atau menerima pengiriman barang dari luar.
   - Memantau Persediaan Barang: Dengan mencatat transaksi masuk, sistem akan secara otomatis memperbarui stok barang di gudang, sehingga memudahkan pengguna untuk memantau persediaan dan menghindari kekurangan stok.
   - Mencari Transaksi Masuk: Fitur pencarian memungkinkan pengguna untuk mencari transaksi masuk berdasarkan kriteria tertentu, sehingga pengguna dapat dengan mudah menemukan transaksi yang dibutuhkan tanpa perlu melihat seluruh daftar transaksi masuk.
   - Cetak Laporan: Dengan adanya tombol cetak laporan, pengguna dapat mencetak laporan berisi ringkasan informasi dari daftar transaksi masuk barang yang ditampilkan dalam tabel, sehingga memudahkan dalam pemantauan stok dan analisis persediaan.

---

5. Barang Keluar : halaman dalam Sistem Informasi Barang yang memungkinkan pengguna untuk menginput data tentang barang yang keluar dari gudang. Halaman ini mencatat transaksi keluar barang, seperti penjualan atau pengiriman barang keluar dari gudang ke pelanggan atau pihak lain.

   _Komponen Halaman Barang Masuk_

   - Tabel Transaksi Keluar: Tabel ini menampilkan daftar transaksi keluar barang yang telah dicatat. Setiap baris dalam tabel akan mencantumkan informasi tentang transaksi keluar tertentu, seperti tanggal transaksi (Tanggal), gambar representatif barang (Gambar), nama barang (Nama Barang), jumlah barang yang keluar (Jumlah), satuan barang (Satuan), penerima barang (Penerima), keterangan transaksi (Keterangan), tombol aksi untuk mengedit atau menghapus transaksi (Aksi), dan waktu transaksi (Waktu) yang mencakup informasi tanggal, bulan, dan tahun.
   - Searching Bar: Kotak pencarian ini memungkinkan pengguna untuk mencari transaksi keluar berdasarkan kriteria tertentu, seperti nama barang atau tanggal transaksi. Setelah melakukan pencarian, tabel transaksi keluar akan diperbarui sesuai dengan hasil pencarian.
   - Tanggal (dd/mm/yy): Pengguna dapat memilih tanggal transaksi keluar menggunakan format dd/mm/yy, yang menunjukkan hari, bulan, dan tahun.
   - Tombol Tambah Barang Keluar: Tombol ini akan membuka formulir atau halaman khusus untuk memasukkan data tentang barang yang akan keluar dari gudang. Pengguna dapat mengisi informasi seperti tanggal transaksi, gambar barang, nama barang, jumlah barang, satuan, penerima barang, dan keterangan transaksi.
   - Tombol Cetak Laporan: Tombol ini memungkinkan pengguna untuk mencetak laporan atau ringkasan dari daftar transaksi keluar barang yang ditampilkan dalam tabel. Laporan ini dapat bermanfaat untuk keperluan audit, pemantauan stok, atau pencatatan.

   _Fungsi Halaman Barang Masuk_

   - Mencatat Transaksi Keluar Barang: Halaman ini memungkinkan pengguna untuk mencatat setiap transaksi keluar barang yang terjadi, seperti saat melakukan penjualan kepada pelanggan atau mengirimkan barang ke pihak lain.
   - Memantau Persediaan Barang: Dengan mencatat transaksi keluar, sistem akan secara otomatis memperbarui stok barang di gudang, sehingga pengguna dapat memantau persediaan dan menghindari kekurangan stok.
   - Mencari Transaksi Keluar: Fitur pencarian memungkinkan pengguna untuk mencari transaksi keluar berdasarkan kriteria tertentu, sehingga pengguna dapat dengan mudah menemukan transaksi yang dibutuhkan tanpa perlu melihat seluruh daftar transaksi keluar.
   - Cetak Laporan: Dengan adanya tombol cetak laporan, pengguna dapat mencetak laporan berisi ringkasan informasi dari daftar transaksi keluar barang yang ditampilkan dalam tabel, sehingga memudahkan dalam pemantauan stok dan analisis persediaan.

---

## Teknologi yang digunakan

- HTML
- CSS
- Javascript
- PHP
- MySQLi

## Desain Website

Desain yang telah dibuat dapat di cek pada [link desain](https://www.figma.com/file/KGJHzDVG4E3Zk1seG7tM9g/Untitled?type=design&node-id=1%3A31&mode=design&t=6rJTa53aNG1JFsHh-1)

## Tanggung Jawab Tim

| Nama                           | Tanggung Jawab          | Persentase |
| ------------------------------ | ----------------------- | ---------- |
| Sri Mulyana                    | Login dan Logout        | 0%         |
| Yolanda Ester Berliana Ritonga | Stok Barang             | 0%         |
| Santa Falare                   | Barang Masuk dan Keluar | 0%         |
