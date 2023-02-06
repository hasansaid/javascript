// Fonksiyon tanımlama
function firstName () {
  console.log ('Hasan');
}
firstName ();

const secondName = function () {
  console.log ('Said');
};
secondName ();
// Fonksiyona parametre verme
const name = function (name = 'Hasan') {
  console.log (name);
};
name ();
name ('Ali');

function surname (surname) {
  console.log (surname);
}
surname ('Batık');

const name1 = function (name) {
  return name;
};
function surname1 (surname) {
  return surname;
}
let fullName = `${name1 ('Fuat')} ${surname1 ('Soylu')}`;
console.log (fullName);

// Arrow function
const kareAlani = kenar => kenar ** 2;
const sonuc = kareAlani (6);
console.log (sonuc);
console.log (kareAlani (6));

const isim = () => 'Hasan';
console.log (isim ());

const tamIsım = (isim, soyisim) => {
  let tam = isim + ' ' + soyisim;
  return tam;
};
console.log (tamIsım ('Hasan', 'Haşmetli'));
