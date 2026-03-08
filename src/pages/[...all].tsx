import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function App() {
  return (
    <div className="min-h-svh flex flex-col justify-center items-center overflow-hidden">
      <motion.div
        className="flex flex-col gap-6 px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20
        }}
      >
        <div className="flex gap-2 flex-col">
          <p className="text-2xl">404 | Not Found</p>
          <p className="text-xl">Sorry. We couldn't find the page you're looking for.</p>
        </div>

        <div className="flex gap-2">
          <Link to="/">
            <Button>Go home</Button>
          </Link>

          <Button onClick={() => window.history.back()}>Back page</Button>
        </div>
      </motion.div>
    </div>
  )
}
