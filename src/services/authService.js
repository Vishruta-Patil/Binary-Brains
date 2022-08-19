import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { auth } from "firebase-config";

export const register = async (credentials, navigate) => {
  try {
    const user = await createUserWithEmailAndPassword(
      auth,
      credentials.email,
      credentials.password
    );
    sessionStorage.setItem("auth_Token", user._tokenResponse.refreshToken);
    navigate("/");
  } catch (error) {
    console.log(error.message);
  }
};

export const loginUser = async (email, password, navigate) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    sessionStorage.setItem("auth_Token", user._tokenResponse.refreshToken);
    navigate("/");
  } catch (error) {
    console.log(error.message);
  }
};

export const logout = async (navigate) => {
  try {
    await signOut(auth);
    sessionStorage.removeItem("auth_Token");
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
