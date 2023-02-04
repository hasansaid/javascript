// EventListener , Listeye Eleman Ekleme Kaldırma

const button = document.querySelector ('.but22');
// Butona tıklanma özelliği ekleme.
// button.addEventListener ('click', () => {
//   console.log ('tıklandı');
// });

const liElemanları = document.querySelectorAll ('li');
// liElemanları.forEach (eleman => {
//   eleman.addEventListener ('click', e => {
//     console.log (e);
//     console.log (e.target);
//     console.log ('liye tıklandı');
//     e.target.style.color = 'red';
//   });
// });

// ul.remove ();
// Elemanları kaldırma.
liElemanları.forEach (eleman => {
  eleman.addEventListener ('click', e => {
    e.stopPropagation ();
    e.target.remove ();
  });
});

const ul = document.querySelector ('ul');
ul.addEventListener ('click', e => {
  if (e.target.tagName === 'LI') {
    e.target.remove ();
  }
});

button.addEventListener ('click', () => {
  const li = document.createElement ('li');
  li.textContent = 'Javascript';

  //başına ekleme
  //ul.prepend (li);

  //sonuna ekleme
  ul.append (li);
});

// Mousemove -- Wheel
const kutu = document.querySelector ('.kutu');
kutu.addEventListener ('mousemove', e => {
  //console.log (e);
  //   console.log (e.offsetX, e.offsetY);
  kutu.textContent = `X Koordinatı: ${e.offsetX} - Y Koordinatı: ${e.offsetY}`;
});

document.addEventListener ('wheel', e => {
  //   console.log (e.pageX, e.pageY);
});

const tıkla = document.querySelector ('.but23');
const mainPopup = document.querySelector ('.main-popup');
const close = document.querySelector ('.popup-close');

tıkla.addEventListener ('click', () => {
  mainPopup.style.display = 'block';
});

close.addEventListener ('click', () => {
  mainPopup.style.display = 'none';
});
