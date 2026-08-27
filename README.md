# Guifgr.com

> Site pessoal — portfólio e contato.

## Stack

- **Frontend:** React (Create React App)
- **Backend:** `mailto:` para formulário de contato
- **Deploy:** Docker + Cloudflare Tunnel

## Setup local

```bash
git clone https://github.com/Guifgr/PersonalWebSite.git
cd PersonalWebSite
npm install
npm start        # desenvolvimento em localhost:3000
npm run build    # build de produção em /build
```

## Deploy no servidor

```bash
# 1. Build
npm run build

# 2. Copiar build para o servidor
rsync -avz --exclude='.git' --exclude='node_modules' \
  ./build/ guifgr@192.168.15.6:/home/guifgr/guifgr-web/build/

# 3. Rebuild do container
ssh guifgr@192.168.15.6 \
  "cd /home/guifgr/guifgr-web && docker compose up -d --build"
```

## Estrutura

```
src/
├── components/
│   ├── Header.js          # Hero com nome + cargo
│   ├── Contact.js        # Formulário de contato
│   ├── Skills.js         # Habilidades técnicas
│   ├── Experience.js     # Experiência profissional
│   └── Education.js      # Formação acadêmica
├── App.js
└── index.css             # Variáveis CSS + reset
```

## Variáveis CSS (temas)

```css
--bg-primary      /* fundo principal */
--bg-secondary    /* fundo de seções */
--text-primary    /* texto principal */
--accent          /* cor de destaque */
--accent-light    /* cor secundária do accent */
--border          /* bordas e separadores */
```

## Contato

Formulário no site abre o cliente de e-mail padrão. Alternativa: [LinkedIn](https://www.linkedin.com/in/guifgr/).

## Licença

MIT © 2020–present Guilherme Fernandes Gomes da Rocha
