const favmovie = "avatar";
let guess=prompt("guess my favourite movie");
while ((guess!=favmovie)&&(guess!='quit')) {
    guess=prompt("wrong movie guess! Please try again");
}
if(guess==favmovie) {
    console.log("congrats! YOU WIN");
}
else {
    console.log("you quit");
}