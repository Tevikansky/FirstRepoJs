'use strict';

const title = document.getElementsByTagName('h1')[0].innerText;
const start = document.getElementsByClassName('handler_btn')[0];
const reset = document.getElementsByClassName('handler_btn')[1];
const plus = document.querySelector('.screen-btn');
const otherItems1 = document.querySelectorAll('.other-items.percent');
const otherItems2 = document.querySelectorAll('.other-items.number');
const rollback = document.querySelector('.rollback').childNodes[1].childNodes[1];
const span = document.querySelector('.rollback').childNodes[1].childNodes[3];
const totalInput0 = document.getElementsByClassName('total-input')[0];
const totalInput1 = document.getElementsByClassName('total-input')[1];
const totalInput2 = document.getElementsByClassName('total-input')[2];
const totalInput3 = document.getElementsByClassName('total-input')[3];
const totalInput4 = document.getElementsByClassName('total-input')[4];
let screen = document.querySelectorAll('.screen')[0];


const appData = {
  title: '',
  screens: [],
  screenPrice: 0,
  adaptive: true,
  services: {},
  rollback: 76,
  fullPrice: 0,
  servicePercentPrice: 0,
  allServicePrices: 0,
  asking: function () {

    do {
      appData.title = prompt("Как называется ваш проект?", "Калькулятор вёрстки");
    } while (appData.isNumber(appData.title));



    for (let i = 0; i < 2; i++) {
      let name;
      do {
        name = prompt("Какие типы экранов нужно разработать?");
      } while (appData.isNumber(name));


      let price = 0;

      do {
        price = prompt("Сколько будет стоить данная работа?");
      } while (!appData.isNumber(price));

      appData.screens.push({
        id: i,
        name: name,
        price: price
      })

    }



    for (let i = 0; i < 2; i++) {
      let name;

      do {
        name = prompt("Какой дополнительный тип услуги нужен?");
      } while (appData.isNumber(name));

      let price = " ";
      while (!appData.isNumber(price)) {
        price = prompt('Сколько это будет стоить?');
      }

      appData.services[name] = +price;

    }

    appData.adaptive = confirm('Нужен ли адаптив на сайте?');


  },
  addPrices: function () {
    for (let screen of appData.screens) {
      appData.screenPrice += +screen.price;
    }
    for (let key in appData.services) {
      appData.allServicePrices += appData.services[key];
    }
  },


  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },
  getFullPrice: function () {
    appData.fullPrice = appData.screenPrice + appData.allServicePrices;
  },
  getTitle: function () {
    appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase();
  },
  getServicePercentPrices: function () {
    appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
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
    appData.addPrices();
    appData.getFullPrice();
    appData.getServicePercentPrices();
    appData.getTitle();
    appData.logger();
  },
  logger: function () {
    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrice);
    console.log(appData.screens);
    console.log(title, start, reset, plus, otherItems1, otherItems2, rollback, span, totalInput0, totalInput1, totalInput2, totalInput3, totalInput4, screen)
  }
};
appData.start();