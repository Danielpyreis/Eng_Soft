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
    const strValue = new String(display.value).replace(/^0+/, "");
    const result = eval(strValue);
    display.value = result;
  }