import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { env } from "@/lib/env"

export function usePageSetup() {
  const location = useLocation()
  const { t, i18n } = useTranslation()

  // パスが変わるたびにタイトルの変更
  useEffect(() => {
    const page = location.pathname.replace("/", "") || "index" // /はindexにしてるから
    const key = `title.${page}`  

    let title = "404 | Not Found"
    if (i18n.exists(key)) {
      title = t(key)
    }

    document.title = title + " - " + env.title
  }, [location.pathname, t])
}
