// ---------------------------------------------------------------------------
// navega para a proxima posicao no json

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

// ---------------------------------------------------------------------------
// navega para a posicao anterior do json

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

// ---------------------------------------------------------------------------
// remove todas as marcacoes da posicao anterior

const uncheckAll = () => {
  document
    .querySelectorAll('input[type="checkbox"]')
    .forEach((el) => (el.checked = false));
}

// ---------------------------------------------------------------------------
// garante que nao eh possivel ser e nao ser politica ao mesmo tempo

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

// ---------------------------------------------------------------------------
// verificacoes para mostrar a textarea de outros

const checkOther = () => {
  var isOthers = document.getElementById("others").checked;

  if (isOthers == true) {
    document.getElementById("others-text").style.display = "block";
  }

  else if(isOthers == false) {
    document.getElementById("others-text").style.display = "none";
  }
}

// ---------------------------------------------------------------------------
// navegação nao linear no json

const goTo = () => {
  let i = document.getElementById("id").innerHTML;
  var toNum = parseInt(i);
  getData(toNum);
}

// ---------------------------------------------------------------------------
// Preenche as infos ja preenchidas

const fillData = (array) => {
  var index = document.getElementById('id').innerHTML;

  console.log(array.length)

  try {
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
      if (array[index]['accessError'] == 1)
        document.getElementById('accessError').checked = true;
    }
  }
  catch (e) {
    console.log(index + ": Position not yet visited");
  }
}

// ---------------------------------------------------------------------------