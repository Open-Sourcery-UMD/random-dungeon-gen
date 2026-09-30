import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { initializeUI } from '@firebase-oss/ui-core';
import { FirebaseUIProvider } from '@firebase-oss/ui-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from "@/pages/home";
import { Login } from "@/pages/login";
import { SignUp } from "@/pages/signup";
import { Dashboard } from "@/pages/dashboard";
import { VerifyEmail } from "@/pages/verify_email";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { VerifiedMenuItems, UnverifiedMenuItems } from "@/components/menu-items";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
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
const auth = getAuth(app);

const ui = initializeUI({
  app,
});

export function AppProviders({ children }) {
  return <FirebaseUIProvider ui={ui}>{children}</FirebaseUIProvider>;
}

function App() {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    return onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthLoading(false);
    });
  }, []);

  return (
    <AppProviders>
        <Router basename={import.meta.env.BASE_URL}>
          <header className="w-full bg-slate-900 text-white">
            <nav className="mx-auto flex items-center justify-between py-4 px-6">
              <Link to="/" className="text-xl font-bold tracking-tight">
                Random Dungeon Gen
              </Link>

              <div className="flex items-center gap-3">
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Account</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="flex min-w-36 flex-col gap-1 p-2">
                          {user?.emailVerified ? <VerifiedMenuItems /> : <UnverifiedMenuItems />}
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </nav>
          </header>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/verify-email" element={<VerifyEmail />} />
          </Routes>
        </Router> 
    </AppProviders>
  )
}

export default App;
