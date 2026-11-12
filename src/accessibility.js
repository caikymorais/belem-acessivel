export const accessFilters = [
 ['entry','Entrada sem degraus ou com rampa'],['toilet','Banheiro com barras de apoio'],['parking','Vaga reservada'],['lift','Elevador'],['braille','Botões em braile no elevador'],['libras','Atendimento em Libras informado'],['tactile','Piso tátil informado']
];
export const accessData = [
 {features:['entry','toilet'],summary:'Rampas e banheiro com barras; atenção aos corredores.',source:'https://www.passaporteacessivel.com.br/belem-1/ver---o---peso',rows:[
 ['Entrada e circulação','Informado pela fonte','Rampas em pontos do mercado e piso nivelado. Barracas podem estreitar a passagem; entre algumas mesas há menos de 1,5 m.'],
 ['Banheiro','Informado pela fonte','Barras junto ao vaso, torneira e maçaneta em alavanca e porta com mais de 90 cm. A ficha não indica a localização exata.'],
 ['Orientação e comunicação','Não confirmado','A ficha não descreve apoio específico para pessoas com deficiência visual, auditiva ou intelectual. Não encontramos confirmação de Libras ou piso tátil contínuo.']
 ],caution:'A Prefeitura relatou ações para desobstruir corredores em julho de 2026. Confirme o acesso ao setor que pretende visitar.',extraSource:'https://agencia.belem.pa.gov.br/prefeitura-ouve-feirantes-do-ver-o-peso-para-seguir-com-ordenamento/',extraLabel:'Prefeitura de Belém · 22/07/2026',questions:['Qual entrada tem rampa e caminho livre até o setor que quero visitar?','Onde fica o banheiro com barras? Ele está aberto?','Há atendimento por escrito ou apoio de orientação no local?'],contact:null},
 {features:['entry','toilet','parking','lift','braille'],summary:'Rampas, elevador com braile e banheiro com barras.',source:'https://www.passaporteacessivel.com.br/belem-1/esta%C3%A7%C3%A3o-das-docas',rows:[
 ['Entrada e circulação','Informado pela fonte','Entrada com rampa, portas largas e piso sem degraus. A ficha descreve circulação acima de 1,5 m e vaga reservada.'],
 ['Elevador e orientação','Informado pela fonte','Elevador com botões em braile. Isso não confirma piso tátil, audiodescrição ou orientação acessível em todo o complexo.'],
 ['Banheiro','Informado pela fonte','Barras junto ao vaso, comandos em alavanca e porta com mais de 90 cm.'],
 ['Comunicação e compreensão','Não confirmado','A ficha não descreve recursos específicos para deficiência auditiva ou intelectual. Atendimento em Libras e materiais em leitura fácil precisam de confirmação.']
 ],caution:'Consulte o funcionamento do elevador e o acesso ao restaurante ou evento escolhido.',questions:['O elevador está funcionando e atende o espaço que quero visitar?','Qual entrada fica mais próxima da vaga reservada e do banheiro?','O evento oferece Libras, legendas ou audiodescrição?'],contact:{phone:'9133440100',display:'(91) 3344-0100',email:'comercial@para2000.com.br',website:'https://estacaodasdocas.com/'}},
 {features:['entry','toilet','parking','lift'],summary:'Caminhos sem degraus; piso de pedras pode trepidar.',source:'https://www.passaporteacessivel.com.br/belem-1/mangal-das-gar%C3%A7as',rows:[
 ['Entrada e circulação','Informado pela fonte','Entrada e caminhos sem degraus, com áreas amplas. O piso de pedras tem irregularidades e pode causar trepidação na cadeira de rodas.'],
 ['Elevador e estacionamento','Informado pela fonte','A ficha informa elevador no Farol e vaga reservada no estacionamento.'],
 ['Banheiro','Informado pela fonte','Barras junto ao vaso, comandos em alavanca e porta com mais de 90 cm.'],
 ['Orientação e comunicação','Não confirmado','A ficha não descreve recursos específicos para deficiência visual, auditiva ou intelectual. Confirme Libras, audiodescrição e apoio de orientação.']
 ],caution:'Confirme quais áreas o elevador do Farol atende e se há alternativa aos trechos de piso irregular.',questions:['O elevador do Farol está funcionando e quais mirantes atende?','Qual caminho tem menos irregularidades até a atração escolhida?','Há apoio de orientação, materiais acessíveis ou atendimento por escrito?'],contact:{phone:'9133440100',display:'(91) 3344-0100',email:'comercial@para2000.com.br',website:'https://mangaldasgarcas.com.br/'}}
];
export const researchDate='22/10/2026';
