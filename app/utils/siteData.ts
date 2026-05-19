export interface Stat {
  value: string
  label: string
}

export interface BirthdayOfDay {
  nome: string
  cargo: string
  iniciais: string
  foto: string | null
}

export interface BirthdayMonth {
  iniciais: string
  foto: string | null
  dia: string
  isToday: boolean
}

export interface Atleta {
  nome: string
  cargo: string
  iniciais: string
  grupo: string
  foto?: string | null
}

export interface Produto {
  nome: string
  categoria: string
  preco: string
  foto: string | null
}

export interface GaleriaItem {
  src: string | null
  titulo: string
  categoria: string
  h?: number
}

export interface Plano {
  nome: string
  preco: string
  tag: string
  destaque?: boolean
  beneficios: string[]
}

export interface CronogramaItem {
  label: string
  data: string
  status: 'done' | 'active' | 'todo'
}

export interface Candidato {
  nome: string
  cargo: string
  iniciais: string
}

export interface Chapa {
  numero: string
  nome: string
  lema: string
  candidatos: Candidato[]
}

export interface Eleicao {
  titulo: string
  subtitulo: string
  descricao: string
  cronograma: CronogramaItem[]
  chapas: Chapa[]
}

export interface Conquista {
  titulo: string
  detalhe: string
  posicao: '1' | '2' | '3'
  ano: string
}

export interface NavLink {
  label: string
  to: string
}

export const navLinks: NavLink[] = [
  { label: 'Início', to: '/' },
  { label: 'Atletas', to: '/atletas' },
  { label: 'Fotos', to: '/fotos' },
  { label: 'Produtos', to: '/produtos' },
  { label: 'Associação', to: '/associacao' },
  { label: 'Eleição', to: '/eleicao' },
]

export const stats: Stat[] = [
  { value: '120+', label: 'Associados' },
  { value: '38', label: 'Atletas ativos' },
  { value: '14', label: 'Modalidades' },
  { value: '21', label: 'Conquistas' },
]

export const birthdayOfDay: BirthdayOfDay = {
  nome: 'Letícia Moraes',
  cargo: 'Diretora de Marketing',
  iniciais: 'LM',
  foto: null,
}

export const birthdaysMonth: BirthdayMonth[] = [
  { iniciais: 'RC', foto: null, dia: '03', isToday: false },
  { iniciais: 'JP', foto: null, dia: '07', isToday: false },
  { iniciais: 'AS', foto: null, dia: '11', isToday: false },
  { iniciais: 'LM', foto: null, dia: '18', isToday: true },
  { iniciais: 'GF', foto: null, dia: '21', isToday: false },
  { iniciais: 'MN', foto: null, dia: '24', isToday: false },
  { iniciais: 'VB', foto: null, dia: '27', isToday: false },
  { iniciais: 'HK', foto: null, dia: '30', isToday: false },
]

export const atletas: Atleta[] = [
  { nome: 'Diego Lima',     cargo: 'Presidente', iniciais: 'DL', grupo: 'Diretoria' },
  { nome: 'Letícia Moraes', cargo: 'Diretora',   iniciais: 'LM', grupo: 'Diretoria' },
  { nome: 'Rafael Costa',   cargo: 'Diretor',    iniciais: 'RC', grupo: 'Diretoria' },
  { nome: 'Ana Silva',      cargo: 'Diretora',   iniciais: 'AS', grupo: 'Diretoria' },
  { nome: 'João Pedro',     cargo: 'Atleta',     iniciais: 'JP', grupo: 'Futsal' },
  { nome: 'Gabriel Farias', cargo: 'Atleta',     iniciais: 'GF', grupo: 'Futsal' },
  { nome: 'Marcos Nunes',   cargo: 'Atleta',     iniciais: 'MN', grupo: 'Futsal' },
  { nome: 'Victor Brito',   cargo: 'Atleta',     iniciais: 'VB', grupo: 'Vôlei' },
  { nome: 'Henrique K.',    cargo: 'Atleta',     iniciais: 'HK', grupo: 'Vôlei' },
  { nome: 'Bruno Tavares',  cargo: 'Atleta',     iniciais: 'BT', grupo: 'Basquete' },
  { nome: 'Tiago Reis',     cargo: 'Atleta',     iniciais: 'TR', grupo: 'Basquete' },
  { nome: 'Camila Souza',   cargo: 'Atleta',     iniciais: 'CS', grupo: 'Handebol' },
]

