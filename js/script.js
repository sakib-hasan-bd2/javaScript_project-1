let counter = document.querySelector('.counter');
let button1 = document.querySelector('.button1');
let button2 = document.querySelector('.button2');
let button3 = document.querySelector('.button3');

button1.addEventListener('click', function () {
  let counterStart = 0;
  function counterJs() {
    counterStart--;
    counter.innerHTML = counterStart;

    button2.addEventListener('click', function () {
      button1.style.display = 'block';
      button3.style.display = 'block';
      counter.innerHTML = 0;
      clearInterval(stop);
    });
  }

  let stop = setInterval(() => {
    counterJs();
  }, 250);

  button1.style.display = 'none';
  button3.style.display = 'none';
});

button3.addEventListener('click', function () {
  let counterStart = 0;
  function counterJs() {
    counterStart++;
    counter.innerHTML = counterStart;

    button2.addEventListener('click', function () {
      button1.style.display = 'block';
      button3.style.display = 'block';
      counter.innerHTML = 0;
      clearInterval(stop);
    });
  }

  let stop = setInterval(() => {
    counterJs();
  }, 250);
  button1.style.display = 'none';
  button3.style.display = 'none';
});

// () => {
//   let counterNumber = counter.innerHTML;

//   function counterjS() {
//     counterNumber--;
//     counter.innerHTML = counterNumber;
//     if (counterNumber == 0) {
//       clearInterval(stop);
//     }
//   }

//   let stop = setInterval(() => {
//     counterjS();
//   }, 400);
// };
