//Soru1 Klavyeden girilen 3 sayının ortalamasını alan bir uygulama yazınız

let birinciSayi = parseInt (prompt ('Birinci sayıyı giriniz', '1'));
let ikinciSayi = parseInt (prompt ('İkinci Sayıyı giriniz', '1')); //
let ucuncuSayi = parseInt (prompt ('ucuncuSayi Sayıyı giriniz', '1')); //

let ortalama1 = (birinciSayi + ikinciSayi + ucuncuSayi) / 3;
alert ('Girdiğiniz sayıların ortalaması :' + ortalama1);

//Soru2 Klavyeden kenarları girilen bir üçgenin çeşidini veren uygulamayı yazınız.

let birinciKenar = parseInt (prompt ('Birinci kenarı giriniz', '4'));
let ikinciKenar = parseInt (prompt ('ikinciKenar kenarı giriniz', '4'));
let ucuncuKenar = parseInt (prompt ('ucuncuKenar kenarı giriniz', '4'));

if (birinciKenar == ikinciKenar && birinciKenar == ucuncuKenar) {
  alert ('Bu bir eşkenar üçgendir');
} else if (
  birinciKenar != ikinciKenar &&
  birinciKenar != ucuncuKenar &&
  ikinciKenar != ucuncuKenar
) {
  alert ('Bu bir çeşit kenar üçgendir');
} else {
  alert ('Bu bir ikiz kenar üçgendir');
}

//Soru 3 Klavyeden girilen vize ve final notlarınına göre öğrencinin dersi geçip geçmediğini söyleyen bir uygulama yazınız.(Geçme notu : 50, vizenin %40ı, finalin %60ı geçerlidir.)

let vizeNotu = parseInt (prompt ('Vize notunu giriniz', '50'));
let finalNotu = parseInt (prompt ('Final notunu giriniz', '50'));

let ortalama = vizeNotu * 0.4 + finalNotu * 0.6;

if (ortalama >= 50) {
  alert ('Tebrikler dersi geçtiniz ortalamanız :' + ortalama);
} else {
  alert ('Malesef kaldınız ortalamanız :' + ortalama);
}

//SORU4 Kendi adınızı ekrana 5 kere yazdıran uygulamayı tüm döngülerle yapınız.

//for
for (let i = 0; i < 5; i++) {
  console.log (i + 1 + ' Emre Altunbilek');
}

//while
let sayac1 = 0;
while (sayac1 < 5) {
  console.log (sayac1 + 1 + ' Emre Altunbilek While');
  sayac1++;
}
//do while
let sayac2 = 0;
do {
  console.log (sayac2 + 1 + ' Emre Altunbilek Do While');
  sayac2++;
} while (sayac2 < 5);

//Soru 5 1’den 100’e kadar olan sayıların toplamını bulan uygulamayı yazınız.

let toplam = 0;
for (let i = 1; i < 100; i++) {
  toplam = toplam + i;
  // toplam += i;
}
console.log ('1den 100e kadar olan sayıların toplamı :' + toplam);

//Soru 6 1’den 10a kadar olan sayıları sıra ile ve aralarında virgül olacak şekilde yazan bir uygulamayı for döngüsü ile yazınız.

let yazdirMetin = '';
for (let i = 1; i <= 10; i++) {
  if (i != 10) {
    yazdirMetin = yazdirMetin + i + ', ';
  } else {
    yazdirMetin = yazdirMetin + i;
  }
}
console.log (yazdirMetin);

//Soru 7: Klavyeden girilen bir sayının faktöriyelini alan bir uygulama yazınız.
let sayi = parseInt (prompt ('Faktoriyeli hesaplanacak sayıyı giriniz', '10'));
let faktoriyel = 1;

for (let i = 1; i <= sayi; i++) {
  faktoriyel = faktoriyel * i;
}
console.log (
  `Girdiğiniz ${sayi} sayısının faktoriyeli ${faktoriyel} sayısıdır`
);
/*Soru 8:
Aşağıda tanımı verilen f(x,y) fonksiyonunu klavyeden girilen x ve y değerleri için hesaplayınız.
x>0, y<0 ise f(x,y) = 4x+2y+4
x>0, y=0 ise f(x,y) = 2x-y+3
x<0, y>0 ise f(x,y) = 3x+4y+3*/

let xDegeri = parseInt (prompt ('x değerini giriniz', '1'));
let yDegeri = parseInt (prompt ('y değerini giriniz', '1'));

let islemSonucu = 0;

if (xDegeri > 0 && yDegeri < 0) {
  islemSonucu = 4 * xDegeri + 2 * yDegeri + 4;
} else if (xDegeri > 0 && yDegeri == 0) {
  islemSonucu = 2 * xDegeri - yDegeri + 3;
} else if (xDegeri < 0 && yDegeri > 0) {
  islemSonucu = 3 * xDegeri + 4 * yDegeri + 3;
}
console.log (`x: ${xDegeri} y:${yDegeri} ve sonuc : ${islemSonucu}`);

//Soru 9:  100lük sistemde verilen notları harfli sistemde gösteren bir uygulama yazınız.

