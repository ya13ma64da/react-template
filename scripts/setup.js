import figlet from "figlet"
import admin from "firebase-admin"
import secret from "../secret.json" with { type: "json" }
import chalk from "chalk"
import { select, text } from "@clack/prompts"
import fs from "fs"

function logInfo(message) {
  console.log(chalk.blue(`|  Info: ${message}`))
}

function logWarn(message) {
  console.log(chalk.yellow(`|  Warn: ${message}`))
}

function logComplete(message) {
  console.log(chalk.green(`|  Complete: ${message}`))
}

// 本番の初期化
const productApp = admin.initializeApp({ credential: admin.credential.cert(secret) })
const productDb = productApp.firestore()

// エミュレーターの初期化
const emulatorApp = admin.initializeApp({ credential: admin.credential.cert(secret) }, "emulatorApp")
const emulatorDb = emulatorApp.firestore()
emulatorDb.settings({ host: "localhost:8080", ssl: false })
let isEmulator = true

async function checkEmulator() {
  logInfo("Connecting firebase emulator...")

  // 5秒で接続できなかったらisEmulatorをfalseにする
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 500)

  try {
    await emulatorDb.collection("test").get({ signal: controller.signal })
    logInfo("Connected firebase emulator!")
  } catch {
    isEmulator = false
    logWarn("Emulator not running, using only production settings.")
  } finally {
    clearTimeout(timeout)
  }
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
    logWarn("Setup is cancelled.")
    process.exit(0)
  } else {
    logComplete("Welcome to React Template Setup!")
  }
}

async function createEnv() {
  // 案内
  logInfo("Now, let's set up the .env and .firebaserc file! & .firebaserc!")
  logInfo("Please enter the following information.")

  // 情報取得
  const title = await text({ message: "Please enter your project title" })
  const description = await text({ message: "Description" })
  const firebase_api_key = await text({ message: "Firebase API Key" })
  const firebase_auth_domain = await text({ message: "Firebase Auth Domain" })
  const firebase_project_id = await text({ message: "Firebase Project ID" })
  const firebase_storage_bucket = await text({ message: "Firebase Storage Bucket" })
  const firebase_messaging_sender_id = await text({ message: "Firebase Messaging Sender ID" })
  const firebase_app_id = await text({ message: "Firebase App ID" })
  
  // .envの作成
  const envContents = `VITE_TITLE=${title}\nVITE_FIREBASE_API_KEY=${firebase_api_key}\nVITE_FIREBASE_AUTH_DOMAIN=${firebase_auth_domain}\nVITE_FIREBASE_PROJECT_ID=${firebase_project_id}\nVITE_FIREBASE_STORAGE_BUCKET=${firebase_storage_bucket}\nVITE_FIREBASE_MESSAGING_SENDER_ID=${firebase_messaging_sender_id}\nVITE_FIREBASE_APP_ID=${firebase_app_id}\n`
  fs.writeFileSync(".env", envContents)

  // 翻訳ファイル更新
  const translatePath = "./src/translate/en.json"
  const translateFile = JSON.parse(fs.readFileSync(translatePath, "utf8"))
  translateFile.title.introduce = description
  fs.writeFileSync(translatePath, JSON.stringify(translateFile, null, 2))

  // firebase_project_idから.firebasercの作成
  fs.writeFileSync(".firebaserc", JSON.stringify({
    projects: {
      default: firebase_project_id
    }
  }, null, 2))

  logComplete(".env and .firebaserc file has been created successfully!")
}

async function createFirestore() {
  // 案内
  logInfo("Now, let's create first firestore data!")
  logInfo("Please enter the following information.")

  // 情報取得
  const title = await text({ message: "Please enter your first update info title here." })
  const description = await text({ message: "Update info description" })

  const updateData = {
    contents: [
      {
        title: title,
        description: description,
        date: new Date()
      }
    ]
  }

  const policyData = {
    content: "Sample",
    date: new Date()
  }

  // エミュレーター用
  if(isEmulator) {
    await emulatorDb.collection("public").doc("terms").set(policyData)
    await emulatorDb.collection("public").doc("privacy").set(policyData)
    await emulatorDb.collection("public").doc("updates").set(updateData)
  }

  // 本番用
  await productDb.collection("public").doc("terms").set(policyData)
  await productDb.collection("public").doc("privacy").set(policyData)
  await productDb.collection("public").doc("updates").set(updateData)

  logComplete("Complete to create first firestore data!")
  logWarn("You should set the policy yourself later.")
}

(async () => {
  // ロゴ表示
  console.log(chalk.blue(figlet.textSync("rt setup", {
    font: "ansi shadow"
  })))

  // エミュレーターの接続確認
  await checkEmulator()

  // 初期案内
  await startup()

  // .envの記入
  await createEnv()

  // scripts/secret.jsonをfunctions/src/secret.jsonに複製
  fs.writeFileSync("./functions/src/secret.json", JSON.stringify(secret, null, 2))

  // Firestoreの平型作成
  await createFirestore()

  // 終了
  logComplete("The setup is now complete!")
  logComplete("Thank you for your hard work!")
  process.exit(0)
})()
