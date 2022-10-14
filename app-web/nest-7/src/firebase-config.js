import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC4Vuknf8yCLBKOhqI-zwzofAR_DbGCYIs",
    authDomain: "tienda07.firebaseapp.com",
    projectId: "tienda07",
    storageBucket: "tienda07.appspot.com",
    messagingSenderId: "833047458914",
    appId: "1:833047458914:web:6658981f93757b01388d3b",
    measurementId: "G-ZH7H9X5E1E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)