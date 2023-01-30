// //array destructuring
// let isim = ['ali', 'altunbilek'];
// const ad = isim[0];
// const soyad = isim[1];

// const [first, last] = isim;

// console.log(first, last);

// const renkler = ['sarı', 'yesil', 'mavi', 'kırmızı', 'kahverengi','turuncu','mor'];

// const [r1, r2, , r3] = renkler;

// const [c1, c2, ...geriKalanRenkler] = renkler;
// console.log(c1, c2, geriKalanRenkler);

// //default varsayılan değer ataması
// const [t1, t2, t3="Bilinmiyor", t4="Tanımlanmadı"] = ['galatasaray', 'beşiktaş',"fener"];

// console.log(t1,t2,t3,t4);

// //object destructuring
// let ayarlar = {
//     //baslik: 'JS Harika',
//     //genislik: '300px',
//     yukseklik: '300px'
// };

// //const baslik = ayarlar.baslik;

// const {baslik:b="varsayılan baslık",genislik:g="vARSAYILAN GENISLIK",yukseklik:y} = ayarlar;

// //console.log(ayarlar.genislik, baslik);

// //console.log(baslik, genislik, yukseklik);
// console.log("***" + b, g, y);

// const il = 'ankara';
// const ilce = 'yenimahalle';

// const sehir = {
//     il: il,
//     ilce:ilce
// }

// const sehir2 = { il, ilce };
// console.log(sehir2);

// const person = {
//     ad: 'ali',
//     yas: 32,
//     il: 'ankara',
//     ilce: 'yenimahalle'
// }

// const { yas, ...geriKalanDegerler } = person;
// console.log(yas, geriKalanDegerler);

let kisi = {
  ad: {
    firstName: 'ali',
    lastName: 'altunbilek',
  },
  sevdigiRenkler: ['sarı', 'kırmızı'],
  yas: 32,
};

const {ad: {firstName, lastName}, sevdigiRenkler: [renk1, renk2], yas} = kisi;

console.log (firstName, lastName, renk1, renk2, yas);

// console.log(kisi.ad.firstName);
// const { ad: { firstName, lastName } } = kisi;

// console.log(firstName + " " + lastName);

// console.log(kisi.sevdigiRenkler[0]);
// //const sevdigiRenkler = kisi.sevdigiRenkler;
// const { sevdigiRenkler : [renk1, renk2] } = kisi;
// //console.log(sevdigiRenkler);
// console.log(renk1, renk2);
