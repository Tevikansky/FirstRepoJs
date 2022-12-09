'use strict';

let title;
let screens;
let screenPrice;
let adaptive;
let service1;
let service2;
let rollback = 76;
let fullPrice;
let servicePercentPrice;
let allServicePrices;

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function () {
  title = prompt("Как называется ваш проект?", "Калькулятор вёрстки");
  screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные");
  let var1 = " ";
  do {
    var1 = prompt("Сколько будет стоить данная работа?");
  } while (!isNumber(var1));
  screenPrice = parseInt(var1);
  adaptive = confirm('Нужен ли адаптив на сайте?');
};

const getAllServicePrices = function () {
  let sum = 0;
  for (let i = 0; i < 2; i++) {
    let var2 = " ";
    if (i === 0) {
      service1 = prompt("Какой дополнительный тип услуги нужен?");

    } else if (i === 1) {
      service2 = prompt("Какой дополнительный тип услуги нужен?");
    }

    while (!isNumber(var2)) {
      var2 = prompt('Сколько это будет стоить?');
    }
    sum += parseInt(var2);
  }
  return sum;
};

const getFullPrice = function () {
  return screenPrice + allServicePrices;
};

const getTitle = function () {
  return title.trim()[0].toUpperCase() + title.trim().substr(1).toLowerCase();
};

const getServicePercentPrices = function () {
  return fullPrice - (fullPrice * (rollback / 100));
};

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

const getRollbackMessage = function (price) {
  if (price >= 30000) {
    return "Даем скидку в 10%";
  } else if (price >= 15000 && price < 30000) {
    return "Даем скидку в 5%"
  } else if (price < 15000 && price >= 0) {
    return "Скидка не предусмотрена";
  } else {
    return "Что то пошло не так";
  }
};

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle();

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log(allServicePrices);
console.log(screens);
console.log(getRollbackMessage(fullPrice));
console.log('Процент отката посреднику за работу', servicePercentPrice);