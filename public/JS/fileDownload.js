const stringToFile = (source) => {
    var blob = new Blob([source], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "data.json");
}