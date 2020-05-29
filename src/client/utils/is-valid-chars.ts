const VALID_CHARS = /^[a-zA-Z\s]+$/;

/**
 * Determines whether the entry text is valid
 * @param text - The text to validate
 */
export function isValidChars(text: string): boolean {
  return VALID_CHARS.test(text);
}
