# 🗡️ Elden Ring - The Lands Between Guide

Um site elegante e responsivo dedicado ao universo de **Elden Ring**, construído com as mais modernas tecnologias web.

## ✨ Funcionalidades

### ✅ Implementado
- **📜 Classes**: Visualize todas as 10 classes iniciais com seus atributos, descrições e imagens
- **⚔️ Armas**: Catálogo completo com mais de 300 armamentos
  - Filtros por categoria (Dagger, Straight Sword, Greatsword, etc.)
  - Busca por nome da arma
  - Paginação com 16 armas por página
  - Cards detalhados com poder de ataque, scaling, requisitos e peso
  - Categorias e graus de scaling com código de cores
- **🔥 Ashes of War**: Lista completa de cinzas com afinidade e skill
- **🧑‍🤝‍🧑 NPCs**: Encontre comerciantes e aliados
  - Busca por nome do NPC
  - Paginação com 16 NPCs por página
- **🛡️ Shields**: Defesas variadas para todos os estilos
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
- **🎨 Tailwind CSS** + **Tailwind CSS v4**
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
├── app/                    # App Router do Next.js
│   ├── classes/           # Página das classes
│   ├── weapons/           # Página das armas
│   ├── shields/           # Página dos escudos
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout raiz
│   └── page.tsx          # Página inicial
├── components/            # Componentes React
│   ├── ui/               # Componentes shadcn/ui
│   ├── ClassCard.tsx     # Card das classes
│   ├── WeaponCard.tsx    # Card das armas
│   ├── WeaponsFilters.tsx # Filtros das armas
│   ├── WeaponsPagination.tsx # Paginação das armas
│   ├── NPCCard.tsx       # Card dos NPCs
│   ├── NpcsFilters.tsx   # Filtros dos NPCs
│   ├── NpcsPagination.tsx # Paginação dos NPCs
│   ├── LoadingCard.tsx   # Card de loading
│   └── Navigation.tsx    # Navegação principal
├── hooks/                # Hooks customizados
│   ├── useEldenRingAPI.ts # Hook da API (classes)
│   └── useEldenRingWeapons.ts # Hook da API (armas)
└── lib/                  # Utilitários
    ├── types.ts          # Tipos TypeScript
    └── utils.ts          # Funções utilitárias
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
- **🧑‍🤝‍🧑 NPCs**: `https://eldenring.fanapis.com/api/npcs`
- **🛡️ Shields**: `https://eldenring.fanapis.com/api/shields`
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
