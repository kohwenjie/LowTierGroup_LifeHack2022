import { db } from "firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

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
      Name: bin.name
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

// export const getBin = ({binId, setBin}) => {

//     db.collection('BinsLocation').doc(binId).get()
//     .then((response) => {
//       console.log(response.docs);
//     })
//     .catch((error) => console.log(error.message));
// };
