// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import axios from "axios"

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

//storage
const storageRef = getStorage(app)

const firebaseImageFetcher = async(imageReference) => {
    const result = await getDownloadURL(ref(storageRef, `profile-picture/${imageReference}`))
    // const image = await axios.get(result).then((response) => response)
    return result
}

export default firebaseImageFetcher
