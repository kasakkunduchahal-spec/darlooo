const mono = document.getElementById('mono');
const color = document.getElementById('color');
const twentyThree = document.getElementById('twentyThree');
const hint = document.getElementById('hint');
const openButton = document.getElementById('openButton');
const sparkles = document.getElementById('sparkles');

let activated = false;

function makeSparkles() {
  const symbols = ['✦', '✧', '♡', '✦', '⋆'];
  for (let i = 0; i < 18; i++) {
    const el = document.createElement('span');
    el.className = 'sparkle';
    el.textContent = symbols[i % symbols.length];
    el.style.setProperty('--x', `${15 + Math.random() * 70}%`);
    el.style.setProperty('--y', `${45 + Math.random() * 35}%`);
    el.style.setProperty('--size', `${12 + Math.random() * 18}px`);
    el.style.setProperty('--delay', `${Math.random() * .65}s`);
    sparkles.appendChild(el);
  }
}

function activate() {
  if (activated) return;
  activated = true;

  hint.classList.add('hidden');
  color.classList.add('active');
  mono.classList.remove('active');
  makeSparkles();

  setTimeout(() => {
    openButton.classList.add('show');
  }, 1100);
}

twentyThree.addEventListener('click', activate);

// For this first test, the button simply demonstrates the next-page action.
// We will replace this with your actual envelope page after you confirm Stage 1 works.
openButton.addEventListener('click', () => {
  alert('Stage 1 works! Next we will connect this button to your envelope page. 💌');
});
