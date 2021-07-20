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

const isPolicy = () => {
  document.getElementById("isntPolicy").style.display = "none";
  document.getElementById("isPolicy").style.display = "block";
}

const isntPolicy = () => {
  document.getElementById("isPolicy").style.display = "none";
  document.getElementById("isntPolicy").style.display = "block";
}

const goTo = () => {
  let i = document.getElementById("id").innerHTML;
  var toNum = parseInt(i);
  getData(toNum);
}