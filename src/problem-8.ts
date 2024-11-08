function validateKeys<T extends object>(obj: T, keys: (keyof T)[]): boolean {
  return keys.every((key) => key in obj);
}

// Sample Input:
const personTest = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(personTest, ["name", "age"]));