# Shorthashd

[![npm version](https://badge.fury.io/js/shorthashd.svg)](https://badge.fury.io/js/shorthashd)

Shorthashd is a mini library for generating short hashes from strings. It is based on Daniel J. Bernstein's popular 'times 33' hash algorithm. A fork of [this shortHash function](https://github.com/joakimbeng/short-hash) with the possibility to [add base](https://github.com/joakimbeng/short-hash/pull/4/files), born out of the necessity to update and make this utility zero dependency.

Thanks to @KonkenBonken and @joakimbeng

## Installation

You can install shorthashd via npm:

```bash
npm install shorthashd
```

## Usage

### Importing the Library

To use the library in your TypeScript or JavaScript project, you can import it as follows:

```typescript
import { shortHash } from 'shorthashd';
```

### Generating a Short Hash

You can generate a short hash by calling the `shortHash` function with a string and an optional base (default is 16):

```typescript
const myHash = shortHash("your-string-here");
console.log(myHash); // Outputs the hash in the specified base (default is hexadecimal)
```

### Example

```typescript
import { shortHash } from 'shorthashd';

const myString = "Hello, World!";
const hashBase16 = shortHash(myString); // Default base 16 (hexadecimal)
const hashBase36 = shortHash(myString, 36); // Base 36

console.log(`Base 16: ${hashBase16}`);
console.log(`Base 36: ${hashBase36}`);
```

## API

### `shortHash(str: string, base?: number): string`

Generates a short hash for the given string.

- `str` (string): The string to hash.
- `base` (number, optional): The base for the resulting hash string (must be between 2 and 36). Default is 16.

#### Returns

- (string): The resulting hash string.

## How it Works

Shorthashd uses a hashing function based on Daniel J. Bernstein's popular 'times 33' hash algorithm. The hash is then converted to a string in the specified base.

### Hash Function

```typescript
function hash(text: string): number {
  let hash = 5381,
    index = text.length;

  while (index) {
    hash = (hash * 33) ^ text.charCodeAt(--index);
  }

  return hash >>> 0;
}
```

### Short Hash Function

```typescript
export function shortHash(str: string, base: number = 16): string {
  if (base < 2 || base > 36) {
    throw new RangeError(
      "short-hash: base must be an integer between 2 and 36"
    );
  }

  return hash(str).toString(base);
}
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
