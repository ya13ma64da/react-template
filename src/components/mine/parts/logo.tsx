import { MineIcon } from "@/components/mine/icons"
import { Link } from "@/router"
import { env, cn } from "@/lib"

export function LogoParts({ className, type }: { className?: string, type?: "black" }) {
  return (
    <Link to="/" className={cn(`flex gap-2 items-center ${className}`)}>
      <MineIcon className={type === "black" ? "fill-foreground" : ""} />
      <p className="font-mono">{env.title}</p>
    </Link>
  )
}
