# Nodeバージョン
FROM node:20

# workspace という作業ディレクトリ
WORKDIR /workspace

# apt-get update: パッケージのリストを最新の状態
# apt-get install -y git curl: git と curl を非対話形式（-y）でインストール
# rm -rf /var/lib/apt/lists/*: 不要になったキャッシュファイルを削除してイメージサイズを小さくする（クリーンアップ）
RUN apt-get update && apt-get install -y \
    git \
    curl \
    && rm -rf /var/lib/apt/lists/*
