var scores, roundScore, activePlayer, dice,gamePlaying;
var player1, player2,winScore;
var first = true;
activePlayer = 0;

console.log(dice);
// initializing all score to zeros


document.querySelector('#score--0').textContent;
document.querySelector('.form--btn').addEventListener('click',init);
document.querySelector('.btn--roll').addEventListener('click',function(){
    if(gamePlaying)
    {
    //1.get random number
    var dice = Math.floor(Math.random()*6)+1;
    roundScore+=dice;
    //2.display the result
    document.querySelector('#current--'+activePlayer).textContent = roundScore;
   var diceDOM = document.querySelector('.dice');
   diceDOM.src = 'dice-'+dice+'.png'; 
   
    console.log(roundScore);

    //3.update round score if 1
    if(dice == 1)
    {
        nextPlayer();
    }
    
}

});

document.querySelector('.btn--hold').addEventListener('click',function(){
    //update score
    
    
    //update the UI
    nextPlayer();


});
function nextPlayer()
{
    console.log("acitve player score"+scores[activePlayer]);
        scores[activePlayer] += roundScore; 
        if(scores[activePlayer]>=winScore)
        {
            document.querySelector('.player--'+activePlayer).classList.add('player--winner');
            if(activePlayer == 0)
            {
                document.querySelector('#name--'+activePlayer).textContent = player1;
            }
            else
            {
                document.querySelector('#name--'+activePlayer).textContent = player2;
            }
            
            document.querySelector('#score--'+activePlayer).textContent = 'Winner';
            console.log("in winner state");
            gamePlaying=false;

        }
        else
        {
       
        document.querySelector('#score--'+activePlayer).textContent =scores[activePlayer];
       
        document.querySelector('.player--'+activePlayer).classList.remove('player--active');
       // document.querySelector('#player--'+activePlayer).classList.toggle('active');
        document.querySelector('#current--'+activePlayer).textContent='0';
        if(activePlayer==0)
        {
            activePlayer=1;
        }
        else
        {
            activePlayer=0;
        }
        //document.querySelector('#player--'+activePlayer).classList.add('active');
        document.querySelector('.player--'+activePlayer).classList.add('player--active');
        roundScore=0;
        }
    
}
document.querySelector('.btn--new').addEventListener('click',function(){

    document.querySelector('.startBlock').style.visibility = 'visible';
    
});
function init()
{
    
    gamePlaying = true;
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
   
    

    document.querySelector('#score--0').textContent ='0';
    document.querySelector('#score--1').textContent ='0';
    document.querySelector('#current--0').textContent ='100';
    document.querySelector('#current--1').textContent ='0';
    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');
    document.querySelector('#player--1').classList.remove('active');

    

    
    
    set();
    
    document.querySelector('.startBlock').classList.add('startBlockHidden');
    //document.querySelector('#player--0').classList.add('active');
}
function set()
{
    player1 =  document.querySelector('#player--0--name').value;
    player2 =  document.querySelector('#player--1--name').value;

    document.querySelector('#name--0').textContent = player1;
    document.querySelector('#name--1').textContent = player2;
    winScore = document.querySelector('#winScore').value;
    
    

}
