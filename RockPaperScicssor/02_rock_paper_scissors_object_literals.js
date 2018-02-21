// a module defined using object literal notation
// https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript

var myGame = {
	// In object literal notation, an object is described as a set of comma-separated name/value pairs enclosed in curly braces.
	// Names inside the object may be either strings or identifiers that are followed by a colon.
	// object literals can contain properties and methods:
	//they are like classes in OOP


	playerChoiceDisplay: document.getElementById("player_choice"), // display player's choice
	computerChoiceDisplay: document.getElementById("computer_choice"), // display computer's choice
	resultDisplay: document.getElementById("result"), // display the game result

	computerChoice: '',
	userChoice: '',

	computerInput: function () {
		//return a whole number between 0-2  rounds the number this is used alot to make a random number
		//good pratices to use switch is a result.  it makes a case.. and you need to compare too results numbers
		switch (Math.floor(Math.random() * 3)) {

			case 0:
				this.computerChoice = "Rock"; // changing the properties of the variabe
				break;
			case 1:
				this.computerChoice = "Paper"; //this is object context
				break;
			case 2:
				this.computerChoice = "Scissor";
				break;
		}
	},


	compare : function() {

		if (this.userChoice === this.computerChoice) {
			this.resultDisplay.innerHTML = "Game is a DRAW!!!"

		} else if (this.userChoice === 'Paper' && this.computerChoice === 'Rock') {

			this.resultDisplay.innerHTML = "You win"

		} else if (this.userChoice === 'Paper' && this.computerChoice === 'Scissor') {

			this.resultDisplay.innerHTML = "You lose"
		} else if (this.userChoice === 'Scissor' && this.computerChoice === 'Rock') {

			this.resultDisplay.innerHTML = "You lose"
		} else if (this.userChoice === 'Scissor' && this.computerChoice === 'Paper') {

			this.resultDisplay.innerHTML = "You win"
		} else if (this.userChoice === 'Rock' && this.computerChoice === 'Paper') {

			this.resultDisplay.innerHTML = "You lose"
		} else if (this.userChoice === 'Rock' && this.computerChoice === 'Scissor') {

			this.resultDisplay.innerHTML = "You win"
		}
	},


	display: function() {
		//give user feedback to the user...  give the displays the information.
		this.playerChoiceDisplay.innerHTML = this.userChoice;
		this.computerChoiceDisplay.innerHTML = this.computerChoice;

	}

};

//buttons
var buttons = document.getElementsByClassName("button"); // returning an array  Forloop  and make a event listener for each of the buttons
for (var i = 0; i < buttons.length; i++) {
	//this makes the array.  start at 0 then add a button and add one
	buttons[i].addEventListener('click', play); //play is a function here so the button you click on... which has the this.ID
}



function play() {
	//myGame.functionkey();
	myGame.userChoice = this.id; //this is triggered by the button
	myGame.computerInput();
	myGame.compare();
	myGame.display();
}


//everyone who would work with your code would easy be able to understand the object being made... everything is contain in one object we makes everything ... this means in other clases our logic can be reused
