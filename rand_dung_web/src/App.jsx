import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXRcZ3uZDafBuBelgDy1H94EEoHF2mPkE",
  authDomain: "random-worlds.firebaseapp.com",
  projectId: "random-worlds",
  storageBucket: "random-worlds.firebasestorage.app",
  messagingSenderId: "366846270513",
  appId: "1:366846270513:web:bc99f6d55b4f2749698910",
  measurementId: "G-NW43XWJVR9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <>
      HI!
    </>
  )
}

export default App