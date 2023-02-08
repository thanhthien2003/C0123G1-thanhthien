function ChangeMoney() {
    var Amount = document.getElementById("Amount").value;
    var From = document.getElementById("From").value;
    var To = document.getElementById("To").value;
    var Result = "";


    if (From == "USD" && To == "VND") {
        Result = "result:" + (Amount * 23000) + " D"
    }
    else if (From == "VND"&& To =="USD"){
        Result ="Result: " + (Amount / 23000) + " $"
    }
    else if (From == "VND") {
        Result = "Result: " + Amount + " D"
    } else {
        Result = "Result: "+   Amount + " $"
    }

 document.getElementById("Result").innerHTML = Result;


}