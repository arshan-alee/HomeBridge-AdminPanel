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

// Function to convert ISO string to local date-time format
export const convertToLocalDateTime = (isoDateString) => {
  const date = new Date(isoDateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const localDateTime = `${year}-${month}-${day}T${hours}:${minutes}`;
  return localDateTime;
};

export function checkDeadline(isoDate) {
  const date = new Date(isoDate);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Check if the deadline has passed
  if (date < today) {
    return "Deadline Passed";
  }
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
