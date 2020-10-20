var randomDicePlayer1= Math.floor(Math.random()*6)+1; // number between 1 and 6

var randomDiceImagePlayer1= "P1-dice"+randomDicePlayer1+".png";// P1-dice1.png- P1-dice6.png

var randomImageSourceP1="images/"+randomDiceImagePlayer1;

var image1= document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSourceP1);

var randomDicePlayer2= Math.floor(Math.random()*6)+1;

var randomDiceImagePlayer2= "P2-dice"+randomDicePlayer2+".png";

var randomImageSourceP2="images/"+randomDiceImagePlayer2;

var image2= document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageSourceP2);


if(randomDicePlayer1> randomDicePlayer2)
{
    document.querySelector("h1").innerHTML="🎊 Player 1 wins ! 🎊";
}else if ( randomDicePlayer1 < randomDicePlayer2)
{
    document.querySelector("h1").innerHTML="🎊 Player 2 wins ! 🎊";
}else
{
    document.querySelector("h1").innerHTML="Draw";
}
