export const priceCalculator = (price, discount) => {
  const newPrice = price - (price / 100 * discount);
  return newPrice;
};