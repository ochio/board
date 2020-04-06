import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyApZr2Ro2NlFBYy2Ate5Cr6Xj1hiPtk89E",
	authDomain: "board-bce46.firebaseapp.com",
	databaseURL: "https://board-bce46.firebaseio.com",
	projectId: "board-bce46",
	storageBucket: "board-bce46.appspot.com",
	messagingSenderId: "350954614581",
	appId: "1:350954614581:web:dcc6832b7d4d7b2ce8a67c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore()

export default firebase;