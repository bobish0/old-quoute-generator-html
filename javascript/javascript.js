	


function minFunktion() {


var famousQuote = ""; 
var famousAuthor = ""; 
var randomNumber = Math.floor((Math.random() * 5) + 1); 

switch (randomNumber) {

		case 1: 
		famousQuote = "Do the right thing. It will gratify some people and astonish the rest.";
		famousAuthor ="Mark Twain";
		break; 

		case 2: 
		famousQuote ="Age is an issue of mind over matter. If you don't mind, it doesn't matter.";
		famousAuthor ="Mark Twain";
		break; 

		case 3: 
		famousQuote = "All you need in this life is ignorance and confidence, and then success is sure.";
		famousAuthor ="Mark Twain";
		break; 

		case 4: 
		famousQuote ="Courage is resistance to fear, mastery of fear, not absence of fear.";
		famousAuthor ="Mark Twain";
		break; 

		case 5: 
		famousQuote = "Kindness is the language which the deaf can hear and the blind can see.";
		famousAuthor ="Mark Twain";
		break; 

		default:
		famousQuote = "Something wrong Happened"; 
		famousAuthor ="Unknown";

		}
				
				return famousQuote;
				return famousAuthor;

	}

document.getElementById("qoute").innerHTML = famousQuote;
document.getElementById("author").innerHTML = famousAuthor;

alert('Hello');
