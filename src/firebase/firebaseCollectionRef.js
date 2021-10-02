import { db } from "./firebaseConfig";
import { doc, collection } from "@firebase/firestore";

export const userRef = collection(db, "users");
