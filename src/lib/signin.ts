import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { auth } from "@/lib/firebase"
import { errorLog, log } from "@/lib/log"

// プロバイダー
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
