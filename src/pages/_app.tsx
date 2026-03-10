import { Outlet } from "react-router-dom"

// セットアップhooks
import { useSighinSetup } from "@/setup/hooks/useSignSetup"
import { useThemeSetup } from "@/setup/hooks/useThemeSetup"
import { usePageSetup } from "@/setup/hooks/useTitleSetup"

export default function Layout() {
  useSighinSetup()
  usePageSetup()
  const isDark = useThemeSetup()

  return (
    <div className={`bg-background text-foreground ${isDark ? "dark" : ""}`}>
      <Outlet />
    </div>
  )
}
