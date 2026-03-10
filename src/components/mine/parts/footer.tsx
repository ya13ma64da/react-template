import { LogoParts } from "@/components/mine/parts"
import { Link } from "@/router"
import { useTranslation } from "react-i18next"
import { env } from "@/lib"

export function FooterParts() {
  const { t } = useTranslation()

  return (
    <footer className="p-5 w-full border-t-2 flex flex-col gap-3">
      <LogoParts type="gray" />
      <div className="flex gap-3 flex-col sm:flex-row">
        <p>&copy; {new Date().getFullYear()} {env.title}. All rights reserved.</p>
        <div className="flex gap-3 sm:ml-auto">
          <Link to="/privacy">{t("title.privacy")}</Link>
          <Link to="/terms">{t("title.terms")}</Link>
        </div>
      </div>
    </footer>
  )
}
