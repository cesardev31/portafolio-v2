// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDc4poozWdfuXs_Mk1_l9LI9eHZdcv-g44",
  authDomain: "cesardev-957fa.firebaseapp.com",
  projectId: "cesardev-957fa",
  storageBucket: "cesardev-957fa.firebasestorage.app",
  messagingSenderId: "350696033513",
  appId: "1:350696033513:web:2badc74bd53497fb14f478",
  measurementId: "G-M9VPZ84EH0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Analytics and export it
export const initAnalytics = async () => {
  try {
    // Check if analytics is supported in the current environment
    const analyticsSupported = await isSupported();
    
    if (analyticsSupported) {
      const analytics = getAnalytics(app);
      console.log("Firebase Analytics initialized successfully");
      return analytics;
    } else {
      console.log("Firebase Analytics is not supported in this environment");
      return null;
    }
  } catch (error) {
    console.error("Error initializing Firebase Analytics:", error);
    return null;
  }
};
