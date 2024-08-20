function factorial() {
    var tbody = document.querySelector("#factorial-table tbody");
    var maxNumber = 10;

    for (var i = 0; i <= maxNumber; i++) {
        var factorial = 1;
        for (var j = 1; j <= i; j++) {
            factorial *= j;
        }
        var row = "<tr><td>" + i + "</td><td>" + factorial + "</td></tr>";
        tbody.innerHTML += row;
    }


}
function factorial2(userNumber) {

    for (var i = 0; i <= userNumber; i++) {
        var factorial = 1;
        for (var j = 1; j <= i; j++) {
            factorial *= j;
        }
    }
    return factorial;

}
function findUserFactorial() {
    var userNumber = parseInt(prompt("Enter a number to find its factorial:"));
    
    if (isNaN(userNumber) || userNumber < 0) {
        alert("Please enter a valid non-negative number.");
    } else {
        var result = "The factorial of " + userNumber + " is " + factorial2(userNumber) + ".";
        document.getElementById("user-factorial").innerHTML = "<p>" + result + "</p>";
    }
}
factorial();
document.getElementById("factorial-button").addEventListener("click", findUserFactorial);
