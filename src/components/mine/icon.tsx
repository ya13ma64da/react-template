export function Icon({ className, onClick }: { className?: string; onClick?: () => void }) {
  return (
    <img src="/files/icons/icon.svg" onClick={onClick} alt="Icon" className={className} />
  )
}
