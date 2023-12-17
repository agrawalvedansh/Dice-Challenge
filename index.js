//generate two random nums between 1 and 6

var num1 = Math.floor(Math.random() * 6 + 1);
var num2 = Math.floor(Math.random() * 6 + 1);
while(num1 == num2)
{
    num2 = Math.floor(Math.random() * 6 + 1);
}

var result = document.querySelector("h1");
var imgOne = document.querySelector(".img1");
var imgTwo = document.querySelector(".img2");

var newsrc = "./images/dice" + num1 + ".png";


imgOne.setAttribute("src", newsrc);
newsrc = "./images/dice" + num2 + ".png"; 
imgTwo.setAttribute("src", newsrc);

if(num1 > num2)
{
    result.innerHTML = "Player 1 wins!";
}
else
{
    result.innerHTML = "Player 2 wins!";
}