# EcoTrack

Uma plataforma web para monitoramento de pegada de carbono, desenvolvida para a LUMA Startathon 2025.

## Sobre o Projeto

O EcoTrack surgiu da necessidade de tornar o controle da pegada de carbono mais acessível para pessoas comuns. Muitas ferramentas existentes são complexas ou caras, então criei uma solução simples e gratuita.

## Funcionalidades

- **Rastreamento de Atividades**: Registre facilmente transportes, consumo de energia e alimentação
- **Cálculos Automáticos**: Sistema calcula automaticamente as emissões de CO₂
- **Relatórios Visuais**: Gráficos e insights para acompanhar seu progresso
- **Multilíngue**: Suporte para português, inglês, espanhol e francês
- **Interface Responsiva**: Funciona bem em desktop e mobile

## Tecnologias

- React 18 com TypeScript
- React Router para navegação
- i18next para internacionalização
- Chart.js para gráficos
- Tailwind CSS para estilização
- Firebase para autenticação (configuração local)

## Como Executar

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm start

# Build para produção
npm run build
```

O projeto estará disponível em `http://localhost:3000`

## Estrutura do Projeto

```
src/
  components/     # Componentes reutilizáveis
  pages/          # Páginas principais
  contexts/       # Context API para estado global
  utils/          # Utilitários e traduções
  styles/         # Estilos globais
```

## Demo Online

Acesse a demo em: https://victornascimento06.github.io/ecotrack/

## Contribuindo

Este projeto foi desenvolvido para a LUMA Startathon 2025. Sugestões e melhorias são bem-vindas!

## Licença

MIT License - veja o arquivo LICENSE para detalhes.