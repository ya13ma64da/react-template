# react-template

## 目次
- [概要](#概要)
- [使用技術](#使用技術)
- [セットアップ方法](#セットアップ方法)
- [プロジェクト構成](#プロジェクト構成)
- [ライセンス](#ライセンス)

## 概要
<p align="center">
  <img src="./screenshots/ja/1.png" width="70%">
</p>

<p align="center">
  <img src="./screenshots/ja/2.png" width="70%">
</p>

- 作者がフルスタックプロジェクト作成の簡易化のために作成したReactのテンプレートです。
- Shadcn UI Tailwind CSSなどを使用してモダンでシンプルなデザインを実現しています。
- 他にもFirebaseでバックエンド(Functions)やデータ(Firestore)を管理させてセキュアで開発体験がよくなるようになっています。

## 使用技術
- 以下は使用する技術を書いています。どれもシンプルでモダンな技術となっています。
- メインシステム
  - React
  - Vite
  - TypeScript
  - react-router-dom
    - @generouted/react-router(パス自動生成&リンク型安全)

- デザイン
  - Framer Motion
  - Shadcn UI(Radix)
  - Tailwind CSS
  - Lucide React
  - React Icons
  - react-type-animation(最初のアニメーション演出)
  - clsx類

- その他
  - i18next
    - i18next-browser-languagedetector(自動検出)
  - Zustand
  - ESLint
  - usehooks-ts

- クラウド系
  - GitHub
  - Cloudflare
    - Pages
    - Domain
  - Firebase
    - Auth
    - Functions
    - Firestore

## セットアップ方法
- Node.jsとJavaのインストールとプロジェクトの依存関係のインストール
  - こちらは省略させていただきます
  - JavaはFirebase emulatorを起動するため必要です。

- Firebaseプロジェクトの作成
  - Firebase Consoleにアクセスしてプロジェクトを作成してください。
  - Functionsを使うのでBlazeプランにしてください。
  - AuthでEmail・Google・匿名のログイン方法を有効にしてください。

- Firebase CLIにログイン
  - `npm install -g firebase-tools`でFirebase CLIをインストールしてください。
  - `firebase login`でプロジェクトを作成したアカウントでログインしてください。
  - `.firebaserc`を自分のプロジェクトIDに変更してください。

- scripts/secret.jsonの設定
  - Firebase Consoleでプロジェクトの設定のサービスアカウントに移動してください。
  - Firebase Admin SDKの新しい秘密鍵を作成を押してダウンロードしたJSONの名前を`secret.json`に変更してルートディレクトリ配下に配置してください。

- Firestoreの初期データの作成
  - `npm run emulator`でエミュレーターを起動しておいてください。

- セットアップコマンドの実行
  - `npm run setup`で画面の通りにいろいろ入力してください。

- テーマカラー・アイコンの設定
  - `public/files/icons/icon.svg`と`src/component/mine/parts/mine.tsx`の両方を更新してアイコンを設定してください。
  - 現在のテーマカラーは紫色(白・黒両対応)になっています。変えたい人は`src/index.css`で編集してください。

- ルートページの編集
  - `src/pages/index.tsx`にあるお知らせ文は削除してどんどん編集してください。
    - `src/translate/ja.json`と`en.json`にあるお知らせ文も削除しておいてください。

- GitHubに公開&Cloudflare Pagesの接続
  - GitHubにプロジェクトを公開してください。
  - Cloudflare PagesにGitHub経由でリポジトリを接続して下さい。
  - フレームワークは`React(Vite)`を選択して環境変数も記入してください。
  - 保存してデプロイしてください。

## プロジェクト構成
- 

## ライセンス
  - このプロジェクトはMIT Licenseのもとで公開されています。
