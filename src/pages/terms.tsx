import { Button } from "@/components/ui/button"
import { doc } from "firebase/firestore"
import { useDocument } from "react-firebase-hooks/firestore"
import { db } from "@/lib/firebase"
import { pageSetup } from "@/lib/pageSetup"

export default function App() {
  pageSetup("Terms of service")

  const [value, loading, error] = useDocument(
    doc(db, "public", "terms")
  )

  // 利用規約データの取得
  const data = value?.data()

  return (
    <div className="min-h-svh px-4 py-35 flex flex-col items-center justify-center">
      <div className="flex flex-col gap-5 w-full max-w-3xl">
        <div className="flex flex-col gap-2">
          <p className="text-3xl">Terms of Service</p>
          <p className="text-xl">This page states our terms of service. Before using this service, please read this policy and make sure you understand how your personal information will be used.</p>
        </div>

        {!loading && (
          error ? (
            <p>Sorry. An error occurred while loading the privacy policy.</p>
          ) : (
            <div className="flex flex-col gap-2">
              <p className="text-xl">{data?.time?.toDate().toLocaleDateString() || "No date"}</p>
              <p>{data?.content || "Sorry. Data did not exist."}</p>
            </div>
          )
        )}

        <Button className="w-fit" onClick={() => window.history.back()}>Back page</Button>
      </div>
    </div>
  )
}
