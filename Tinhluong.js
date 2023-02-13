function Tinhtienluong() {
    var Tienluong = document.getElementById("Luong").value;
    var Giolam = document.getElementById("Ngay").value;
    var TongLuong = 0;
    TongLuong = Tienluong * Giolam;
    document.getElementById("TongLuong").innerHTML = TongLuong.toLocaleString();
}

document.getElementById("btnKetqua").onclick = Tinhtienluong;