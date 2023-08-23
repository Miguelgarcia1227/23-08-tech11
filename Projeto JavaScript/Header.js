const botao_top10 = document.getElementById("login-link2");
const modal2 = document.getElementById("modal2");
const modalContest2 = document.getElementById('modal-content2');

botao_top10.onclick = function() {
  modal2.style.display = "block";
}

const closeBtn2 = document.getElementsByClassName("close2")[0];
closeBtn2.onclick = function() {
  modal2.style.display = "none";
}

window.onclose = function(event) {
  if (event.target == modal2) {
  modal2.style.display = "none";
  }
  }





const loginBtn = document.getElementById("login-link");
const modal = document.getElementById("login-modal");

loginBtn.onclick = function() {
  modal.style.display = "block";
}

const closeBtn = document.getElementsByClassName("close")[0];
closeBtn.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
  modal.style.display = "none";
  }
  }
const icon = document.getElementById('icon');
const clickableWord = document.getElementById('clickable-word');
const hideButton = document.getElementById('hide-button');

icon.addEventListener('mouseover', () => {
  if (clickableWord.classList.contains('hidden')) {
    clickableWord.classList.remove('hidden');
  } else {
    clickableWord.classList.add('hidden');
  }
});


const icon2 = document.getElementById('icon2');
const clickableWord2 = document.getElementById('clickable-word2');
const hideButton2 = document.getElementById('hide-button2');

icon2.addEventListener('mouseover', () => {
  if (clickableWord2.classList.contains('hidden2')) {
    clickableWord2.classList.remove('hidden2');
  } else {
    clickableWord2.classList.add('hidden2');
  }
});



const icon3 = document.getElementById('icon3');
const clickableWord3 = document.getElementById('clickable-word3');
const hideButton3 = document.getElementById('hide-button3');

icon3.addEventListener('mouseover', () => {
  if (clickableWord3.classList.contains('hidden3')) {
    clickableWord3.classList.remove('hidden3');
  } else {
    clickableWord3.classList.add('hidden3');
  }
});



const icon4 = document.getElementById('icon4');
const clickableWord4 = document.getElementById('clickable-word4');
const hideButton4 = document.getElementById('hide-button4');

icon4.addEventListener('mouseover', () => {
  if (clickableWord4.classList.contains('hidden4')) {
    clickableWord4.classList.remove('hidden4');
  } else {
    clickableWord4.classList.add('hidden4');
  }
});




const icon5 = document.getElementById('login-link2');
const clickableWord5 = document.getElementById('clickable-word5');
const hideButton5 = document.getElementById('hide-button5');

icon5.addEventListener('mouseover', () => {
  if (clickableWord5.classList.contains('hidden5')) {
    clickableWord5.classList.remove('hidden5');
  } else {
    clickableWord5.classList.add('hidden5');
  }
});




