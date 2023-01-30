//JS object oriented bir dildir ama bu onun Java, C# gibi oldugu anlamına gelmez
//OOP bir aile ise, class based onun bir parçasıdır diyebiliriz. protype-base gibi.

//Javascript is a multi-paradigm language that supports procedural, object-oriented (prototype-based) and functional programming styles.

class Person{

    static sayac = 0;

    constructor(ad, soyad) {
        this.ad = ad;
        this._soyad = soyad;
        Person.sayac++;
    }

    get soyadGet() {
        return this._soyad;
    }

    set soyadSet(yeniDeger) {
        this._soyad = yeniDeger;
    }

    selamVer() {
        return `merhaba ben ${this.ad + " " +  this.soyad}`;
    }

    static test() {
        console.log("ben static bir metodum");
    }
}

class Ogrenci extends Person{
    constructor(ad, soyad, sinif) {
        super(ad,soyad);
        this.sinif = sinif;
    }

    sinifiniSoyle() {
        return `ben ${this.sinif}. sınıf ogrencisiyim`;
    }
    selamVer() {
        return `merhaba ben ${this.ad + " " +  this.soyad} ve ${this.sinif}. ogrencisiym`;
    }
}

const emre = new Person('emre', 'altunbilek');
emre.soyadSet = 'yeni soyad';
console.log("yeni soyad:" + emre.soyadGet);

console.log("asasd"+emre._soyad);
console.log(emre.selamVer());
const hasan = new Person('hasan', 'yılmaz');
console.log(hasan.selamVer());


const ayse = new Ogrenci('ayse', 'fatma',10);
console.log(ayse.selamVer());

console.log("olusutrulan person sayısı: " + Person.sayac);

Person.test();




