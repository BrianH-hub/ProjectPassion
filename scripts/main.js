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
var key = companiesRef.push().key;
var update = {};

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



    firebase.database().ref('/companies').once('value', function(snapshot) {

      snapshot.forEach(function(childSnapshot){
          var childData = childSnapshot.val();
          document.getElementById("innerBody").innerHTML += 
          "<td>"+childData['jobPosition']+"</td>" +
          "<td>"+childData['companyName']+"</td>" +
          "<td>"+childData['startDate']+"</td>" +
          "<td>"+childData['endDate']+"</td>" +
          "<td>"+childData['city']+"</td>" +
          "<td>"+childData['jobDetails']+"</td>"
      })
  })




