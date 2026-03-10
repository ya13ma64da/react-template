import { signout } from "@/lib/sign"
import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"

export default function App() {
  const { t } = useTranslation()

  return (
    <div className="min-h-svh">
      <Button variant="outline" onClick={signout}>{t("pages.index.signout")}</Button>
    </div>
  )
}
