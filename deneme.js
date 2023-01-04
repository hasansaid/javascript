let sehirler = ['Ankara', 'İstanbul', 'İzmir', 'Bursa', 'Malatya'];
console.log (sehirler.toString ());
console.log (sehirler.join (' - '));
console.clear ();
a = sehirler.push ('Adana');
a2 = sehirler.push ('Manisa');
b = sehirler.length;
console.log (sehirler.toString ());
console.log (sehirler.join (' - '), a, a2, b);

sehirler.pop (); // son elemanı yok eder
console.log (sehirler);
console.clear ();

sehirler.shift (); // ilk elemanı yok eder
console.log (sehirler);

sehirler.unshift ('Gaziantep'); //ilk eleman olarak ekler
console.log (sehirler);
console.clear ();
sehirler.splice (6, 0, 'Alo', 'fırat', 654, 45, 85);
console.log (sehirler);
