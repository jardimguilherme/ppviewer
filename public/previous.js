function previous() {
    let i = document.getElementById("id").innerHTML;
    var toNum = parseInt(i) - 1;
    toNum < 0 ? toNum = 0 : toNum = toNum;
    document.getElementById("id").innerHTML = toNum;

    getData(toNum);
  }