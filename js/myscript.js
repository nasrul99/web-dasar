function penilaian(){
    var frm = window.document.getElementById("formulir");
    var siswa = frm.nama.value;
    var skor = frm.nilai.value;
    var ket;
    //siswa lulus jika nilai minimal 60
    if(skor >= 60){
        ket = "Lulus";
    }
    else{
        ket = "Gagal";
    }
    //cetak
    alert("Nama Siswa: "+siswa+
        "\nNilai: "+skor+
        "\nKeterangan: "+ket);
}

function cekLogin(){
    var frm = window.document.getElementById("login");
    var user = frm.username.value;
    var pass = frm.password.value;
    //cek login
    if(user == "admin" && pass == "mimin"){
        ket = "Hello "+user+", Role Anda Administrator";
    }
    else if(user == "budi" && pass == "okedeh"){
        ket = "Hello "+user+", Role Anda Staff";
    }
    else{
        ket = "Hello "+user+", Anda Gagal Login";
    }
    alert(ket);
}