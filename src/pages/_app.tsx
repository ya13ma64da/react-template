import { Outlet } from "react-router-dom"

// セットアップhooks
import { useSighinSetup } from "@/setup/useSigninSetup"

export default function Layout() {
  useSighinSetup()

  return (
    <div className="bg-background dark text-primary">
      <Outlet />
    </div>
  )
}
