<?php
$host_db    = "localhost";
$user_db    = "root";
$pass_db    = "";
$nama_db    = "serda_store";
$koneksi    = mysqli_connect($host_db, $user_db, $pass_db, $nama_db);

if (!$koneksi) {
    echo 'Koneksi gagal terhubung. Pesan error: ' .  mysqli_connect_errno();
}
