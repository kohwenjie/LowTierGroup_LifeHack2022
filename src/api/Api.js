import { db } from "firebase-config";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export const binsCollectionRef = collection(db, "BinsLocation");

export const getBinsLocation = (setBinList) => {
  setBinList([]);
  getDocs(binsCollectionRef)
    .then((response) => {
      const data = response.docs.map((doc) => ({
        data: doc.data(),
        id: doc.id,
      }));
      setBinList(data);
    })
    .catch((error) => console.log(error.message));
};

export const addBin = (bin) => {
  addDoc(binsCollectionRef, {
    Location: { _lat: bin.lat, _long: bin.long },
    Name: bin.name,
  })
    .then((response) => {
      console.log("success");
    })
    .catch((error) => console.log(error.message));
};

export const deleteBin = (binId) => {
  const docRef = doc(db, "BinsLocation", binId);
  deleteDoc(docRef)
    .then(() => {
      console.log("deleted!");
    })
    .catch((error) => console.log(error.message));
};

export const getBin = async ({ binId, setBin }) => {
  const docRef = doc(db, "BinsLocation", binId);
  getDoc(docRef)
    .then((response) => {
      setBin(response.data());
    })
    .catch((error) => console.log(error.message));
};

export const updateBin = ({ binId, updatedBin }) => {
  console.log('updateBin');
  const docRef = doc(db, "BinsLocation", binId);
  updateDoc(docRef, updatedBin)
    .then(() => {
      alert("Edit Successful");
    })
    .catch((error) => alert(error.message));
};
