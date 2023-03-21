const time = document.querySelector(".time");
let countTime = 60;
time.textContent = countTime;

setInterval(() => {
  if (countTime === 0) {
    clearInterval();
  } else {
    time.textContent = --countTime;
  }
}, 1000);
