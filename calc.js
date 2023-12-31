const calc = {
  _entry    : [0], // stores the values of an entry e.g. 123 => [1, 2, 3]
  _memory   : '',  // stores the results of the last operation
  _operator : '',  // stores the operator for the next operation

  // reset all inputs
  reset() {
    this._entry    = [0];
    this._memory   = '';
    this._operator = '';
  },

  // remove last value of an entry
  delete() {
    this._entry.pop();
  },

  // clear the operator
  clearOperator() {
    this._operator = '';
  },

  // clear the entry
  clearEntry() {
    this._entry = [];
  },

  // store entry in memory
  // thereafter memory should store the results of every operation
  storeEntry() {
    if (this._entry.length > 0) {
      const operand = Number(this._entry.join(''));
      if (this.isNumber(this._memory) && this.isOperator(this._operator)) {
        this._memory = this.operate(this._operator, this._memory, operand);
      } else {
        this._memory = operand;
      }
    }
  },

  // enter a value as part of an entry
  // the value must be either a digit or a period
  // and no more than 10 values per entry
  enter(value) {
    const maxEntryLength = 10;
    if (this._entry.length < maxEntryLength) {
      if (value === '.' && !this._entry.includes('.')) {
        this._entry.push('.')
      }
      if (this.isDigit(value)) {
        if (this._entry.length === 1 && this._entry[0] === 0) {
          this._entry[0] = value;
        } else {
          this._entry.push(value);
        }
      }
    }
  },

  // return the entry, defaults to zero
  get entry() {
    return (this._entry.length > 0) ? this._entry.join('') : 0;
  },


  // return the entry in memory, defaults to zero
  get memory() {
    return (this.isNumber(this._memory)) ? Number(this._memory.toPrecision(10)) : 0;
  },

  // return the operator in symbol form for output, defaults to empty string
  get operator() {
    const unicodes = {
      'plus'   : '\u002B',
      'minus'  : '\u002D',
      'times'  : '\u00D7',
      'obelus' : '\u00F7',
    }
    return unicodes[this._operator] || '';
  },

  // set the operator
  set operator(operator) {    
    if (this.isNumber(this._memory) && this.isOperator(operator)) {
      this._operator = operator;
    }
  },
  
  // helper functions to validate values stored
  isDigit(value) {
    return [0,1,2,3,4,5,6,7,8,9].includes(value);
  },

  isNumber(value) {
    return typeof value === 'number';
  },

  isOperator(value) {
    return ['plus','minus','times','obelus'].includes(value);
  },

  // helper function to return the results of basic operations
  operate(operator, operand1, operand2) {
    if (this.isOperator(operator) && this.isNumber(operand1) && this.isNumber(operand2)) {
      switch(operator) {
        case 'plus':
          return operand1 + operand2;
        case 'minus':
          return operand1 - operand2;
        case 'times':
          return operand1 * operand2;
        case 'obelus':
          if (operand2 === 0) {
            return 'Divide Zero Error';
          }
          return operand1 / operand2;
        default:
          throw new Error('unknown operator');
      }
    }
  }
}