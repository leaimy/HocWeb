// // for (let i = 1; i < 11; i++) {
// //   console.log(i);
// // }
// const so: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < so.length; i++) {
//   console.log(so[i]);
// }
// for (let i of so) {
//   console.log(i);
// }
// so.forEach(function (value: number) {
//   console.log(value);
// });
// const soBatDau = Number(prompt('Nhập số bắt đầu: '));
// const soKetThuc = Number(prompt('Nhập số kết thúc: '));
// const soBatDau: number = 1;
// const soKetThuc: number = 100;
var minEl = document.getElementById('min');
var maxEl = document.getElementById('max');
var soBiMatBtn = document.getElementById('soBiMat');
var soDoanEl = document.getElementById('soCanDoan');
var soDoanBtn = document.getElementById('soDoan');
var khoang = document.getElementById('khoang');
var ketQua = document.getElementById('ket-qua');
var hopKetQua = document.getElementById('ket-qua-box');
var soBiMat = -1;
soBiMatBtn.addEventListener('click', function () {
    var soBatDau = Number(minEl.value);
    var soKetThuc = Number(maxEl.value);
    soBiMat = Math.floor(Math.random() * soKetThuc) + soBatDau;
    khoang.innerText = "S\u1ED1 b\u00ED m\u1EADt \u0111\u00E3 \u0111\u01B0\u1EE3c t\u1EA1o ra trong kho\u1EA3ng: [" + soBatDau + " - " + soKetThuc + "]";
});
soDoanBtn.addEventListener('click', function () {
    hopKetQua.style.display = 'flex';
    var soDoan = Number(soDoanEl.value);
    if (soDoan === 0) {
        ketQua.innerText = 'Hãy nhập vào 1 số để đoán!';
        return;
    }
    var msg = '';
    if (soBiMat === soDoan) {
        msg = 'Chúc mừng bạn đã đoán đúng! Số bí mật là: ' + soBiMat;
    }
    else if (soBiMat < soDoan) {
        msg = 'Bạn cần đoán số nhỏ hơn!';
    }
    else {
        msg = 'Bạn cần đoán số lớn hơn!';
    }
    ketQua.innerText = msg;
});
