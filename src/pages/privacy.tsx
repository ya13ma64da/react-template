import { Button } from "@/components/ui/button"
import { doc } from "firebase/firestore"
import { useDocument } from "react-firebase-hooks/firestore"
import { db } from "@/lib/firebase"
import { errorLog } from "@/lib/log"
import { pageSetup } from "@/lib/pageSetup"

export default function App() {
  pageSetup("Privacy policy")

  const [value, loading, error] = useDocument(
    doc(db, "public", "privacy")
  )

  // プライバシーデータの取得
  const data = value?.data()

  // エラーの確認
  if (error) {
    errorLog(error)
  }

  return (
    <div className="min-h-svh px-4 py-35 flex flex-col items-center justify-center">
      <div className="flex flex-col gap-5 w-full max-w-3xl">
        <div className="flex flex-col gap-2">
          <p className="text-3xl">Privacy Policy</p>
          <p className="text-xl">This page states our privacy policy. Before using this service, please read this policy and make sure you understand how your personal information will be used.</p>
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
