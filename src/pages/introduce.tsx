import { Button } from "@/components/ui/button"
import { Book } from "lucide-react"
import { Link } from "react-router-dom"
import { env } from "@/lib/env"
import { motion } from "framer-motion"
import { Icon } from "@/components/mine/icon"
import { TypeAnimation } from "react-type-animation"
import { pageSetup } from "@/lib/pageSetup"

export default function App() {
  pageSetup(env.description)

  return (
    <div className="min-h-svh">
      <div className="fixed px-5 bg-background py-3 top-0 flex gap-4 w-full">
        <div className="sm:border-r-2 pr-2 flex gap-2 items-center">
          <Icon className="size-6" />
          <p className="hidden sm:block font-mono">{env.title}</p>
        </div>

        <div className="ml-auto sm:border-l-2 pl-2 flex gap-2 items-center">
          <Link to="/signin">
            <Button>Get started</Button>
          </Link>

          <Link to="/document" className="hidden sm:block">
            <Button><Book /> Document</Button>
          </Link>
        </div>
      </div>

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
              sequence={[env.description, 4000, env.title, 4000]}
              speed={50}
              repeat={Infinity}
              wrapper="p"
              cursor={true}
            />
          </div>

          <div className="flex gap-2 items-center">
            <Link to="/signin">
              <Button variant="outline">Get started</Button>
            </Link>

            <Link to="/document">
              <Button><Book /> View document</Button>
            </Link>
          </div>
        </motion.div>
      </div>

      <footer className="p-5 w-full border-t-2 flex gap-3 flex-col sm:flex-row">
        <p>&copy; {new Date().getFullYear()} {env.title}. All rights reserved.</p>
        <div className="flex gap-3 sm:ml-auto">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>
      </footer>
    </div>
  )
}
