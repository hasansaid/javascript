// filter : Filtreleme işlemi yapar. filter işlemi yapıldıktan sonra yeni bir değişkene atılır.
const points = [70, 75, 25, 35, 10, 80, 27, 49, 56];

const studentPassed = points.filter (point => {
  return point > 50;
});
console.log (studentPassed);

const students = [
  {name: 'hasan', passes: true},
  {name: 'can', passes: false},
  {name: 'kaya', passes: false},
  {name: 'ali', passes: true},
];

students.filter (student => {
  if (student.passes === true) {
    console.log (`Dersi geçen öğrencimizin ismi: ${student.name}`);
  } else console.log (`Dersten kalan öğrencinin ismi: ${student.name}`);
});

const passingStudents = students.filter (student => {
  return student.passes;
});
console.log (passingStudents);

// map : Bir diziyi manipüle etmemizi sağlar.
const points2 = [70, 75, 25, 35, 10, 80, 27, 49, 56];

const newPoints = points2.map (p => {
  if (p < 50) {
    return p + 10;
  }
  return p;
});
console.log (points2);
console.log (newPoints);

const students2 = [
  {name: 'hasan', point: 48},
  {name: 'can', point: 90},
  {name: 'kaya', point: 43},
  {name: 'ali', point: 52},
];

// const updatePoints = students2.map (s => {
//   if (s.point < 50) {
//     return (s.name = s.name), (s.point = s.point + 10);
//   } else return s.name, s.point;
// });
// console.log (updatePoints);

const updatePoints2 = students2.map (student => {
  if (student.point < 50) {
    student.point += 10;
    return student;
    // return {name: student.name, point: student.point + 10};
  } else return student;
});
console.log (updatePoints2);

// reduce : Data'yı manipüle, modifiye etmeyi sağlar.
const points3 = [70, 75, 25, 35, 10, 80, 27, 49, 56];

const result = points3.reduce ((value, point) => {
  if (point > 50) {
    value++;
  }
  return value;
}, 0);

console.log (result);
// Ekrana 4 yazdırır. 4 adet 50 den büyük sayı vardır.

const students3 = [
  {name: 'can', point: 40},
  {name: 'tuba', point: 60},
  {name: 'elif', point: 30},
  {name: 'osman', point: 100},
  {name: 'can', point: 80},
  {name: 'tuba', point: 30},
  {name: 'elif', point: 60},
  {name: 'osman', point: 40},
];

const canTotal = students3.reduce ((value, student) => {
  if (student.name == 'can') {
    value += student.point;
  }
  // console.log (value);
  return value;
}, 0);

console.log (canTotal);
console.log (canTotal / 2);
// Ekrana canın aldığı puanların toplamını ve ortalamasını yazdırır.

// find : Id bulma, data içerisinde değer bulma işlemlerinde sık sık kullanılır.
const points4 = [70, 75, 25, 35, 10, 80, 27, 49, 56];
const highPoint = points4.find (point => {
  return point > 75;
});

console.log (highPoint);

// push : Son index'e eleman ekler.
const points5 = [70, 75, 25, 35, 10, 80, 27, 49, 56];
points5.push (100);
console.log (points5);

// pop : Son index'teki elemanı siler.
points5.pop ();
console.log (points5);

// shift : En baştaki elemanı siler. Bütün elemanlar bir index sola kaydırıldığı için baştaki eleman kaybolur.
points5.shift ();
console.log (points5);

// findIndex : Elemanın index'ini bulur.
const number = [70, 75, 25, 35, 10, 80, 27, 49, 56];

const arrayIndex = number.findIndex (point => point == 35);
number[arrayIndex] = 50;
console.log (number);

const people = [
  {name: 'hasan', point: 48},
  {name: 'can', point: 90},
  {name: 'kaya', point: 43},
  {name: 'ali', point: 52},
];

const objectIndex = people.findIndex (s => s.name == 'ali');
people[objectIndex].name = 'Hakan';
console.log (people[3]);

// sort : Sıralama için kullanılır.
// reverse : Tersten sıralama için kullanılır.
const stringSıralama = ['can', 'ali', 'hasam', 'buse', 'zühra', 'ahmet'];
stringSıralama.sort ();
console.log (stringSıralama);
// Alfabetik sıralama yapar.

stringSıralama.reverse ();
console.log (stringSıralama);
// Tersten alfabetik sıralama yapar.

const numberSıralama = [60, 84, 0, , 0.5, 85, 3, 8, 9, 65, 10, 100, 18, 48, 35];
numberSıralama.sort ();
console.log (numberSıralama);
// İlk hanesine göre sıralama yapar.

numberSıralama.sort ((a, b) => b - a);
console.log (numberSıralama);
// Büyükten küçüğe sıralama yapar.

const objectSıralama = [
  {name: 'hasan', point: 48},
  {name: 'can', point: 90},
  {name: 'kaya', point: 43},
  {name: 'ali', point: 52},
];

objectSıralama.sort ((a, b) => b.point - a.point);
console.log (objectSıralama);

console.clear ();

const students4 = [
  {name: 'hasan', point: 48},
  {name: 'can', point: 90},
  {name: 'kaya', point: 43},
  {name: 'ali', point: 52},
  {name: 'ayşe', point: 85},
  {name: 'fuat', point: 37},
  {name: 'hüsnü', point: 23},
  {name: 'alpy', point: 76},
];

const filtered = students4.filter (student => student.point < 50);

const plusPoint = filtered.map (student => {
  return `${student.name} adlı öğrencinin yeni notu: ${student.point + 15}`;
});

console.log (plusPoint);

// Temiz kod..

const newNotes = students4
  .filter (student => student.point < 50)
  .map (
    student =>
      `${student.name} adlı öğrencinin yeni notu: ${student.point + 15}`
  );

console.log (newNotes);
