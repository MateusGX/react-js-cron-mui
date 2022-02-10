import { DefaultLocale } from './types'

export const DEFAULT_LOCALE_EN: DefaultLocale = {
  everyText: 'todo',
  emptyMonths: 'todo mês',
  emptyMonthDays: 'todos os dias do mês',
  emptyMonthDaysShort: 'dia do mês',
  emptyWeekDays: 'todos os dias da semana',
  emptyWeekDaysShort: 'dia da semana',
  emptyHours: 'toda hora',
  emptyMinutes: 'todo minuto',
  emptyMinutesForHourPeriod: 'todo',
  yearOption: 'ano',
  monthOption: 'mês',
  weekOption: 'semana',
  dayOption: 'dia',
  hourOption: 'hora',
  minuteOption: 'minuto',
  rebootOption: 'reiniciar',
  prefixPeriod: 'Todo',
  prefixMonths: 'no',
  prefixMonthDays: 'no',
  prefixWeekDays: 'no',
  prefixWeekDaysForMonthAndYearPeriod: 'e',
  prefixHours: 'no',
  prefixMinutes: ':',
  prefixMinutesForHourPeriod: 'no',
  suffixMinutesForHourPeriod: 'minutos',
  errorInvalidCron: 'Expressão CRON Inválida',
  clearButtonText: 'Limpar',
  weekDays: [
    // Order is important, the index will be used as value
    'Domingo', // Sunday must always be first, it's "0"
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ],
  months: [
    // Order is important, the index will be used as value
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
    'Dezembro',
  ],
  // Order is important, the index will be used as value
  altWeekDays: [
    'DOM', // Sunday must always be first, it's "0"
    'SEG',
    'TER',
    'QUA',
    'QUI',
    'SEX',
    'SAB',
  ],
  // Order is important, the index will be used as value
  altMonths: [
    'JAN',
    'FEV',
    'MAR',
    'ABR',
    'MAI',
    'JUN',
    'JUL',
    'AUG',
    'SET',
    'OUT',
    'NOV',
    'DEZ',
  ],
}
