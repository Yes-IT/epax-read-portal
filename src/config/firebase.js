import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCZFzR7fNGaToMjE85ANG6q6ZmwZrG-hJQ",
  authDomain: "visual-explorer-dev.firebaseapp.com",
  //databaseURL: "https://in-depth-react-1.firebaseio.com",
  projectId: "visual-explorer-dev",
  // storageBucket: "in-depth-react-1.appspot.com",
  messagingSenderId: "1005360881488",
  appId: "1:931473537546:web:b17ceda1196406af1ffdf3",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
