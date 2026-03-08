import { Outlet } from "react-router-dom"

// セットアップhooks
import { useSighinSetup } from "@/setup/hooks/useSigninSetup"
import { useThemeSetup } from "@/setup/hooks/useThemeSetup"

export default function Layout() {
  useSighinSetup()
  const isDark = useThemeSetup()

  return (
    <div className={`bg-background text-foreground ${isDark ? "dark" : ""}`}>
      <Outlet />
    </div>
  )
}
