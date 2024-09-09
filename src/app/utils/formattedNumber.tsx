function convertToRupees(amount: number): string {
  const hasDecimal = amount % 1 !== 0; // Check if the number has a decimal part

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: hasDecimal ? 2 : 0, // If it has decimals, use 2 fraction digits, else none
  }).format(amount);
}

// Example usage
const price1 = 20000;
const price2 = 20000.75;

// console.log(convertToRupees(price1)); // Outputs: ₹20,000
// console.log(convertToRupees(price2)); // Outputs: ₹20,000.75
// Outputs: ₹20,000

export { convertToRupees };
