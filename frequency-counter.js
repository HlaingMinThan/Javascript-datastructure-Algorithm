//same([1,2,3],[9,1,4]) -> true
//same([2,1,4],[16,1]) -> false

//quick solve
function same(arr1,arr2){
    let answer;
    // if two array have different length,always the ans is false;
    if(arr1.length !== arr2.length){
            answer=false;
            return answer;
    }
    for(let i=0;i<arr1.length;i++){
        let num=arr1[i];
        if(!arr2.includes(num**2)){
            answer=false
            break;
        }else{
            answer=true
        }
    }
    return answer;
}

console.log(same([1,2,2,3],[9,1,4,4]));