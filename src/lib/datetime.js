import { format } from 'date-fns';
import { ar } from 'date-fns/locale';

/**
 * formatDate
 */

export function formatDate(date, pattern = 'd MMMM yyyy') {
  return format(new Date(date), pattern, { locale: ar });
}

/**
 * sortObjectsByDate
 */

export function sortObjectsByDate(array, { key = 'date' } = {}) {
  return array.sort((a, b) => new Date(b[key]) - new Date(a[key]));
}