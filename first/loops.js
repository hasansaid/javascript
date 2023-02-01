// for
for (let i = 0; i < 10; i++) {
  console.log (i);
}
console.log ('Döngü bitti.');

let isimler = ['Hasan', 'Mustafa', 'Enes', 'Hüseyin', 'Muhammed'];
for (let i = 0; i < isimler.length; i++) {
  console.log (isimler[i]);
}

for (let i = 0; i < isimler.length; i++) {
  let yazdır = `${i + 1}. isim : ${isimler[i]}`;
  console.log (yazdır);
}

//while
i = 0;
while (i < isimler.length) {
  console.log (isimler[i]);
  i++;
}

number = 5;
while (number > 2) {
  console.log (number);
  number--;
}

// do - while : İlk do ya girip ekrana değeri yazdırır.
a = 2;
do {
  console.log (a);
  a++;
} while (a < 5);

// if - else
let sifre = '3216547$845sdsdsd';

if (sifre.length > 10 && sifre.includes ('$')) {
  console.log ('Şifre çok güçlü..');
} else if (sifre.length > 10) {
  console.log ('Şifre güçlü..');
} else if (sifre.length >= 8) {
  console.log ('Şifre yeterli..');
} else console.log ('Şifreyi yeniden giriniz..');

// switch - case

let not = 'AA';
switch (not) {
  case 'AA':
    console.log ('Dersi AA ile geçtin.');
    break;
  case 'BB':
    console.log ('Dersi BB ile geçtin.');
    break;
  case 'CC':
    console.log ('Dersi CC ile geçtin.');
    break;
  case 'DD':
    console.log ('Dersi DD ile geçtin.');
    break;
  default:
    console.log ('Kaldın');
    break;
}

// Global - Local Değişkenler => let yas olarak yazarsam local olur ancak direkt yas olarak devam edersem global olur.
// If in içinde değişkenleri var tipi ile tanımlarsak dışarıda da kullanabiliriz. bknz: 89 - 92
let yas = 29;
console.log ('Birinci: ' + yas);

let deneme = function () {
  let yas = 35;
  console.log (yas);
};
deneme ();

if (true) {
  let yas = 40;
  console.log ('İç: ' + yas);
  if (true) {
    let yas = 50;
    var isim = 'Hasan';
    console.log ('İçin içi: ' + yas, isim);
  }
}
console.log ('Dış: ' + yas, isim);

console.clear ();
// Foreach - Callback
const callbackFunction = callback => {
  let yas = 40;
  callback (yas);
};
callbackFunction (function (value) {
  console.log (value);
});
