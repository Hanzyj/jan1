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

    indexDBtest();
    //addDatatoDB(first, last);

    document.body.style.background = "green";

}

function test(mydate) {

    var myYears = mydate.value.substring(0, 4);
    var myMonths = mydate.value.substring(5, 7);
    var myDays = mydate.value.substring(8, 10);
    var f = new Date(myYears, myMonths - 1, myDays);
    var t = new Date();

    alert("my date is: " + f + "\n" + "current date is: " + t);
    if (days_between(t, f) > (17 * 365 + 4*366)) {

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


    // In the following line, you should include the prefixes of implementations you want to test.
    window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    // DON'T use "var indexedDB = ..." if you're not in a function.
    // Moreover, you may need references to some window.IDB* objects:
    window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction || { READ_WRITE: "readwrite" }; // This line should only be needed if it is needed to support the object's constants for older browsers
    window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
    // (Mozilla has never prefixed these objects, so we don't need window.mozIDB*)

    if (!window.indexedDB) {
        window.alert("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.");
    }
    // Let us open our database
    var request = window.indexedDB.open("MyTestDatabase", 2);

    var db; //on success we save the IDB index in this
    var request = indexedDB.open("MyTestDatabase");
    request.onerror = function (event) {
        alert("Something went wrong while trying to initialise IndexDB!");
    };

    request.onsuccess = function (event) {
        db = event.target.result;   //we save the resoult if the event to db
        alert("I am here!3");
    };

    //db.onerror = function (event) {
    //    // Generic error handler for all errors targeted at this database's
    //    // requests!
    //    alert("Database error: " + event.target.errorCode);
    //};

  
    request.onupgradeneeded = function (evt) {
        var store = evt.currentTarget.result.createObjectStore(
          "MyTestDatabase", { keyPath: 'id', autoIncrement: true });

        store.createIndex('biblioid', 'biblioid', { unique: true });
        store.createIndex('title', 'title', { unique: false });
        store.createIndex('year', 'year', { unique: false });

        alert("I am here!1");
    };
    
    //var store2 = db.createObjectStore("MyTestDatabase", { keyPath: 'id', autoIncrement: true });

    alert("I am here!2");

}

function indexDBtest(){

    var db;

    // Let us open our database
    var DBOpenRequest = window.indexedDB.open("toDoList", 4);

    // these two event handlers act on the database being opened successfully, or not
    DBOpenRequest.onerror = function (event) {
        alert("Error during db initialisation!");
    };

    DBOpenRequest.onsuccess = function (event) {
        alert("DB initialised successfuly!");

        // store the result of opening the database in the db variable. This is used a lot below
        db = DBOpenRequest.result;

        // Run the displayData() function to populate the task list with all the to-do list data already in the IDB
        //displayData();
    };

    // This event handles the event whereby a new version of the database needs to be created
    // Either one has not been created before, or a new version number has been submitted via the
    // window.indexedDB.open line above
    //it is only implemented in recent browsers
    DBOpenRequest.onupgradeneeded = function (event) {
        var db = event.target.result;

        db.onerror = function (event) {
            alert("DB error");
        };

        // Create an objectStore for this database   
        var objectStore = db.createObjectStore("toDoList", { keyPath: "taskTitle" });

        // define what data items the objectStore will contain

        objectStore.createIndex("hours", "hours", { unique: false });
        objectStore.createIndex("minutes", "minutes", { unique: false });
        objectStore.createIndex("day", "day", { unique: false });
        objectStore.createIndex("month", "month", { unique: false });
        objectStore.createIndex("year", "year", { unique: false });
        objectStore.createIndex("notified", "notified", { unique: false });
        alert("i am here 2");
    };

    alert("i am here 1");

}