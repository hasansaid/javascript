let haftaninKacinciGunu = 3;

/*
if (haftaninKacinciGunu === 1) {
    console.log("Pazartesi");
} else if (haftaninKacinciGunu === 2) { 
    console.log("Salı");
} else if (haftaninKacinciGunu === 3)
    console.log("Çarşamba");
else {
    console.log("Pazar");
    }
*/

switch (haftaninKacinciGunu) {

    case 1: console.log("Pazartesi"); break ;
    case 2: console.log("Salı"); break;
    case 3: console.log("Çarşamba"); break;
    case 4: console.log("Perşembe");break;
    case 5: console.log("Cuma");break;
    case 6: console.log("Cumartesi"); break;
    case 7: console.log("Pazar"); break;
    default: console.log("Geçersiz gün girilmiş");

}
console.log("Switchten çıkıldı");
