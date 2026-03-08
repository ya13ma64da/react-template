import { Outlet } from "react-router-dom"

// セットアップhooks
import { useSighinSetup } from "@/setup/hooks/useSigninSetup"

export default function Layout() {
  useSighinSetup()

  return (
    <div className="bg-background">
      <Outlet />
    </div>
  )
}
