import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCDlhQAAlMpIovEAi2A_-thiw2WDni0p9w",
  authDomain: "ebuddy-d2588.firebaseapp.com",
  projectId: "ebuddy-d2588",
  storageBucket: "ebuddy-d2588.firebasestorage.app",
  messagingSenderId: "187926246198",
  appId: "1:187926246198:web:e4c92dc905b8f1982f3997",
  measurementId: "G-M6JD1P7TCT",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const signInAndGetToken = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    const idToken = await user.getIdToken(true);

    return idToken;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Error signing in:", error.message);
  }
};
