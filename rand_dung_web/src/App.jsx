import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { initializeUI } from '@firebase-oss/ui-core';
import { FirebaseUIProvider } from '@firebase-oss/ui-react';
import { SignUpAuthScreen } from "./components/sign-up-auth-screen";
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

const ui = initializeUI({
  app,
});

export function AppProviders({ children }) {
  return <FirebaseUIProvider ui={ui}>{children}</FirebaseUIProvider>;
}

function App() {
  return (
    <>
      <AppProviders>
        <SignUpAuthScreen />
      </AppProviders>
    </>
  )
}

export default App;