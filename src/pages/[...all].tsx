import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

export default function App() {
  const { t } = useTranslation()

  return (
    <div className="min-h-svh flex flex-col justify-center items-center overflow-hidden">
      <motion.div
        className="flex flex-col gap-5 px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20
        }}
      >
        <div className="flex gap-2 flex-col">
          <p className="text-3xl">404 | Not Found</p>
          <p className="text-xl">{t("pages.notfound.message")}</p>
        </div>

        <div className="flex gap-2">
          <Link to="/">
            <Button>{t("pages.notfound.goHome")}</Button>
          </Link>

          <Button onClick={() => window.history.back()}>{t("main.goBack")}</Button>
        </div>
      </motion.div>
    </div>
  )
}
