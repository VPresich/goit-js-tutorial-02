const btnAdd = document.querySelector('button');
const inputNumber = document.querySelector('input');
console.log(btnAdd);
let result = 0;
if (btnAdd.data === 'add')
{
    result = Number(inputNumber.value) + 1;    
}
if (btnAdd.data === 'minus')
{
    result = Number(inputNumber.value) - 1;   
}
console.log(result);
inputNumber.value = result;