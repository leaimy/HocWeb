const mangSo = document.querySelectorAll('.cell');
const hienThi = document.querySelector('.manhinh');
const ketqua = document.getElementById('ketqua');
const ac = document.getElementById('xoa');

let bieuthuc = '';
let mangBieuThuc = [];

for (let nutbam of mangSo) {
  nutbam.addEventListener('click', function () {
    const giatri = nutbam.textContent;
    mangBieuThuc.push(giatri);

    bieuthuc += giatri;
    hienThi.textContent = bieuthuc;
  });
}

ketqua.addEventListener('click', function () {
  const so1 = Number(mangBieuThuc[0]);
  const so2 = Number(mangBieuThuc[2]);
  const pheptoan = mangBieuThuc[1];
  const kq = tinhToan(so1, so2, pheptoan);

  hienThi.textContent = kq;
});

ac.addEventListener('click', function () {
  hienThi.textContent = '0';
  bieuthuc = '';
  mangBieuThuc = [];
});

function tinhToan(so1, so2, pheptoan) {
  let ketQua;
  switch (pheptoan) {
    case '+':
      ketQua = so1 + so2;
      break;
    case '-':
      ketQua = so1 - so2;
      break;
    case 'x':
      ketQua = so1 * so2;
      break;
    case '/':
      ketQua = so1 / so2;
      break;
  }
  return ketQua;
}
