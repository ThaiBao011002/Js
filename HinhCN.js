function Hinh(){
    var Chieudai = document.getElementById("CD").value;
    var Chieurong = document.getElementById("CR").value;

    var Dientich = 0;
    Dientich = Chieudai * Chieurong;

    var Chuvi = 0;
    Chuvi = (Number(Chieudai) + Number(Chieurong)) / 2;
    
    document.getElementById("DT").innerHTML = Dientich;
    document.getElementById("CV").innerHTML = Chuvi;

}
document.getElementById("btnHinh").onclick = Hinh;