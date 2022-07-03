/**Bai 1 */
document.getElementById("tinhLuong").onclick = function () {
  var luong1Ngay = Number(document.getElementById("luong1Ngay").value);
  var soNgayLam = Number(document.getElementById("soNgayLam").value);
  var tinhLuong = soNgayLam * luong1Ngay;
  document.getElementById("ketQua_b1").innerHTML = "Lương là :" + tinhLuong;
};
/**Bai 2 */
document.getElementById("tinhTrungBinh").onclick = function () {
  var soThu1 = Number(document.getElementById("soThu1").value);
  var soThu2 = Number(document.getElementById("soThu2").value);
  var soThu3 = Number(document.getElementById("soThu3").value);
  var soThu4 = Number(document.getElementById("soThu4").value);
  var soThu5 = Number(document.getElementById("soThu5").value);
  var tinhTrungBinh = (soThu1 + soThu2 + soThu3 + soThu4 + soThu5) / 5;
  document.getElementById("ketQua_b2").innerHTML =
    "Số trung bình là : " + tinhTrungBinh;
};
/**Bai 3 */
document.getElementById("quyDoiTien").onclick = function () {
  var tienUsd = Number(document.getElementById("tienUsd").value);
  var quyDoiTien = tienUsd * 23500;
  document.getElementById("ketQua_b3").innerHTML =
    "Số tiền quy đổi là : " + quyDoiTien;
};
/**Bai 4 */
document.getElementById("chuVi", "dienTich").onclick = function () {
  var chieuDai = Number(document.getElementById("chieuDai").value);
  var chieuRong = Number(document.getElementById("chieuRong").value);
  var dienTich = chieuDai * chieuRong;
  var chuVi = (chieuDai + chieuRong) * 2;
  document.getElementById("ketQua_chuVi").innerHTML = "Chu Vi là : " + chuVi;
  document.getElementById("ketQua_dienTich").innerHTML =
    "Diện tích là :" + dienTich;
};
/**Bai 5 */
document.getElementById("tinhTong").onclick = function () {
  var soCo2ChuSo = Number(document.getElementById("soCo2ChuSo").value);
  var hangChuc = Math.floor(soCo2ChuSo / 10);
  var hangDonVi = Math.floor(soCo2ChuSo % 10);
  var tinhTong = hangChuc + hangDonVi;
  document.getElementById("ketQua_b5").innerHTML = "Kết quả là: " + tinhTong;
};

