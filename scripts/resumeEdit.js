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
var companySearch = getInputVal('companySearch');

//submit form
function writeData() {

    var jobPosition = getInputVal('jobPosition');
    var companyName = getInputVal('companyName');
    var startDate = getInputVal('startDate');
    var endDate = getInputVal('endDate');
    var city = getInputVal('city');
    var jobDetails = getInputVal('jobDetails');

    // //Save message to firebase
    var newCompanyRef = companiesRef.child(companyName);
    newCompanyRef.set({
        jobPosition: jobPosition,
        companyName: companyName,
        startDate: startDate,
        endDate: endDate,
        city: city,
        jobDetails: jobDetails
    })

}

function getInputVal(id) {
    return document.getElementById(id).value;
}

function deleteData() {
    if(companySearch!=""){
    firebase.database().ref('/companies/' + companySearch).remove()
    }else{
        alert("Company CANNOT be BLANK!!")
    }

}

firebase.database().ref('/companies').orderByChild("startDate").once('value', function (snapshot) {

    snapshot.forEach(function (childSnapshot) {
        var childData = childSnapshot.val();
        var beforeBody = document.getElementById("innerBody").innerHTML

        document.getElementById("innerBody").innerHTML =
            "<td>" + childData['jobPosition'] + "</td>" +
            "<td>" + childData['companyName'] + "</td>" +
            "<td>" + childData['startDate'] + "</td>" +
            "<td>" + childData['endDate'] + "</td>" +
            "<td>" + childData['city'] + "</td>" +
            "<td>" + childData['jobDetails'] + "</td>"

        document.getElementById("innerBody").innerHTML += beforeBody

    })
var beforeBody = document.getElementById("innerBody").innerHTML
    document.getElementById("innerBody").innerHTML =
            "<tr><th>Job Position</th><th>Company</th><th>Start Date</th><th>End Date</th><th>City</th><th>Job Description</th></tr>"

    document.getElementById("innerBody").innerHTML += beforeBody
})


if (companySearch != "") {
    firebase.database().ref('/companies/' + companySearch).once('value', function (snapshot) {
        var jobPosition = snapshot.val().jobPosition;
        var companyName = snapshot.val().companyName;
        var startDate = snapshot.val().startDate;
        var endDate = snapshot.val().endDate;
        var city = snapshot.val().city;
        var jobDetails = snapshot.val().jobDetails;

        document.getElementById("jobPosition").value = jobPosition;
        document.getElementById("companyName").value = companyName;
        document.getElementById("startDate").value = startDate;
        document.getElementById("endDate").value = endDate;
        document.getElementById("city").value = city;
        document.getElementById("jobDetails").value = jobDetails;
    })
} else {
    document.getElementById("jobPosition").value = "";
    document.getElementById("companyName").value = "";
    document.getElementById("startDate").value = "";
    document.getElementById("endDate").value = "";
    document.getElementById("city").value = "";
    document.getElementById("jobDetails").value = "";
}
