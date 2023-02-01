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

console.clear ();
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
