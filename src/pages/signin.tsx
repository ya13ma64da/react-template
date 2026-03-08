import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

import { FaGoogle, FaApple } from "react-icons/fa"
import { env } from "@/lib/env"
import { Link } from "react-router-dom"
import { Icon } from "@/components/mine/icon"
import { signinWithGoogle } from "@/lib/signin"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

export default function App() {
  const navigate = useNavigate()

  return (
    <div className="flex min-h-svh flex-col items-center justify-center p-6 md:p-10 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="w-full max-w-sm">
          <div className={cn("flex flex-col gap-6")}>
            <form>
              <FieldGroup>
                <div className="flex flex-col items-center gap-2 text-center">
                  <Link to="/introduce">
                    <Icon className="size-8" />
                  </Link>
                  <h1 className="text-xl font-bold">Welcome to {env.title}.</h1>
                  <FieldDescription>
                    Don't have an account? <Link to="/signup">Signup</Link>
                  </FieldDescription>
                </div>
                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@example.com"
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <Input
                    id="password"
                    type="password"
                    placeholder="example"
                    required
                  />
                </Field>
                <Field>
                  <Button type="submit">Login</Button>
                </Field>
                <FieldSeparator>Or</FieldSeparator>
                <Field className="grid gap-4 sm:grid-cols-2">
                  <Button variant="outline" type="button">
                    <FaApple />
                    Continue with Apple
                  </Button>
                  <Button variant="outline" type="button" onClick={async () => {
                    await signinWithGoogle()
                    navigate("/")
                  }}>
                    <FaGoogle />
                    Continue with Google
                  </Button>
                </Field>
              </FieldGroup>
            </form>
            <FieldDescription className="px-6 text-center">
              By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
              and <a href="#">Privacy Policy</a>.
            </FieldDescription>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
