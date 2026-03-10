import { MineIcon } from "@/components/mine/icons"
import { Link } from "@/router"
import { env, cn } from "@/lib"

export function LogoParts({ className, type }: { className?: string, type?: "gray" }) {
  return (
    <Link to="/" className={cn(`w-fit flex gap-2 items-center ${className}`)}>
      <MineIcon className={type === "gray" ? "fill-foreground" : ""} />
      <p className={cn(`font-mono text-primary ${type === "gray" ? "text-foreground" : ""}`)}>{env.title}</p>
    </Link>
  )
}
