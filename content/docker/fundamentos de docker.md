## conceitos iniciais
docker é uma **plataforma de virtualização**, que usa conceito de **containers** para realizar empacotamento e execução de aplicações. o container leva o ambiente local para qualquer lugar, de forma leve, rápida e isolada do resto do sistema. diferente das máquinas virtuais, que têm o próprio sistema operacional complexo e consomem um número maior de recursos, os containers compartilham o sistema operacional do host.

## definições
- **[[dockerfile]]**: script que define como criar uma imagem de um container docker, configurando o sistema operacional base, os arquivos e comandos que devem ser executados.
- **docker image**: resultado final do build do [[dockerfile]], o run na imagem irá resultar no container.
- **container**: uma instância em execução da docker image.
- **docker hub**: repositório público onde são compartilhadas imagens docker.

## instalação do docker
### windows
[Windows | Docker Docs](https://docs.docker.com/desktop/setup/install/windows-install/)
`docker -v`
`wsl --list`
`docker ps`
### debian
[Debian | Docker Docs](https://docs.docker.com/engine/install/debian/)

## comandos docker

| `docker run <imagem>` | cria e inicia um novo container a partir de uma imagem |
| --------------------- | ------------------------------------------------------ |
|                       |                                                        |

## docker-composer.yml
é um orquestrador de containers docker

## multistage.Dockerfile
