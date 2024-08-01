/**
 * Returns a hash of any string with the provided base
 * @param {string} input - The string to hash
 * @param {number} [base=16] - The base of the returned string. An integer from 2 through 36
 */
declare function shortHash(input: string, base?: number): string;

/**
 * Returns a hexadecimal hash of any string
 * @param {string} input - The string to hash
 */
declare function shortHash(input: string): string;
export = shortHash;
