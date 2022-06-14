//space complexity

// primitives are constant space
//but string is abit different, it can say O(n) => 50chars is 50 more space than single char
//reference type (array and object) ,it can say O(n) => if one array have 2 indexes and another one have 4indexes.it can another array is twice space more than first array

//space complexity of this fun is O(1) because it has only two constant primitive (not string)
function sum(arr) {
    let total = 0;
    for (let i = 1; i <= arr.length; i++) {
      total += i;
    }
    return total;
  }
console.log(sum([1,2,3]));