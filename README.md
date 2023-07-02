# Base de Projeto - Login

## Logica de Pastas

+src -> Fica os arquivos do projeto.
+src/controller -> Fila a lógica de execução das funções do sistema, são criadas funções e exportadas.
+src/model -> Fica a lógica de consultas no banco de dados, são criadas funções e exportadas.
+src/routes -> Fica a lógica de rotas, cada modulo tem seu arquivo de rotas e são exportas no arquivo index onde a rota é executada junto ao app.
+src/services -> Fica os serviços que auxiliam a execução de funções do sistema, envio de e-mail, bloqueador de rota...
+src/server.js -> Aonde é criado e configurado o servidor.

## Configuração de Banco de Dados - Usando Prisma ORM/Prisma Client && Docker Compose
```
npx prisma init --datasource-provider "postgresql", "mysql", "sqlite", "sqlserver", "mongodb" ou "cockroachdb" (não pode ter a pasta prisma!)
```

(para ajustar permissões nas pastas geradas)
```
chmod 777 .env
chmod 777 prisma
chmod 777 prisma/schema.prisma
```

(depois de alguma alteração, criar uma migration)
prisma migrate dev --name init

(Subir o banco de dados para usar, precisa rodar o script na pasta onde o arquivo .yml está)
```
docker compose up -d
```


## Configuração do VSCode && Prettier

Para acontecer a ação de salvar e já fazer a formatação do prettier, crie uma pasta e insira o json:

.vscode
.vscode/settings.json - >
``` 
{
"editor.defaultFormatter": "esbenp.prettier-vscode",
    "[javascript]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode",
      "editor.formatOnSave": true
    }
}
```
