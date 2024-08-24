function searchSubstring() {
    var fullText = document.getElementById("fullText").value;
    var substring = document.getElementById("substring").value;
    var index = parseInt(document.getElementById("index").value, 10);
    // if (index != isNaN || index < 0){
    //     index = 0;
    // }
    var firstOcc = fullText.indexOf(substring);
    if(firstOcc == -1){
        document.getElementById("firstOcc").value = "Not found";
    }
    else{
        document.getElementById("firstOcc").value = firstOcc;
    }

    var lastOcc = fullText.lastIndexOf(substring);
    if(lastOcc == -1){
        document.getElementById("lastOcc").value = "Not found";
    }
    else{
        document.getElementById("lastOcc").value = lastOcc;
    }

    var firstAfter = fullText.indexOf(substring, index);
    if(firstAfter == -1){
        document.getElementById("firstAfter").value = "Not found";
    }
    else{
        document.getElementById("firstAfter").value = firstAfter;
    }

    var lastAfter = fullText.lastIndexOf(substring, index);
    if(lastAfter == -1){
        document.getElementById("lastAfter").value = "Not found";
    }
    else{
        document.getElementById("lastAfter").value = lastAfter;
    }
}