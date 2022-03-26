'use strict';

const tab = document.querySelector('tbody');

document.querySelector('.append-row')
  .addEventListener('click', () => {
    if (tab.children.length < 10) {
      tab.append(tab.children[0].cloneNode(true));
    }
  });

document.querySelector('.remove-row')
  .addEventListener('click', () => {
    if (tab.children.length > 2) {
      tab.firstChild.remove();
    }
  });

document.querySelector('.append-column')
  .addEventListener('click', () => {
    const tableCollums = tab.children[0].children;

    if (tableCollums.length <= 9) {
      for (const item of [...tab.children]) {
        item.append(item.children[0].cloneNode(true));
      }
    }
  });

document.querySelector('.remove-column')
  .addEventListener('click', () => {
    const tableCollums = tab.children[0].children;

    if (tableCollums.length > 2) {
      for (const item of [...tab.children]) {
        item.firstChild.remove();
      }
    }
  });
