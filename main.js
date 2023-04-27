// Increase numbers in fact section //

// Select the fun section
let funSection = document.querySelector(".fun");

// Select the numbers
let numbers = document.querySelectorAll(".fun .box .number");

// To prevent repeat the function on scroll 
let repeat = false;

window.onscroll = function () {
  if (window.scrollY >= funSection.offsetTop -  300) {
    if (!repeat) {
      numbers.forEach((number) => {
        increaseNumbers(number);
      });
      repeat = true;
    }
  }
};

function increaseNumbers(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == el.dataset.goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

/*************************************************************/ 