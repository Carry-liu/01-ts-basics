/* const usernames = ["alice", "bob", "charlie"];

const ratings = [4.5, 3.8, 5];

const products = [
  { id: 1, title: "Phone" },
  { id: 2, title: "Laptop" },
];

console.log(`Usernames: ${JSON.stringify(usernames)}`);
console.log(`Ratings: ${JSON.stringify(ratings)}`);
console.log(`Products: ${JSON.stringify(products)}`);
*/

// 1. Масив рядків
const usernames: string[] = ["alice", "bob", "charlie"];

// 2. Масив чисел
const ratings: number[] = [4.5, 3.8, 5];

// 3. Інтерфейс для елементів масиву products
interface Product {
  id: number;
  title: string;
}

// 4. Типізація масиву обʼєктів
const products: Product[] = [
  { id: 1, title: "Phone" },
  { id: 2, title: "Laptop" },
];

console.log(`Usernames: ${JSON.stringify(usernames)}`);
console.log(`Ratings: ${JSON.stringify(ratings)}`);
console.log(`Products: ${JSON.stringify(products)}`);

