const favMovie = "avatar";
let guess = prompt("Guess the movie");


while(guess!=favMovie){
    if(guess =="quit"){
        console.log("You quit!");
        break;
    }
    guess=prompt("Wrong Guess.Try Again");
   
}
if(guess == favMovie){
    console.log("Congrats");
}
