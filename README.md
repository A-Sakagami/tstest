# tstest ~ 座席予約システムを通じたフロントエンド開発学習用リポジトリ

<!-- this is comment : ctrl+?-->
# READ ME
> このプロジェクトは、A-Sakagamiが様々なアプリ・テスト実装を学習するための備忘録として立ち上げたものです。商用利用は一切行わないとともに、他者の商用活用を禁じます。
> 
> This project is set up by A-Sakagami as a reminder to learn various application test implementations using Java. No commercial use is allowed and commercial use by others is prohibited.
## 使用環境
### フロントフレームワーク
<img src="https://img.shields.io/badge/-node.js-000000.svg?logo=node.js&style=for-the-badge"></img>

### フロントエンド
<img src="https://img.shields.io/badge/-html5-000000.svg?logo=html5&style=for-the-badge"></img>
<img src="https://img.shields.io/badge/-css3-000000.svg?logo=css3&style=for-the-badge"></img>
<img src="https://img.shields.io/badge/-typescript-000000.svg?logo=typescript&style=for-the-badge"></img>
<img src="https://img.shields.io/badge/-javascript-000000.svg?logo=javascript&style=for-the-badge"></img><br>
予定<img src="https://img.shields.io/badge/-googleappsscript-000000.svg?logo=googleappsscript&style=for-the-badge"></img>

### バックエンド
予定<img src="https://img.shields.io/badge/-googlesheets-000000.svg?logo=googlesheets&style=for-the-badge"></img>

### 開発環境
<img src="https://img.shields.io/badge/-vscode-000000.svg?logo=visualstudiocode&style=for-the-badge"></img>

## プロジェクト内容
現在フォームによって管理している座席予約システムを、モダンで視覚的・直感的に操作しやすいWebAppモデルとして実装する。<br>
管理者が状況を管理しやすいような環境を、プログラムの力で整える<br>

## 機能
### index.html
トップページとなります。このページのボタン操作で座席予約・予約取り消し・予約状況確認を行えます。
### header
#### 左上ロゴ
オープンリポジトリを鑑みて、いらすとや＋googleへのリンクにしている。<br>
※任意のロゴ・リンクに切り替え可能。
#### 予約取り消し
理想：予約取り消しモーダルが出現する。操作している人と座席予約している人が同じ場合、予約を取り消す。
#### 予約状況確認
理想：誰がどの座席を予約しているかを可視化する。デザインできればなお良し。

### 各座席の図形オブジェクト
クリックすると確認モーダルが出ます。
#### 未実装
OKボタンを押すと、座席を予約する。<br>
モーダルに名前を入れるようにして、予約座席に紐づける。（スプレッドシートで管理したい）

### スプレッドシート＋GASで実装したいこと
スプレッドシートをデータベースの代わりとして、バックエンドを簡潔にする<br>
トリガーを用いて、予約状況をリセットする。<br>
長期予約を鑑みて、トリガーの認識条件を設定する（次の日も予約されている場合、取り消さないような仕組み）

### その他実装したいこと
カレンダーをモーダルに取り付け、日時を指定する<br>
など…


