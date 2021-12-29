const WITH_TABLET = 768;

const compare = document.querySelector('.compare');
const compareItems = compare.querySelectorAll('.compare__item');
const compareItemCurrent = compare.querySelector('.compare__item--current');
const compareItemBefore = compare.querySelector('.compare__item--before');
const compareItemAfter = compare.querySelector('.compare__item--after');
const controls = compare.querySelector('.compare__controls');
const beforeBtn = controls.querySelector('.compare__toggle--before');
const afterBtn = controls.querySelector('.compare__toggle--after');
const scaleToggle = controls.querySelector('.compare__scale-toggle');

window.addEventListener(`resize`, main);
scaleToggle.addEventListener('input', () => {
  compareItems.forEach(compareItem => {
    compareItem.style.transitionDuration = '0s';
  });
  compareItemCurrent.style.transitionDuration = '0s';

  draw();
});

beforeBtn.addEventListener('click', () => {
  scaleToggle.value = document.body.clientWidth < WITH_TABLET ? 1 : 100;
  compareItems.forEach(compareItem => {
    compareItem.style.transitionDuration = '1s';
  });
  compareItemCurrent.style.transitionDuration = '1s';

  draw();
});

afterBtn.addEventListener('click', () => {
  scaleToggle.value = document.body.clientWidth < WITH_TABLET ? 2 : 1;

  compareItems.forEach(compareItem => {
    compareItem.style.transitionDuration = '1s';
  });
  compareItemCurrent.style.transitionDuration = '1s';

  draw();
});


function draw() {
  value = scaleToggle.value;

  if (document.body.clientWidth < WITH_TABLET) {
    if (value == 1) {
      compareItemBefore.classList.add('compare__item--current');
      compareItemAfter.classList.remove('compare__item--current');
    } else {
      compareItemBefore.classList.remove('compare__item--current');
      compareItemAfter.classList.add('compare__item--current');
    }

    compareItemBefore.style.width = '';
    compareItemAfter.style.width = '';
    compareItemAfter.style.marginLeft = '';
  } else {
    compareItemBefore.style.width = `${value}%`;

    compareItemAfter.style.width = `${100 - value}%`;
    compareItemAfter.style.marginLeft = `${value}%`;
  }
}

function main() {
  compare.classList.remove('compare--nojs');

  if (document.body.clientWidth < WITH_TABLET) {
    scaleToggle.value = 1;
    scaleToggle.max = 2;
  } else {
    scaleToggle.value = 50;
    scaleToggle.max = 100;
  }

  draw();
}


main();
