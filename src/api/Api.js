import { db } from "firebase-config";
import { collection, getDocs } from "firebase/firestore";

export const getBinsLocation = (setBinList) => {
  const binsLocationCollection = collection(db, "BinsLocation");

  getDocs(binsLocationCollection)
    .then((response) => {
      const data = response.docs.map((doc) => ({
        data: doc.data(),
        id: doc.id,
      }));
      setBinList(data);
    })
    .catch((error) => console.log(error.message));
};
