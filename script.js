const img = document.querySelector('img');
const button = document.querySelector('button');
const arr = ['one', 'two', 'three', 'four', 'five', 'six'];
// ========
const toast = document.querySelector(".toast");
const progress = document.querySelector(".progress");


function random(items) {
  return items[Math.floor(Math.random() * items.length)];
};

img.addEventListener('click', () => {
  img.src = `./img/${random(arr)}.svg`;
});

// ==================
let timer1, timer2;
let count = 0;

button.addEventListener('click', () => {
  img.src = `./img/${random(arr)}.svg`;

  count++
  console.log(count);

  if (count >= 6) {
    toast.classList.add("active");
    progress.classList.add("active");

    timer1 = setTimeout(() => {
      toast.classList.remove("active");
    }, 5000); //1s = 1000 milliseconds

    timer2 = setTimeout(() => {
      progress.classList.remove("active");
    }, 5300);

    count = 0;
  }
});
// ==================