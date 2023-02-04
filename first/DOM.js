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

// Get - SetAttribute
const link = document.querySelector ('a');
console.log (link.getAttribute ('href'));
link.setAttribute ('href', '12345');
console.log (link.getAttribute ('href'));
link.textContent = 'Sayfaı Terket'; // innerText ile aynı işlemi yapıyor gibi...

const pDegeri1 = document.querySelector ('p');
console.log (pDegeri.getAttribute ('href'));
pDegeri1.setAttribute ('class', '--');
pDegeri1.setAttribute ('style', 'color:red');
// pDegeri1.textContent = ' THE END ';
console.log (pDegeri1);

// CSS'e müdahele etme.
const baslik2 = document.querySelector ('h1');
// baslik2.setAttribute ('style', 'padding:50px;color:blue');
console.log (baslik2.style);
baslik2.style.marginLeft = '70px';
// baslik2.style.fontSize = '10px';

// CSS class'ı ekleme kaldırma.
const sınıf = document.querySelector ('span');
sınıf.classList.add ('mc');
sınıf.classList.remove ('sınıf');
console.log (sınıf.classList);

const spanDegeri = document.querySelectorAll ('span');
spanDegeri.forEach (span => {
  if (span.textContent.includes ('car')) {
    span.classList.add ('sınıf');
  }
  if (span.textContent.includes ('success')) {
    span.classList.add ('success');
  }
  console.log (span);
});

console.clear ();

// ParentElement ChildElement
const div = document.querySelector ('div');
console.log (div.children);
divDizi = Array.from (div.children);
console.log (divDizi);

divDizi.forEach (child => {
  child.classList.add ('div-class');
});

const merhaba = document.querySelector ('h2');
console.log (merhaba);
console.log (merhaba.parentElement);
console.log (merhaba.parentElement.parentElement);
console.log (merhaba.nextElementSibling); // Bir sonraki elementi seçer.
console.log (merhaba.previousElementSibling); // Bir önceki elementi seçer.
