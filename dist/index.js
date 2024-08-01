"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shortHash = shortHash;
/**
    A string hashing function based on Daniel J. Bernstein's popular 'times 33' hash algorithm.
    @param {string} text - String to hash
    @return {number} Resulting number.
*/
function hash(text) {
    let hash = 5381, index = text.length;
    while (index) {
        hash = (hash * 33) ^ text.charCodeAt(--index);
    }
    return hash >>> 0;
}
function shortHash(str, base = 16) {
    if (base < 2 || base > 36) {
        throw new RangeError("short-hash: base must be an integer between 2 and 36");
    }
    return hash(str).toString(base);
}
