function redirect() {

    document.location = "register.html";
}

function sendRegistration() {
     
    document.getElementById("myForm").submit();
   // var d = new Date();
   // document.getElementById("register").innerHTML = d.toString();

    //var button = document.getElementById("register");

    //var first = document.getElementById("yourName");
    //var last = document.getElementById("yourLast");
    //var adress = document.getElementById("yourAddress");
    //var birth = document.getElementById("yourBirth");

    

    //button.onclick = function save() {

    //    //alert(first.nodeValue.toString);
    //    alert(first.value + "\n");
    //    //console.log(first);
    //    //button.onclick = null;
    //    //addDatatoDB(first,last,adress,birth)

    //};


}

function addDatatoDB(firstName,lastName) {

    window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

    if (!window.indexedDB) {
        console.log("Your Browser does not support IndexedDB");
    }

    var request = window.indexedDB.open("testDB", 2);

    alert(firstName);

}