import text from "@/assets/privacy.txt?raw"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export default function App() {
  return (
    <div className="min-h-svh px-4 py-8 flex flex-col items-center justify-center">
      <div className="flex flex-col gap-5 w-full max-w-md">
        <div className="text-center flex flex-col gap-2">
          <p className="text-3xl">Privacy Policy</p>
          <p className="text-xl">This page clearly states our privacy policy. Please be sure to read it before using this service.</p>
        </div>

        <motion.div
          className="p-4 bg-foreground/5 rounded-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20
          }}
        >
          {text}
        </motion.div>

        <div className="flex gap-2">
          <Link to="/">
            <Button>Go home</Button>
          </Link>

          <Button className="w-fit" onClick={() => window.history.back()}>Back page</Button>
        </div>
      </div>
    </div>
  )
}
