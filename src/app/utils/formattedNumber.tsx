function convertToRupees(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0, // No decimal places
  }).format(amount);
}

// Example usage
const number = 20000;
const formattedRupees = convertToRupees(number);
console.log(formattedRupees); // Outputs: ₹20,000

export { convertToRupees };
