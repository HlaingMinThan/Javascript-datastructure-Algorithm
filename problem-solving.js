//Write a function which takes in a string and returns counts of each character in a string.

//understand the problem
//1 - charCount function
//2 - input (string)
//3 - output (object with each string char key)
//4 - yes (enough input to solve)
//5 - charCount(string) , output({eachChar:count})


//explore example
//charCount('aaaa') => {a:4}
//charCount("A person walk into the garden") => change lowercase and count ,neglect alphanumeric



////BREAK IT DOWN & solve
 //simplify -> difficulty to check later -> how to check alphanumeric(0-1,a-z,A-Z) ????
function charCount(string){
    let output={};
    for(let eachChar of string){
        if(isAlphaNumeric(eachChar)){
            eachChar=eachChar.toLowerCase();
            //if output[eachChar] exists,increase it else,set as 1;
            output[eachChar]=++output[eachChar] || 1;
        }
    }
    return output;
}

//best performance rather than regular expression
function isAlphaNumeric(str) {
    var code, i, len;
  
    for (i = 0, len = str.length; i < len; i++) {
      code = str.charCodeAt(i);
      if (!(code > 47 && code < 58) && // numeric (0-9)
          !(code > 64 && code < 91) && // upper alpha (A-Z)
          !(code > 96 && code < 123)) { // lower alpha (a-z)
        return false;
      }
    }
    return true;
  };

console.log(charCount("A person walk into the garden"));