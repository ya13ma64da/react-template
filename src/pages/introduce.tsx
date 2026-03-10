import { Button } from "@/components/ui/button"
import { Info } from "lucide-react"
import { Link } from "react-router-dom"
import { env } from "@/lib/env"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { useTranslation } from "react-i18next"
import { HeaderParts } from "@/components/mine/parts/header"
import { LogoParts } from "@/components/mine/parts/logo"

export default function App() {
  const { t } = useTranslation()

  return (
    <div className="min-h-svh">
      <HeaderParts />
      <div className="min-h-svh overflow-hidden px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20
          }}
          className="flex flex-col gap-6 justify-center min-h-svh items-center"
        >
          <div className="flex flex-col gap-1.5 text-center">
            <TypeAnimation
              className="text-4xl font-mono"
              sequence={[t("title.introduce"), 4000, env.title, 4000]}
              speed={50}
              repeat={Infinity}
              wrapper="p"
              cursor={true}
            />
          </div>

          <div className="flex gap-2 items-center">
            <Link to="/signin">
              <Button variant="outline">{t("pages.introduce.getStarted")}</Button>
            </Link>

            <Link to="/updates">
              <Button><Info /> {t("pages.introduce.viewUpdates")}</Button>
            </Link>
          </div>
        </motion.div>
      </div>

      <footer className="p-5 w-full border-t-2 flex flex-col gap-3">
        <LogoParts type="black" />
        <div className="flex gap-3 flex-col sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {env.title}. All rights reserved.</p>
          <div className="flex gap-3 sm:ml-auto">
            <Link to="/privacy">{t("title.privacy")}</Link>
            <Link to="/terms">{t("title.terms")}</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
