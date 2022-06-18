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
    //make obj for ouput
    let output={};
    //loop each char in string
    for(let i=0;i<string.length;i++){
        //change eachChar to lowerCase
        let eachChar=string[i].toLowerCase();
        //if eachChar is alphanumeric and eachChar count in output is greater than 0, increase that eachChar count
        if(output[eachChar] > 0){
            output[eachChar]=++output[eachChar];
        }
        //if eachChar is alphanumeric and eachChar count in output is not exists,set eachChar count with 1
        if(!output[eachChar] ){
            output[eachChar]=1;
        }
        // if eachChar in output is not alphanumeric,do nothing
    }
    //return output
    return output;
}

console.log(charCount("Aaaa"));