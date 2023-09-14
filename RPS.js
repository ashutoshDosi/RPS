    
      let computerMove = '';
      let playerMove = '';
      let result = '';
      let score = JSON.parse(localStorage.getItem('score')) || {
        win: 0, 
        loss: 0, 
        tie: 0, 
      }
      updateScoreElements();
      updateResultElements();

      function updateScoreElements(){
        document.querySelector('.js-score').innerHTML = `Wins: ${score.win}. Loss: ${score.loss}. Tie: ${score.tie}`
      }

      function updateResultElements(){
        document.querySelector('.js-result').innerHTML = `${result}`;
      }

      function getResult (playerMove){
        const computerMove = getComputerMove();

        if (playerMove==='rock'){
          if(computerMove==='rock'){
            result = 'tie'
          } else if(computerMove==='paper'){
            result = 'loss'
          } else if(computerMove==='scissors'){
            result = 'win'
          }
        } else if (playerMove==='paper'){
          if(computerMove==='rock'){
            result = 'win'
          } else if(computerMove==='paper'){
            result = 'tie'
          } else if(computerMove==='scissors'){
            result = 'loss'
          }
        } else if (playerMove==='scissors'){
          if(computerMove==='rock'){
            result = 'loss'
          } else if(computerMove==='paper'){
            result = 'win'
          } else if(computerMove==='scissors'){
            result = 'tie'
          }
        }

        if (result==='win'){
          score.win += 1;
        }
        else if (result==='loss'){
          score.loss += 1;
        }
        else if (result==='tie'){
          score.tie += 1;
        }

        localStorage.setItem('score', JSON.stringify(score))

        updateScoreElements();
        updateResultElements();
        document.querySelector('.js-moves').innerHTML = `You picked ${playerMove}. Computer picked ${computerMove}`
      }

      function getComputerMove(){
        const randomNumber = Math.random(); //Generates a number between 0 & 1

        if(randomNumber>=0 && randomNumber<1/3){
          computerMove = 'rock';
        } else if(randomNumber>=1/3 && randomNumber<2/3){
          computerMove = 'paper'
        } else if(randomNumber>=2/3 && randomNumber<1){
          computerMove = 'scissors';
        }
        return computerMove;
      }

      function getPlayerMove(){
        const randomNumber = Math.random();

        if(randomNumber>=0 && randomNumber<1/3){
          playerMoveMove = 'rock';
        } else if(randomNumber>=1/3 && randomNumber<2/3){
          playerMove = 'paper'
        } else if(randomNumber>=2/3 && randomNumber<1){
          playerMove = 'scissors';
        }
        return playerMove
      }

      function autoPlay(){
        let movebyPlayer = getPlayerMove();
        setInterval((getResult(movebyPlayer)), 5000);
      }

      console.log(getComputerMove())