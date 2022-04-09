function getOutput(){
    return document.getElementById("input-value").innerHTML;
}

function printOutput(num){
    document.getElementById("input-value").innerHTML = num;
}
//neccessary in order to get my output numbers in the required format(with commas)
/*function getFormatNumber(num){
    var f = Number(num);
    var value = f.toLocaleString("en")
    return value;
}
//required to reverse the effect of getformatNumber for computation
function oppositeFormatNumber(num){
    var n = Number(num.replace(/,/g, ""))
} */

numbers= document.getElementsByClassName("number");
for (var i=0; i<numbers.length; i++){
    numbers[i].addEventListener("click", function(){
     var output = getOutput();
     if(this.id !=NaN){
          output = output + this.id;
          printOutput(output);
      } 
    })   
} 
operators= document.getElementsByClassName("operator");
for (var i=0; i<operators.length; i++){
    operators[i].addEventListener("click", function(){
        if (this.id == 'clear'){
            printOutput("");
        }
            else if(this.id == "backspace"){
                var CE = getOutput().toString();
                if(CE){
                CE = CE.substr(0, CE.length-1);
            }
                printOutput(CE);
            }
       else{
           var output = getOutput();
           var result = eval(output);
           if (output !== null){
               output += this.id;
               printOutput(output);
           }

           if (this.id == "="){
               printOutput(result);
           }
       }
        
    })
}