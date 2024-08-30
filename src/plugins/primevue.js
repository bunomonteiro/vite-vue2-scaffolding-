import 'primeicons/primeicons.css'
import PrimeVue from 'primevue/config'
import ConfirmationService from 'primevue/confirmationservice'
import DialogService from 'primevue/dialogservice'
import ToastService from 'primevue/toastservice'
import Aura from '@primevue/themes/aura'
import { definePreset } from '@primevue/themes'

import { presets } from '@/shared/theme'

const pt_BR = {
  startsWith: 'Começa com',
  contains: 'Contém',
  notContains: 'Não contém',
  endsWith: 'Termina com',
  equals: 'Igual',
  notEquals: 'Diferente',
  noFilter: 'Sem filtro',
  filter: 'Filtro',
  lt: 'Menor que',
  lte: 'Menor que ou igual a',
  gt: 'Maior que',
  gte: 'Maior que ou igual a',
  dateIs: 'Data é',
  dateIsNot: 'Data não é',
  dateBefore: 'Date é anterior',
  dateAfter: 'Data é posterior',
  custom: 'Customizado',
  clear: 'Limpar',
  close: 'Fechar',
  apply: 'Aplicar',
  matchAll: 'Condiderar todos',
  matchAny: 'Considerar ao menos um',
  addRule: 'Adicionar Regra',
  removeRule: 'Remover Regra',
  accept: 'Sim',
  reject: 'Não',
  choose: 'Escolha',
  upload: 'Upload',
  cancel: 'Cancelar',
  completed: 'Concluído',
  pending: 'Pendente',
  fileSizeTypes: ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
  dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
  dayNamesMin: ['Do', 'Se', 'Te', 'Qa', 'Qi', 'Sx', 'Sa'],
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ],
  monthNamesShort: [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez'
  ],
  chooseYear: 'Escolha Ano',
  chooseMonth: 'Escolha Mês',
  chooseDate: 'Escolha Data',
  prevDecade: 'Década Anterior',
  nextDecade: 'Década Seguinte',
  prevYear: 'Ano Anterior',
  nextYear: 'Ano Seguinte',
  prevMonth: 'Mês Anterior',
  nextMonth: 'Mês Seguinte',
  prevHour: 'Hora Anterior',
  nextHour: 'Hora Seguinte',
  prevMinute: 'Minuto Anterior',
  nextMinute: 'Minuto Seguinte',
  prevSecond: 'Segundo Anterior',
  nextSecond: 'Segundo Seguinte',
  am: 'am',
  pm: 'pm',
  today: 'Hoje',
  now: 'Agora',
  weekHeader: 'Sem',
  firstDayOfWeek: 0,
  showMonthAfterYear: false,
  dateFormat: 'dd/mm/yy',
  weak: 'Fraco',
  medium: 'Médio',
  strong: 'Forte',
  passwordPrompt: 'Digite uma senha',
  emptyFilterMessage: 'Nenhum resultado encontrado',
  searchMessage: '{0} resultados disponíveis',
  selectionMessage: '{0} itens selecionados',
  emptySelectionMessage: 'Nenhum item selecionado',
  emptySearchMessage: 'Nenhum resultado encontrado',
  fileChosenMessage: '{0} arquivos',
  noFileChosenMessage: 'Nenhum arquivo escolhido',
  emptyMessage: 'Nenhuma opção disponível',
  aria: {
    trueLabel: 'Verdadeiro',
    falseLabel: 'Falso',
    nullLabel: 'Não selecionado',
    star: '1 estrela',
    stars: '{star} estrelas',
    selectAll: 'Todos itens selecionados',
    unselectAll: 'Nenhum item selecionado',
    close: 'Fechar',
    previous: 'Anterior',
    next: 'Seguinte',
    navigation: 'Navegação',
    scrollTop: 'Rolar para Topo',
    moveTop: 'Mover para Topo',
    moveUp: 'Mover para Cima',
    moveDown: 'Mover para Baixo',
    moveBottom: 'Mover para Final',
    moveToTarget: 'Mover para Alvo',
    moveToSource: 'Mover para Fonte',
    moveAllToTarget: 'Mover Todos para Alvo',
    moveAllToSource: 'Mover Todos para Fonte',
    pageLabel: 'Página {page}',
    firstPageLabel: 'Primeira Página',
    lastPageLabel: 'Última Página',
    nextPageLabel: 'Página Seguinte',
    previousPageLabel: 'Página Anterior',
    rowsPerPageLabel: 'Linhas por página',
    jumpToPageDropdownLabel: 'Pular para Menu da Página',
    jumpToPageInputLabel: 'Pular para Campo da Página',
    selectRow: 'Linha Selecionada',
    unselectRow: 'Linha Não Selecionada',
    expandRow: 'Linha Expandida',
    collapseRow: 'Linha Recolhida',
    showFilterMenu: 'Mostrar Menu de Filtro',
    hideFilterMenu: 'Esconder Menu de Filtro',
    filterOperator: 'Operador de Filtro',
    filterConstraint: 'Restrição de Filtro',
    editRow: 'Editar Linha',
    saveEdit: 'Salvar Editar',
    cancelEdit: 'Cancelar Editar',
    listView: 'Exibição em Lista',
    gridView: 'Exibição em Grade',
    slide: 'Deslizar',
    slideNumber: '{slideNumber}',
    zoomImage: 'Ampliar Imagem',
    zoomIn: 'Mais Zoom',
    zoomOut: 'Menos Zoom',
    rotateRight: 'Girar à Direita',
    rotateLeft: 'Girar à Esquerda'
  }
}

const PrimevuePlugin = {
  // eslint-disable-next-line no-unused-vars
  install(app, options) {
    app.use(PrimeVue, {
      theme: {
        preset: definePreset(Aura, presets.Slate),
        options: {
          prefix: 'p',
          //darkModeSelector: 'system',
          darkModeSelector: '.p-dark',
          cssLayer: false
          // cssLayer: {
          //   name: 'primevue',
          //   order: 'tailwind-base, primevue, tailwind-utilities'
          // }
        }
      },
      locale: pt_BR,
      unstyled: false,
      ripple: false
    })
    app.use(ConfirmationService)
    app.use(ToastService)
    app.use(DialogService)
  }
}

export default PrimevuePlugin
