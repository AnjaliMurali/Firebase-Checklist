const firebaseConfig = {
  apiKey: "AIzaSyARjfNtB9m17sbjHd_AzAYeRL7AzjdJZfU",
  authDomain: "checklist-60775.firebaseapp.com",
  databaseURL: "https://checklist-60775-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "checklist-60775",
  storageBucket: "checklist-60775.appspot.com",
  messagingSenderId: "171887356239",
  appId: "1:171887356239:web:094c0528078306b7ea7d3a"
};

  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);



getData();


 function addItem(){
  item = document.getElementById("msg").value;

  firebase.database().ref("/").child(item).update({
    purpose : "adding message"
  });

//   firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
//     item = childKey;
// console.log("Item - " + item);
// row = "<div>#"+ item +"</div><hr>";
// document.getElementById("output").innerHTML += row;
// });
// });

getData();
document.getElementById("msg").value = "";
}

function getData() {  
    firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
        item = childKey;
    console.log("Item - " + item);
   row = "<div>#"+ item +"</div><hr>";
document.getElementById("output").innerHTML += row;
 });
});

}


function del(){
  rem = document.getElementById("msg").value;
  //item = rem;
  //console.log(item);
  //firebase.database().ref("/").child(item).remove();
  firebase.database().ref("/").child(rem).remove();
  document.getElementById("msg").value = "";
	
}


function text(){
  console.log(document.getElementById("msg").value);
}
