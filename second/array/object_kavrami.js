let Hasan = {
  adi: 'Hasan',
  soyAdi: 'Sertkaya',
  dogumYili: 1899,
  evliMi: false,
  sevdigiRenkler: ['yeşil', 'mavi'],
  yasiHesapla: function () {
    this.yas = 2020 - this.dogumYili;
  },
};

let Ali = {
  adi: 'Ali',
  soyAdi: 'Faruk',
  dogumYili: 1978,
  evliMi: true,
  sevdigiRenkler: ['yeşil', 'mavi'],
  yasiHesapla: function () {
    this.yas = 2020 - this.dogumYili;
  },
};

console.log (Hasan);
console.log (Hasan.dogumYili);
console.log (Hasan['dogumYili']);

Hasan.yasiHesapla ();
console.log (Hasan.yas);

Ali.soyAdi = 'Yeni soyadı';
Ali['soyAdi'] = 'Yepyeni soyadı';
console.log (Ali);

let ogrenciler = [Hasan, Ali];
console.log (ogrenciler[0].dogumYili);

let fatma = new Object ();
fatma.adi = 'Fatma';
fatma.dogumYili = 1995;
