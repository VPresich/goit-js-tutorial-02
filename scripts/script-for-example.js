const employees = 6;
let totalSalary = 0;
const minSalary = 500;
const maxSalary = 5000; 
for (let employee = 1; employee <= employees; employee +=1)
{
    const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
    console.log(`Salary of ${employee} employee =  ${salary}`);
    totalSalary += salary;
}
 console.log(`Total salary =  ${totalSalary}`);

 const minValue = 5;
 const maxValue = 20;
 let totalEven = 0;
 for (let i = minValue; i < maxValue + 1; i += 1) {
    if (i % 2 === 0) {
        totalEven += i;
    }
 }
 console.log(`1 Total even = ${totalEven}`);

 totalEven = 0;
 for (let i = minValue; i < maxValue + 1; i += 1) {
    if (i % 2 !== 0) continue;    
    totalEven += i;    
 }
 console.log(`2 Total even = ${totalEven}`);

 
 totalEven = 0;
 for (let i = minValue % 2 === 0 ? minValue: minValue + 1; i < maxValue + 1; i += 2) {
    totalEven += i; 
 }
 console.log(`3 Total even = ${totalEven}`);

 function findEvenIndex(arr)
{  
  let sumLeft = 0;
  let sumRight = 0;
  for (let i = 1; i < arr.length; i += 1) {
    sumRight += arr[i];    
  }
  console.log(`sumLeft = ${sumLeft}`);
  console.log(`sumRight = ${sumRight}`);
  if (sumLeft === sumRight) return 0;
  for (let i = 1; i < arr.length; i += 1){
    sumLeft += arr[i - 1];
    sumRight -= arr[i]
    console.log(`sumLeft = ${sumLeft}`);
    console.log(`sumRight = ${sumRight}`);
    if ((sumLeft === sumRight)){
      return i;
    }
  }
  return -1;
}

function findEvenIndex1(arr)
{
  var left = 0, right = arr.reduce(function(pv, cv) { return pv + cv; }, 0);
  for(var i = 0; i < arr.length; i++) {
      if(i > 0) left += arr[i-1];
      right -= arr[i];
      
      if(left == right) return i;
  }
  
  return -1;
}
console.log(findEvenIndex([1,2,3,4,3,2,1]));
console.log(findEvenIndex([20,10,-80,10,10,15,35]));

function isPangram(s) {
    const alphabet = new Set("abcdefghijklmnopqrstuvwxyz");
    s = s.toLowerCase();

    for (const char of s) {
        if (/[a-z]/.test(char)) {
            alphabet.delete(char);
        }
        if (alphabet.size === 0) {
            return true;
        }
    }

    return false;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."));