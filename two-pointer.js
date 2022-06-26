//create a function which accept sorted numbers of array and return the first pair of sum two number which is going to be zero.


//sumZero([-2,-1,0,1,2]) => [-2,2]
//sumZero([-3,-1,0,4,7]) => undefined

function sumZero(arr){
    let left=0;
    let right=arr.length-1;

    while(left < right){
        let sum=arr[left]+arr[right]
        if(sum===0){
            return [arr[left],arr[right]]
        }else if(sum < 0){
            left++; //if sum is negative,move left side to 1;
        }else{
            right--;//if sum is positive,move right side back to 1;
        }
    }
}


console.log(sumZero([-3,-1,0,3,7]));