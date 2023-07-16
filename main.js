class Calculator {
  constructor() {
    this.operator;
    this.operand1;
    this.operand2;
    this.entry = '';

    this.theme     = document.getElementsByName('theme'); 
    this.output    = document.getElementById('output');
    this.digits    = Array.from(document.getElementsByClassName('digit'));
    this.operators = document.getElementsByClassName('operator');
  }
}


const calc = new Calculator;

calc.digits.forEach(digit => {
  digit.addEventListener("click", (event) => {
    calc.entry += event.target.value;
    calc.output.textContent = calc.entry;
  });
});

// change color theme
calc.theme.forEach(theme => {
  theme.addEventListener("change", (event) => {
    document.documentElement.setAttribute('color-theme', event.target.value);
  });
});