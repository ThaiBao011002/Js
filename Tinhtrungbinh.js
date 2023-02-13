function Tong(){
    var Sothu1 = document.getElementById("So1").value;
    var Sothu2 = document.getElementById("So2").value;
    var Sothu3 = document.getElementById("So3").value;
    var Sothu4 = document.getElementById("So4").value;
    var Sothu5 = document.getElementById("So5").value;
    
    
    var TongTB = 0;
     TongTB = (Number(Sothu1) + Number(Sothu2) + Number(Sothu3) + Number(Sothu4) + Number(Sothu5)) / 5;
     console.log(TongTB);
     document.getElementById("Tong").innerHTML = TongTB;

}
 document.getElementById("btnKetquaTB").onclick = Tong;