/**Buổi 4 */
/**Bài 1 */
document.getElementById("soSanh").onclick = function () {
  var a = Number(document.getElementById("soDauTien").value);
  var b = Number(document.getElementById("soThuHai").value);
  var c = Number(document.getElementById("soThuBa").value);
  var soSanh = "";
  if (a > b && b > c) {
    soSanh = a + ">" + b + ">" + c;
  } else if (a > b && c > b) {
    soSanh = a + ">" + c + ">" + b;
  } else if (a > b && c > a) {
    soSanh = c + ">" + a + ">" + b;
  } else if (b > a && b > c) {
    soSanh = b + ">" + a + ">" + c;
  } else if (b > c && c > a) {
    soSanh = b + ">" + c + ">" + a;
  } else {
    soSanh = a + "<" + b + "<" + c;
  }
  document.getElementById("ketQua_buoi4_1").innerHTML = soSanh;
};
/**Bài 2 */
document.getElementById("guiLoiChao").onclick = function () {
  var loiChao = document.getElementById("loiChao").value;
  if (loiChao === "") {
    loiChao = "Bạn chưa chọn thành viên";
  } else if (loiChao === "B") {
    loiChao = "Xin chào bố";
  } else if (loiChao === "M") {
    loiChao = "Xin chào Mẹ";
  } else if (loiChao === "A") {
    loiChao = "Xin chào Anh Trai";
  } else if (loiChao === "E") {
    loiChao = "Xin chào em gái";
  } else {
    loiChao = "Không có ai để chào";
  }
  document.getElementById("ketQua_buoi4_2").innerHTML = loiChao;
};
/**Bài 3 */
document.getElementById("demSo").onclick = function () {
  var soMot = Number(document.getElementById("soMot").value);
  var soHai = Number(document.getElementById("soHai").value);
  var soBa = Number(document.getElementById("soBa").value);
  var ketQua = "";
  var soLe = 0;
  var soChan = 0;
  if (soMot % 2 == 0) {
    ketQua = soChan += 1;
    soLe = 3 - soChan;
  } else if (soHai % 2 == 0) {
    ketQua = soChan += 1;
    soLe = 3 - soChan;
  } else if (soBa % 2 == 0) {
    ketQua = soChan += 1;
    soLe = 3 - soChan;
  } else if (soMot % 2 != 0 && soHai % 2 != 0 && soBa % 2 != 0) {
    soChan = 0;
    soLe = 3;
  }
  soLe = 3 - soChan;
  document.getElementById("ketQua_buoi4_3").innerHTML =
    "Số chẵn có :" + soChan + "Số lẻ có : " + soLe;
};
/**Bài 4 */
document.getElementById("duDoan").onclick = function () {
  var doDaiCanh1 = Number(document.getElementById("doDaiCanh1").value);
  var doDaiCanh2 = Number(document.getElementById("doDaiCanh2").value);
  var doDaiCanh3 = Number(document.getElementById("doDaiCanh3").value);
  var duDoan = "";
  if (doDaiCanh1 === doDaiCanh2 && doDaiCanh2 === doDaiCanh3) {
    duDoan = "Tam giác đều";
  } else if (
    doDaiCanh1 === doDaiCanh2 ||
    doDaiCanh1 == doDaiCanh3 ||
    doDaiCanh2 === doDaiCanh3
  ) {
    duDoan = "Tam giác cân";
  } else if (
    doDaiCanh1 ==
    Math.sqrt(doDaiCanh2 * doDaiCanh2 + doDaiCanh3 * doDaiCanh3) ||
    doDaiCanh2 ==
    Math.sqrt(doDaiCanh1 * doDaiCanh1 + doDaiCanh3 * doDaiCanh3) ||
    doDaiCanh3 == Math.sqrt(doDaiCanh1 * doDaiCanh1 + doDaiCanh2 * doDaiCanh2)
  ) {
    duDoan = "Tam giác vuông";
  } else {
    duDoan = "Tam giác bình thường";
  }
  document.getElementById("ketQua_buoi4_4").innerHTML = duDoan;
};
/**Bài tập thêm  */
//Bài 1
// document.getElementById('ngayHomQua').onclick=function(){
//   var ngay = Number(document.getElementById('nhapNgay').value);
//   var thang =Number(document.getElementById('nhapThang').value);
//   var nam = Number(document.getElementById('nhapNam').value);
//   var ngayHomQua = '';
//   var ngayMai ='';
//   if (ngay<=31){
//     ngayHomQua = 'ngay'/ 'thang' / 'nam';

//     else if ()

//   }

//}
//Bài 2
document.getElementById("tinhNgay").onclick = function () {
  var thang = Number(document.getElementById(nhapThang2).value);
  var nam = Number(document.getElementById(nhapNam2).value);
  var soThang = "";
  var soNgay = 0;

  switch (thang) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12: {
      soThang = "Tháng một";
    }
  }
};

