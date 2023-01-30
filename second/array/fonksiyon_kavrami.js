
let toplam = 0;
let toplam2 = 0;
for (let i = 0; i <= 10; i++) {
    toplam = toplam + i;
}

for (let i = 30; i <= 60; i++) {
    toplam2 = toplam2 + i;
}

let toplam11 = belliAraliktakiSayilariTopla(0, 10);
let toplam22 = belliAraliktakiSayilariTopla(30, 60);
let toplam33 = belliAraliktakiSayilariTopla(40, 160);

console.log("toplam 1:" + toplam11 + " ve toplam2 :" + toplam22);



function belliAraliktakiSayilariTopla(baslangicSayisi, bitisSayisi) {

    let toplam = 0;
    for (let i = baslangicSayisi; i <= bitisSayisi; i++) {
        toplam = toplam + i;
    }
    console.log("Toplam :" + toplam);
    return toplam;


}

selamVer();
//parametresiz fonksiyon
function selamVer() {
    console.log("Merhaba");
}


//10 ve 20 bu fonksiyonun argumanlarıdır
let sayilarınToplami = sayilariTopla(10, 20);
console.log("Toplam :" + sayilarınToplami);


//parametre alan fonksiyon ,sayi1 ve sayi2 parametredir, ve geriye sayi1 ve sayi2 toplamını döndürür.
function sayilariTopla(sayi1, sayi2) {
    console.log("Sayıların toplamı :" + (sayi1 + sayi2));
    return sayi1 + sayi2;
}

let sayi = 10;
console.log(typeof sayi);
console.log(typeof sayilariTopla);


