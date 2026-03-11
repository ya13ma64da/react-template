import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
import { useState } from "react"

type LoadingButtonProps = React.ComponentProps<typeof Button> & {
  onClick: () => Promise<void> | void
}

export function LoadingButtonParts({ onClick, children, ...props }: LoadingButtonProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = async () => {
    setIsLoading(true)
    try {
      await onClick()
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button onClick={handleClick} disabled={isLoading} {...props}>
      {isLoading ? (
        <>
          <Spinner data-icon="inline-start" />
          Processing...
        </>
      ) : (
        children
      )}
    </Button>
  )
}
