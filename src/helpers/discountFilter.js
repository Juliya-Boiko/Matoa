export const discountFilter = (arr) => {
  const data = arr.filter(product => product.discount !== 0);
  return data;
}