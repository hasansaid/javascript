let name = 'Jhon';
let surname = 'Wick';

let fullName = name + ' ' + surname;

// Uzunluğu ölçer.
console.log (fullName.length);

// Tüm harfleri büyük yapar.
console.log (fullName.toUpperCase ());

// Tüm harfleri küçük yapar.
console.log (fullName.toLocaleLowerCase ());

// Karakterin kaçıncı indexte olduğunu yazdırır.
let index = fullName.indexOf ('h');
console.log ("B'nin bulunduğu index: " + index);

// Karakterin en son kaçıncı indexte olduğunu yazdırır.
let sonIndex = fullName.lastIndexOf ('k');
console.log ("K'nin bulunduğu son index: " + sonIndex);

// slice : Başlangıç ve bitiş indexini veriyoruz. Bu iki index arasındaki karakterleri console basmamızı sağlar.
let bastanSona = fullName.slice (1, 5);
console.log (bastanSona);

// substr : Başlangıç indexini ve devamında kaç karakter yazdırmak istediğimizi gireriz.
let bastanSonaSubstr = fullName.substr (5, 2);
console.log (bastanSonaSubstr);

// replace : İlk parametre neyi değiştirmek istediğimiz, ikinci parametre ne ile değiştirmek istediğimiz.
let yerDegistir = fullName.replace ('Jhon', 'j');
console.log (yerDegistir);

// concat : String birleştirme işlemi yapar.
let allname = name.concat (' ', surname);
console.log (allname);

// search : Arama yapıp bulduğu karakterin indeks numarasını döndürür.
let article =
  'React; facebook firması tarafından geliştirilen ve kullanıcı arayüzlerini kolaylıkla oluşturmamıza olanak sağlayan oldukça güzel bir Javascript kütüphanesidir.';
let arama = article.search ('firması');
console.log (arama);
