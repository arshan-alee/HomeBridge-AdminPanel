import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../config/firebaseConfig";

export const isDateGreaterThanToday = (dateString) => {
  const inputDate = new Date(dateString);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return inputDate > today;
};

export default function formatDate(isoDate) {
  const date = new Date(isoDate);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export const uploadImage = (file) => {
  return new Promise((resolve, reject) => {
    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 1000) /
          10;
        console.log(`Upload is ${progress}% done`);
      },
      (error) => {
        console.log(error);
        reject(error); // Reject the promise with the error
      },
      () => {
        console.log(`Upload is complete, fetching URL...`);
        getDownloadURL(storageRef)
          .then((url) => {
            resolve(url); // Resolve the promise with the URL
          })
          .catch((error) => {
            console.log(error);
            reject(error); // Reject the promise with the error
          });
      }
    );
  });
};
