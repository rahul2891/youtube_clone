import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvu0REbXf6PZ0TDDLHd9vpSO0zNemWQ6k",
  authDomain: "video-d2311.firebaseapp.com",
  projectId: "video-d2311",
  storageBucket: "video-d2311.appspot.com",
  messagingSenderId: "40931694074",
  appId: "1:40931694074:web:1f4cce560fffbe34bbc043"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export default app;