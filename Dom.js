let play = false;
let interStop;

function auto() {
  if(!play) {
        interStop = setInterval(function() {
          const l = playGame();
          
          fullGame(l);
        }, )
    play = true
    console.log(play)
  } else {
    clearInterval(interStop);
    play = false
  }
      }
      function calclate() {
        const input = document.querySelector(".val")
        let cost = Number(input.value);
        console.log(cost)
        if (cost < 40) {
          cost += 10
          console.log(cost)
        }
        document.querySelector(".total")
        .innerHTML = `${cost}`
      }

      const score = {
        wins: 0,
        loses: 0,
        ties: 0
      }
      document.querySelector('.Rock')
       .addEventListener('click', () => {
         fullGame('rock')
       })
      document.querySelector('.Paper')
       .addEventListener('click', () => {
         fullGame('paper')
       })
      document.querySelector('.Scissors')
       .addEventListener('click', () => {
         fullGame('scissors')
       })
        /** @param {} x */
      function fullGame (x) {
       const computerMove = playGame();

        let resuilt = '';
       // تحديد الفوز و الخساره على حسب الاختيار و حركه الكيمبيوتر
        if (x === 'rock') {
          if (computerMove === 'rock') {
            resuilt = 'Tie.'
          } else if (computerMove === 'paper') {
            resuilt = 'You lose!'
          } else if (computerMove === 'scissors') {
            resuilt = 'You win!'
          }
        }
        
        if (x === 'scissors') {
          if (computerMove === 'rock') {
            resuilt = 'You lose!'
          } else if (computerMove === 'paper') {
            resuilt = 'You win!'
          } else if (computerMove === 'scissors') {
            resuilt = 'Tie.'
          }
        }
        
        if (x === 'paper') {
          if (computerMove === 'rock') {
            resuilt = 'You win!'
          } else if (computerMove === 'paper') {
            resuilt = 'Tie.'
          } else if (computerMove === 'scissors') {
            resuilt = 'You lose!'
          }
        }
        document.querySelector(".result")
        .innerHTML = resuilt;
        document.querySelector(".pick")
        .innerHTML = `You ${x} - ${computerMove} Computer`
        
        // زياده او نقصان النقاط
        if (resuilt === 'You win!') {
          score.wins += 1
        } else if (resuilt === 'You lose!') {
          score.loses += 1
        } else if (resuilt === 'Tie.') {
          score.ties += 1
        }
        updateScore();
        console.log(`${resuilt}`)
        console.log(score)
      }
      function updateScore() {
        document.querySelector(".js-p")
        .innerHTML = `wins: ${score.wins}, loses: ${score.loses}, ties: ${score.ties} `
      }
      
      function playGame() {
        const random = Math.random();
        let computerMove = '';
        if (random >= 0 && random < 1/3) {
          computerMove = 'rock'
          console.log(computerMove)
        } else if (random >= 1/3 && random < 2/3) {
          computerMove = 'paper'
          console.log('paper')
        } else if (random >= 2/3 && random < 1) {
          computerMove = 'scissors'
          console.log('Scissors')
          }
        return computerMove;
      }
