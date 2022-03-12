'use strict';

const tab = document.querySelector('tbody');
const textTab = tab.innerHTML;
const textArr = textTab.split('<tr>');

textArr.shift();

document.querySelector('.append-row')
  .addEventListener('click', () => {
    if (textArr.length > 9) {
      return;
    }

    const re = `<td></td>`;
    let rRe = ``;

    for (let i = 0; i < 4; i++) {
      rRe += re;
    }

    const row = `
    <tr>
      ${rRe}
    </tr>
  `;

    textArr.push(row);

    const text = textArr.join('');

    tab.innerHTML = text;
  });

document.querySelector('.remove-row')
  .addEventListener('click', () => {
    if (textArr.length < 3) {
      return;
    }
    textArr.pop();

    const text = textArr.join('');

    tab.innerHTML = text;
  });

document.querySelector('.append-column')
  .addEventListener('click', () => {
    const newText = textArr.map(el => (`<tr> <td></td>` + el));

    const text = newText.join('');

    tab.innerHTML = text;
  });

document.querySelector('.remove-column')
  .addEventListener('click', () => {
    const newText = textArr.map(el => (el.replace(`<td></td>`, ` `)));

    const text = newText.join('');

    tab.innerHTML = text;
  });
