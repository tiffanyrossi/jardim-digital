o dockerfile é um arquivo de texto com instruções passo a passo para construir uma [[imagem docker]], definindo tudo que a imagem precisa: sistema operacional, dependências, arquivos, comandos e configurações.

## como funciona
1. escrever um arquivo `Dockerfile` com todas as instruções;
2. `docker build` para transformar o `Dockerfile` em uma imagem;
3. `docker run` para rodar a imagem.

## principais instruções

| instrução    | o que faz                                                                                        |
| ------------ | ------------------------------------------------------------------------------------------------ |
| `FROM`       | define a imagem base (ex: ubuntu, node, python, etc)                                             |
| `WORKDIR`    | define do diretório de trabalho dentro do container                                              |
| `COPY`       | copia arquivos da máquina local para dentro do container                                         |
| `RUN`        | executa comandos durante a construção da imagem, como configurações e instalação de dependências |
| `CMD`        | define o comando padrão ao rodar o container (ex: `npm start`)                                   |
| `EXPOSE`     | indica a porta usada pela aplicação (não abre a porta)                                           |
| `ENV`        | define variáveis de cada ambiente                                                                |
| `ENTRYPOINT` | define o comando principal, usado em conjunto com argumentos                                     |

## exemplo de Dockerfile
- criação de um Dockerfile que cria uma imagem para uma aplicação Node.js:
``` dockerfile
# usa uma imagem base oficial
FROM node:18

# define o diretório de trabalho dentro do container
WORKDIR /app

# copia os arquivos do projeto para dentro do container
COPY package*.json ./
RUN npm install

# copia o restante do projeto
COPY . . 

# expõe a porta 3000
EXPOSE 3000

# comando para iniciar a aplicação
CMD ["npm", "start"]
```

- buildar a imagem com um Dokerfile, estando no mesmo diretório onde está o Dockerfile (o ponto no final indica o contexto de build - o diretório atual):
```bash
docker build -t nome-da-imagem .
```

- rodar a imagem, mapeando a porta 3000 do container para a porta 3000 local:
```bash
docker run -t 3000:3000 nome-da-imagem
```