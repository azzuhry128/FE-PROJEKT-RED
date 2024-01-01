import { uploadBytes } from "firebase/storage"
import { profilePictureRef } from "./firebase"

const firebaseUpload = (file) => {
    console.log("uploading file to firebase...")
    uploadBytes(profilePictureRef, file)
    .then((snapshot) => {
        console.log("file uploaded...")
    })
}

export { firebaseUpload }