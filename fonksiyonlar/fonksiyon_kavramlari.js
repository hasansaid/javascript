function selam () {
  console.log ('hey');
}
selam ();

function toplam1 (sayi1, sayi2) {
  console.log ('toplam: ' + (sayi1 + sayi2));
}

toplam1 (10, 30);

function toplam2 (sayi1, sayi2) {
  return sayi1 + sayi2;
}

let TOPLAM = toplam2 (40, 50);
console.log ('TOPLAM: ' + TOPLAM);

function aralıkToplam (baslangic, bitis) {
  let total = 0;
  for (let i = baslangic; i <= bitis; i++) {
    total += i;
  }
  return console.log ('Total: ' + total);
}
console.time ('Gecen Sure');
aralıkToplam (1, 40);
console.timeEnd ('Gecen Sure');
