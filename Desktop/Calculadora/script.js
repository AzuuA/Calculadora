let firstNumber = '';
let secondNumber = '';
let operator = '';
const operationScreen = document.getElementById('operationScreen');
const numBtn = document.querySelectorAll('[data-number]');
const opBtn = document.querySelectorAll('[data-operator]');
const equals=document.getElementById('equalsBtn')
const clear = document.getElementById('clearBtn');
const deleteBtn = document.getElementById('deleteBtn');
const result = document.getElementById('result');
let valorVisualizacion = '';

clear.addEventListener('click', () => {
  valorVisualizacion = '';
  firstNumber=''
  secondNumber=''
  operator=''
  operationScreen.textContent = valorVisualizacion;
  result.textContent=0
});

deleteBtn.addEventListener('click', () => {
  valorVisualizacion = valorVisualizacion.slice(0, -1);

  operationScreen.textContent = valorVisualizacion;
});

numBtn.forEach((num) => {
  num.addEventListener('click', () => {
    displayOp(num.textContent);
  });
});

opBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    addOperator(btn.textContent);
  });
});
equals.addEventListener('click',()=>{
  evaluate(operator,firstNumber,secondNumber)
})
function displayOp(valor) {
  valorVisualizacion += valor;
 if (!operator) {
  firstNumber=valorVisualizacion
  operationScreen.textContent = firstNumber
 }
 else{
 
   secondNumber = valorVisualizacion.slice( firstNumber.length);
   operationScreen.textContent = `${firstNumber} ${operator} ${secondNumber}`
   
  }
  
}



function addOperator(op) {
  if (operator === '') {
    firstNumber = valorVisualizacion;
  }
  operator = op;
  operationScreen.textContent = `${firstNumber} ${operator} `;

}

function evaluate() {
 
  result.textContent = operate(operator, firstNumber, secondNumber);
}

function operate(operator, num1, num2) {
  num1 = Number(num1);
  num2 = Number(num2);
  console.log(num1)
  console.log(num2)
  console.log(operator)

  switch (operator) {
    case '+':
      return add(num1, num2);
      break;
    case '−':
      return subtract(num1, num2);
      break;
    case '÷':
      if (num2 === 0) {
        return null;
      } else {
        return division(num1,num2);
      }
      break;
    case '×':
      return multiply(num1, num2);
      break;
    default:
      return 'Error';
      break;
  }}
  function add(a,b) {
    return a+b
  }
  function subtract(a,b) {
    return a-b
  }
  function division(a,b) {
    return a/b
  } function multiply(a,b) {
    return a*b
  }