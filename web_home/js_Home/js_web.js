function add(value) {
    var display = document.querySelector('.form-control');
    display.value += value;
  }

  function clearDisplay() {
    var display = document.querySelector('.form-control');
    display.value = '';
  }

  function calculate() {
    const display = document.querySelector('.form-control');
    const result = eval(display.value);
    display.value = result;
  }