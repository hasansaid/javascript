//for döngüsü
//for(ilk atama ; dongu_calistirma_sarti ; her_calisma_sonrası_ne_olacak)

/*
let j = 0;

for (let i = 0; i < 3; i++) { 
    console.log("benim Adım Emre");
    console.log("nasılsın");
}

for (let i = 0, j = 0; (i + j) < 20; i=i+5, j=j+2) { 
    console.log("Döngü çalıştı");
    console.log("i değeri:"+i+" j değeri:"+j);
}

//fordan sonra noktalı virgül olmaz

for (j = 0; j < 5; j++)
{ 
    console.log("Merhaba "+ j); 
}

console.log("Merhaba "+ j); 




//sonsuz döngü olusturulur
/*
for (; ;) { 

}*/

for (let j = 5; j < 15; j++) {
    console.log("for döngüsü Merhaba");
}

let sayi = 5;

while (sayi < 15) {
    console.log("Merhaba");
    sayi++;
}

let yas = 20;
do {
    console.log("Do while merhaba");
    yas++;
} while (yas < 30);

//break, continue, return
for (let i = 0; i < 50; i++) {
    if (i == 12) {
        break;
    }
    console.log("Break kullanımı");
}

for (let i = 10; i < 30; i++) {

    if (i == 15) {
        continue;
    }
    console.log("Contiue kullanımı" + i);

}

//for içinde return kullanuımı sadece fonksiyon içindeyse olur
//aksi taktirder Illegal return statement hatası alınır.
/*for (let i = 0; i < 10; i++) {
    if (i == 5) {
        //return;
    }
    console.log("Return kullanımı" + i);
}
*/