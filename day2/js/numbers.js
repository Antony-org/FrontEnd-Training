function analyzeNumbers() {
    var num1 = parseFloat(prompt("Enter the first number:"));
    var num2 = parseFloat(prompt("Enter the second number:"));
    var num3 = parseFloat(prompt("Enter the third number:"));

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        document.getElementById("out").innerHTML = "<p>Invalid input. Please refresh the page and enter valid numbers.</p>";
        return;
    }

    var numbers = [num1, num2, num3];

    var maxNumber = Math.max(...numbers);
    var minNumber = Math.min(...numbers);

    var result = "<p>You entered the following numbers:</p>";
    result += "<ul>";
    result += "<li>Number 1: " + num1 + "</li>";
    result += "<li>Number 2: " + num2 + "</li>";
    result += "<li>Number 3: " + num3 + "</li>";
    result += "</ul>";
    result += "<p>The maximum value is: " + maxNumber + "</p>";
    result += "<p>The minimum value is: " + minNumber + "</p>";

    document.write(result);
}

analyzeNumbers();