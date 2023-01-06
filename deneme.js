// let sehirler = ['Ankara', 'İstanbul', 'İzmir', 'Bursa', 'Malatya'];
// console.log (sehirler.toString ());
// console.log (sehirler.join (' - '));
// console.clear ();
// a = sehirler.push ('Adana');
// a2 = sehirler.push ('Manisa');
// b = sehirler.length;
// console.log (sehirler.toString ());
// console.log (sehirler.join (' - '), a, a2, b);

// sehirler.pop (); // son elemanı yok eder
// console.log (sehirler);
// console.clear ();

// sehirler.shift (); // ilk elemanı yok eder
// console.log (sehirler);

// sehirler.unshift ('Gaziantep'); //ilk eleman olarak ekler
// console.log (sehirler);
// console.clear ();
// sehirler.splice (6, 0, 'Alo', 'fırat', 654, 45, 85);
// console.log (sehirler);
// console.clear ();

// let insan = {
//   isim: 'Hasan',
//   yas: '23',
//   evliMi: false,
// };

// console.log (insan.isim);
// console.log (typeof insan);
// console.log (insan instanceof Object);

// let renkler = ["kırmızı"]
// console.log(renkler[0])
// console.log(typeof renkler)
// console.log(renkler instanceof Array)

// let myDizi = [1, 2, 3];

// const diziyiKoplayaveIkiileCarp = dizi => {
//   let geciciDizi = [];
//   for (let i = 0; i < dizi.length; i++) {
//     geciciDizi[i] = dizi[i] * 2;
//   }
//   return console.log (geciciDizi);
// };

// diziyiKoplayaveIkiileCarp (myDizi);
// console.clear ();

// let sayilar = [1, 2, 3, 4, 5, 6];

// for (let i = 0; i < sayilar.length; i++) {
//   console.log (sayilar[i]);
// }

// console.clear ();

// let sayilar2 = [1, 2, 3, 5];

// sayilar2.forEach ((sayi, i) => {
//   console.log ('sayi: ' + sayi + ' index numarası: ' + i);
// });

//ana kaynak bozulur
const sayilar = [1, 2, 3, 4, 5, 6];

// sayilar.map (sayi => {
//   sayi *= 2;
//   console.log (sayi);
// });

console.log ('Ana sayılar : ' + sayilar);

const newSayilar = sayilar.map (sayi => {
  return sayi * 2;
});

console.log ('Yeni sayılar: ' + newSayilar);

const insanlar = [
  {isim: 'Mehmet', yas: 32},
  {isim: 'Ahmet', yas: 71},
  {isim: 'Ali', yas: 19},
  {isim: 'Kemal', yas: 45},
];
insanlar.map (i => {
  console.log (i);
});
const a = insanlar.map (i => {
  return i;
  console.log (i);
});

console.log (a);
