# Care Plus - Rede Credenciada

Aplicativo mobile desenvolvido em React Native com Expo para consulta da rede credenciada da Care Plus.

O projeto foi desenvolvido como atividade acadêmica da disciplina de Mobile Development, com foco em boas práticas de desenvolvimento mobile utilizando React Native e TypeScript.

---

# Sobre o projeto

A Care Plus atua há mais de 30 anos oferecendo atendimento humanizado, personalizado e tecnologia na área da saúde.

O aplicativo tem como objetivo facilitar a busca e visualização da rede credenciada da empresa, permitindo que beneficiários encontrem clínicas e especialidades de forma rápida e intuitiva.

No sprint 4 do projeto foram adicionadas funcionalidades de comunicação em tempo real, integração IoT, geolocalização e armazenamento seguro de dados.

---

# Funcionalidades

* Login do usuário
* Persistência de sessão com Secure Store
* Busca de clínicas em tempo real
* Favoritar clínicas
* Persistência de favoritos
* Visualização detalhada das clínicas
* Navegação entre telas
* Validação de formulários
* Feedback visual para carregamento e erros
* Monitoramento IoT em tempo real
* Geolocalização do dispositivo
* Atualização automática dos dados recebidos do servidor

---

# Telas do aplicativo

## Login
Tela responsável pela autenticação do usuário com validação de formulário utilizando React Hook Form e Zod.

## Home
Tela principal com:
* listagem de clínicas
* busca por nome ou especialidade
* favoritos
* logout
* acesso ao monitoramento IoT

## Detalhes da Clínica
Tela com informações detalhadas da clínica:
* imagem
* especialidade
* endereço
* telefone

## Monitoramento IoT
Tela responsável por:
* receber dados em tempo real utilizando Socket.IO
* exibir temperatura do ambiente
* exibir umidade
* exibir ocupação simulada
* exibir status da conexão
* obter localização atual do dispositivo
* tratar permissões de localização

---

# Tecnologias utilizadas

* React Native
* Expo
* TypeScript
* React Navigation
* AsyncStorage
* Expo Secure Store
* Expo Location
* Socket.IO Client
* React Hook Form
* Zod
* Expo Vector Icons
* Node.js
* Express
* Socket.IO

---

# Estrutura do projeto

```bash
src/
├── components/
├── screens/
├── services/
├── routes/
├── storage/
├── types/
├── constants/

server/
├── index.js
├── package.json
```

---

# Bibliotecas principais

## Navegação

```bash
npm install @react-navigation/native
npm install @react-navigation/native-stack
```

## Dependências do React Navigation

```bash
npx expo install react-native-screens
npx expo install react-native-safe-area-context
npx expo install react-native-gesture-handler
npx expo install react-native-reanimated
```

## AsyncStorage

```bash
npx expo install @react-native-async-storage/async-storage
```

## Secure Store

```bash
npx expo install expo-secure-store
```

## Geolocalização

```bash
npx expo install expo-location
```

## Socket.IO Client

```bash
npm install socket.io-client
```

## Formulários e validação

```bash
npm install react-hook-form
npm install zod
npm install @hookform/resolvers
```

## Ícones

```bash
npx expo install @expo/vector-icons
```

---

# Como executar o projeto

## 1. Clonar o repositório

```bash
git clone https://github.com/Rafafaaa-FIAP/CHL3-sprint3-mobile
```

---

## 2. Acessar a pasta do projeto

```bash
cd careplus-app
```

---

## 3. Instalar as dependências

```bash
npm install
```

---

## 4. Configurar o endereço do servidor Socket.IO

Arquivo:

```bash
src/services/socket.ts
```

Substitua o IP pelo endereço IPv4 da máquina que executará o servidor Node.js.

Exemplo:

```ts
export const socket = io(
  'http://192.168.0.100:3001',
  {
    transports: ['websocket'],
  }
);
```

No Windows o IP pode ser obtido através de:

```bash
ipconfig
```

Utilize o valor exibido em "Endereço IPv4".

---

## 5. Executar o servidor IoT

Acesse a pasta:

```bash
cd server
```

Instale as dependências:

```bash
npm install
```

Execute o servidor:

```bash
node index.js
```

O servidor será iniciado na porta:

```txt
3001
```

---

## 6. Executar o aplicativo

```bash
npx expo start
```

---

# Executando no celular

1. Instale o aplicativo Expo Go:

   Android:
   https://play.google.com/store/apps/details?id=host.exp.exponent

   iOS:
   https://apps.apple.com/app/expo-go/id982107779

2. Execute:

```bash
npx expo start
```

3. Escaneie o QR Code exibido no terminal ou navegador.

---

# Funcionalidades técnicas implementadas

## Comunicação em Tempo Real

Utilização de Socket.IO para:

* conexão entre aplicativo e servidor
* atualização automática da interface
* recebimento de eventos em tempo real

---

## Integração IoT

Servidor Node.js simulando sensores IoT responsáveis por enviar:

* temperatura
* umidade
* ocupação do ambiente
* status do sensor

---

## Geolocalização

Utilização do Expo Location para:

* solicitar permissão de localização
* obter latitude e longitude atuais
* tratar permissão negada pelo usuário

---

## TypeScript Strict

O projeto utiliza tipagem forte com:

* interfaces
* types
* tipagem explícita
* navegação tipada

---

## Gerenciamento de Estado

Utilização de:

* useState
* useEffect

Para:

* autenticação
* favoritos
* busca
* carregamento
* monitoramento IoT
* geolocalização

---

## Persistência Local

Uso do Secure Store para:

* sessão do usuário

Uso do AsyncStorage para:

* favoritos

---

## Componentização

O projeto utiliza componentes reutilizáveis para:

* botões
* cards de clínicas

---

## Vídeo Demonstrativo

Clique [aqui](https://youtu.be/yjPBaWf0TzU) para acessar o vídeo da sprint 3

Clique [aqui](https://youtu.be/F7th54HZBJ0) para acessar o vídeo da sprint 4

---

# Integrantes

* 553377 - Enzo Rodrigues
* 552632 - Gabriel Mediotti
* 553384 - Maria Julia
* 553266 - Hugo Santos
* 553521 - Rafael Cristofali
