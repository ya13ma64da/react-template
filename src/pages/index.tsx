import { signout } from "@/lib/signin"
import { pageSetup } from "@/lib/pageSetup"

export default function App() {
  pageSetup("Home")

  return (
    <div className="min-h-svh">
      <button onClick={signout}>Signout</button>
    </div>
  )
}
