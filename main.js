/**Bai 1 */
document.getElementById('tinhLuong').onclick=function(){
  var luong1Ngay = Number(document.getElementById('luong1Ngay').value);
  var soNgayLam = Number(document.getElementById('soNgayLam').value);
  var tinhLuong = soNgayLam * luong1Ngay;
  document.getElementById('ketQua_b1').innerHTML = 'Lương là :' + tinhLuong; 
}
/**Bai 2 */
document.getElementById('tinhTrungBinh').onclick=function(){
  var soThu1 = Number(document.getElementById('soThu1').value);
  var soThu2 = Number(document.getElementById('soThu2').value);
  var soThu3 = Number(document.getElementById('soThu3').value);
  var soThu4 = Number(document.getElementById('soThu4').value);
  var soThu5 = Number(document.getElementById('soThu5').value);
  var tinhTrungBinh = (soThu1+soThu2+soThu3+soThu4+soThu5)/5;
  document.getElementById('ketQua_b2').innerHTML = 'Số trung bình là : '+tinhTrungBinh
}
/**Bai 3 */
document.getElementById('quyDoiTien').onclick=function(){
  var tienUsd = Number(document.getElementById('tienUsd').value);
  var quyDoiTien = tienUsd * 23500 
  document.getElementById('ketQua_b3').innerHTML =   'Số tiền quy đổi là : '+quyDoiTien 
}
/**Bai 4 */
document.getElementById('chuVi','dienTich').onclick=function(){
  var chieuDai = Number(document.getElementById('chieuDai').value);
  var chieuRong = Number(document.getElementById('chieuRong').value);
  var dienTich = chieuDai * chieuRong;
  var chuVi = (chieuDai+chieuRong)*2;
  document.getElementById('ketQua_chuVi').innerHTML = 'Chu Vi là : '+ chuVi;
  document.getElementById('ketQua_dienTich').innerHTML='Diện tích là :'+dienTich;
  }
/**Bai 5 */
document.getElementById('tinhTong').onclick=function(){
var soCo2ChuSo = Number(document.getElementById('soCo2ChuSo').value);
var hangChuc= Math.floor(soCo2ChuSo/10);
var hangDonVi=Math.floor(soCo2ChuSo%10);
var tinhTong = hangChuc+hangDonVi;
document.getElementById('ketQua_b5').innerHTML = 'Kết quả là: ' +tinhTong
}