// let person = {
//     ad: 'hasan',
//     yas: 32,
//     evliMi: false,
// };

// console.log(person.ad);
// console.log(typeof person);
// console.log(person instanceof Object);

// let renkler = ['kırmızı'];
// console.log(renkler[0]);
// console.log(typeof renkler);
// console.log(renkler instanceof Array);
// console.log(renkler instanceof Object);

// const fonksiyon = function () {
//     console.log('merhaba dünya');
// }
// fonksiyon();

// //fonksiyon.test = 'deneme bik bik';

// console.log(typeof fonksiyon);
// console.log(fonksiyon instanceof Object);

// //console.log(fonksiyon.test);

// let sayi = 5;

// const fonk = function (sayi) {
//     sayi = sayi * 2;
//     return sayi;
// }

// console.log(fonk(sayi));
// console.log(sayi);

// let myDizi = [1, 2, 3];
// const diziElemanlariniIkiyleCarp = function (dizi) {
//     let geciciDizi = [];
//     for (let i = 0; i < dizi.length; i++) {
//         geciciDizi[i] = dizi[i] * 2;
//     }
//     return geciciDizi;
// }
// console.log("kopya dizi" + diziElemanlariniIkiyleCarp(myDizi));

/*
const diziyiKopyalaveIkiIleCarp = function (dizi) {
    let geciciDizi = [];
    for (let i = 0; i < dizi.length; i++) {
        geciciDizi[i] = dizi[i] * 2;
    }
     console.log(geciciDizi);
}

const diziyiKopyalaveIkiIleBol = function (dizi) {
    let geciciDizi = [];
    for (let i = 0; i < dizi.length; i++) {
        geciciDizi[i] = dizi[i] / 2;
    }
     console.log(geciciDizi);
}

const diziyiKopyalaveUcEkle = function (dizi) {
    let geciciDizi = [];
    for (let i = 0; i < dizi.length; i++) {
        geciciDizi[i] = dizi[i] + 3;
    }
     console.log(geciciDizi);
}

diziyiKopyalaveIkiIleCarp(myDizi);
diziyiKopyalaveIkiIleBol(myDizi);
diziyiKopyalaveUcEkle(myDizi);
*/
let myDizi = [1, 2, 3];

//first class function
const ikiIleCarp = function (sayi) {
  return sayi * 2;
};
const ikiIleBol = function (sayi) {
  return sayi / 2;
};
const ucEkle = function (sayi) {
  return sayi + 3;
};

const diziIslemleri = function (dizi, islem) {
  let geciciDizi = [];
  for (let i = 0; i < dizi.length; i++) {
    //geciciDizi[i] = dizi[i] + 3;
    geciciDizi[i] = islem (dizi[i]);
  }
  console.log (geciciDizi);
};

//higher order function : parametre olarak fonksiyon alan ve/veya
//return olarak fonksiyon döndüren fonksiyonlardır;
//diziIslemleri higher order fonksiyondur.
//ikiIleCarp veya ikiIleBol callback fonksiyonlardır.

diziIslemleri (myDizi, ikiIleCarp);
diziIslemleri (myDizi, ikiIleBol);
diziIslemleri (myDizi, ucEkle);

console.log (myDizi);

function adimiSoyle (ad, soyad) {
  console.log ('Merhaba ' + ad + ' ' + soyad);
}
adimiSoyle ('hasan', 'topal');

function adimiBagir (ad, soyad, callback) {
  const mesaj = 'MERHABA ' + ad.toUpperCase () + ' ' + soyad.toUpperCase ();
  callback (mesaj);
}

adimiBagir ('hasan', 'topal', function (msj) {
  console.log (msj);
});

/*function mesajGoster(mesaj) {
    console.log(mesaj);
}*/
