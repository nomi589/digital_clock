const clock = document.querySelector(".clock");
/* Update the time display every second */
setInterval(updateTime, 1000);

function updateTime() {
  let currentDate = new Date();
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let seconds = currentDate.getSeconds();

  if (hours < 10) hours = `0${hours}`;
  if (minutes < 10) minutes = `0${minutes}`;
  if (seconds < 10) seconds = `0${seconds}`;

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

updateTime();
