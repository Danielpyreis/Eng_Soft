function add(value) {
    var display = document.querySelector('.form-control');
    display.value += value;
  }

  function clearDisplay() {
    var display = document.querySelector('.form-control');
    display.value = '';
  }