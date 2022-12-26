'use strict';

const title = document.getElementsByTagName('h1')[0];
const start = document.getElementsByClassName('handler_btn')[0];
const reset = document.getElementsByClassName('handler_btn')[1];
const plus = document.querySelector('.screen-btn');
const otherItems1 = document.querySelectorAll('.other-items.percent');
const otherItems2 = document.querySelectorAll('.other-items.number');
const rollback = document.querySelector('.rollback').childNodes[1].childNodes[1];
let span = document.querySelector('.rollback').childNodes[1].childNodes[3];
const totalInput0 = document.getElementsByClassName('total-input')[0];
const totalInput1 = document.getElementsByClassName('total-input')[1];
const totalInput2 = document.getElementsByClassName('total-input')[2];
const totalInput3 = document.getElementsByClassName('total-input')[3];
const totalInput4 = document.getElementsByClassName('total-input')[4];
let screens = document.querySelectorAll('.screen');




const appData = {
  title: '',
  screens: [],
  screenPrice: 0,
  adaptive: true,
  servicesPercent: {},
  servicesNumber: {},
  rollback: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  numberOfscreens: 0,


  init: function () {
    appData.addTitle();
    plus.addEventListener('click', appData.addScreenBlock);
    rollback.addEventListener('input', appData.addRollback);
    appData.addScreens();
  },
  addScreens: function () {
    start.addEventListener('click', function () {
      appData.screens.splice(0);
      const screensDisp = document.querySelectorAll('.screen');
      screensDisp.forEach(function (screen, index) {
        const select = screen.querySelector('select');
        const input = screen.querySelector('input');
        const selectName = select.options[select.selectedIndex].textContent;


        if (input.value !== "" && select.value !== "") {

          appData.screens.push({
            id: index,
            name: selectName,
            price: +select.value * +input.value,
            count: +input.value,
          });
          console.log(screensDisp.length)
          console.log(appData.screens.length)
          if (screensDisp.length === appData.screens.length) {
            appData.start();
          }

        } else {
          appData.screens.splice(0);
        }
      });
    });
  },
  addRollback: function () {
    appData.rollback = rollback.value;
    span.innerHTML = rollback.value + "%";
  },
  addTitle: function () {
    document.title = title.textContent;
  },
  start: function () {

    appData.addServices();
    appData.addPrices();
    // appData.getServicePercentPrices();
    // appData.logger();


    appData.showResult()
  },
  showResult: function () {
    totalInput0.value = appData.screenPrice;
    totalInput1.value = appData.numberOfscreens;
    totalInput2.value = appData.servicePricesPercent + appData.servicePricesNumber;
    totalInput3.value = appData.fullPrice;
    totalInput4.value = appData.servicePercentPrice;

  },

  addServices: function () {
    otherItems1.forEach(function (item) {
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text]');


      if (check.checked) {
        appData.servicesPercent[label.textContent] = +input.value;
      }
    });
    otherItems2.forEach(function (item) {
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text]');


      if (check.checked) {
        appData.servicesNumber[label.textContent] = +input.value;
      }
    });
  },
  addScreenBlock: function () {
    const cloneScreen = screens[0].cloneNode(true);
    cloneScreen.querySelector('input[type=text]').value = '';
    screens[screens.length - 1].after(cloneScreen);
    appData.screens.splice(0);
  },


  addPrices: function () {
    appData.screenPrice = 0;
    appData.servicePricesNumber = 0;
    appData.servicePricesPercent = 0;
    appData.fullPrice = 0;
    appData.servicePercentPrice = 0;
    appData.numberOfscreens = 0;
    for (let screens of appData.screens) {
      appData.screenPrice += +screens.price;
    }
    for (let key in appData.servicesNumber) {
      appData.servicePricesNumber += appData.servicesNumber[key];
    }
    for (let key in appData.servicesPercent) {
      appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100);
    }
    for (let screens of appData.screens) {
      appData.numberOfscreens += +screens.count;
    }
    appData.fullPrice = +appData.screenPrice + appData.servicePricesNumber + appData.servicePricesPercent;

    appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
    console.log(appData.screens)
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

  logger: function () {
    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrice);
    console.log(appData.screens);
    console.log(title, start, reset, plus, otherItems1, otherItems2, rollback, span, totalInput0, totalInput1, totalInput2, totalInput3, totalInput4, screen)
  }
};
appData.init();