function tambah(){
    var frm = window.document.getElementById("kalkulator");
    //konversi tipe data dari text ke bil decimal
    var angka1 = parseFloat(frm.a1.value);
    var angka2 = parseFloat(frm.a2.value);
    total = angka1 + angka2;
    //meletakkan hasil ke element hs
    frm.hs.value = total;
}

function kurang(){
    var frm = window.document.getElementById("kalkulator");
    //konversi tipe data dari text ke bil decimal
    var angka1 = parseFloat(frm.a1.value);
    var angka2 = parseFloat(frm.a2.value);
    total = angka1 - angka2;
    //meletakkan hasil ke element hs
    frm.hs.value = total;
}

function kali(){
    var frm = window.document.getElementById("kalkulator");
    //konversi tipe data dari text ke bil decimal
    var angka1 = parseFloat(frm.a1.value);
    var angka2 = parseFloat(frm.a2.value);
    total = angka1 * angka2;
    //meletakkan hasil ke element hs
    frm.hs.value = total;
}

function bagi(){
    var frm = window.document.getElementById("kalkulator");
    //konversi tipe data dari text ke bil decimal
    var angka1 = parseFloat(frm.a1.value);
    var angka2 = parseFloat(frm.a2.value);
    total = angka1 / angka2;
    //meletakkan hasil ke element hs
    frm.hs.value = total;
}

function pangkat(){
    var frm = window.document.getElementById("kalkulator");
    //konversi tipe data dari text ke bil decimal
    var angka1 = parseFloat(frm.a1.value);
    var angka2 = parseFloat(frm.a2.value);
    total = Math.pow(angka1,angka2);
    //meletakkan hasil ke element hs
    frm.hs.value = total;
}

function kosongin1(){
    var frm = window.document.getElementById("kalkulator");
	frm.a1.value = "";
}

function kosongin2(){
    var frm = window.document.getElementById("kalkulator");
	frm.a2.value = "";	
}

function kosonginAll(){
    var frm = window.document.getElementById("kalkulator");
	frm.a1.value = "";
	frm.a2.value = "";	
	frm.hs.value = "";	
}				