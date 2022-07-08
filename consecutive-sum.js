// consecutiveSum([1,2,3,4,5,6],2);//11
// consecutiveSum([7,8,2,3,5,6],4);//20
// consecutiveSum([],2);//null

//naive approach
// function consecutiveSum(arr,num){
//     //handle edge case
//     if(arr.length < num){
//         return null;
//     }
//     //algo to solve
//     let maxSum=0;
//     //make a loop base on the n;
//     for(let i=0;i<arr.length-num+1;i++){
//         let temp=0;

//         //sum for n time consecutively
//         for(let j=0;j<num;j++){
//             temp+=arr[i+j];
//         }
//         if(temp>maxSum){
//             maxSum=temp;
//         }
//     }

//     return maxSum;
// }


// console.log(consecutiveSum([1,2,9,4,5,6],3));

//efficient way O(n)
//check here - https://www.geeksforgeeks.org/window-sliding-technique/
function consecutiveSum(arr, n) {
    //get first n number sum;
    let max=0;
    let window_sum=0;
    for(let i=0;i<n;i++){
        max+=arr[i];
    }
    //start from n place and slide window sum;
    window_sum=max;
    for(let j=n;j<arr.length;j++){
        window_sum=window_sum-arr[j-n]+arr[j]//sliding window is here
       max=Math.max(window_sum,max)
    }
    return max;
}
  
  console.log(consecutiveSum([7,8,2,3,5,6,9,9],4));//20

