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


/**Buổi 4 */
/**Bài 1 */
document.getElementById('soSanh').onclick=function(){
  var a = Number(document.getElementById('soDauTien').value);
  var b = Number(document.getElementById('soThuHai').value);
  var c = Number(document.getElementById('soThuBa').value);
  var soSanh = '';
  if(a>b&&b>c){
    soSanh = a +">" + b +">" +c;
  }
  else if (a>b&&c>b){
  soSanh = a + ">"+ c +">"+b;
  }
  else if (a>b&&c>a){
    soSanh = c + ">" + a + ">"+b;
  }
  else if (b>a&&b>c){
    soSanh = b + ">"+ a + ">"+c;
  }
  else if (b>c&&c>a){
    soSanh = b + ">" + c + ">" +a;
  }
  else {
    soSanh = a+"<"+b+"<"+c;
  }
  document.getElementById ('ketQua_buoi4_1').innerHTML = soSanh
  }
  /**Bài 2 */
  document.getElementById('guiLoiChao').onclick=function(){
    var loiChao = document.getElementById('loiChao').value;
    if(loiChao === ''){
      loiChao = 'Bạn chưa chọn thành viên';
    }
    else if (loiChao==='B')
    {
      loiChao = 'Xin chào bố';
    }
    else if (loiChao==='M'){
      loiChao = 'Xin chào Mẹ';
    }
    else if (loiChao==='A'){
      loiChao = 'Xin chào Anh Trai';
    }
    else if (loiChao==='E'){
      loiChao = 'Xin chào em gái';
    }
    else {
      loiChao = 'Không có ai để chào'
    }
    document.getElementById('ketQua_buoi4_2').innerHTML=loiChao;
  }
  /**Bài 3 */
    document.getElementById('demSo').onclick=function(){
      var soMot = Number(document.getElementById('soMot').value);
      var soHai = Number(document.getElementById('soHai').value);
      var soBa = Number(document.getElementById('soBa').value);  
      var ketQua = '';
      var soLe = 0;
      var soChan = 0;
      if (soMot%2==0){
        ketQua=soChan +=1;
        soLe=3-soChan
      }else if (soHai%2==0){
        ketQua=soChan +=1;
        soLe=3-soChan;
      }
      else if (soBa%2==0){
        ketQua=soChan+=1;
        soLe=3-soChan;
      }
      else if((soMot%2!=0)&&(soHai%2!=0)&&(soBa%2!=0)) {
        soChan=0;
        soLe=3;
      }
      soLe = 3 - soChan
      document.getElementById('ketQua_buoi4_3').innerHTML = 'Số chẵn có :' + soChan + 'Số lẻ có : ' + soLe;
    }
/**Bài 4 */
document.getElementById('duDoan').onclick=function(){
  var doDaiCanh1 = Number(document.getElementById('doDaiCanh1').value);
  var doDaiCanh2 = Number(document.getElementById('doDaiCanh2').value);
  var doDaiCanh3 = Number(document.getElementById('doDaiCanh3').value);
   var duDoan='';
   if (doDaiCanh1=== doDaiCanh2&&doDaiCanh2===doDaiCanh3){
    duDoan = 'Tam giác đều';
   }
   else if (doDaiCanh1===doDaiCanh2||doDaiCanh1==doDaiCanh3||doDaiCanh2===doDaiCanh3)
   {
    duDoan = 'Tam giác cân';
   }
   else if (doDaiCanh1==Math.sqrt(doDaiCanh2*doDaiCanh2+doDaiCanh3*doDaiCanh3)|| doDaiCanh2==Math.sqrt(doDaiCanh1*doDaiCanh1+doDaiCanh3*doDaiCanh3)||doDaiCanh3==Math.sqrt(doDaiCanh1*doDaiCanh1+doDaiCanh2*doDaiCanh2)){
    duDoan='Tam giác vuông'
   }
else{
  duDoan = 'Tam giác bình thường'
}
document.getElementById('ketQua_buoi4_4').innerHTML = duDoan;
}