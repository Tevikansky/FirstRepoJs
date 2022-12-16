const list = document.querySelectorAll(".books")[0];
const book = document.querySelectorAll(".book");
const body = document.querySelector('body');
const blank = document.querySelectorAll('[target="_blank"]')[4];
const adv = document.querySelector('.adv');
const chapterOfBook2 = book[0].querySelectorAll('li');
const chapterOfBook5 = book[5].querySelectorAll('li');
const chapterOfBook6 = book[2].querySelectorAll('li');
const newChapter = document.createElement('li');

newChapter.textContent = 'Глава 8: За пределами ES6';

list.append(book[1], book[0], book[4], book[3], book[5], book[2]);
body.style = "background-image: url(./image/adv.jpg)";
blank.innerHTML = 'Книга 3. this и Прототипы Объектов';
adv.remove();
book[0].append(chapterOfBook2[0], chapterOfBook2[1], chapterOfBook2[3], chapterOfBook2[6], chapterOfBook2[8], chapterOfBook2[4], chapterOfBook2[5], chapterOfBook2[7], chapterOfBook2[9], chapterOfBook2[2], chapterOfBook2[10]);
book[5].append(chapterOfBook5[0], chapterOfBook5[1], chapterOfBook5[9], chapterOfBook5[3], chapterOfBook5[4], chapterOfBook5[2], chapterOfBook5[6], chapterOfBook5[7], chapterOfBook5[5], chapterOfBook5[8], chapterOfBook5[10]);
chapterOfBook6[8].after(newChapter);