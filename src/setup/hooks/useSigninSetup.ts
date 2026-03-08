import { auth } from "@/lib/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

export function useSighinSetup() {
    const [user, loading] = useAuthState(auth)
    const navigate = useNavigate()
    const ignorePaths = ["/signin", "/signup", "/introduce", "/document", "/terms", "/privacy"]

    useEffect(() => {
      if (!loading && !user && !ignorePaths.includes(location.pathname)) {
        navigate("/introduce")
      }
    }, [user, loading, location.pathname])
}
