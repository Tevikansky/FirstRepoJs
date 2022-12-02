let title = "First project";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 69;
let rollback = 76;
let fullPrice = 45000;
let adaptive = false;

console.log(typeof title, typeof fullPrice, typeof adaptive);
console.log(screens.length);
console.log('Стоимость верстки экранов', screenPrice, 'рублей/долларов/гривен/юани');
console.log('Стоимость разработки сайта', fullPrice, 'рублей/долларов/гривен/юани');
console.log(screens.toLowerCase().split());
console.log('Процент отката посреднику за работу', fullPrice * (rollback / 100));