# Belém Acessível

Aplicativo responsivo em React + Vite. Requisitos: Node.js 20.19+.

## Executar

- `npm install`
- `npm run dev`
- `npm run build`
- `npx vercel --prod`

## Recursos

Busca sem diferenciação de acentos, categorias, favoritos e preferências locais, leitura via Web Speech API, Leaflet com OpenStreetMap, geolocalização por ação do visitante e links de rotas no Google Maps.

## Dados e limitações

Três atrativos reais de Belém. Fontes e créditos estão na tela Preferências. Fotos da Wikimedia Commons sob CC BY-SA 4.0; metadados originais em public/photos. As coordenadas representam os atrativos, não entradas acessíveis. Não há auditoria de acessibilidade física nem informação de funcionamento em tempo real. Fichas de acessibilidade pesquisadas no Passaporte Acessível em 22/10/2026, com recursos, barreiras, contatos e fontes por local. A data de avaliação das fichas externas não é indicada. Filtros combinam recursos informados; ausência de resultado não comprova ausência do recurso.

Favoritos e preferências são armazenados apenas no navegador. Não há backend de contas. Mapas precisam de internet; respeitar a política de uso de tiles do OpenStreetMap e contratar provedor adequado se o tráfego aumentar.

## Publicação

O arquivo vercel.json configura build Vite e diretório dist. Publicar somente esta pasta; os arquivos do diretório pai não pertencem a este app.

## Verificações de acessibilidade

Diálogos HTML nativos com isolamento de foco e Escape; retorno ao controle de origem; status de resultados anunciado; alternativa ao mapa em lista; controles ampliados; opções de contraste e texto ampliado. Testes manuais de filtro por braile, ficha mobile e Escape realizados no Chrome. Não foi feita auditoria completa WCAG nem teste com NVDA/VoiceOver ou usuários reais.

