// EventListener , Listeye Eleman Ekleme Kaldırma

const button = document.querySelector ('button');
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
