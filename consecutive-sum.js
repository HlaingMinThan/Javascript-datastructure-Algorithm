// consecutiveSum([1,2,3,4,5,6],2);//11
// consecutiveSum([7,8,2,3,5,6],4);//20
// consecutiveSum([],2);//null


function consecutiveSum(arr,num){
    //handle edge case
    if(arr.length < num){
        return null;
    }
    //algo to solve
    let maxSum=0;
    //make a loop base on the n;
    for(let i=0;i<arr.length-num+1;i++){
        let temp=0;

        //sum for n time consecutively
        for(let j=0;j<num;j++){
            temp+=arr[i+j];
        }
        if(temp>maxSum){
            maxSum=temp;
        }
    }

    return maxSum;
}


console.log(consecutiveSum([1,2,9,4,5,6],3));




