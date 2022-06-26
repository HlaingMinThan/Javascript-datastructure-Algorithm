//create a function which accept sorted numbers of array and return the first pair of sum two number which is going to be zero.


//sumZero([-2,-1,0,1,2]) => [-2,2]
//sumZero([-3,-1,0,4,7]) => undefined

// function sumZero(arr){
//     let left=0;
//     let right=arr.length-1;

//     while(left < right){
//         let sum=arr[left]+arr[right]
//         if(sum===0){
//             return [arr[left],arr[right]]
//         }else if(sum < 0){
//             left++; //if sum is negative,move left side to 1;
//         }else{
//             right--;//if sum is positive,move right side back to 1;
//         }
//     }
// }


// console.log(sumZero([-3,-1,0,3,7]));



//implement a function called countUniqueValues which accpet sorted array,and counts the unique values in the array,there can be negative numbers in the array but it'll always sorted.

//countUniqueValues([1,2,2,3,3,4])=>4
//countUniqueValues([-1,-2,2,3,3,4])=>5
//countUniqueValues([])=>0


//algorithm to solve
// i
//-1,-2,2,3,3,4
//   j 

//check i and j are same value,if so move j 1 place
//if not move i +1 place and change that index value with j value and then move j 1 place

function countUniqueValues(arr){
    if(!arr.length){
        return 0;
    }
    let i = 0;
    let j=i+1;
    while(j < arr.length){
        if(arr[i]!==arr[j]){
            i++;
            arr[i]=arr[j];
        }
        j++;
    }
    return i+1;
}

console.log(countUniqueValues([]));