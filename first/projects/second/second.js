// Html etiket silme yöntemleri..

//1------
// const all = document.querySelectorAll ('a');
// all.forEach (a => {
//   a.innerHTML = '';
// });

//2------
// const div = document.querySelector ('div');
// div.remove ();

//3------
// const div2 = document.querySelector ('div');
// div2.setAttribute ('style', 'display:none');

//4------ Bootstrap ile silme
const divAll = document.querySelector ('.all');
divAll.classList.add ('d-none');
