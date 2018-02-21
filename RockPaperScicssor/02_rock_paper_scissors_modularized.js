// The buttons
var buttons = document.getElementsByClassName("button"); // returning an array  Forloop  and make a event listener for each of the buttons
for (var i = 0; i < buttons.length; i++) {
	//this makes the array.  start at 0 then add a button and add one
	buttons[i].addEventListener('click', play); //play is a function here so the button you click on... which has the this.ID
}


// Variables for display purposes
var playerChoiceDisplay = document.getElementById("player_choice"); // display player's choice
var computerChoiceDisplay = document.getElementById("computer_choice"); // display computer's choice
var resultDisplay = document.getElementById("result"); // display the game result



// other global variables
var computerChoice;
var userChoice;


// main function containing the game logic... this is the fucntion that will be triggered.
function play() {
	//this in JS can  in a JS function content... refres to the current owner of the event. what is the element owners.  ID of the button.
	userChoice = this.id;
	// registering the buttons. it takes the ID of the button that is click on.  it takes the ID of the class that is clickon... so 
	//so it starts with button... then it looks for the id.. the id is return as a string
	computerInput();
	compare();
	display();
}

//this happens when the button is pushed
//we need math.random() so we need to return a 0-2 from the array Silenva suggestion
// Switch, mathrandom, if else statements, then display

function computerInput() {
	//return a whole number between 0-2  rounds the number this is used alot to make a random number
	//good pratices to use switch is a result.  it makes a case.. and you need to compare too results numbers
	switch (Math.floor(Math.random()*3)) {

		case 0:
			computerChoice = "Rock";
			break;
		case 1:
			computerChoice = "Paper";
			break;
		case 2:
			computerChoice = "Scissor";


	}
	console.log(computerChoice);

}

function compare() {

	//if the game is a draw... the triple === means compares if they are same and if they are the same type equality datat types are the same
	if (userChoice === computerChoice) {
		resultDisplay.innerHTML = "Game is a DRAW!!!"

	} else if (userChoice === 'Paper' && computerChoice === 'Rock') {

		resultDisplay.innerHTML = "You win"

	} else if (userChoice === 'Paper' && computerChoice === 'Scissor') {

		resultDisplay.innerHTML = "You lose"
	} else if (userChoice === 'Scissor' && computerChoice === 'Rock') {

		resultDisplay.innerHTML = "You lose"
	} else if (userChoice === 'Scissor' && computerChoice === 'Paper') {

		resultDisplay.innerHTML = "You win"
	} else if (userChoice === 'Rock' && computerChoice === 'Paper') {

		resultDisplay.innerHTML = "You lose"
	} else if (userChoice === 'Rock' && computerChoice === 'Scissor') {

		resultDisplay.innerHTML = "You win"
	}
}



function display() {
	//give user feedback to the user...  give the displays the information.
	playerChoiceDisplay.innerHTML = userChoice;
	computerChoiceDisplay.innerHTML = computerChoice;

}


//Modularized... internal systems and makes a module around the games logic..
//putting things in nicely organized boxes...which allows us to run at our code.
//function Play
