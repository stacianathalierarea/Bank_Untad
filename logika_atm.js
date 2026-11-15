function getOpsiRekomendasi(saldo, stokPecahan) {
  let opsi = [];
  if (saldo >= 50000) {
    if (saldo >= 100000 && stokPecahan[100000] > 0) opsi.push(100000);
    if (saldo >= 50000 && stokPecahan[50000] > 0) opsi.push(50000);
  } else {
    if (saldo >= 20000 && stokPecahan[20000] > 0) opsi.push(20000);
    if (saldo >= 10000 && stokPecahan[10000] > 0) opsi.push(10000);
  }
  return opsi;
}

module.exports = { getOpsiRekomendasi };
