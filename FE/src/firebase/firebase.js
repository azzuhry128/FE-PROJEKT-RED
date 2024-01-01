// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCN1NUBr4gEhi9FcsXogIrmsH-q_ZF-SHY",
  authDomain: "trashtalk-image-storage.firebaseapp.com",
  projectId: "trashtalk-image-storage",
  storageBucket: "trashtalk-image-storage.appspot.com",
  messagingSenderId: "430976788324",
  appId: "1:430976788324:web:a00b62442e0fa5806afc71",
  measurementId: "G-VM95NJ4WHR",
  storageBucket: 'gs://trashtalk-image-storage.appspot.com'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//storage
const storageRef = getStorage(app)

const profilePictureStorageURL = 'gs://trashtalk-image-storage.appspot.com/images'
const profilePictureRef = ref(storageRef, 'profile-picture')
const profilePictureDownloadReference = ref(storageRef, profilePictureStorageURL)

export { profilePictureRef, profilePictureDownloadReference }
