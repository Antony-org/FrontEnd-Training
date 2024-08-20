var statement = "Hello this is statement";
var fontStyles = ["Arial", "Verdana", "Times New Roman", "Georgia", "Courier New"];
var colors = ["red", "blue", "green", "black", "purple"];

for (var i = 0; i < 5; i++) {
    var fontSize = (i + 1) * 10;

    document.write("<p style='font-size:" + fontSize + "px; font-family:" +
         fontStyles[i] + "; color:" + colors[i] + ";'>" + statement +" "+ (i+1)+ "</p><br>");
}   