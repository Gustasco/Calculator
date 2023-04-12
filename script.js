let result = "";

function appendToResult(value) {
  result += value;
  document.getElementById("result").innerText = result;
}

function clearResult() {
  result = "";
  document.getElementById("result").innerText = result;
}

function deleteLast() {
  result = result.slice(0, -1);
  document.getElementById("result").innerText = result;
}

function equals() {
  result = eval(result);
  document.getElementById("result").innerText = result;
}
