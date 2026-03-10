import { Outlet } from "react-router-dom"
import { useEffect } from "react"

// セットアップhooks
import { useSighinSetup } from "@/setup/hooks/useSignSetup"
import { useThemeStore } from "@/hooks/store"
import { usePageSetup } from "@/setup/hooks/useTitleSetup"

export default function Layout() {
  useSighinSetup()
  usePageSetup()
  const { dark } = useThemeStore()

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark")
    } else {
      document.body.classList.remove("dark")
    }
  }, [dark])

  return (
    <div className="bg-background text-foreground">
      <Outlet />
    </div>
  )
}
