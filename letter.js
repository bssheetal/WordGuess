
var alphabets=[];
generatealphabets()
var Letter=function(guessedletter)
{
    this.guessedletter=guessedletter;
    this.ifLetterguessed=false;
    this.Guessspaceorunderscore=function()
    {
      
      for (var i=0;i<alphabets.length;i++)
      {
        if(guessedletter===alphabets[i])
        {
                      
             guessedletter=alphabets[i];       
             
             
        }

        if(guessedletter===" ")
        {
                   
            guessedletter="_";   
           
        }
      }
        
      
    }

    this.guesscharacter=function()
    {
        for (var i=0;i<alphabets.length;i++)
      {
        if(guessedletter===alphabets[i])
        {
            
             
             ifLetterguessed=true; 
            
        }

        else
        {
           
            ifLetterguessed=false;
           
        }
      }
    
      console.log(guessedletter);
      console.log(ifLetterguessed);
    }
    
  
}

 function generatealphabets()
{
   
    var lowercasefirst=65;
    var lowercaselast=91;
    var uppercasefirst=97;
    var uppercaselast=123;
    for(var i=lowercasefirst;i<lowercaselast;i++)
    {
        var str=String.fromCharCode(i);
        alphabets.push(str);
        
    }
 
    for(var i=uppercasefirst;i<uppercaselast;i++)
    {
        var str=String.fromCharCode(i);
        alphabets.push(str);
    }

    return alphabets;
}

module.exports=Letter;