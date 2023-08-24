<?php
session_start();
print_r($_SESSION);
print_r($_COOKIE);

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Halaman Admin</title>
</head>

<body>
    <h1>Halo, <?= $_SESSION['username']; ?></h1>
    <div>
        <h2>STOK BARANG SERDA</h2>
        <table border="1">
            <thead>
                <th>No</th>
                <th>Nama Barang</th>
                <th>Deskripsi</th>
                <th>Jumlah</th>
            </thead>
            <tbody>
                <?php
                $query = mysqli_query($koneksi, "SELECT * FROM stock");
                $no = 0;
                while ($data = mysqli_fetch_array($query)) {
                    $no++;
                ?>
                    <tr>
                        <td><?= $no; ?></td>
                        <td><?= $data['nama_barang']; ?></td>
                        <td><?= $data['deskripsi']; ?></td>
                        <td><?= $data['stock']; ?></td>
                        <td><a href="#">Edit</a> | <a href="#">Hapus</a></td>
                    </tr>

                <?php
                }
                ?>
            </tbody>
        </table>
    </div>

    </table>
    </div>
    <a href="../logout.php">Logout</a>
</body>

</html>

<?php
?>