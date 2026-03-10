import { HeaderParts } from "@/components/mine/parts"
import { signout } from "@/lib"
import { Button } from "@/components/ui/button"

export default function App() {
  return (
    <div className="min-h-svh">
      <HeaderParts sticky={true} />
      <Button onClick={() => signout()}>Sign out</Button>
    </div>
  )
}
