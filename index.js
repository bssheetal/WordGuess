var inquirer=require("inquirer");
var Letter=require("./Letter.js");
inquirer.prompt([
{
    type:"input",
    message:"What's the letter you guessed",
    name:"letterguessedbyuser"
    
}

]).then(function(inquirerresponse)
{
    console.log(inquirerresponse.letterguessedbyuser);
    var IsguessLetter=new Letter(inquirerresponse.letterguessedbyuser);
    IsguessLetter.Guessspaceorunderscore();
    IsguessLetter.guesscharacter();
 

});

// var IsguessLetter=new Letter("C");
// IsguessLetter.Guessspaceorunderscore();
// IsguessLetter.guesscharacter();

