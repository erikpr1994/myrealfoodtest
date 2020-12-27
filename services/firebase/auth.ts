import firebase from "./";
import "@firebase/auth";

export const loginWithGoogle = () => {
  const googleProvider = new firebase.default.auth.GoogleAuthProvider();

  return firebase.default
    .auth()
    .signInWithPopup(googleProvider)
    .then((user) => {
      const { additionalUserInfo } = user;
      const { profile } = additionalUserInfo;
      const { name, picture, id } = profile;
      return { nombre: name, imagen: picture, id };
    });
};
