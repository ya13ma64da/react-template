import { env } from "@/lib/env"

export function pageSetup(title: string) {
  document.title = `${title} - ${env.title}`
}