export const atletasFilters: string[] = ['Todos', 'Diretoria', 'Futsal', 'Vôlei', 'Basquete', 'Handebol']

export const produtos: Produto[] = [
  { nome: 'Caneca Nexus',    categoria: 'Acessórios', preco: 'R$ 55,00',  foto: '/imagens/caneca.png' },
  { nome: 'Sacochila Nexus', categoria: 'Acessórios', preco: 'R$ 40,00',  foto: '/imagens/sacochila.png' },
  { nome: 'Jaqueta Nexus',   categoria: 'Lifestyle',  preco: 'R$ 200,00', foto: '/imagens/jaqueta.png' },
  { nome: 'Uniforme 2024',   categoria: 'Uniformes',  preco: 'R$ 60,00',  foto: null },
  { nome: 'Uniforme 2023',   categoria: 'Uniformes',  preco: 'R$ 60,00',  foto: null },
  { nome: 'Boné Nexus',      categoria: 'Acessórios', preco: 'R$ 45,00',  foto: null },
]

export const produtosFilters: string[] = ['Todos', 'Acessórios', 'Uniformes', 'Lifestyle']

export const galeria: GaleriaItem[] = [
  { src: '/imagens/W_ROTH (598).JPG', titulo: 'Jogo intenso',        categoria: 'Arena' },
  { src: '/imagens/W_ROTH (600).JPG', titulo: 'Nexus em destaque',   categoria: 'Arena' },
  { src: '/imagens/L_M (303).JPG',    titulo: 'Mais um capítulo',    categoria: 'Delegação' },
  { src: '/imagens/W_ROTH (620).JPG', titulo: 'Delegação em ação',   categoria: 'Delegação' },
  { src: '/imagens/L_M (121).JPG',    titulo: 'Registro da equipe',  categoria: 'Delegação' },
  { src: '/imagens/L_M (98).JPG',     titulo: 'Clima de campeonato', categoria: 'Delegação' },
  { src: '/imagens/M_F (303).JPG',    titulo: 'Momento de quadra',   categoria: 'Quadra' },
  { src: '/imagens/W_ROTH (136).JPG', titulo: 'Quadra cheia',        categoria: 'Arena' },
  { src: '/imagens/W_ROTH (520).JPG', titulo: 'Cobertura oficial',   categoria: 'Arena' },
  { src: '/imagens/M_S (156).JPG',    titulo: 'Momento técnico',     categoria: 'Quadra' },
  { src: '/imagens/M_F (91).JPG',     titulo: 'Lance importante',    categoria: 'Quadra' },
  { src: '/imagens/W_ROTH (649).JPG', titulo: 'Comemoração',         categoria: 'Arena' },
  { src: '/imagens/L_M (95).JPG',     titulo: 'Concentração',        categoria: 'Delegação' },
  { src: '/imagens/L_M (18).JPG',     titulo: 'Bastidores',          categoria: 'Bastidores' },
  { src: '/imagens/WhatsApp Image 2024-09-23 at 11.42.56.jpeg', titulo: 'Dia de campeonato', categoria: 'Bastidores' },
]

export const galeriaFilters: string[] = ['Todas', 'Arena', 'Delegação', 'Quadra', 'Bastidores']

