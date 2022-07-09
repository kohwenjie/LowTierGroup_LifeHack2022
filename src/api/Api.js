import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";

export const getBinsLocation = () => {
    let listOfBins =[];
	const binsLocationCollection = collection(db, "BinsLocation");
	getDocs(binsLocationCollection)
		.then((response) => {
			const coords = response.docs.map((doc) => ({
				data: doc.data(),
				id: doc.id,
			}));

			listOfBins = coords;
		})
		.catch((error) => console.log(error.message));
        console.log(listOfBins)
        return listOfBins;
};
