'use strict';

let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?");
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let adaptive = confirm('Нужен ли адаптив на сайте?');
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt('Сколько это будет стоить?');
let rollback = 76;
let fullPrice;
let servicePercentPrice;

let allServicePrices;

const getAllServicePrices = function () {
  return servicePrice1 + servicePrice2;
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

allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle();

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log(screens);
console.log(getRollbackMessage(fullPrice));
console.log('Процент отката посреднику за работу', servicePercentPrice);