let phrases = [
  "A vida trará coisas boas se tiver paciência.",
  "Defeitos e virtudes são apenas dois lados da mesma moeda.",
  "A maior de todas as torres começa no solo.",
  "A juventude não é uma época da vida, é um estado de espírito.",
  "Não importa o tamanho da montanha, ela não pode tapar o sol.",
  "São os nossos amigos que nos ensinam as mais valiosas lições.",
  "A adversidade é um espelho que reflete o verdadeiro eu.",
  "Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.",
  "Sem o fogo do entusiasmo, não há o calor da vitória.",
  "O riso é a menor distância entre duas pessoas.",
  "Quem olha para fora sonha; quem olha para dentro acorda.",
  "Todas as coisas são difíceis antes de se tornarem fáceis."
]
const btnNewCookie = document.querySelector("#btnAgain")
const btnCookie =  document.querySelector("#btnCookie")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

btnCookie.addEventListener('click', openCookie)
btnNewCookie.addEventListener('click', cookieNew)



function openCookie() {
  screenToggle()  

  if (phrases.length > 0) {
    screen2
    .querySelector('p')
    .innerText = `${phrases.shift()}`
  } else {
    alert("Pressione F5 para começar novamente")
  }
}

function cookieNew() {
screenToggle()  
}

function screenToggle() { 
  screen1.classList.toggle("hide") 
  screen2.classList.toggle("hide")
}
