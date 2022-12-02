# nestjs-prisma-example

次の技術要素を組み合わせて利用する場合の作法とサンプルコードをまとめるのが目的である。

- NestJS
- Prisma
- Swagger

## 事前準備

### PostgreSQLの用意

こんな感じで適当にローカルに起動すれば良い

```bash
docker run -d -p 0.0.0.0:5432:5432 -e POSTGRES_USER=crystal -e POSTGRES_PASSWORD=crystal postgres:14-alpin
```

## Prismaによるスキーマの定義

DBへスキーマの反映

```bash
yarn prisma migrate dev --name "init"
```

スキーマの変更をDBへ反映

```bash
yarn prisma generate
```
