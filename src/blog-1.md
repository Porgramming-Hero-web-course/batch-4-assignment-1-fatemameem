Two powerful operations in TypeScript are union and intersection types. These types allow developers to create complex types by combining multiple types. 

## Union Types
It allows the developer to use multiple types for a single variable. The syntax for union types is `type1 | type2 | type3`. For example, consider the following code snippet:

```tsx
type ID = string | number;
let user: ID;
user = "123";
user = 123;
```

Here both of the types `string` and `number` are allowed for the variable `user`.

## Intersection Types
It allows the developer to combine multiple types into one. The syntax for intersection types is `type1 & type2 & type3`. For example, consider the following code snippet:

```tsx
type Person = {name: string} & {age: number};
let person: Person;
person = {name: "Alice", age: 25};
```

Here the type `Person` is a combination of two types `{ name: string }` and `{ age: number }`.