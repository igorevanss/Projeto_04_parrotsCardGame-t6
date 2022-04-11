function askCards() {
  let numberCards = Number(prompt('Digite quantas cartas você quer!'))
  console.log(numberCards)

  while (numberCards < 4 || numberCards > 14 || numberCards % 2 !== 0) {
    console.log(numberCards)
    alert(
      'O número precisa ser maior que 3 e menor que 15 e também divisivel por dois.'
    )

    numberCards = Number(prompt('Digite quantas cartas você quer!'))
  }
  let keepCards = document.querySelector('.parrot-game')
  let keepDiv = `<div class="parrot-card" >
  <img class="front-side" src="./images/front.png" alt="">

  <img class="back-side" src="${}" alt="">

  </div>`

  for (let i = 0; i < numberCards.length; i++) {
    keepDiv.innerHTML += `<div class="parrot-card" >
  
    <img class="back-side" src="${}" alt="">
  
    </div>`

  //Início de logica e embaralhamento.

  let gifs = ["bobross", "explody", "metal", "fiesta", "revertit", "triplets", "unicorn"];

   
   gifs.sort(sorter)

   function sorter(){
     return Math.random() - 0.5;
   }

   console.log(gifs)
   console.log()

  keepCards.innerHTML += keepDiv
  keepCards.innerHTML += keepDiv

  let sortRandom = [];

  for (let i=0; i<numberCards.length/2; i++){
    sortRandom.push(gifs[i])
    sortRandom.push(gifs[i])
  }

  sortRandom.sort(sorter)
}
askCards()

const cards = document.querySelectorAll('.parrot-card')

let hasFlippedCard = false

function flipCard() {
  this.classList.add('flip')

  if (!hasFlippedCard) {
    hasFlippedCard = true
  }
  hasFlippedCard = false
}

cards.forEach(card => card.addEventListener('click', flipCard))

// minhaArray.sort(comparador); // Após esta linha, a minhaArray estará embaralhada

// // Esta função pode ficar separada do código acima, onde você preferir
// function comparador() {
// 	return Math.random() - 0.5;
// }
