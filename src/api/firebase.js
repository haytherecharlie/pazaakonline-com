import { pathOr } from "ramda"
import firebase from "firebase/app"
import fbconfig from "config/firebase"

firebase.initializeApp({
  apiKey: fbconfig.apiKey,
  authDomain: fbconfig.authDomain,
  databaseURL: fbconfig.databaseURL,
  projectId: fbconfig.projectId,
  storageBucket: fbconfig.storageBucket,
  messagingSenderId: fbconfig.messagingSenderId,
  appId: fbconfig.appId,
  measurementId: fbconfig.measurementId,
})

export const auth = pathOr(undefined, ["auth"], firebase)
export const db = pathOr(undefined, ["firestore"], firebase)
export const ts = pathOr(undefined, ["firestore", "Timestamp"], firebase)
export const ga = pathOr(undefined, ["analytics"], firebase)
