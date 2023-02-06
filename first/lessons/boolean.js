let email = 'test@test.com';
// includes : Parametre değişkende varsa true döner. Yoksa false döner.
let varmi = email.includes ('@');
console.log (varmi);

// Dizilerde eleman olarak arattırılır. Karakter olarak aratırılmaz. Karakter elamanı varsa durumlar değişir.
let isimler = ['Hasan', 'Ali', 'Fuat'];
let varmi2 = isimler.includes ('Hasan');
