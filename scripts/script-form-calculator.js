const buttonCalculator = document.querySelector('.button-calculator');
const modalBackdropCalculator = document.querySelector('.modal-backdrop-calculator');
const buttonCloseCalculator = document.querySelector('.close-button-calculator');

buttonCalculator.addEventListener('click', () => {
  modalBackdropCalculator.classList.remove('is-hidden');
});

buttonCloseCalculator.addEventListener('click', () =>{    
    modalBackdropCalculator.classList.add('is-hidden');
});

const inputNumber1 = document.getElementById('id-input-number-one');
const inputNumber2 = document.getElementById('id-input-number-two');
const outputResult = document.getElementById('id-output-result');

let result = 0; const btnAdd = document.getElementById('btnAdd');
btnAdd.addEventListener('click', () => {
  result = Number(inputNumber1.value) + Number(inputNumber2.value); 
  outputResult.value = String(result);
});

  const btnMinus = document.getElementById('btnMinus'); 
  btnMinus.addEventListener('click', () => {     
      result = Number(inputNumber1.value) - Number(inputNumber2.value);
      outputResult.value = String(result);
  });

  const btnMult = document.getElementById('btnMult'); 
  btnMult.addEventListener('click', () => {     
      result = Number(inputNumber1.value) * Number(inputNumber2.value);
      outputResult.value = String(result);
  });

  const btnDivide = document.getElementById('btnDivide'); 
  btnDivide.addEventListener('click', () => {     
      result = Number(inputNumber1.value) / Number(inputNumber2.value);
      outputResult.value = String(result);
  });


