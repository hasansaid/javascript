const form = document.querySelector ('.signupForm');
const username = document.querySelector ('#username'); // id seçimlerinde # tagı kullanılır.

form.addEventListener ('submit', e => {
  e.preventDefault (); //Sayfanın yenilenmesini engeller..
  console.log (form.username.value);
});
