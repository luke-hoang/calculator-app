// helper function to change the output on the screen
const output = (value) => {
  document.getElementById('output').textContent = value;
}

// change the color of the calculator based on the theme selected
document.getElementsByName('theme').forEach(themeOption => {
  themeOption.addEventListener("change", (event) => {
    const rootEl = document.documentElement;
    rootEl.setAttribute('color-theme', event.target.value);
  });
});

// store and display any digits entered as part of an entry
document.getElementsByName('digit').forEach(digitKey => {
  digitKey.addEventListener('click', (event) => {
    calc.enter(Number(event.target.value));
    output(calc.entry);
  });
});

// store and display the results of every operation
document.getElementsByName('operator').forEach(operatorKey => {
  operatorKey.addEventListener('click', (event) => {
    calc.storeEntry();
    calc.clearEntry();
    calc.operator = event.target.value;
    output(`${calc.memory} ${calc.operator}`);
  });
});

const equalsKey = document.getElementById('equals');
equalsKey.addEventListener('click', () => {
  calc.storeEntry();
  calc.clearEntry();
  calc.clearOperator();
  output(calc.memory);
});

// store and display any period entered as part of an entry
const periodKey = document.getElementById('period');
periodKey.addEventListener('click', () => {
  calc.enter('.');
  output(calc.entry);
});

// when the delete key is clicked,
// delete the last value entered.
const deleteKey = document.getElementById('delete');
deleteKey.addEventListener('click', () => {
  calc.delete();
  output(calc.entry);
});

// when the reset key is clicked,
// reset all inputs to their default values
const resetKey = document.getElementById('reset');
resetKey.addEventListener('click', () => {
  calc.reset();
  output(calc.entry);
});