const compare = document.querySelector('.compare');
const compareItemBefore = compare.querySelector('.compare__item--before');
const compareItemAfter = compare.querySelector('.compare__item--after');
const beforeBtn = compare.querySelector('.compare__toggle--before');
const afterBtn = compare.querySelector('.compare__toggle--after');

beforeBtn.addEventListener('click', () => {
  compareItemBefore.classList.add('compare__item--current');
  compareItemAfter.classList.remove('compare__item--current');
  beforeBtn.classList.add('compare__toggle--current');
  afterBtn.classList.remove('compare__toggle--current');
});

afterBtn.addEventListener('click', () => {
  compareItemBefore.classList.remove('compare__item--current');
  compareItemAfter.classList.add('compare__item--current');
  beforeBtn.classList.remove('compare__toggle--current');
  afterBtn.classList.add('compare__toggle--current');
});
