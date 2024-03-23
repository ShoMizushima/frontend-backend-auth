# frontend-backend-auth
backendでGoogle認証を行い、フロントエンドはbackend側のリダイレクトに従う。
下記のような流れで動き、google認証にリダイレクトする際に302エラーになることを確認できる。

```mermaid
sequenceDiagram
%%{init:{'theme':'forest'}}%%
    participant BR as Browser
    participant FE as Frontend
    participant BE as Backend
    participant GA as Google Authentication
    BR->>FE: http://localhost:3000
    FE->>FE: ボタンクリック
    FE->>BE: http://localhost:8080/get
    BE->>BR: 302 http://localhost:8080/oauth2/authorization/google
    BR->>BE: http://localhost:8080/oauth2/authorization/google
    BE->>BR: 302 https://accounts.google.com/o/oauth2...
    BR->>GA: https://accounts.google.com/o/oauth2... !!!error!!!
    GA->>BR: Google認証画面
    BR->>GA: ログインリクエスト
    GA->>BE: 認証OK
    BE->>FE: /getのレスポンス
    FE->>BR: 表示
```

# 必要な環境変数

|環境変数名|内容|
|---|---|
|GOOGLE_AUTH_CLIENT_ID|OAuth クライアントID|
|GOOGLE_AUTH_CLIENT_SECRET|認証情報作成時のシークレット|

## docker-compose起動時の設定

1. 下記のような`.env`ファイルを作成してください（gitにはpushしないでください）

```
GOOGLE_AUTH_CLIENT_ID={value}
GOOGLE_AUTH_CLIENT_SECRET={value}
```

## IntelliJ起動時の設定

1. IntelliJ IDEAコンソールの上部 >［Run］>［Edit Configurations…］

![IntelliJ](./doc/image/intellij.png)

1. Environment variables で上記2つを設定してください

cf) https://console.cloud.google.com/apis/dashboard

![IntelliJ Environment variables](./doc/image/intellij-env.png)
