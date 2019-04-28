function putValue(x) {
  if (x.value==='+/-')
  {
    calculateResult();
  }
  document.getElementById("inputwindow").value += x.value;
  if (x.value==='√')
  {
    calculateResult();
  }
  if (x.value==='+/-')
  {
    calculateResult();
  }
}

function clearInput(y) {
  document.getElementById("inputwindow").value = y;
}

function calculateResult() {
  var result = document.getElementById("inputwindow").value;
  result=result.replace('√','**0.5');
  result=result.replace('^','**');
  result=result.replace('+/-','*(-1)');
  document.getElementById("inputwindow").value = eval(result);
}
