import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCsR2M-tbQj-3SFHr3EC618POfu1DcpYKQ",
  authDomain: "react-netflix-clone-2695d.firebaseapp.com",
  projectId: "react-netflix-clone-2695d",
  storageBucket: "react-netflix-clone-2695d.appspot.com",
  messagingSenderId: "792266495411",
  appId: "1:792266495411:web:61b5208d780bb057f927c6",
  measurementId: "G-25DV44HM9V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);