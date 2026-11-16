Sistem ATM Ramah Mahasiswa dengan Fitur Transaksi Nominal Kecil
Proyek Rekayasa Perangkat Lunak (RPL)
Stacia Nathalie Rare'a (F5512510013)
Retno Resya Dharma Putri Mambuhu (F5512520038)  

## Latar Belakang & Deskripsi Proyek
Dalam kehidupan sehari-hari, mahasiswa sering membutuhkan uang tunai dengan nominal kecil 
untuk berbagai keperluan seperti membayar parkir, membeli makanan, atau kebutuhan mendesak lainnya. 
Namun, transaksi pada mesin ATM konvensional umumnya akan ditolak apabila nominal yang ingin ditarik lebih besar daripada saldo yang tersedia.

Sistem ini dirancang sebagai simulasi ATM berbasis web yang mampu mendeteksi saldo pengguna secara otomatis 
dan memberikan rekomendasi pecahan penarikan alternatif:
* **Saldo $\ge$ Rp50.000:** Sistem menawarkan pecahan standar yaitu **Rp100.000** dan **Rp50.000**.
* **Saldo $<$ Rp50.000:** Sistem mengaktifkan mode ramah mahasiswa dengan menampilkan pilihan pecahan kecil yaitu **Rp20.000** dan **Rp10.000**,
* sehingga saldo yang masih tersedia tetap dapat dimanfaatkan.

## Struktur Berkas Proyek
* `atm.html` — Antarmuka simulasi transaksi ATM (login PIN, cek saldo, tarik tunai, dan riwayat transaksi).
* `logika_atm.js` — Modul logika penentuan rekomendasi nominal pecahan berdasarkan saldo dan stok uang.
* `tes_logika_atm.js` — Berkas pengujian otomatis (*unit test*) untuk memvalidasi fungsi rekomendasi nominal.
* `package.json` — Konfigurasi proyek Node.js dan perintah `npm test`.
* `.github/workflows/ci.yml` — Konfigurasi *workflow* GitHub Actions untuk menjalankan pengujian otomatis (*Continuous Integration*).

## Cara Menjalankan Pengujian Otomatis (CI)
Pastikan **Node.js** sudah terpasang pada perangkat Anda, lalu jalankan perintah berikut di terminal pada direktori utama proyek:
```bash
npm test
