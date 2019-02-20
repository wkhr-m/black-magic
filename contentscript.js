'use strict';

function blackMagic() {
  let overlay = document.createElement('div');
  overlay.className = 'content__overlay';
  overlay.style.position = 'fixed';
  overlay.style.top = '60px';
  overlay.style.left = '60px';

  let star = document.createElement('div');
  star.className = 'content__star';
  star.innerHTML = '★';
  overlay.style.fontSize = '60px';

  overlay.appendChild(star);
  document.body.appendChild(overlay);

  setTimeout(() => document.body.removeChild(overlay), 5000);
}


chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  blackMagic();
});