import figlet from "figlet"
import admin from "firebase-admin"
import secret from "./secret.json" with { type: "json" }
import chalk from "chalk"
import { select, text } from "@clack/prompts"
import fs from "fs"

// 初期化
admin.initializeApp({
  credential: admin.credential.cert(secret),
})

const db = admin.firestore()
const emulatorDb = admin.firestore()
let isEmulator = true

try {
  // エミュレーターに接続
  emulatorDb.settings({
    host: "localhost:8080",
    ssl: false
  })
} catch {
  isEmulator = false
  console.log(chalk.yellow("Since the emulator is not running, the initial data settings will only be set for production use."))
}

async function startup() {
  const choice = await select({
    message: 'Would you like to set up the project?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' }
    ]
  })

  if (choice === 'no') {
    console.log(chalk.yellow("Setup is cancelled."))
    process.exit(0)
  } else {
    console.log(chalk.green("Welcome to React Template Setup!"))
  }
}

async function createEnv() {
  // 案内
  console.log(chalk.blue("Now, let's set up the .env&.firebaserc file! & .firebaserc!"))
  console.log(chalk.blue("Please enter the following information."))

  // 情報取得
  const title = await text({ message: "Please enter your project title" })
  const description = await text({ message: "Project description" })
  const firebase_api_key = await text({ message: "Firebase API Key" })
  const firebase_auth_domain = await text({ message: "Firebase Auth Domain" })
  const firebase_project_id = await text({ message: "Firebase Project ID" })
  const firebase_storage_bucket = await text({ message: "Firebase Storage Bucket" })
  const firebase_messaging_sender_id = await text({ message: "Firebase Messaging Sender ID" })
  const firebase_app_id = await text({ message: "Firebase App ID" })
  
  // .envの作成
  const envContents = `VITE_TITLE=${title}\nVITE_DESCRIPTION=${description}\nVITE_FIREBASE_API_KEY=${firebase_api_key}\nVITE_FIREBASE_AUTH_DOMAIN=${firebase_auth_domain}\nVITE_FIREBASE_PROJECT_ID=${firebase_project_id}\nVITE_FIREBASE_STORAGE_BUCKET=${firebase_storage_bucket}\nVITE_FIREBASE_MESSAGING_SENDER_ID=${firebase_messaging_sender_id}\nVITE_FIREBASE_APP_ID=${firebase_app_id}\n`
  fs.writeFileSync(".env", envContents)

  // firebase_project_idから.firebasercの作成
  fs.writeFileSync(".firebaserc", JSON.stringify({
    projects: {
      default: firebase_project_id
    }
  }, null, 2))

  console.log(chalk.green(".env&.firebaserc file has been created successfully!"))
}

async function createFirestore() {
  console.log(chalk.blue("Now, let's create first firestore data!"))
  console.log(chalk.blue("Please enter the following information."))

  // 情報取得
  const title = await text({ message: "Please enter your first update info title here." })
  const description = await text({ message: "Update info description" })

  const updateData = {
    contents: [
      {
        title: title,
        description: description,
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

  if(isEmulator) {
    // エミュレーター用
    await emulatorDb.collection("public").doc("terms").set(policyData)
    await emulatorDb.collection("public").doc("privacy").set(policyData)
    await emulatorDb.collection("public").doc("updates").set(updateData)
  }

  console.log(chalk.green("Complete to create first firestore data!"))
  console.log(chalk.blue("You can set the policy yourself later."))
}

(async () => {
  // ロゴ表示
  console.log(chalk.blue(figlet.textSync("rt setup", {
    font: "ansi shadow"
  })))

  // 初期案内
  await startup()

  // .envの記入
  await createEnv()

  // scripts/secret.jsonをfunctions/src/secret.jsonに複製
  fs.writeFileSync("./functions/src/secret.json", JSON.stringify(secret, null, 2))

  // Firestoreの平型作成
  await createFirestore()

  // 終了
  console.log(chalk.green("The setup is now complete!"))
  console.log(chalk.green("Thank you for your hard work!"))
  process.exit(0)
})()
