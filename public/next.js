function next() {
    let i = document.getElementById("id").innerHTML;
    var toNum = parseInt(i) + 1;
    document.getElementById("id").innerHTML = toNum;
    
    getData(toNum);
  }