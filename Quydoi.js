function Quydoi(){
    var Ngoaite = document.getElementById("USD").value;

    var TienViet = 0;
    TienViet = Ngoaite * 23500;
    document.getElementById("VNĐ").innerHTML = TienViet.toLocaleString();

}
document.getElementById("btnQuydoi").onclick = Quydoi;