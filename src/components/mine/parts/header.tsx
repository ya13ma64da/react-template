import { Button } from "@/components/ui/button"
import { LogoParts } from "@/components/mine/parts"
import { Link } from "@/router"
import { LogIn, Settings } from "lucide-react"
import { useTranslation } from "react-i18next"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "@/lib"

export function HeaderParts() {
  const { t } = useTranslation()
  const [user, loading] = useAuthState(auth)

  return (
    <div className="fixed px-5 bg-background py-3 top-0 flex gap-4 w-full">
      <LogoParts className="sm:border-r-2 pr-2" />
      <div className="ml-auto sm:border-l-2 pl-2 flex gap-2 items-center">
        {!loading && !user && (
          <Link to="/signin">
            <Button><LogIn /> {t("title.signin")}</Button>
          </Link>
        ) || (
          <Link to="/settings" className="hidden sm:block">
            <Button><Settings /> {t("title.settings")}</Button>
          </Link>
        )}
      </div>
    </div>
  )
}