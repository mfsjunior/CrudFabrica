export function toCurrency(
  number: number | string,
  disableDecimal = false,
  decimalPlaces = 2
) {
  
  if (typeof number === 'string') {
    number = parseFloat(number.replace(/[^0-9.-]+/g, ''));
  }
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: disableDecimal ? 0 : decimalPlaces,
    maximumFractionDigits: disableDecimal ? 0 : decimalPlaces,
  });
  return formatter.format(+number);
}
