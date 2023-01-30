//truthy falsey
//FALSE, 0 , "", null, undefined, NaN FALSEY diğer herşey truty
let yas = 32;
yas = 0;

let isim = 'Berkcan';
isim = '';
isim = null;
isim = undefined;

let dogumYili = 1988;
dogumYili = 'Berkcan';
//emre99

if (dogumYili * 99) {
  console.log ('Bu true ifadedir.');
} else {
  console.log ('Bu false ifadedir.');
}
