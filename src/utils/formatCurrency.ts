function FormatCurrency(value: number, currency: string) {
  return Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: currency,
  }).format(value);
}

export default FormatCurrency;
