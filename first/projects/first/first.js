const correctAnswer = ['E', 'E', 'E', 'E'];
const form = document.querySelector ('.question-form');
const result = document.querySelector ('.result');

form.addEventListener ('submit', e => {
  e.preventDefault ();

  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  userAnswers.forEach ((answer, index) => {
    if (answer == correctAnswer[index]) {
      score += 25;
    }
  });
  //   console.log (score);
  result.classList.remove ('d-none');

  let initial = 0;
  const yazdir = setInterval (() => {
    result.querySelector ('span').textContent = initial + '%';
    if (initial == score) {
      clearInterval (yazdir);
    } else initial += 25;
  }, 500);
});

// setTimeout bir kere çalışır, setInterval sürekli çalışır.
// setTimeout (() => {
//   console.log ('Can');
// }, 2000);

// let i = 0;
// const bastir = setInterval (() => {
//   console.log ('ai');
//   i++;
//   if (i == 4) {
//     clearInterval (bastir);
//   }
// }, 1000);