let yuzlukSistemdekiNot = parseInt (prompt ('Notunuzu giriniz', '50'));
let notSiniri = parseInt (yuzlukSistemdekiNot / 10);
console.log (
  'Yuzluk sistemdeki not:' + yuzlukSistemdekiNot + ' sınır :' + notSiniri
);

if (yuzlukSistemdekiNot == 100) {
  notSiniri = 9;
}

switch (notSiniri) {
  case 10:
    console.log ('Notunuz AA');
    break;
  case 9:
    console.log ('Notunuz AA');
    break;
  case 8:
    console.log ('Notunuz BA');
    break;
  case 7:
    console.log ('Notunuz BB');
    break;
  case 6:
    console.log ('Notunuz CB');
    break;
  case 5:
    console.log ('Notunuz CC');
    break;
  default:
    console.log ('Notunuz CCden düşük');
}

//Soru 10: Çarpım tablosunu oluşturan bir uygulama yazınız.
let yazdirilacakMetin = '';
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    yazdirilacakMetin = yazdirilacakMetin + (i + '*' + j + '=' + i * j) + '\t';
  }

  console.log (yazdirilacakMetin);
  yazdirilacakMetin = '';
}

/*Soru 11:
Sıcak soguk oyunu yapalım. Sistem 100e kadar bir sayı üretsin. Kullanıcı bu sayıyı tahmin etmeye çalışsın. Kullanıcının girdiği değere göre kullanıcıyı arttır azalt diyerek uyaralım. Kullanıcı sayıyı bulana kadar tahmin istemeye devam edelim ve sayıyı buldugunda kaç denemeden sonra bulduğunu belirtelim.*/

let uretilenSayi = parseInt (Math.random () * 101);
console.log ('Üretilen sayı:' + uretilenSayi);

let tahmin = -1;
let tahminSayisi = 0;

while (tahmin != uretilenSayi) {
  tahmin = parseInt (prompt ('Bir sayı giriniz'));
  tahminSayisi++;

  if (tahmin == uretilenSayi) {
    console.log ('Tebrikler ' + tahminSayisi + ' seferde ' + 'bildiniz');
  } else if (tahmin < uretilenSayi) {
    console.log ('Biraz daha çık');
  } else {
    console.log ('Biraz daha in');
  }
}

/*
SORU 12:
Kullanıcıdan sürekli olarak sayı alan ve de kullanıcı 0a bastığında girdiği sayıların çarpımını sonuç olarak gösteren programı yazınız.*/

let girilenSayi = parseInt (prompt ('Bir sayı giriniz'));
let carpimSonucu = 1;

while (girilenSayi != 0) {
  carpimSonucu = carpimSonucu * girilenSayi;
  girilenSayi = parseInt (prompt ('Bir sayı giriniz'));
}
console.log ('Çarpım sonucu :' + carpimSonucu);

/* SORU 13:
Kullanıcıdan aldığınız iki tamsayı değerin en büyük ortak bölenini bulan uygulamayı yazınız Örneğin 14 ve 35 sayıları için ebob = 7 olmalıdır. */

let sayi1 = parseInt (prompt ('Birinci sayıyı giriniz'));
let sayi2 = parseInt (prompt ('Ikinci sayıyı giriniz'));

let ebob = 1, kontrol = 2;
//10 - 4
while (kontrol <= sayi1 && kontrol <= sayi2) {
  if (sayi1 % kontrol == 0 && sayi2 % kontrol == 0) {
    ebob = kontrol;
  }
  kontrol++;
}

if (ebob == 1) {
  console.log ('Bu sayılar aralarında asaldır');
} else {
  console.log ('Bu sayıların ortak böleni : ' + ebob);
}

/*SORU 14:
Kullanıcıdan aldığınız integer değere kadar olan tüm asal sayıları yazdıran programı yazınız. 10 için ekranda 2,3,5,7 değerleri olmalıdır.*/
/*
let girilenSayi = parseInt(prompt("Bir sayı giriniz", "10"));
let gosterilecekMetin = "";
for (let i = 2; i <= girilenSayi; i++) {
    let asalSayiMi = true;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            asalSayiMi = false;
            break;
        }
    }
    if (asalSayiMi == true) {
        gosterilecekMetin = gosterilecekMetin + i + " ";
    }
}
console.log(gosterilecekMetin);
*/

/*
SORU 15:
1 + 2 + 4 + 7 + 11 + 16 + 20 + 23  + 25 + 26 + 28 + 31 + 35 = 229 ? işleminin sonucunu bulan js kodunu yazınız.*/

let artisMiktari = 0;
let artiyorMu = true;
let toplami = 0;
let gosterilecekMetin = '';

for (let i = 1; i <= 35; i = i + artisMiktari) {
  if (i != 35) {
    toplami = toplami + i;
    gosterilecekMetin = gosterilecekMetin + i + ' + ';
  } else {
    toplami = toplami + i;
    gosterilecekMetin = gosterilecekMetin + i + ' = ' + toplami;
  }
  if (artisMiktari <= 4 && artiyorMu == true) {
    artisMiktari++;
    if (artisMiktari == 5) {
      artiyorMu = false;
      continue;
    }
  } else {
    artisMiktari--;
    if (artisMiktari == 1) {
      artiyorMu = true;
      continue;
    }
  }
}
console.log (gosterilecekMetin);
