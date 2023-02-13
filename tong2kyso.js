function Tongkyso(){
    var chuso = document.getElementById("So").value;

    var a = chuso % 10;
    var b = Math.floor (chuso/10);

    var Tong = 0;
    Tong = Number(a) + Number(b);

    document.getElementById("Tong2so").innerHTML = Tong;
}
document.getElementById("btntong").onclick = Tongkyso;