export const planos: Plano[] = [
  {
    nome: 'Plano Mensal Recorrente', preco: 'R$ 12,50', tag: 'Mais vantajoso', destaque: true,
    beneficios: [
      'Desconto em produtos e eventos da Atlética e parceiros.',
      'Brinde exclusivo após 6 meses seguidos.',
      'Participação em sorteios exclusivos para associados.',
    ],
  },
  {
    nome: 'Plano Mensal', preco: 'R$ 15,00', tag: 'Entrada rápida',
    beneficios: [
      'Desconto em produtos e eventos da Atlética e parceiros.',
      'Participação em sorteios exclusivos para associados.',
    ],
  },
  {
    nome: 'Plano Semestral', preco: 'R$ 69,90', tag: 'Brinde incluso',
    beneficios: [
      'Desconto em produtos e eventos da Atlética e parceiros.',
      'Ganha um dos brindes da Atlética.',
      'Participação em sorteios exclusivos para associados.',
    ],
  },
  {
    nome: 'Plano Anual', preco: 'R$ 129,90', tag: 'Para quem vive a Atlética',
    beneficios: [
      'Desconto em produtos e eventos da Atlética e parceiros.',
      'Participação em sorteios exclusivos para associados.',
      'Brinde com uma sacochila da Nexus.',
    ],
  },
]

export const eleicao: Eleicao = {
  titulo: 'Eleições Nexus 2026',
  subtitulo: 'Canal oficial · votação online',
  descricao: 'Acompanhe o cronograma, regras e documentos do processo eleitoral da gestão 2026.',
  cronograma: [
    { label: 'Inscrição de chapas',  data: '06/04/2026', status: 'done' },
    { label: 'Publicação do edital', data: '11/04/2026', status: 'done' },
    { label: 'Debate oficial',       data: '20/04/2026', status: 'active' },
    { label: 'Dia da votação',       data: '27/04/2026', status: 'todo' },
    { label: 'Posse da diretoria',   data: '04/05/2026', status: 'todo' },
  ],
  chapas: [
    {
      numero: '01', nome: 'Conexão Nexus', lema: 'Mais campeonatos, mais comunidade',
      candidatos: [
        { nome: 'Diego Lima',     cargo: 'Presidente', iniciais: 'DL' },
        { nome: 'Letícia Moraes', cargo: 'Vice',       iniciais: 'LM' },
        { nome: 'Rafael Costa',   cargo: 'Esportes',   iniciais: 'RC' },
      ],
    },
    {
      numero: '02', nome: 'Movimento Verde', lema: 'Atlética próxima dos calouros',
      candidatos: [
        { nome: 'Bruno Tavares', cargo: 'Presidente', iniciais: 'BT' },
        { nome: 'Camila Souza',  cargo: 'Vice',       iniciais: 'CS' },
        { nome: 'Tiago Reis',    cargo: 'Esportes',   iniciais: 'TR' },
      ],
    },
  ],
}

export const conquistas: Conquista[] = [
  { titulo: 'JIA 2024 — Futsal Masculino', detalhe: 'Campeão invicto na chave A', posicao: '1', ano: '2024' },
  { titulo: 'JIA 2024 — Vôlei Misto',      detalhe: 'Final disputada em 3 sets',   posicao: '2', ano: '2024' },
  { titulo: 'JIA 2023 — Basquete',         detalhe: 'Disputa de bronze',           posicao: '3', ano: '2023' },
  { titulo: 'Copa UFRR — Handebol',        detalhe: 'Primeira final da Nexus',     posicao: '2', ano: '2023' },
  { titulo: 'JIA 2022 — Atletismo',        detalhe: 'Revezamento 4×100m',         posicao: '1', ano: '2022' },
  { titulo: 'Copa Interna — Futsal Fem.',  detalhe: 'Estreia da modalidade',       posicao: '1', ano: '2022' },
]

export const whatsappNumber = '5595991283838'
export const instagramUrl = 'https://instagram.com/atleticanexus'
