# 🗡️ Elden Ring - The Lands Between Guide

Um site elegante e responsivo dedicado ao universo de **Elden Ring**, construído com as mais modernas tecnologias web.

Este repositório é um projeto de estudos, explorando a "vibe coding" ao mesclar o uso local do [Cursor](https://www.cursor.com/) com o [OpenAI&nbsp;Codex](https://platform.openai.com/docs/guides/code).

## ✨ Funcionalidades

### ✅ Implementado
- **📜 Classes**: Visualize todas as 10 classes iniciais com seus atributos, descrições e imagens
- **⚔️ Armas**: Catálogo completo com mais de 300 armamentos
  - Filtros por categoria (Dagger, Straight Sword, Greatsword, etc.)
  - Busca por nome da arma
  - Paginação com 16 armas por página
  - Cards detalhados com poder de ataque, scaling, requisitos e peso
  - Categorias e graus de scaling com código de cores
- **💍 Talismãs**: Lista de todos os talismãs do jogo
  - Busca por nome
  - Paginação com 16 itens por página
- **🛡️ Armaduras**: Coleção completa das proteções do jogo
  - Filtros por tipo (Helm, Chest Armor, Gauntlets, etc.)
  - Busca por nome da armadura
  - Paginação com 16 armaduras por página
- **🐾 Criaturas**: Conheça as criaturas e monstros espalhados pelo mundo
- **🙏 Incantations**: Milagres e encantamentos para aprimorar sua jornada
  - Busca por nome do feitiço
  - Paginação com 16 resultados por página
- **🛡️ Shields**: Defesas variadas para todos os estilos
- **🔥 Ashes of War**: Lista completa de cinzas com afinidade e skill
- **🧑‍🤝‍🧑 NPCs**: Encontre comerciantes e aliados
  - Busca por nome do NPC
  - Paginação com 16 NPCs por página
- **🌓 Dark/Light Mode**: Sistema completo de alternância de tema
  - Toggle na navegação superior direita
  - Persistência da preferência no localStorage
  - Detecção automática da preferência do sistema
  - Cores otimizadas para ambos os temas
- **🎨 Design Dark Fantasy**: Tema customizado com cores douradas e atmosfera sombria
- **📱 Responsivo**: Interface adaptada para desktop, tablet e mobile
- **⚡ Performance**: Carregamento rápido com skeleton loading
- **🔤 Tipografia Medieval**: Fonte Cinzel para títulos principais

### 🚧 Em Desenvolvimento
- **👹 Chefes**: Galeria dos demigods e seus desafios
- **🏰 Locais**: Exploração das regiões do jogo
- **🔮 Itens**: Inventário de itens especiais

## 🛠️ Tecnologias

- **⚛️ React 19** + **Next.js 15** (App Router)
- **🎨 Tailwind CSS v3** (pronto para a futura v4)
- **🧱 shadcn/ui** - Componentes de alta qualidade
- **📡 TypeScript** - Type safety
- **🌐 Elden Ring Fan API** - Dados oficiais do jogo

## 🚀 Como Executar

1. **Clone o repositório**
```bash
git clone [url-do-repo]
cd elden-ring-web
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute o projeto**
```bash
npm run dev
```

4. **Acesse no navegador**
```
http://localhost:3000
```

## 📁 Estrutura do Projeto

```
src/
├── app/            # Páginas e rotas do Next.js
│   ├── armors/
│   ├── weapons/
│   └── ...
├── components/     # Componentes reutilizáveis
│   └── ui/         # Base de UI (shadcn)
├── hooks/          # Hooks de acesso à API
└── lib/            # Tipos, contextos e utilidades
```

## 🎨 Design System

### Cores Principais
- **🟡 Golden**: `oklch(0.75 0.12 50)` - Destaque principal
- **🌙 Background**: `oklch(0.08 0.02 240)` - Fundo escuro
- **📝 Foreground**: `oklch(0.93 0.02 60)` - Texto claro

### Tipografia
- **Medieval**: Cinzel (títulos principais)
- **Sans**: Geist Sans (texto geral)
- **Mono**: Geist Mono (códigos/stats)

## 🌐 API

Este projeto utiliza a [Elden Ring Fan API](https://eldenring.fanapis.com/docs):
- **📜 Classes**: `https://eldenring.fanapis.com/api/classes`
- **⚔️ Armas**: `https://eldenring.fanapis.com/api/weapons`
- **💍 Talismãs**: `https://eldenring.fanapis.com/api/talismans`
- **🛡️ Armaduras**: `https://eldenring.fanapis.com/api/armors`
- **🐾 Criaturas**: `https://eldenring.fanapis.com/api/creatures`
- **🙏 Incantations**: `https://eldenring.fanapis.com/api/incantations`
- **🛡️ Shields**: `https://eldenring.fanapis.com/api/shields`
- **🧑‍🤝‍🧑 NPCs**: `https://eldenring.fanapis.com/api/npcs`
- **👹 Chefes**: `https://eldenring.fanapis.com/api/bosses`

## 📝 Scripts Disponíveis

```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build de produção
npm run start        # Servidor de produção
npm run lint         # Verificação de código
npm run type-check   # Verificação de tipos
npm test             # Executa os testes
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Add: nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📄 Licença

Este projeto não é oficialmente afiliado à FromSoftware ou BANDAI NAMCO. 
É um projeto de fã criado para fins educacionais e de entretenimento.

---

**⚡ "Rise, Tarnished, and be guided by grace"**

