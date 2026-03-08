import { Link } from "react-router-dom"

export default function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex gap-2 flex-col">
        <p className="text-4xl">404 Not Found.</p>
        <p className="text-2xl">Sorry, we couldn't find the page you were looking for.</p>
      </div>

      <div className="flex gap-4">
        <Link to="/">
          <p className="text-lg border-foreground border-b-2">Go Home</p>
        </Link>

        <p onClick={() => window.history.back()} className="cursor-pointer text-lg border-foreground border-b-2">
          Go back
        </p>
      </div>
    </div>
  )
}