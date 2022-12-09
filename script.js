'use strict';


const appData = {
  title: '',
  screens: '',
  screenPrice: 0,
  adaptive: true,
  service1: '',
  service2: '',
  rollback: 76,
  fullPrice: 0,
  servicePercentPrice: 0,
  allServicePrices: 0,
  asking: function () {
    appData.title = prompt("Как называется ваш проект?", "Калькулятор вёрстки");
    appData.screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные");
    let var1 = " ";
    do {
      var1 = prompt("Сколько будет стоить данная работа?");
    } while (!appData.isNumber(var1));
    appData.screenPrice = parseInt(var1);
    appData.adaptive = confirm('Нужен ли адаптив на сайте?');
  },
  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },
  getAllServicePrices: function () {
    let sum = 0;
    for (let i = 0; i < 2; i++) {
      let var2 = " ";
      if (i === 0) {
        appData.service1 = prompt("Какой дополнительный тип услуги нужен?");

      } else if (i === 1) {
        appData.service2 = prompt("Какой дополнительный тип услуги нужен?");
      }

      while (!appData.isNumber(var2)) {
        var2 = prompt('Сколько это будет стоить?');
      }
      sum += parseInt(var2);
    }
    return sum;
  },
  getFullPrice: function () {
    return appData.screenPrice + appData.allServicePrices;
  },
  getTitle: function () {
    return appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase();
  },
  getServicePercentPrices: function () {
    return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
  },
  getRollbackMessage: function (price) {
    if (price >= 30000) {
      return "Даем скидку в 10%";
    } else if (price >= 15000 && price < 30000) {
      return "Даем скидку в 5%";
    } else if (price < 15000 && price >= 0) {
      return "Скидка не предусмотрена";
    } else {
      return "Что то пошло не так";
    }
  },
  start: function () {
    appData.asking();
    appData.allServicePrices = appData.getAllServicePrices();
    appData.fullPrice = appData.getFullPrice();
    appData.servicePercentPrice = appData.getServicePercentPrices();
    appData.title = appData.getTitle();
    appData.logger();
  },
  logger: function () {
    for (let key in appData) {
      console.log(key);
    }
  }
};
appData.start();