/**
    A string hashing function based on Daniel J. Bernstein's popular 'times 33' hash algorithm.
    @param {string} text - String to hash
    @return {number} Resulting number.
*/
function hash(text: string): number {
  let hash = 5381,
    index = text.length;

  while (index) {
    hash = (hash * 33) ^ text.charCodeAt(--index);
  }

  return hash >>> 0;
}

export function shortHash(str: string, base: number = 16): string {
  if (base < 2 || base > 36) {
    throw new RangeError(
      "short-hash: base must be an integer between 2 and 36"
    );
  }

  return hash(str).toString(base);
}
