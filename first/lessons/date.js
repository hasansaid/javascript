// Tarih işlemleri..

const now = new Date ();
console.log (now, typeof now);
console.log ('Year: ' + now.getFullYear ());
console.log ('Month: ' + now.getMonth ());
console.log ('Date: ' + now.getDate ());

console.log (now.toDateString ());

console.clear ();
// Trayıcıda saat oluşturma.

const clock = document.querySelector ('.clock');
const tick = () => {
  const now = new Date ();
  const hours = now.getHours ();
  const minutes = now.getMinutes ();
  const seconds = now.getSeconds ();
  const html = `
  <span>Saat: ${hours}</span>
  <span>Dakika: ${minutes}</span>
  <span>Saniye: ${seconds}</span>
  `;
  clock.innerHTML = html;
};

setInterval (tick, 1000);
