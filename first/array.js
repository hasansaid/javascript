let isimler = ['Hasan', 'Fatma', 'Yusuf', 'Fuat', 'Ali'];
let yaslar = [10, 20, 50, 14];
let rastgele = ['Hasan', 'Ali', 5, 80, true];
// join : Dizinin elemanları arasına eklenti yapar.
let tireliIsimler = isimler.join ('-');
console.log (tireliIsimler);

let index = rastgele.indexOf (80);
console.log (index);

// concat : Diziye eleman ekler.
let ekle = isimler.concat (['Şaziye', 'Mücahit']).join ('-');
console.log (ekle);

//push : Diziye eleman ekler.
yaslar.push (80);
console.log (yaslar);

//pop : Dizideki son elemanı siler
yaslar.pop ();
console.log (yaslar);
