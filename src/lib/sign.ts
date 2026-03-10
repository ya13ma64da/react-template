import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { errorLog, log, auth } from "@/lib"

const provider = new GoogleAuthProvider()

export async function signinWithGoogle() {
  try {
    await signInWithPopup(auth, provider)
    log("User signed in with Google successful")
  } catch(error) {
    errorLog(error)
  }
}

export async function signout() {
  try {
    await auth.signOut()
    log("User signed out")
  } catch(error) {
    errorLog(error)
  }
}
