import { useMediaQuery } from "usehooks-ts"

export function useThemeSetup() {
  const isDark = useMediaQuery("(prefers-color-scheme: dark)")
  return isDark
}
