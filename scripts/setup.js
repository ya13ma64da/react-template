import admin from "firebase-admin"
import serviceAccount from "./secret.json" with { type: "json" }

// 初期化
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
})

const db = admin.firestore()
const emulatorDb = admin.firestore()

// エミュレーターに接続
emulatorDb.settings({
  host: "localhost:8080",
  ssl: false
})

async function createFirestore() {
  const updateData = {
    contents: [
      {
        title: "Version 1.0.0 is released!",
        description: 'My first OSS project "React Template" is released today!',
        time: new Date()
      },

      {
        title: "I update policy",
        description: "Today I updated both my Privacy Policy and Terms of Use! Be sure to take a look.",
        time: new Date()
      }
    ]
  }

  const policyData = {
    content: "Sample",
    time: new Date()
  }

  // 本番用
  await db.collection("public").doc("terms").set(policyData)
  await db.collection("public").doc("privacy").set(policyData)
  await db.collection("public").doc("updates").set(updateData)

  // エミュレーター用
  await emulatorDb.collection("public").doc("terms").set(policyData)
  await emulatorDb.collection("public").doc("privacy").set(policyData)
  await emulatorDb.collection("public").doc("updates").set(updateData)
}

(async () => {
  await createFirestore()
})()
