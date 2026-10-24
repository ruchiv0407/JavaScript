const max=prompt("please enter the max number");
const random=Math.floor(Math.random()*max)+1;
let guess=prompt("guess the number");
while(true){
    if(guess=="quit"){
        console.log("user quit");
        break;
    }
    if(guess==random){
        console.log("You are right!! guess was right! guess was",random);
        break;
    }
    else if(guess<random){
        guess=prompt("hint:Your guess was small. Please try again");
    }
    else {
        guess=prompt("hint:your guess was large.please try again");
    }
}