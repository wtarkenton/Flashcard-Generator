var fs = require('fs')
//This file should define a Node module that exports a constructor for 
	//creating basic flashcards, e.g.:

//constructor should have two arguments 'front' and 'bakc'
var FlashBasic = function(front, back){
	
	this.front = front;
	//front contains the text from the front of the card
	this.back = back;
	//back contains the text form the back of the card

}


//this is for the module 
  	module.exports = BasicCard;