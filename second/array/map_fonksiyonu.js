const sayilar = [1, 2, 3, 4, 5, 6];

function MAP (sayilar, islem) {
  const yeniDizi = [];
  for (let i = 0; i < sayilar.length; i++) {
    yeniDizi.push (islem (sayilar[i], i));
  }
  return yeniDizi;
}

const YENIDIZI = MAP (sayilar, function (sayi, index) {
  return sayi / 2;
});
console.log (YENIDIZI);

// const yeniSayilar = sayilar.map(function (sayi) {
//     return sayi * 2;
// });

// console.log(sayilar);
// console.log(yeniSayilar);
// console.log(sayilar);

// const kitaplar = [
//     { adi: '1', sayfaSayisi: 30 },
//     { adi: '2', sayfaSayisi: 40 },
//     { adi: '3', sayfaSayisi: 50 },
// ];

// const sayfaSayilari = kitaplar.map(function (kitap) {
//     return kitap.sayfaSayisi;
// })

// console.log(sayfaSayilari);

// const kisiler = [
//     {adi:'emre', soyadi:'altunbilek'},
//     {adi:'hasan', soyadi:'yılmaz'},
//     {adi:'ali', soyadi:'koç'},
// ];

// const yeniIsimler = kisiler.map((kisi) => kisi.adi + " " + kisi.soyadi);
// console.log(yeniIsimler);
