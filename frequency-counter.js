//same([1,2,3],[9,1,4]) -> true
//same([2,1,4],[16,1]) -> false

//quick solve
// function same(arr1,arr2){
//     let answer;
//     // if two array have different length,always the ans is false;
//     if(arr1.length !== arr2.length){
//             answer=false;
//             return answer;
//     }
//     for(let i=0;i<arr1.length;i++){
//         let num=arr1[i];
//         if(!arr2.includes(num**2)){
//             answer=false
//             break;
//         }else{
//             answer=true
//         }
//     }
//     return answer;
// }

// console.log(same([1,2,2,3],[9,1,4,4]));

//frequency counter pattern

function getFrequency(data){
    let frequency={};
    for(let value of data){
        frequency[value]=(frequency[value]||0)+1;
    }
    return frequency;
}

// function same(arr1,arr2){
//     let answer;
//     if(arr1.length !== arr2.length){
//             answer=false;
//             return answer;
//     }
//     let frequency1=getFrequency(arr1);
//     let frequency2=getFrequency(arr2);

//     for(let key in frequency1){
//         if(!(key**2 in frequency2)){
//             return false;
//         }
//         if(frequency1[key]!==frequency2[key**2]){
//             return false;
//         }
//     }
//     return true;
// }

// console.log(same([1,2,2,3],[9,1,4,4]));

// problem
function validAnagram(s1,s2){
    //prevent the different length first
    if(s1.length !== s2.length){
        return false;
    }
    // get frequecies for 2 strings
    let frequency1=getFrequency(s1);
    let frequency2=getFrequency(s2);

    
    // check difference and think for algo to solve
    console.log(frequency1,frequency2);

    for(let key in frequency1){
        if(!(key in frequency2)){
            return false;
        }
        if(frequency1[key]!==frequency2[key]){
            return false;
        }
    }
    return true;
}

console.log(validAnagram('anagram','nagaram'));