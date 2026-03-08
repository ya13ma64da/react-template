import { signout } from "@/lib/signin";

export default function App() {
  return (
    <div className="min-h-svh">
      <button onClick={signout}>Signout</button>
    </div>
  )
}
