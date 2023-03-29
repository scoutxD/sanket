'use strict';

// document.querySelector('.message').textContent= 'i know u'

let secertnumber= Math.trunc(Math.random()*50)+1;

let score=15;
let highscore=0;

document.querySelector('.again').addEventListener(
    'click',function(){

        score=15;
        secertnumber= Math.trunc(Math.random()*50)+1;
        document.querySelector('.message').textContent= '⌛ Start guessing...';
        document.querySelector('body').style.backgroundColor='#222';
        document.querySelector('.number').style.width='15rem';
        document.querySelector('.number').textContent= '?';
        document.querySelector('h1').textContent= ' Guess My Number🤔 ';
        document.querySelector('.again').style.backgroundColor='#eee';
        document.querySelector('.score').textContent=score;
        document.querySelector('input').textContent=" ";

    }
)



document.querySelector('.check').addEventListener(
    'click',function(){
        //console.log("Clicked");
        let sanket=parseInt(document.querySelector('.guess').value);
        console.log(sanket);
        if(!sanket && sanket!=0 ){  
            document.querySelector('.message').textContent= '😒 First guess something...';
    }else if(sanket===secertnumber){
        document.querySelector('.message').textContent= 'Congrats but it was too easy😌';
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';
        document.querySelector('h1').textContent= '🎉 You won the game❤️ ';
        document.querySelector('.number').textContent= secertnumber;
        document.querySelector('.again').style.backgroundColor='#FFFF33';

        if(highscore<score){
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }
    }else if(sanket>secertnumber){
        if(score>1){
        document.querySelector('.message').textContent= '⬆️TOO HIGH🍯!!';
        score--;
        document.querySelector('.score').textContent= score;
        }else {
            document.querySelector('h1').textContent= ' 👾You lose💣';
            document.querySelector('.message').textContent= '🔁Go try again';
            document.querySelector('body').style.backgroundColor='#FF6347';
            document.querySelector('.again').style.backgroundColor='#FFFF33';
            //let score=0;
            document.querySelector('.score').textContent= '0';
            document.querySelector('.number').textContent= secertnumber;
            document.querySelector('.number').style.width='30rem';

        }
    }else if(sanket<secertnumber ){ 
        
        if(score>1){
        document.querySelector('.message').textContent= '⬇️TOO LOW🍯!!';
        score--;
        document.querySelector('.score').textContent= score;
        }else {
            document.querySelector('h1').textContent= ' 👾You lose💣';
            document.querySelector('.message').textContent= '🔁Go try again';
            document.querySelector('body').style.backgroundColor='#FF6347';
            document.querySelector('.again').style.backgroundColor='#FFFF33';
            document.querySelector('.score').textContent= '0';
            document.querySelector('.number').textContent= secertnumber;
            document.querySelector('.number').style.width='30rem';
        }
        document.querySelector('.message').textContent= '⬇️TOO LOW🍯!!';
    
    }})
