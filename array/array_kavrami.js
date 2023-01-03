//Verileri bir arada tutan yapılara array dizi denir.

let arabaMarka1 = "Mercedes";
let arabaMarka2 = "Audi";
let arabaMarka3 = "BMW";

let arabaMarkalari = ["Mercedes", "Audi", "BMW"];
console.log(arabaMarkalari);
console.log(arabaMarkalari[2]);

arabaMarkalari[2] = "Peugeot";
arabaMarkalari[3] = "Honda";
arabaMarkalari[4] = "Citroen";

arabaMarkalari[40] = "Suzuki";
console.log(arabaMarkalari[6]);
console.log(arabaMarkalari.length);

//en büyük index , dizi eleman sayısının 1 eksiğidir.
//dizi eleman sayısı 20 ise en büyük index 19dur.

console.log("araba dizisi :" + arabaMarkalari.toString());


for (let i = 0; i < arabaMarkalari.length; i++) {
    console.log(arabaMarkalari[i]);
}

console.log("*****************************");

for (let oankiDiziElemani of arabaMarkalari) {

    console.log(oankiDiziElemani);

}

let yeniDizi = [1, "emre", true];
for (let oankiDiziElemani of yeniDizi) {
    console.log(oankiDiziElemani);
}
