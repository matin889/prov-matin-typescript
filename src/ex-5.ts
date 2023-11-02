// UPPGIFT: Skapa en egen sammansatt typ som beskriver stockMeasurements. Byt ut any mot passande typer / 2 poäng
// Kompilera TS-koden och se att den fortfarande fungerar som den ska.
type Stocks = {
  day: string;
  price: number;
};

const getRisingStockDays = (stockMeasurements: Stocks[]): Stocks[] =>
  stockMeasurements.filter((data) => data.price > 100);

const stockMeasurements: Stocks[] = [
  {
    day: "Monday",
    price: 105,
  },
  {
    day: "Tuesday",
    price: 98,
  },
  {
    day: "Wednesday",
    price: 110,
  },
];

const profitableDays: Stocks[] = getRisingStockDays(stockMeasurements);
console.log(profitableDays);
