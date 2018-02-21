
    // declare private variables and/or functions

var myGame = (function () {
    //We are able with the module pattern to develop private functions and variables. bc we are using the functions own scope
	//so we arent leaking what is in its scope.
	//what we will store is the return value
	

	//encapsulation - protecting states and behaviors from being accessed.
	
	// private variables
	var playerChoiceDisplay = document.getElementById("player_choice");
	var computerChoiceDisplay = document.getElementById("computer_choice");
	var resultDisplay = document.getElementById("result");
	
	
	// functions - ask why are they formatted like this similar to object literals
	var computerChoice, userChoice;
	var computerinput, compare, display;
	

	// private functions
	computerinput = function() {
		
		switch (Math.floor(Math.random() * 3)) {
			case 0:
				computerChoice = "Rock";
				break;
			case 1:
				computerChoice = "Paper";
				break;
			case 2:
				computerChoice = "Scissors";
		}
	};

	compare = function() {
		'use strict';
		if (userChoice === computerChoice) {
			resultDisplay.innerHTML = 'Game is a draw!';
		} else if (userChoice === 'Paper' && computerChoice === 'Rock') {
			resultDisplay.innerHTML = "<span style='color:#0BB56E'> You Win </span>";
		} else if (userChoice === 'Paper' && computerChoice === 'Scissors') {
			resultDisplay.innerHTML = "<span style='color:#FF0000'> Computer Win </span>";
		} else if (userChoice === 'Scissors' && computerChoice === 'Rock') {
			resultDisplay.innerHTML = "<span style='color:#FF0000'> Computer Win </span>";
		} else if (userChoice === 'Scissors' && computerChoice === 'Paper') {
			resultDisplay.innerHTML = "<span style='color:#0BB56E'> You Win </span>";
		} else if (userChoice === 'Rock' && computerChoice === 'Scissors') {
			resultDisplay.innerHTML = "<span style='color:#0BB56E'> You Win </span>";
		} else if (userChoice === 'Rock' && computerChoice === 'Paper') {
			resultDisplay.innerHTML = "<span style='color:#FF0000'> Computer Win </span>";
		}
	};
	
	display = function() {
		'use strict';
		playerChoiceDisplay.innerHTML = userChoice;
		computerChoiceDisplay.innerHTML = computerChoice;
	};
	
	return {
		// public function
		 // declare public variables and/or functions
		play: function() {
			// registering the buttons id!
			userChoice = this.id;
			computerinput();
			compare();
			display();
		}
	};

	// gameModule end //
})();

var buttons = document.getElementsByClassName("button");
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', myGame.play);
	}