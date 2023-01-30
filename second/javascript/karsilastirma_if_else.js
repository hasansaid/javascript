let benimYasim = 31, onunYasi = 25;

if (benimYasim < onunYasi) {
  console.log ('Ben senden küçüğüm');
} else if (benimYasim === onunYasi) {
  console.log ('Yaşıtız');
} else {
  console.log ('Ben senden büyüğüm');
}

/*
if (benimYasim < 30);
{ 
    console.log("Yaşım 30dan küçük");
}
*/
let ismim = 'Murat';
if (ismim === 'Murat') {
  console.log ('Merhaba Murat.');
  console.log ('Nasılsın.');
}

let sayi1 = 10, sayi2 = 20;
if (sayi1 > sayi2) {
  if (sayi1 > 20) console.log ("Sayı1 hem sayi 2'den hem de 20'den büyük.");
} else {
  console.log ('Else çalıştır.');
}
let asalSayiMi = true;
if (asalSayiMi == true) {
}
if (asalSayiMi) {
}

let a = 5, b = 15, c = 0;

if (a > b) {
  c = a + b;
} else {
  c = a - b;
}
console.log ('c değeri:' + c);

//ternary kısa if operatör
c = a > b ? a + b : a - b;
console.log ('c nin yeni değeri:' + c);

// if benimYasim > 10 {

// }
