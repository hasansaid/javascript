/* ile rastgele sayı üretebilirsiniz. Bu fonksiyon 0 dahil - 1 hariç bir değer üretir mesela 0.56 gibi. Sonrasında bu ifadenin sonucunu istediğiniz aralığın üst sınıırıyla çarparsanız verilen aralıkta değer üretmiş olursunuz.

Mesela 0 ile 10 arasında bir sayı için (Math.random() * 10)+1 size 1 ile 10 arasında ki 10 da dahil sayı üretmiş olur.

Üretilen bu sayı ondalıklı olabilir bunu tam sayıya dönüştürmek için Math.floor() kullanabilirsiniz.

Küçük bir piyango oyunu tasarlayınız. Sistem iki basamaklı bir sayı üretmeli.
Kullanıcıdan da bu sayıyı tahmin etmesini istemelisiniz.
 
Eğer kullanıcı sayıyı tam olarak doğru bilirse 10000 TL;
Eğer kullanıcı sayının basamaklarını bilirse yani 65 yerine 56 yazmıssa 5000TL
Eğer kullanıcı şanslı numaranın sadece bir basamağını bilirse 1000 TL kazanır.*/

let uretilenSayi = (Math.random() * 90) + 10; //74,656565656565
console.log("Üretilen ondalıklı sayı" + uretilenSayi);
uretilenSayi = Math.floor(uretilenSayi);//floor fonksiyonu 74

let kullanicininGirdigiSayi = parseInt(prompt("İki basamaklı bir sayı giriniz", "10"));

let uretilenSayiBirlerBasamagi = uretilenSayi % 10;
let uretilenSayiOnlarBasamagi = Math.floor(uretilenSayi / 10);


console.log(`Uretilen sayının birler basamagı ${uretilenSayiBirlerBasamagi} onlar basamagı: ${uretilenSayiOnlarBasamagi}`);

let userSayiBirlerBasamagi = kullanicininGirdigiSayi % 10;
let userSayiOnlarBasamagi = Math.floor(kullanicininGirdigiSayi / 10);


console.log(`Kullanıcı sayısının birler basamagı ${userSayiBirlerBasamagi} onlar basamagı: ${userSayiOnlarBasamagi}`);


console.log(`Sistemin ürettiği sayı ${uretilenSayi} kullanıcın girdigi sayı ${kullanicininGirdigiSayi}`);
if (uretilenSayi === kullanicininGirdigiSayi) {
    console.log("Tebrikler 10000 TL kazandınız Tahmininiz:" + kullanicininGirdigiSayi + " Üretilen" + uretilenSayi);
} else if (uretilenSayiBirlerBasamagi === userSayiOnlarBasamagi && uretilenSayiOnlarBasamagi === userSayiBirlerBasamagi) {
    console.log("Tebrikler 5000 TL kazandınız Tahmininiz:" + kullanicininGirdigiSayi + " Üretilen" + uretilenSayi);
} else if (uretilenSayiBirlerBasamagi === userSayiBirlerBasamagi || uretilenSayiOnlarBasamagi === userSayiOnlarBasamagi) {
    console.log("Tebrikler 1000 TL kazandınız Tahmininiz:" + kullanicininGirdigiSayi + " Üretilen" + uretilenSayi);
} else { 
    console.log("Malesef kazanamadınız Tahmininiz:" + kullanicininGirdigiSayi + " Üretilen" + uretilenSayi);
}// 84 , 83, 79, 49





