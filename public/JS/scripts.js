const next = () => {
  let i = document.getElementById("id").innerHTML;
  var toNum = parseInt(i) + 1;
  document.getElementById("id").innerHTML = toNum;
  document.getElementById("isPolicy").style.display = "none";
  document.getElementById("isntPolicy").style.display = "none";

  getData(toNum);
}

const previous = () => {
  let i = document.getElementById("id").innerHTML;
  var toNum = parseInt(i) - 1;
  toNum < 0 ? toNum = 0 : toNum = toNum;
  document.getElementById("id").innerHTML = toNum;
  document.getElementById("isPolicy").style.display = "none";
  document.getElementById("isntPolicy").style.display = "none";
  getData(toNum);
}

const uncheckAll = () => {
  document
    .querySelectorAll('input[type="checkbox"]')
    .forEach((el) => (el.checked = false));
}

const check = () => {
  var isPolicy = document.getElementById("isPolicy-input").checked;
  var isntPolicy = document.getElementById("isntPolicy-input").checked;

  if(isPolicy == true && isntPolicy == false) {
    document.getElementById("isntPolicy").style.display = "none";
    document.getElementById("isPolicy").style.display = "block";
    document.getElementById("isntPolicy-input").disabled = true;
  }
  else if(isPolicy == true && isntPolicy == true) {
    console.log("não pode");
  }
  else if(isPolicy == false && isntPolicy == true) {
    document.getElementById("isPolicy").style.display = "none";
    document.getElementById("isntPolicy").style.display = "block";
    document.getElementById("isPolicy-input").disabled = true;
  }
  else if(isPolicy == false && isntPolicy == false) {
    document.getElementById("isPolicy").style.display = "none";
    document.getElementById("isntPolicy").style.display = "none";
    document.getElementById("isPolicy-input").disabled = false;
    document.getElementById("isntPolicy-input").disabled = false;
  }
}

const goTo = () => {
  let i = document.getElementById("id").innerHTML;
  var toNum = parseInt(i);
  getData(toNum);
}