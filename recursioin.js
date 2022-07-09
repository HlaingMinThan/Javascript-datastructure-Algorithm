function sumRange(num){
    //base case
    if(num===1) return 1;

    return num+sumRange(num-1);//make different input
}


//visual view for when we call function
sumRange(5);
//return 5+sumRange(4)
//             return 4 + sumRange(3);
//                          return 3 + sumRange(2);
//                                          return 2 + sumRange(1);
//                                                          return 1

//iterative way
// function factorial(num){
//     let total=1;
//     for(let i=num;i>0;i--){
//         total*=i;
//     }
//     return total;
// }

// factorial(3);

//recursive way
function factorial(num){
    if(num===1)return 1;
    return num* factorial(num-1);
}

console.log(factorial(3));