var randomNumber1 = Math.random() * 6 + 1;
var rnum = Math.floor(randomNumber1);
    if(rnum === 1){
        document.querySelector(".img1").setAttribute("src", "./dice1.png");
    }
    if(rnum === 2){
        document.querySelector(".img1").setAttribute("src", "./dice2.png");
    }
    if(rnum === 3){
        document.querySelector(".img1").setAttribute("src", "./dice3.png");
    }
    if(rnum === 4){
        document.querySelector(".img1").setAttribute("src", "./dice4.png");
    }
    if(rnum === 5){
        document.querySelector(".img1").setAttribute("src", "./dice5.png");
    }
    if(rnum === 6){
        document.querySelector(".img1").setAttribute("src", "./dice6.png");
    }
    var randomNumber2 = Math.random() * 6 + 1;
    var rnum2 = Math.floor(randomNumber2);
    if(rnum2 === 1){
        document.querySelector(".img2").setAttribute("src", "./dice1.png");
    }
    if(rnum2 === 2){
        document.querySelector(".img2").setAttribute("src", "./dice2.png");
    }
    if(rnum2 === 3){
        document.querySelector(".img2").setAttribute("src", "./dice3.png");
    }
    if(rnum2 === 4){
        document.querySelector(".img2").setAttribute("src", "./dice4.png");
    }
    if(rnum2 === 5){
        document.querySelector(".img2").setAttribute("src", "./dice5.png");
    }
    if(rnum2 === 6){
        document.querySelector(".img2").setAttribute("src", "./dice6.png");
    }
if(rnum > rnum2){
    document.querySelector("h1").innerHTML = "Player 1 Wins 🚩";
}
else if(rnum2 > rnum){
    document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
}
else{
    document.querySelector("h1").innerHTML = "Draw 🎌";
}

