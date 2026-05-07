# Care Plus - Rede Credenciada

Aplicativo mobile desenvolvido em React Native com Expo para consulta da rede credenciada da Care Plus.

O projeto foi desenvolvido como atividade acadêmica da disciplina de Mobile Development, com foco em boas práticas de desenvolvimento mobile utilizando React Native e TypeScript.

---

# Sobre o projeto

A Care Plus atua há mais de 30 anos oferecendo atendimento humanizado, personalizado e tecnologia na área da saúde.

O aplicativo tem como objetivo facilitar a busca e visualização da rede credenciada da empresa, permitindo que beneficiários encontrem clínicas e especialidades de forma rápida e intuitiva.

---

# Funcionalidades

- Login do usuário
- Persistência de sessão com AsyncStorage
- Busca de clínicas em tempo real
- Favoritar clínicas
- Persistência de favoritos
- Visualização detalhada das clínicas
- Navegação entre telas
- Validação de formulários
- Feedback visual para carregamento e erros

---

# Telas do aplicativo

## Login
Tela responsável pela autenticação do usuário com validação de formulário utilizando React Hook Form e Zod.

## Home
Tela principal com:
- listagem de clínicas
- busca por nome ou especialidade
- favoritos
- logout

## Detalhes da Clínica
Tela com informações detalhadas da clínica:
- imagem
- especialidade
- endereço
- telefone

---

# Tecnologias utilizadas

- React Native
- Expo
- TypeScript
- React Navigation
- AsyncStorage
- React Hook Form
- Zod
- Expo Vector Icons

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
git clone URL_DO_REPOSITORIO
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

## 4. Executar o projeto

```bash
npx expo start
```

---

# Executando no celular

1. Instale o aplicativo Expo Go:
   - Android: https://play.google.com/store/apps/details?id=host.exp.exponent
   - iOS: https://apps.apple.com/app/expo-go/id982107779

2. Execute:

```bash
npx expo start
```

3. Escaneie o QR Code exibido no terminal ou navegador.

---

# Funcionalidades técnicas implementadas

## TypeScript Strict
O projeto utiliza tipagem forte com:
- interfaces
- types
- tipagem explícita
- navegação tipada

---

## Gerenciamento de Estado
Utilização de:
- useState
- useEffect

Para:
- autenticação
- favoritos
- busca
- carregamento

---

## Persistência Local
Uso do AsyncStorage para:
- sessão do usuário
- favoritos

---

## Componentização
O projeto utiliza componentes reutilizáveis para:
- botões
- cards de clínicas

---

# Integrantes

* 553377 - Enzo Rodrigues
* 553384 - Maria Julia
* 553266 - Hugo Santos
* 553521 - Rafal Cristofali
