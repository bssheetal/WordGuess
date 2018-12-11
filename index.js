var inquirer=require("inquirer");
var Letter=require("./Letter.js");
inquirer.prompt([
{
    type:"input",
    message:"Guess a letter",
    name:"letterguessedbyuser"
    
}

]).then(function(inquirerresponse)
{
    console.log(inquirerresponse.letterguessedbyuser);
    var IsguessLetter=new Letter(inquirerresponse.letterguessedbyuser);
    IsguessLetter.Guessspaceorunderscore();
    IsguessLetter.guesscharacter();
 

});


