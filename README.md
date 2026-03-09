# react-template

## 目次
- [概要](#概要)
- [使用技術](#使用技術)
- [セットアップ方法](#セットアップ方法)
- [デザインルール](#デザインルール)
- [ライセンス](#ライセンス)

## 概要

- 作者がフルスタックプロジェクト作成の簡易化のために作成したReactのテンプレートです。
- Shadcn UI Tailwind CSSなどを使用してモダンでシンプルなデザインを実現しています。
- 他にもFirebaseでバックエンド(Functions)やデータ(Firestore)を管理させてセキュアで開発体験がよくなるようになっています。

## 使用技術
- メインシステム
  - React
  - Vite
  - TypeScript
  - @generouted/react-router(自動パス作成用)

- デザイン
  - Framer Motion
  - Shadcn UI(Radix)
  - Tailwind CSS
  - Lucide React
  - React Icons

- クラウド系
  - GitHub
  - Cloudflare
    - Pages
    - Domain(必要な方のみ)
  - Firebase
    - Auth
    - Functions
    - Firestore

## セットアップ方法
- Node.jsとJavaのインストールとプロジェクトの依存関係のインストール
  - こちらは省略させていただきます
  - JavaはFirebase emulatorの起動に必要です。
    - 不必要な方はインストールしなくてもOKです。

- Firebaseプロジェクトの作成
  - Firebase Consoleにアクセスしてプロジェクトを作成してください。
  - Functionsを使うのでBlazeプランにしてください。

- Firebase CLIにログイン
  - `npm install -g firebase-tools`でFirebase CLIをインストールしてください。
  - `firebase login`でプロジェクトを作成したアカウントでログインしてください。
  - `.firebaserc`を自分のプロジェクトIDに変更してください。

- scripts/secret.jsonの設定
  - Firebase Consoleでプロジェクトの設定のサービスアカウントに移動してください。
  - Firebase Admin SDKの新しい秘密鍵を作成を押してダウンロードしたJSONの名前を`secret.json`に変更して`scripts`配下に配置してください。

- Firestoreの初期データの作成
  - `npm run emulator`でエミュレーターを起動しておいてください。

- セットアップコマンドの実行
  - `npm run setup`で画面の通りにいろいろ入力してください。

- GitHubに公開&Cloudflare Pagesの接続
  - GitHubにプロジェクトを公開してください。
  - Cloudflare PagesにGitHub経由でリポジトリを接続して下さい。
  - フレームワークは`React(Vite)`を選択して環境変数も記入してください。
  - 保存してデプロイしてください。

## デザインルール
- `px-4`を親コンポーネントに使用してページに余裕があるように見せてください。

## ライセンス
  - このプロジェクトはMIT Licenseのもとで公開されています。
    - This project is licensed under the MIT License.
  - ぜひ気軽に`git clone`して使用してください。
