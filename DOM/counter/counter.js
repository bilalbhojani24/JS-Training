const value = document.getElementById("value");

function increement() {
  const returnVal = getAndCheckPrevVal();
  value.innerHTML = returnVal + 1;
}

function decreement() {
  const returnVal = getAndCheckPrevVal();
  value.innerHTML = returnVal - 1;
}

function getAndCheckPrevVal() {
  const prevVal = Number(value.innerHTML);
  if (isNaN(prevVal)) {
    alert("It should be number");
    return;
  }
  return prevVal;
}

// Reuse functions with return type
// manipulate content on document
// onClick functions
