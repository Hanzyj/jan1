

function redirect() {

    document.location = "register.html";
}

function sendRegistration() {
     
    var a = document.getElementById("myForm");
    a.submit();
  
    var first = document.getElementById("yourName");
    var last = document.getElementById("yourLast");
    var adress = document.getElementById("yourAddress");
    var birth = document.getElementById("yourBirth");

    if (test(birth)) {
        //save data do indexDB
    }

     
    //if birt is friday set background to green...


    document.body.style.background = "green";
    

}

function test(mydate) {

    var myYears = mydate.value.substring(0, 4);
    var myMonths = mydate.value.substring(5, 7);
    var myDays = mydate.value.substring(8, 10);
    var f = new Date(myYears, myMonths - 1, myDays);
    var t = new Date();

    alert("my date is: " + f + "\n" + "current date is: " + t);
    if (days_between(t, f) > (21 * 365)) {

        return true;
    }
    else { return false; }
}
function days_between(date1, date2) {

    // The number of milliseconds in one day
    var ONE_DAY = 1000 * 60 * 60 * 24

    // Convert both dates to milliseconds
    var date1_ms = date1.getTime()
    var date2_ms = date2.getTime()

    // Calculate the difference in milliseconds
    var difference_ms = Math.abs(date1 - date2)

    // Convert back to days and return
    return Math.round(difference_ms / ONE_DAY)
}

function addDatatoDB(firstName,lastName) {

    alert(firstName.value + " " + lastName.value);

}