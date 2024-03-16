

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

  try {
    const result = eval(strValue);
    display.value = result;
  } catch (error) {
    const modal = new bootstrap.Modal(document.getElementById('errorModal'));
    modal.toggle();
  }
}