const bitkiler = [
    { ad: 'üzüm', tur: 'meyve' },
    { ad: 'çilek', tur: 'meyve' },
    { ad: 'muz', tur: 'meyve' },
    { ad: 'ıspanak', tur: 'sebze' },
    { ad: 'kereviz', tur: 'sebze' },
];

function kendiFilterYapim(dizi, filtreSartlari) {
    const geciciDizi = [];
    for (let i = 0; i < dizi.length; i++) {
        //const sonuc = filtreSartlari(dizi[i], 'meyve');
        const sonuc = filtreSartlari(dizi[i]);
        if (sonuc) {
            geciciDizi.push(dizi[i]);
        }
    }

    return geciciDizi;
}
function filtre(bitki, sart) {
    return bitki.tur === sart;
}
//const meyveler = kendiFilterYapim(bitkiler, filtre)

/*const meyveler = kendiFilterYapim(bitkiler, function (bitki) {
    return bitki.tur === 'meyve'
});*/
const meyveler = kendiFilterYapim(bitkiler,  bitki =>  bitki.tur === 'sebze');


console.log(meyveler);

// const meyveler = bitkiler.filter(function (bitki) {
//     return bitki.tur === 'meyve';
// });

// const sebzeler = bitkiler.filter(function (bitki) {
//     return bitki.tur === 'sebze';
// });

// console.log(meyveler);
// console.log(sebzeler);

// function meyveleriBul() {
//     const geciciDizi = [];
//     for (let i = 0; i < bitkiler.length; i++) {
//         if (bitkiler[i].tur === 'meyve') {
//             geciciDizi.push(bitkiler[i]);
//         }
//     }

//     return geciciDizi;
// }

// function sebzeleriBul() {
//     const geciciDizi = [];
//     for (let i = 0; i < bitkiler.length; i++) {
//         if (bitkiler[i].tur === 'sebze') {
//             geciciDizi.push(bitkiler[i]);
//         }
//     }

//     return geciciDizi;
// }

// console.log(meyveleriBul());
// console.log(sebzeleriBul());