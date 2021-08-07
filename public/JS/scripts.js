const next = () => {
  let i = document.getElementById("id").innerHTML;
  var toNum = parseInt(i) + 1;
  document.getElementById("id").innerHTML = toNum;
  document.getElementById("isPolicy").style.display = "none";
  document.getElementById("isntPolicy").style.display = "none";
  getData(toNum);
  uncheckAll();
  check();
}

const previous = () => {
  let i = document.getElementById("id").innerHTML;
  var toNum = parseInt(i) - 1;
  toNum < 0 ? toNum = 0 : toNum = toNum;
  document.getElementById("id").innerHTML = toNum;
  document.getElementById("isPolicy").style.display = "none";
  document.getElementById("isntPolicy").style.display = "none";
  getData(toNum);
  uncheckAll();
  check();
}

const uncheckAll = () => {
  document
    .querySelectorAll('input[type="checkbox"]')
    .forEach((el) => (el.checked = false));
}

const check = () => {
  var isPolicy = document.getElementById("isPolicy-input").checked;
  var isntPolicy = document.getElementById("isntPolicy-input").checked;

  if (isPolicy == true && isntPolicy == false) {
    document.getElementById("isntPolicy").style.display = "none";
    document.getElementById("isPolicy").style.display = "block";
    document.getElementById("isntPolicy-input").disabled = true;
  }
  else if (isPolicy == true && isntPolicy == true) {
    console.log("não pode");
  }
  else if (isPolicy == false && isntPolicy == true) {
    document.getElementById("isPolicy").style.display = "none";
    document.getElementById("isntPolicy").style.display = "block";
    document.getElementById("isPolicy-input").disabled = true;
  }
  else if (isPolicy == false && isntPolicy == false) {
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

const fillData = (array) => {
  var index = document.getElementById('id').innerHTML;

  if (array[index]['isPolicy'] == 1) {
    document.getElementById('isPolicy-input').checked = true;
    check();
    if (array[index]['isLanguageList'] == 1)
      document.getElementById('languageList').checked = true;
    if (array[index]['isQa'] == 1)
      document.getElementById('qa').checked = true;
  }

  if (array[index]['isPolicy'] == 0) {
    document.getElementById('isntPolicy-input').checked = true;
    check();
    if (array[index]['isAppList'] == 1)
      document.getElementById('appList').checked = true;
    if (array[index]['isCaptcha'] == 1)
      document.getElementById('captcha').checked = true;
    if (array[index]['isCookies'] == 1)
      document.getElementById('cookies').checked = true;
    if (array[index]['isLinksAtPageBottom'] == 1)
      document.getElementById('linksAtPageBottom').checked = true;
    if (array[index]['isFeatureList'] == 1)
      document.getElementById('featureList').checked = true;
  }
}