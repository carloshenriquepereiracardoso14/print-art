# 🖨️ PrintArt — Aplicativo Mobile para Gráfica

O **PrintArt** é um aplicativo mobile desenvolvido em **React Native (Expo)** voltado para o gerenciamento de pedidos e serviços de uma **loja gráfica**.  
O app permite que clientes realizem pedidos de impressão personalizados, acompanhem o status de seus pedidos e interajam com os serviços da loja de forma prática e intuitiva.

---

## 🚀 Tecnologias Utilizadas

- **React Native (Expo 54)** — base do app mobile  
- **Firebase (v12)** — autenticação, banco de dados e armazenamento  
- **React Navigation** — navegação entre telas  
- **React Native Screens & Safe Area Context** — navegação segura e fluida  
- **Expo StatusBar** — controle de status bar para UX aprimorada  

---

## 🧩 Estrutura do Projeto

```
app_grafica_att/
│
├── App.js                # Arquivo principal do aplicativo
├── app.json              # Configurações do Expo
├── firebaseConfig.js     # Configuração do Firebase
├── package.json          # Dependências e scripts
├── assets/               # Ícones, logos e imagens
├── screens/              # Telas do aplicativo (cliente, admin, etc)
├── components/           # Componentes reutilizáveis
└── .expo/                # Configurações locais do Expo
```

---

## ⚙️ Funcionalidades Principais

### 👤 Cliente
- Cadastro e login via Firebase Authentication  
- Visualização dos serviços disponíveis (ex: fotos 3x4, banners, cartões)  
- Criação de pedidos personalizados  
- Acompanhamento de status dos pedidos  
- Cancelamento de pedidos em tempo real  

### 🧾 Parceiro / Admin
- Gerenciamento dos pedidos feitos pelos clientes  
- Atualização de status de pedidos (em produção, concluído, cancelado)  
- Controle de produtos e preços  

---

## 🔧 Instalação e Execução

### 1️⃣ Pré-requisitos
- **Node.js** (>= 18)
- **Expo CLI** instalada globalmente
- **Conta no Firebase** configurada

### 2️⃣ Instalar dependências
```bash
npm install
```

### 3️⃣ Executar o app
```bash
npm start
```
ou diretamente em um dispositivo:
```bash
npm run android
```
```bash
npm run web
```

---

## 🔥 Configuração do Firebase

Edite o arquivo `firebaseConfig.js` com suas credenciais Firebase:

```js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "seu-projeto.firebaseapp.com",
  projectId: "seu-projeto",
  storageBucket: "seu-projeto.appspot.com",
  messagingSenderId: "XXXXXX",
  appId: "X:XXXX:web:XXXX"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
```

---

## 📱 Build do Aplicativo

Para gerar o APK:
```bash
expo build:android
```

Ou para EAS Build (mais atual):
```bash
eas build -p android --profile preview
```

---

## 🎨 Identidade Visual

- **Logo:** `assets/logoPrintArt.png`  
- **Ícone do App:** `assets/icon.png`  
- **Tema predominante:** Branco e Azul, reforçando o estilo gráfico moderno.  

---

## 💡 Melhorias Futuras

- Integração com pagamento via Pix  
- Upload direto de arquivos para impressão  
- Notificações push sobre status dos pedidos  
- Painel web administrativo integrado  

---

## 👨‍💻 Desenvolvido por

**Equipe PrintArt**  
Aplicativo criado como projeto de estudo e aplicação prática de desenvolvimento mobile com Firebase e React Native.