//Bài tập hàm
//Bài 1
document.getElementById("tinhDiem").onclick = function () {
  var khuVuc = Number(document.getElementById("khuVuc").value);
  var doiTuong = Number(document.getElementById("doiTuong").value);
  var diemChuan = Number(document.getElementById('diemChuan').value);
  var diemMon1 = Number(document.getElementById('diemMon1').value);
  var diemMon2 = Number(document.getElementById('diemMon2').value);
  var diemMon3 = Number(document.getElementById('diemMon3').value);
  var tongDiem = 0;
  var ketQuaThi = "";
  tongDiem = diemMon1 + diemMon2 + diemMon3
  if (khuVuc === 2) {
    tongDiem = tongDiem + 2;
  } else if (khuVuc === 1) {
    tongDiem = tongDiem + 1;
  } else if (khuVuc === 0.5) {
    tongDiem = tongDiem + 0.5;
  } else {
    tongDiem = tongDiem + 0;
  }

  if (doiTuong === 1) {
    tongDiem = tongDiem + 2.5;
  } else if (doiTuong === 2) {
    tongDiem = tongDiem + 1.5;
  } else if (doiTuong === 3) {
    tongDiem = tongDiem + 0;
  }
  if (tongDiem >= diemChuan && diemMon1 > 0 && diemMon2 > 0 && diemMon2 > 0) {
    ketQuaThi = 'Đậu, tổng điểm : ' + tongDiem;
  } else {
    ketQuaThi = 'Rớt, tổng điểm : ' + tongDiem;
  }
  document.getElementById('ketQuaBaiTapHam').innerHTML = ketQuaThi;
}
//Bài 2:
document.getElementById("tinhTienDien").onclick = function () {
  var hoTen = document.getElementById('hoTen').value;
  var soKw = Number(document.getElementById('soKw').value);
  //output
  var tongTien = 0;
  //progress
  if (soKw > 0 && soKw <= 50) {
    tongTien = soKw * 500;
  } else if (soKw > 50 && soKw <= 100) {
    tongTien = (50 * 500) + (soKw - 50) * 650;
  } else if (soKw > 100 && soKw <= 200) {
    tongTien = (50 * 500) + (50 * 650) + (soKw - 100) * 850;
  } else if (soKw > 200 && soKw <= 350) {
    tongTien = (50 * 500) + (50 * 650) + (100 * 850) + (soKw - 200) * 1100;
  } else if (soKw > 350) {
    tongTien = (50 * 500) + (50 * 650) + (100 * 850) + (150 * 1100) + (soKw - 350) * 1300;
  } else {
    tongTien = 'Không xác định!';
  }

  document.getElementById('ketQuaTinhTienDien').innerHTML = 'Họ tên: ' + hoTen + ', phải trả tổng tiền điện là ' + tongTien.toLocaleString() + 'VND';
}
//Tìm số nhỏ nhất
document.getElementById("btnXemKetQua").onclick = function () {
  var sum = 0;
  var n = 0;
  while (sum < 10000) {
    n++;
    sum += n;
  }
  document.getElementById("ketQua_TimSoNhoNhat").innerHTML =
    "Số nguyên dương nhỏ nhất: " + n;
};
//tính tổng
document.getElementById("btnTinhTong").onclick = function () {
  var x = Number(document.getElementById("nhapSoX").value);
  var n = Number(document.getElementById("nhapSoN").value);
  var t = 1;
  var s = 0;
  for (i = 1; i <= n; i++) {
    t = t * x;
    s += t;
  }
  document.getElementById("ketQua_TinhTong").innerHTML = "Tổng: " + s;
};
//giai thừa
document.getElementById("btnTinhGiaiThua").onclick = function () {
  var so = Number(document.getElementById("nhapSo").value);
  var giaiThua = 1;
  for (i = 1; i <= so; i++) {
    giaiThua = giaiThua * i;
  }
  document.getElementById("ketQuaGiaiThua").innerHTML =
    "Giai thừa là: " + giaiThua;
};
//in thẻ div
document.getElementById("btnTaoTheDiv").onclick = function () {
  var content = "";
  var buocNhay = 1;
  while (buocNhay <= 10) {
    if (buocNhay % 2 == 0) {
      content +=
        '<div style="background-color: red; color: white;">Div chẵn</div>';
    } else {
      content +=
        '<div style="background-color: blue; color: white;">Div lẻ</div>';
    }
    buocNhay++;
  }
  document.getElementById("ketQuaTaoTheDiv").innerHTML = content;
};
var arrNumber = [];
document.getElementById("btnThemSo").onclick = function (e) {
  e.preventDefault();
  var iSo = Number(document.getElementById("nhapSo_n").value);
  var ketQua = "";
  arrNumber.push(iSo);
  ketQua = arrNumber;
  document.getElementById("ketQuaThemSo").innerHTML = ketQua;
};
document.getElementById("btnTinhTongSoDuong").onclick = function () {
  var tong = 0;
  for (var i = 0; i < arrNumber.length; i++) {
    tong += arrNumber[i];
  }
  document.getElementById("ketQuaTinhTongSoDuong").innerHTML =
    "Tổng số Dương là : " + tong;
};
document.getElementById("btnDemSoDuong").onclick = function () {
  var dem = 0;
  for (var index = 0; index < arrNumber.length; index++)
    if (arrNumber[index] > 0) {
      dem++;
    }
  document.getElementById("ketQuaDemSoDuong").innerHTML = "Số dương là: " + dem;
};
document.getElementById("btnTimSoNhoNhat").onclick = function () {
  var soNhoNhat = arrNumber[0];
  for (var index = 0; index < arrNumber.length; index++) {
    if (arrNumber < soNhoNhat) {
      arrNumber[index] = soNhoNhat;
    }
  }
  document.getElementById("ketQuaTimSoNhoNhat").innerHTML =
    "Số nhỏ nhất là: " + soNhoNhat;
};

