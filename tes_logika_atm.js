const assert = require("assert");
const { getOpsiRekomendasi } = require("./logika_atm.js");

const stokNormal = { 100000: 10, 50000: 15, 20000: 20, 10000: 25 };

// Uji 1: Saldo Rp25.000 harus menampilkan pecahan Rp20.000 dan Rp10.000
assert.deepStrictEqual(getOpsiRekomendasi(25000, stokNormal), [20000, 10000]);

// Uji 2: Saldo Rp150.000 harus menampilkan pecahan Rp100.000 dan Rp50.000
assert.deepStrictEqual(getOpsiRekomendasi(150000, stokNormal), [100000, 50000]);

// Uji 3: Saldo Rp5.000 tidak menampilkan opsi penarikan
assert.deepStrictEqual(getOpsiRekomendasi(5000, stokNormal), []);

console.log("Semua pengujian unit berhasil lulus!");