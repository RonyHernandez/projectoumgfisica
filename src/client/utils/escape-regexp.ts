const ESCAPE_CHARS = /[.*!\-+?^${}()|[\]/\\]/g;

/**
 * Escapes the special characters in the entry parameter, so that
 * it can be used as a pattern in a regular expression constructor.
 *
 * @see Escaping
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Escaping
 *
 * @param {string} text - special characters to escape
 * @return {string | null}
 */
export default function escapeRegExp(text: unknown): string {
  if (typeof text !== 'string') return null;
  return text.replace(ESCAPE_CHARS, '\\$&');
}
