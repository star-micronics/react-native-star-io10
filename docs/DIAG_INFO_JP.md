# 診断情報の収集および送信について

StarIO10ライブラリが提供するAPIの一部は、実行時にユーザー端末および接続プリンターの情報を収集し、スター精密サーバーに診断情報として送信します。  

## 収集される情報および診断情報の取扱いについて

- 本フレームワークが収集・送信する情報には、個人情報は含まれません。
- 収集および送信される情報は、お客様へのサービス向上およびスター精密製品の改善を目的として利用され、第三者に提供されることはありません。詳細については[こちら](https://www.star-m.jp/prjump/000192.html)をご参照ください。

## 対象API

ライブラリバージョン V1.10.0 以降において、情報の収集および送信を行うAPIは以下のとおりです。  
**これらのAPIを利用する場合、アプリ配信プラットフォームにおけるプライバシーポリシーに、適切な記載を行ってください。**

- [StarPrinterSetting](https://star-m.jp/products/s_print/sdk/react-native-star-io10/manual/ja/api-reference/star-printer-setting-firmware/index.html)
  - [update()](https://star-m.jp/products/s_print/sdk/react-native-star-io10/manual/ja/api-reference/star-printer-setting-firmware/update.htmll)

## 機能の無効化について

以下のAPIを利用することで、情報の収集および送信機能を無効化することが可能です。初期設定（デフォルト）では有効となっています。

- [StarIO10DiagInfoUpload](https://star-m.jp/products/s_print/sdk/react-native-star-io10/manual/ja/api-reference/star-io10-diag-info-upload/index.html)
  - [isEnabled](https://star-m.jp/products/s_print/sdk/react-native-star-io10/manual/ja/api-reference/star-io10-diag-info-upload/is-enabled.html)
