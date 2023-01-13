//objects nedir, hatırlayalım

//object literals
/*const emre = {
    ad: 'emre',
    yas: 32,
    evliMi : false,
    sevdigiRenkler: ['kırmızı', 'yeşil'],
    adres: {
        il: 'Ankara',
        plakaKodu: 6,
    },
    bilgileriSoyle: function () {
        return `benim adım ${this.ad} yasım ${this.yas}`;//template literal
    },
    ['full-name']:'emre altunbilek',
};

console.log(emre.bilgileriSoyle());

emre.yas = 35;
emre.okul = 'ege üniversitesi';
delete emre.okul;

console.log(emre);

const hasan = {
    ad: 'emre',
    yas: 32,
    evliMi : false,
    sevdigiRenkler: ['kırmızı', 'yeşil'],
    adres: {
        il: 'Ankara',
        plakaKodu: 6,
    },
    bilgileriSoyle: function () {
        return `benim adım ${this.ad} yasım ${this.yas}`;//template literal
    },
    ['full-name']:'emre altunbilek',
};
*/

//factory functions
// function createOgrenci(ad, yas, evliMi, okul) {
//     return {
//         isim: ad,
//         yas: yas,
//         evliMi: evliMi,
//         okuduguOkul: okul,
//         //method
//         bilgileriGoster: function () {
//             return `ismim ${this.isim} yaşım ${this.yas} ve okulum ${this.okuduguOkul}`;
//         }
//     };
// }
// const emre = createOgrenci('emre', 32, false, 'ege');
// const hasan = createOgrenci('hasan', 36, true, 'marmara');



// console.log(emre.bilgileriGoster());
// console.log(hasan.bilgileriGoster());

// console.log(emre);
// console.log(hasan);

//constuctor functions

// function Ogrenci(ad, yas, evliMi, okul) {
//     this.isim = ad;
//     this.yas = yas;
//     this.evliMi = evliMi;
//     this.okuduguOkul = okul;
//     this.bilgileriGoster = function () {
//         return `ismim ${this.isim} yaşım ${this.yas} ve okulum ${this.okuduguOkul}`;
//     }
// }

// //new kullandıgında 3 şey gerçekleşir
// //1 yeni bir obje olusturur.
// //2 return yazmak zorunda kalmayız
// //3 this kelimesini o an olusturulan nesneye baglar.
// const yunus = new Ogrenci('yunus', 30, false, 'itü');





// //JSdeki tüm objeler onu olusturaln constructor fonksiyonuna erişebilir
// // js ile beraber gelen built in contructor functionlar vardır
// //diziler ve fonksiyonlar aslında objecttr demiştik, ispat?
// console.log(yunus.constructor);

// const yeni = new yunus.constructor('yeni',60,true,'itü');
// console.log(yeni);

// const denemeObject = {};
// console.log(denemeObject.constructor);

// const dizi = [];
// console.log(dizi.constructor);

// const fonk = function () { }

// console.log(fonk.constructor);

//Prototype Property
//JS prototype miras modelini kullanır. 
//Her constructor function/class aynı kurucu fonksiyonla olusturulan instance'ların ortak olarak kullanabiilecekleri prototype isimli propertye sahiptir.Prototype property de bir nesne döndürür.

Ogrenci.prototype.okul = "ege üniversitesi";
Ogrenci.prototype.bilgileriGoster = function () {
    return `ismim ${this.isim} yaşım ${this.yas} ve okulum ${this.okul}`;
};
Ogrenci.prototype.toString = function () {
    return "ogrenci yazdıırılacak";
}


function Ogrenci(ad, yas, evliMi) {
    this.isim = ad;
    this.yas = yas;
    this.evliMi = evliMi;
}

const emre = new Ogrenci('emre', 32, false);

const hasan = new Ogrenci('hasan', 60, false);

console.log(emre.bilgileriGoster());
console.log(" **** "+emre);
console.log(hasan.bilgileriGoster());

console.log(emre.constructor.prototype);
console.log(Object.getPrototypeOf(hasan));

const dizi = [1, 2, 3];
const dizi2 = [12, 22, 32];
console.log(dizi.constructor.prototype);
dizi.push(1);


const isim = 'emre';
console.log(typeof isim);
console.log(isim instanceof Object);

console.log(isim.toUpperCase());
console.log(isim instanceof Object);

console.log(isim.constructor.prototype);
console.log(isim.charAt(0));

const renk = new String('kirmizi');
console.log(typeof renk);

const noo = 5;
noo.ssss = "sadasd";
console.log(noo.ssss);
console.log(typeof noo);
const dogumYili = new Number(1988);
dogumYili.test = "asdasd";
console.log(typeof dogumYili);
console.log(dogumYili.test);

const sehirler = new Array('asd', 'asdasd', 'asdas');
console.log(sehirler);