import * as firebase from "firebase";

import keys from "./firebase-keys.json";

!firebase.default.apps.length && firebase.default.initializeApp(keys);

export default firebase;
