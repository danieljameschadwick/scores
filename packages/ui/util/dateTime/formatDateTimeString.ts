import { formatInTimeZone } from 'date-fns-tz';
import { enGB } from 'date-fns/locale';

/**
 * @TODO: refactor to @scores/util
 */

export const formatDateTimeString = (dateString: string, format: string = 'yyyy-MM-dd\'T\'HH:mm:ss'): string => {
  const date = new Date(dateString);

  // @TODO: add timezone/locale to service
  return formatInTimeZone(date, 'UTC', format, { locale: enGB });
};
