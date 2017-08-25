  var fs = require('fs')

  // * The constructor should accept two arguments: `text` and `cloze`.
  var FlashCloze = function(text, cloze){
  	this.cloze = cloze;
  	this.text = text; 
  	//The constructed object should have a 'cloze' 
  	//property that only contains the
  	//cloze-deleted portion of the text.
  	this.fullText = text;
	//The constructed object should have a `fullText` 
    //property that contains _only_ the full text.

  	this.clozeDeleted = this.text.replace(this.cloze, '');
  	//not sure if this one (above) is right???

 	if(text.includes(cloze)){
    	this.partial = text.replace(cloze, "");
  	}
    //The constructed object should have a `partial` 
    //property that contains _only_ the partial text.
  	else{
  		throw error("does not appear");
 	 }
  	//The constructor should throw or log an error when the 
    //cloze deletion does _not_ appear in the input text.

  }

  module.exports = ClozeCard;



