// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  uploadString,
  deleteObject,
} from "firebase/storage";
import { v4 } from "uuid";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUIbVgRmbb_tLXzBeT_KAXwlkq4wHJhD4",
  authDomain: "cooperativa-aneupi.firebaseapp.com",
  projectId: "cooperativa-aneupi",
  storageBucket: "cooperativa-aneupi.appspot.com",
  messagingSenderId: "765966817185",
  appId: "1:765966817185:web:ccc319785ce113eec5dde0",
  measurementId: "G-Q6E6QEM3BB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const uploadEventImage = async (fileData:File,path:string) => {
  try {
    // const filePath = fileData.path;
    // const fileBuffer = fs.readFileSync(filePath);
    const storageRef = ref(storage, `${path}${v4()}`);
    await uploadBytes(storageRef, fileData, {
      contentType: "image/jpeg || image/png",
    });
    return await getDownloadURL(storageRef);
  } catch (error) {
    console.error("Error ", error);
    throw error;
  }
};

export const getFileNameFromUrl = (url:string) => {
  // Crea un objeto URL desde el string
  let parsedUrl = new URL(url);
  // Obtén la parte del camino del URL
  let pathname = parsedUrl.pathname;
  // Decodifica el componente de la URI para reemplazar %2F con /
  let decodedPath = decodeURIComponent(pathname);
  // Divide la cadena en "/" y obtén la última parte
  let fileName = decodedPath.split("/").pop();
  return fileName;
};



