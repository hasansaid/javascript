//querySelector
// Etiket seçme.
let hata = document.querySelector ('p'); // ilk p etiketini seçer.
console.log (hata);

// Class seçme.
let hata2 = document.querySelector ('.error'); // ilk error class ını seçer.
console.log (hata2);

// Class lar arası seçim.
let hata3 = document.querySelector ('div.error');
console.log (hata3);

// Tüm p etiketlerini almak istersem.
let hatalar = document.querySelectorAll ('p');
console.log (hatalar);
console.log (hatalar[1]);

hatalar.forEach (hata => console.log (hata.innerHTML));

// getElementBy....
let baslik = document.getElementById ('baslik');
console.log (baslik);

let hatalar2 = document.getElementsByClassName ('error');
console.log (hatalar2);

let pEtiketleri = document.getElementsByTagName ('p');
console.log (pEtiketleri);

console.clear ();
// Değer değiştirme.
let pDegeri = document.querySelector ('p');
pDegeri.innerText = 'Alovera';

// Değerin üzerine ekleme.
let pDegerleri = document.querySelectorAll ('p');
pDegerleri.forEach (p => {
  p.innerText += ' Yeni Alan';
});

// Html tagını değiştirme.
// const icerik = document.querySelector ('.icerik');
// icerik.innerHTML = '<h2>REACT, VUE, ANGULAR</h2>';

// Html tagının üstüne ekleme
const icerik2 = document.querySelector ('.icerik');
icerik2.innerHTML += '<h2>REACT, VUE, ANGULAR</h2>';

const ogrenciler = ['Hasan', 'Musa', 'Fuat'];
ogrenciler.forEach (ogrenci => {
  icerik2.innerHTML += `<p>${ogrenci}</p>`;
});
