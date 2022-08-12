'use strict';

(() => {
    const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];
    const FIGURES_COMP = ['камень', 'ножницы', 'бумага'];
    const getRandomIntInclusive = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); 
      };
      const game = (language) => {
        const result = {
            player: 0,
            computer: 0,
        };
        return function start(){
           let playerAnswer = prompt('камень, ножницы, бумага?');
           
           
           if (playerAnswer === null) {
            let endQuestion = confirm("Точно хотите выйти?");
            if (!endQuestion){
              console.log(result.player, result.computer);
              return start()
             }
             if (endQuestion){
              alert(`Результат: Компьютер ${result.computer}   Игрок ${result.player}`);
              console.log(result.player, result.computer);
              return
             } 
           }
           
           playerAnswer = playerAnswer.toLowerCase();

           let playerMath;

           FIGURES_RUS.forEach(element => { 
            for (let i=0; i < playerAnswer.length; i++){
               if (element[i] !== playerAnswer[i]) return 
             } return playerMath = FIGURES_RUS.indexOf(element) + 1;
            });

           let compAnswer;
           const compMath = getRandomIntInclusive(1,3);
           if (compMath == playerMath) {
              alert(`Компьютер ${FIGURES_COMP[compMath-1]}  Игрок ${FIGURES_RUS[playerMath-1]}   Ничья`);     
              console.log('Компьютер', FIGURES_COMP[compMath-1])
              console.log('Игрок', FIGURES_RUS[playerMath-1])
              console.log('Ничья')
           }
           if (compMath > playerMath & compMath - playerMath !=2  || compMath == 1 & playerMath == 3) {
              alert(`Компьютер ${FIGURES_COMP[compMath-1]}   Игрок ${FIGURES_RUS[playerMath-1]}   Игрок выиграл`);      
              console.log('Компьютер', FIGURES_COMP[compMath-1])
              console.log('Игрок', FIGURES_RUS[playerMath-1])
              console.log('Игрок выиграл')
              result.player++
           }
           if (compMath < playerMath & compMath - playerMath !=2  || compMath == 3 & playerMath == 1) {
              alert(`Компьютер ${FIGURES_COMP[compMath-1]}   Игрок ${FIGURES_RUS[playerMath-1]}     Компьютер выиграл`);
              console.log('Компьютер', FIGURES_COMP[compMath-1])
              console.log('Игрок', FIGURES_RUS[playerMath-1])
              console.log('Компьютер выиграл')
              result.computer++
           }
           
           let endAnswer = confirm("Ещё?");
           
           if (endAnswer){
            console.log(result.player, result.computer);
            return start()
           }
           if (!endAnswer){
            alert(`Результат: Компьютер ${result.computer}   Игрок ${result.player}`);
            console.log(result.player, result.computer);
            return
           }
            
        };
        
      };
      window.RPS = game;

})()