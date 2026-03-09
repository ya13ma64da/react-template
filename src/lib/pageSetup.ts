import { log } from "@/lib/log"
import { env } from "@/lib/env"

export function pageSetup(title: string) {
  document.title = `${title} - ${env.title}`
  log(`User entered ${location.pathname} page.`)
}
