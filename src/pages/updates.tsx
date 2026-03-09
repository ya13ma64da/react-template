import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { pageSetup } from "@/lib/pageSetup"
import { Info } from "lucide-react"
import { doc } from "firebase/firestore"
import { useDocument } from "react-firebase-hooks/firestore"
import { db } from "@/lib/firebase"
import { errorLog } from "@/lib/log"
import { Button } from "@/components/ui/button"

function Updates() {
    const [value, loading, error] = useDocument(
    doc(db, "public", "updates")
  )

  // アップデートデータの確認
  const data = value?.data()

  if (loading) return null
  if (error) {
    errorLog(error)
    return <p>Sorry. An error occurred while loading the update information.</p>
  }

  if (!data?.contents?.length) {
    return <p>Sorry. No update information is currently available.</p>
  }

  return (
    <div className="flex flex-col gap-2">
      {data.contents.map((item: any) => (
        <Alert key={item.id ?? item.title}>
          <AlertTitle>
            {item?.title ?? "unknown"} - {item?.time?.toDate().toLocaleDateString() ?? "unknown"}
          </AlertTitle>
          <AlertDescription>
            {item?.description ?? "unknown"}
          </AlertDescription>
        </Alert>
      ))}
    </div>
  )
}

export default function App() {
  pageSetup("Updates")

  return (
    <div className="min-h-svh px-4 py-4 flex flex-col items-center justify-center">
      <div className="flex flex-col gap-4 w-full max-w-2xl">
        <div className="flex gap-2 items-center">
          <Info className="size-6" />
          <p className="text-xl font-bold">Update Information</p>
        </div>

        <Updates />

        <Button className="w-fit" onClick={() => window.history.back()}>Go back</Button>
      </div>
    </div>
  )
}
