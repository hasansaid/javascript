let sayilar = [1, 2, 3, 4, 5, 6];

diziyiYazdir(sayilar, function (deger, index) {
    console.log("değer:" + deger + " index :" + index);
});

/* Kendi foreach fonksiyonumuz*/
function diziyiYazdir(dizi, callback) {
    for (let i = 0; i < dizi.length; i++) {
        callback(dizi[i], i);
    }
}


// sayilar.forEach(function (deger, index) {
//     console.log(deger, index);
// })

// sayilar.forEach(ikiParametreAlanFOnksiyon);

// function ikiParametreAlanFOnksiyon(sayi, index) {
//     console.log(sayi ,index);
// }



// console.log("*****************************");
// for (let i = 0; i < sayilar.length; i++){
//     console.log(sayilar[i]);
// }
// console.log("*****************************");
// for (let item of sayilar) {
//     console.log(item);
// }