// Obje tanımlama
let ogrenci1 = {
  ad: 'Hasan',
  yas: 23,
  dersler: ['C#', 'JS', 'TS'],
};
console.log (ogrenci1);
console.log (ogrenci1['ad']);
ogrenci1['ad'] = 'Mustafa';
console.log (ogrenci1['ad']);
console.log (typeof ogrenci1.ad);
console.log (typeof ogrenci1.yas);
console.log (typeof ogrenci1.dersler);

// Objeye method ekleme
let ogrenci2 = {
  ad: 'Fahrettin',
  yas: 23,
  dersler: ['C#', 'JAVA', '.NET'],
  login: function () {
    console.log ('Öğrenci giriş yaptı.');
  },
  logout () {
    console.log ('Öğrenci çıkış yaptı.');
  },
  printLessons () {
    this.dersler.forEach (ders => console.log (ders));
  },
};

ogrenci2.login ();
console.log (
  `Giriş yapan öğrencinin ismi: ${ogrenci2.ad} - yaşı: ${ogrenci2.yas}`
);
ogrenci2.printLessons ();
ogrenci2.logout ();

ogrenci2.dersler.forEach (ders => console.log (ders));

// Dizinin içinde obje tanımlama
let ogrenci3 = {
  ad: 'Fahrettin',
  yas: 23,
  dersler: [
    {isim: 'C#', puan: 90},
    {isim: 'JS', puan: 80},
    {isim: 'TS', puan: 100},
  ],
  login: function () {
    console.log ('Öğrenci giriş yaptı.');
  },
  logout () {
    console.log ('Öğrenci çıkış yaptı.');
  },
  printLessons () {
    this.dersler.forEach (ders =>
      console.log ('Dersin ismi: ' + ders.isim + ' - Alınan puan: ' + ders.puan)
    );
  },
};
ogrenci3.printLessons ();

// Math objesi
console.log (Math);
console.log (Math.PI);

const sayi = 5.7;

// round : en yakın tam sayıyı yazdırır.
console.log (Math.round (sayi));

// floor : bir altına yuvarlar.
console.log (Math.floor (sayi));

// ceil : bir yukarı yuvarlar.
console.log (Math.ceil (sayi));

// trunc : virgülden sonrasını siler.
console.log (Math.trunc (sayi));

// random : 0 ile 1 arasında rastgele sayı üretir.
let rastgele = Math.random ();
console.log (Math.trunc (rastgele * 100)); // 0 ile 100 arasında rastgele değerler alacaktır.
