const deg = 6;
const toggle = document.getElementById(`toggle`);
const body = document.querySelector(`body`);
const hr = document.querySelector(`#hr`);
const mn = document.querySelector(`#mn`);
const sc = document.querySelector(`#sc`);
const clock = document.querySelector(`.clock`);

toggle.onclick = function () {
  toggle.classList.toggle(`active`);
  body.classList.toggle(`active`);
  mn.classList.toggle(`active`);
  sc.classList.toggle(`active`);
  clock.classList.toggle(`active`);

};

setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;
});
