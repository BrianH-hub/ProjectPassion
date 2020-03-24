// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB2yHM1RXklxGNoyaWsTEKvgCBCaMDl_x4",
    authDomain: "projectpassion-ceff9.firebaseapp.com",
    databaseURL: "https://projectpassion-ceff9.firebaseio.com",
    projectId: "projectpassion-ceff9",
    storageBucket: "projectpassion-ceff9.appspot.com",
    messagingSenderId: "429041998157",
    appId: "1:429041998157:web:0a28f5aaf8d1724140ff04",
    measurementId: "G-VTF0YHT8YM"
};
//   // Initialize Firebase
firebase.initializeApp(firebaseConfig);

var companiesRef = firebase.database().ref('companies');
// var companySearch = getInputVal('companySearch');



function getInputVal(id) {
    return document.getElementById(id).value;
}


firebase.database().ref('/companies/').orderByChild("startDate").once('value', function (snapshot) {


    snapshot.forEach(function (childSnapshot) {
        var childData = childSnapshot.val();
        var beforeBody = document.getElementById("dbStart").innerHTML
        var jobPosition = childData.jobPosition;
        var companyName = childData.companyName;
        var startDate = childData.startDate;
        var endDate = childData.endDate;
        var city = childData.city;
        var jobDetails = childData.jobDetails;

        document.getElementById("dbStart").innerHTML =
            '<div class="company"><div class="d-flex"><img class="logo border border-dark rounded float-left" src="./logos/'+companyName+'.png"><div class="description"><p class="position">' + jobPosition + '</p><h4 class="text-sm-center">' + companyName + '</h4></div><div class="coDetails ml-auto"><h5>' + startDate + ' - ' + endDate + '</h5><h5>' + city + '</h5></div></div><div class="jobdetails">' + jobDetails + '</div></div>'
            document.getElementById("dbStart").innerHTML += beforeBody
    })
})

