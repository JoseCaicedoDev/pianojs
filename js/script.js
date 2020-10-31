function playSound(key) {
  const audio = document.querySelector(`audio[data-key="${key}"]`);
  const song = document.querySelector(`.song[data-key="${key}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  song.classList.add("playing");
  setTimeout(() => song.classList.remove("playing"), 100);
}

function play(e) {
  key = e.keyCode;
  console.log(key);
  playSound(key);
}

function playClick(e) {
  click = e.srcElement.getAttribute("data-key");
  playSound(click);
}

function musicCucaracha() {
  const keys = {
    do: 65,
    re: 83,
    mi: 68,
    fa: 70,
    sol: 71,
    la: 72,
    si: 74,
  };

  const lettlers = [
    { key: "do", time: 300 },
    { key: "do", time: 600 },
    { key: "do", time: 900 },
    { key: "fa", time: 1500 },
    { key: "la", time: 2000 },
    { key: "do", time: 2300 },
    { key: "do", time: 2600 },
    { key: "do", time: 2900 },
    { key: "fa", time: 3500 },
    { key: "la", time: 4000 },
    { key: "fa", time: 4300 },
    { key: "fa", time: 4600 },
    { key: "mi", time: 4900 },
    { key: "mi", time: 5200 },
    { key: "re", time: 5500 },
    { key: "re", time: 5800 },
    { key: "do", time: 6100 },
    { key: "do", time: 6600 },
    { key: "do", time: 7000 },
    { key: "do", time: 7400 },
    { key: "mi", time: 8000 },
    { key: "sol", time: 8600 },
    { key: "do", time: 9000 },
    { key: "do", time: 9400 },
    { key: "do", time: 9800 },
    { key: "mi", time: 10400 },
    { key: "sol", time: 11000 },
    { key: "do", time: 11400 },
    { key: "re", time: 11800 },
    { key: "do", time: 12200 },
    { key: "si", time: 12600 },
    { key: "la", time: 13000 },
    { key: "sol", time: 13300 },
    { key: "fa", time: 13600 },
  ];

  lettlers.forEach((lettler, i) => {
    setTimeout(() => playSound(keys[lettler.key]), (i = lettler.time));
    /*     console.log(lettler, i * lettler.time); */
  });
}

window.addEventListener("keydown", play);
window.addEventListener("click", playClick);