document.querySelector('#btnTimSoDuongNhoNhat').onclick = function () {
  var arrSoDuong = arrNumber[0];
  for (var index = 0; index < arrNumber.length; index++) {
    if (arrNumber[index] > 0 && arrNumber[index] < arrSoDuong) {
      arrSoDuong = arrNumber[index];
    }
    break;
  }

  document.querySelector('#ketQuaTimSoDuongNhoNhat').innerHTML = arrSoDuong;
}
document.querySelector('#btnTimSoChan').onclick = function () {
  var soChan = 0;
  for (var index = 0; index < arrNumber.length; index++) {
    if (arrNumber[index] % 2 === 0) {
      soChan = arrNumber[index];
    }
  }
  document.querySelector('#ketQuaTimSoChan').innerHTML = soChan;
}
document.querySelector('#btnDoiCho').onclick = function () {
  var viTri1 = Number(document.querySelector('#viTri1').value);
  var viTri2 = Number(document.querySelector('#viTri2').value);
  var viTri = arrNumber[viTri1]

  for (var index = 0; index < arrNumber.length; index++) {
    arrNumber[viTri1] = arrNumber[viTri2];
    arrNumber[viTri2] = viTri;
  }
  document.querySelector('#ketQuaDoiCho').innerHTML = arrNumber;
}
document.querySelector('#btnSapXep').onclick = function () {
  arrNumber.sort(function (so2, so1) {
    return so2 - so1;
  });
  document.querySelector('#ketQuaSapXepTangDan').innerHTML = arrNumber;
}
document.querySelector('#btnTimSoNguyenToDauTien').onclick = function () {
  var SoNguyenToDauTien = 0;
  for (var index = 0; index < arrNumber.length; index++) {
    kiemTra = kiemTraSoNguyenTo(arrNumber[index]);
    if (kiemTra === true && arrNumber[index] > 1) {
      SoNguyenToDauTien = arrNumber[index];
      break;
    }
  }
  document.querySelector('#ketQuaTimSoNguyenToDauTien').innerHTML = SoNguyenToDauTien;
}

function kiemTraSoNguyenTo(so) {
  var kiemTra = true;
  for (var uoc = 2; uoc <= so / 2; uoc++) {
    if (so % uoc === 0) {
      kiemTra = false;
      break;
    }
  } return kiemTra;
}

var arrNumberNew = [];
document.getElementById("btnThemSoMoi").onclick = function (e) {
  e.preventDefault();
  var iSo = Number(document.getElementById("soNguyenMoi").value);
  var ketQua = "";
  arrNumberNew.push(iSo);
  ketQua = arrNumberNew;
  document.getElementById("ketQuaThemSoMoi").innerHTML = ketQua;
};
document.querySelector('#btnDemSoNguyen').onclick = function () {
  var soLuong = 0;
  for (var index = 0; index < arrNumberNew.length; index++) {
    if (Number.isInteger(arrNumberNew[index]) === true) {
      soLuong++;
    }
  }
  document.querySelector('#ketQuaDemSoNguyen').innerHTML = soLuong;
};
document.querySelector('#btnSoSanhSoLuong').onclick = function () {
  var ketQua = '';
  var soDuong = 0;
  var soAm = 0;
  for (var index = 0; index < arrNumber.length; index++) {
    if (arrNumber[index] > 0) {
      soDuong++;
    }
  }
  for (var index = 0; index < arrNumber.length; index++) {
    if (arrNumber[index] < 0) {
      soAm++;
    }
  }
  if (soDuong > soAm) {
    ketQua = 'Số dương nhiều hơn số âm'
  } else if (soAm > soDuong) {
    ketQua = 'Số dương ít hơn số âm'
  }
  else {
    ketQua = 'Số dương = số âm'
  }
  document.querySelector('#ketQuaSoSanh').innerHTML = ketQua;
}