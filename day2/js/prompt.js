var choice = prompt("Enter a number to select a list type:\n 1 - Bullet list\n 2 - Numbered list\n3 - Lettered list");

var container = document.getElementById("1");

var items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

function createList(type) {
    var list;
    var haeder;
    switch(type) {
        case "1":
            header = "<h1>" + "Bullet list" + "</h1>";
            list = "<ul>";
            for (var i = 0; i < items.length; i++) {
                list += "<li>" + items[i] + "</li>";
            }
            list += "</ul>";
            break;
        case "2":
            header = "<h1>" + "Numbered list" + "</h1>";
            list = "<ol>";
            for (var i = 0; i < items.length; i++) {
                list += "<li>" + items[i] + "</li>";
            }
            list += "</ol>";
            break;
        case "3":
            header = "<h1>" + "lettered list" + "</h1>";
            list = "<ol type='A'>";
            for (var i = 0; i < items.length; i++) {
                list += "<li>" + items[i] + "</li>";
            }
            list += "</ol>";
            break;
        default:
            list = "<p>Invalid input. Please refresh the page and enter a valid number (1, 2, or 3).</p>";
            break;
    }
    
    document.write (header + list);
}

createList(choice);