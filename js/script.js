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
    this.addTitle();
    plus.addEventListener('click', this.addScreenBlock);
    rollback.addEventListener('input', this.addRollback);
    this.addScreens();
  },
  addScreens: function () {
    start.addEventListener('click', () => {
      this.screens.splice(0);
      const screensDisp = document.querySelectorAll('.screen');
      const inputs = document.querySelectorAll('input');
      const selects = document.querySelectorAll('select');
      screensDisp.forEach((screen, index) => {
        const select = screen.querySelector('select');
        const input = screen.querySelector('input');
        const selectName = select.options[select.selectedIndex].textContent;


        if (input.value !== "" && select.value !== "") {

          this.screens.push({
            id: index,
            name: selectName,
            price: +select.value * +input.value,
            count: +input.value,
          });
          if (screensDisp.length === this.screens.length) {
            this.start();
            inputs.forEach((item) => {
              item.disabled = true;
            });
            selects.forEach((item) => {
              item.disabled = true;
            });
            reset.style = "display = flex";
            start.style.display = "none";
          }

        } else {
          this.screens.splice(0);
        }

      });

    });
  },
  reset: function () {
    reset.addEventListener('click', () => {
      start.style = "display = flex";
      reset.style.display = "none";
      const check = document.querySelectorAll('input[type=checkbox]');
      const screensDisp = document.querySelectorAll('.screen');
      screensDisp.forEach((screen, index) => {
        const select = screen.querySelector('select');
        const input = screen.querySelector('input');
        input.value = '';
        select.selectedIndex = 0;
        input.disabled = false;
        select.disabled = false;
      })

      check.forEach((item) => {
        item.disabled = false;
        if (item.checked) {
          item.checked = !item.checked;
        }
      });
      this.screenPrice = 0;
      this.servicePricesNumber = 0;
      this.servicePricesPercent = 0;
      this.fullPrice = 0;
      this.servicePercentPrice = 0;
      this.numberOfscreens = 0;
      rollback.disabled = false;
      rollback.value = 0;
      screens = document.querySelectorAll('.screen');
      // screens.splice(1);
      appData.screens.splice(1);
      this.addRollback();
      this.showResult();
    })

  },
  addRollback: function () {
    appData.rollback = rollback.value;
    span.innerHTML = rollback.value + "%";
  },
  addTitle: function () {
    document.title = title.textContent;
  },
  start: function () {

    this.addServices();
    this.addPrices();
    this.showResult();
    this.reset();
  },
  showResult: function () {
    totalInput0.value = this.screenPrice;
    totalInput1.value = this.numberOfscreens;
    totalInput2.value = this.servicePricesPercent + this.servicePricesNumber;
    totalInput3.value = this.fullPrice;
    totalInput4.value = this.servicePercentPrice;

  },

  addServices: function () {
    otherItems1.forEach((item) => {
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text]');


      if (check.checked) {
        this.servicesPercent[label.textContent] = +input.value;
      }
    });
    otherItems2.forEach((item) => {
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text]');


      if (check.checked) {
        this.servicesNumber[label.textContent] = +input.value;
      }
    });
  },
  addScreenBlock: function () {
    screens = document.querySelectorAll('.screen');
    const cloneScreen = screens[0].cloneNode(true);
    cloneScreen.querySelector('input[type=text]').value = '';
    screens[screens.length - 1].after(cloneScreen);
    appData.screens.splice(0);
  },


  addPrices: function () {
    this.screenPrice = 0;
    this.servicePricesNumber = 0;
    this.servicePricesPercent = 0;
    this.fullPrice = 0;
    this.servicePercentPrice = 0;
    this.numberOfscreens = 0;
    for (let screens of appData.screens) {
      this.screenPrice += +screens.price;
    }
    for (let key in this.servicesNumber) {
      this.servicePricesNumber += this.servicesNumber[key];
    }
    for (let key in this.servicesPercent) {
      this.servicePricesPercent += this.screenPrice * (this.servicesPercent[key] / 100);
    }
    for (let screens of appData.screens) {
      this.numberOfscreens += +screens.count;
    }
    this.fullPrice = +this.screenPrice + this.servicePricesNumber + this.servicePricesPercent;

    this.servicePercentPrice = this.fullPrice - (this.fullPrice * (this.rollback / 100));

  },

  // getRollbackMessage: function (price) {
  //   if (price >= 30000) {
  //     return "Даем скидку в 10%";
  //   } else if (price >= 15000 && price < 30000) {
  //     return "Даем скидку в 5%";
  //   } else if (price < 15000 && price >= 0) {
  //     return "Скидка не предусмотрена";
  //   } else {
  //     return "Что то пошло не так";
  //   }
  // },

  logger: function () {
    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrice);
    console.log(appData.screens);
    console.log(title, start, reset, plus, otherItems1, otherItems2, rollback, span, totalInput0, totalInput1, totalInput2, totalInput3, totalInput4, screen)
  }
};
appData.init();