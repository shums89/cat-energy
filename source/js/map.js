const map = document.querySelector('.footer-location__map');
const mapFrame = map.querySelector('.footer-location__map-frame');
const mapPin = map.querySelector('.footer-location__map-pin');

focus();
const listener = window.addEventListener('blur', () => {
  if (document.activeElement === mapFrame) {
    mapPin.style.display = "none";
  }
  window.removeEventListener('blur', listener);
});
