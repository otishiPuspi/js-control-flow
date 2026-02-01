// 1. Find maximum and minimum in array.

let array = [4,7,9,3,5,8,10];
console.log("Given array:",...array);
let maxValue = Math.max(...array);
console.log("Maximum value in the array is:",maxValue);
let minValue = Math.min(...array);
console.log("Minimum value in the array is:",minValue);
console.log("   ");

// 2. Remove duplicates from array.
let arr = [3,3,5,5,8,9,10,13];
console.log("Given array:",...arr);
let removeDuplicate = [...new Set(arr)];
console.log("After removing duplicate values:",...removeDuplicate);
console.log("   ");

// 3. Merge and sort two arrays.
console.log("Given arrays:");
let a = [1,2,3,4];
let b = [5,6,7,8];
console.log(a,b);
//For merge
let c = b.concat(a);
console.log("   ");
console.log("After merge:",...c);
console.log("   ");

//For sort
console.log("After sort:",...c.sort());

// 4. Find second largest number in array.
let Array = [3,4,6,8,10,14,15,20];
console.log("Given array:",...Array);
let l = Array.length;
console.log("Second highest number is:",Array[(l - 2)]);
console.log("   ");

// 5. Rotate array elements by N position.

function rotate(arr,n){
  for(let i = 0; i<n; i++){
    let x = arr.shift();
    arr.push(x);
  }
  return arr;
}
let arra = [1,2,3,4,5];
console.log("Given array:",arra);
rotate(arra,2);
console.log("After rotate:",arra);

