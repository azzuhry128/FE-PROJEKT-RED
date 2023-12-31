import axios from "axios"
import { getDownloadURL, getStorage, ref } from "firebase/storage"

const storage = getStorage()

const firebaseDownload = () => {
    console.log("downloading file...")
    const result = getDownloadURL(ref(storage, 'images'))
    .then((url) => {
        axios.get(url).then((response) => console.log(response.fileName))
    })

    return result
}

export{ firebaseDownload }