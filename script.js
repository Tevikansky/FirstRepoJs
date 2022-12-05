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

title = prompt("Как называется ваш проект?");
screens = prompt("Какие типы экранов нужно разработать?");
screenPrice = Number(prompt("Сколько будет стоить данная работа?"));
adaptive = prompt('Нужен ли адаптив на сайте?').toLowerCase().replace(/[^a-zа-яё\s]/gi, '').trim();
adaptive = adaptive == "да" ? true : false;
service1 = prompt("Какой дополнительный тип услуги нужен?");
servicePrice1 = Number(prompt('Сколько это будет стоить?'));
service2 = prompt("Какой дополнительный тип услуги нужен?");
servicePrice2 = Number(prompt('Сколько это будет стоить?'));
fullPrice = screenPrice + servicePrice1 + servicePrice2;
servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (rollback / 100)));
console.log(servicePercentPrice);
switch (true) {
  case fullPrice >= 30000:
    console.log("Даем скидку в 10%");
    break;
  case fullPrice >= 15000 && fullPrice < 30000:
    console.log("Даем скидку в 5%");
    break;
  case fullPrice < 15000 && fullPrice >= 0:
    console.log("Скидка не предусмотрена");
    break;
  default:
    console.log("Что то пошло не так");
}