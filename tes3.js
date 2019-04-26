function menu_input() {
do {
    var menu = parseInt(prompt('Selamat datang di PasarOnline \ndaftar menu: \n1. Ayam @ 25.000 \n2. Ikan @ 50.000\n 3. Sapi @ 75.000'))
}
while (menu == 0 || menu >3);

var nAyam,nIkan,nSapi
var kAyam = 0
var kIkan = 0
var kSapi = 0
switch (menu) {
    case 1:
        var nAyam = parseInt(prompt('masukkan jumlah ayam'))
        if (isNaN(nAyam)){
           return 0;
        }    
        break;
    case 2:
        var nIkan = parseInt(prompt('masukkan jumlah ikan'))
        if (isNaN(nIkan)){
            return 0;
        }
        break;
    case 3:
        var nSapi = parseInt(prompt('masukkan jumlah sapi'))
        if (isNaN(nSapi)){
            return 0;
        }
        break;
}
kAyam = kAyam += nAyam
kIkan = kIkan += nIkan
kSapi = kSapi += nSapi

var lanjut = confirm('ada yang mau ditambahkan? ')
if (lanjut == false){
    var jml = (nAyam * 25000) + (nIkan*50000 ) + (nSapi*75000)
    alert('item yang dibeli : \n Ayam = ' + nAyam  +'\n ikan = ' + nIkan +'\n sapi = ' + nSapi + '\n Total pembelian = ' + jml)
    }
else{
    menu_input();
}
}