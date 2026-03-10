import { auth } from "@/lib"
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate } from "@/router"
import { useEffect } from "react"

export function useSighinSetup() {
    const [user, loading] = useAuthState(auth)
    const navigate = useNavigate()

    // 除外パスの設定
    const ignorePaths = ["/signin", "/signup", "/introduce", "/updates", "/terms", "/privacy"]
    const absoluteIgnorePaths = ["/signin", "/signup"]

    useEffect(() => {
      if (!loading && !user && !ignorePaths.includes(location.pathname)) {
        navigate("/introduce")
      } else if (!loading && user && absoluteIgnorePaths.includes(location.pathname)) {
        navigate("/")
      }
    }, [user, loading, location.pathname])
}
