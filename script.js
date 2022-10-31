'use strict';

const list = document.querySelector('.list');

const getStr = () => {
  const str = prompt('Введите строку');

  if (str === null || str === 'exit') return null;
  if (str && str.trim()) return str;
  return getStr();
};

const del = () => {
  list.querySelector('li:last-child').remove();
  return createListItems();
};

const clear = () => {
  list.innerHTML = '';
  return createListItems();
};

const createListItems = () => {
  const item = getStr();
  console.log(item);

  if (item === null) return;
  if (item === 'del') return del();
  if (item === 'clear') return clear();

  const listItem = document.createElement('li');
  listItem.textContent = item;
  list.append(listItem);

  createListItems();
};

createListItems();


