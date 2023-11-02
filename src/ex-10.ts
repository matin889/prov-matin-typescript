// DIN UPPGIFT: Utför fråga 1-3 med kodexempel i Typescript / 3 poäng

// 1. Ge ett exempel på en funktion med en generiskt typ.

const Colors = <T>(reverseColors: T[]): T[] => {
  return reverseColors.reverse();
};
const colors = ["Red", "Blue", "Green"];
const showColors = Colors(colors);
console.log(showColors);

// 2. Ge ett exempel på en funktion med två generiska typer.
function matched<T, U>(key: T, value: U): { key: T; value: U } {
  return { key, value };
}
const colorsMatched = matched("name", "Green");
const numbers = matched("number", 100);
console.log(colorsMatched);
console.log(numbers);
// 3. Ge ett exempel på ett interface med en generisk typ.
interface Shapes<T> {
  shape: T;
}

function showShaapes<T>(shapes: Shapes<T>): T {
  return shapes.shape;
}

const fourArms: Shapes<string> = { shape: "Squaare, Rectangle" };
console.log(fourArms);
