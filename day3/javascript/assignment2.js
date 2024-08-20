function splitString() {
    var inputString = document.getElementById("inputString").value;
    var delimiter = document.getElementById("delimiter").value;

    var splitResult = inputString.split(delimiter);

    var resultList = document.getElementById("resultList");

    resultList.innerHTML = '';

    // fruits.forEach(function (item, index) {
    //     console.log(item, index);
    //     });
    
    splitResult.forEach(function(part) {
        var listItem = document.createElement("li");
        listItem.textContent = part;
        resultList.appendChild(listItem);
    });
}