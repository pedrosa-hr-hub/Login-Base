# Base para novos projetos:
--------------------------------------------------------------------------------
Cria um data provaider: (não pode ter a pasta prisma!)

npx prisma init --datasource-provider postgresql

"postgresql", "mysql", "sqlite", "sqlserver", "mongodb" or "cockroachdb"

--------------------------------------------------------------------------------
chmod 777 .env
chmod 777 prisma
chmod 777 prisma/schema.prisma
--------------------------------------------------------------------------------
Cria uma migration nova do banco de dados:

prisma migrate dev --name init

--------------------------------------------------------------------------------
