# 🎬 MovieApp - Catálogo de Filmes

Um aplicativo moderno e responsivo para explorar filmes, construído com Next.js 15 e TypeScript. O projeto consome a API do TMDB para fornecer informações detalhadas sobre filmes, incluindo trailers, elenco e avaliações.

## ✨ Funcionalidades

- **Catálogo de Filmes**: Visualize filmes em cartaz com informações detalhadas
- **Sistema de Busca**: Encontre filmes por título
- **Filtros Avançados**: Filtre por avaliação, ano de lançamento e popularidade
- **Páginas de Detalhes**: Informações completas sobre cada filme
- **Trailers**: Visualize trailers dos filmes via YouTube
- **Elenco**: Veja informações sobre o elenco principal
- **Design Responsivo**: Interface otimizada para desktop e mobile
- **Performance Otimizada**: Uso do componente Image do Next.js para otimização de imagens

## 🛠️ Tecnologias Utilizadas

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática para melhor desenvolvimento
- **Tailwind CSS 4** - Framework CSS utilitário
- **TMDB API** - API para dados de filmes
- **React 19** - Biblioteca para interfaces de usuário
- **ESLint** - Linting de código
- **Turbopack** - Bundler rápido para desenvolvimento

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Instalação

1. **Clone o repositório**
   ```bash
   git clone [URL_DO_REPOSITORIO]
   cd ProjetoMoovieApp
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o projeto em modo de desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Acesse o aplicativo**
   Abra [http://localhost:3000](http://localhost:3000) no seu navegador

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento com Turbopack
- `npm run build` - Cria a build de produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter para verificar o código

## 📱 Funcionalidades Principais

### Página Inicial
- Grid responsivo de filmes em cartaz
- Sidebar com filtros avançados
- Sistema de busca em tempo real
- Cards interativos com hover effects

### Página de Detalhes do Filme
- Informações completas do filme
- Trailer integrado do YouTube
- Elenco principal com fotos
- Gêneros e avaliações
- Design responsivo e moderno

### Filtros Disponíveis
- **Avaliação**: Altas, médias ou baixas notas
- **Ano**: Filtrar por ano de lançamento
- **Popularidade**: Mais ou menos populares
- **Busca**: Pesquisa por título do filme

## 🎨 Design e UX

- **Tema Escuro**: Interface moderna com gradientes e transparências
- **Animações Suaves**: Transições e hover effects
- **Responsividade**: Otimizado para todos os dispositivos
- **Acessibilidade**: Componentes semânticos e navegação por teclado
- **Performance**: Otimização de imagens e carregamento lazy

## 🔧 Configuração da API

O projeto utiliza a API do TMDB. A chave da API está configurada no código. Para usar sua própria chave:

1. Registre-se em [TMDB](https://www.themoviedb.org/settings/api)
2. Obtenha sua chave de API
3. Substitua a chave no código (variável `API_KEY`)

## 📦 Estrutura do Projeto

```
src/
├── app/
│   ├── filme/
│   │   └── [id]/
│   │       └── page.tsx      # Página de detalhes do filme
│   │       └── globals.css    # Estilos globais
│   │       └── layout.tsx     # Layout principal
│   │       └── page.tsx       # Página inicial
│   ├── components/               # Componentes reutilizáveis (futuro)
│   └── types/                    # Definições de tipos (futuro)
├── components/               # Componentes reutilizáveis (futuro)
└── types/                    # Definições de tipos (futuro)
```

## 🌐 Hospedagem

O projeto está configurado para ser facilmente hospedado em:

- **Vercel** (recomendado para Next.js)
- **Netlify**
- **Railway**
- **AWS Amplify**

### Deploy na Vercel

1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente se necessário
3. Deploy automático a cada push

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Desenvolvido por

**Brayan** - Desenvolvedor Full Stack

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
