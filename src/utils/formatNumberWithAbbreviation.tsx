/**
 * Formata e reduz números grandes, colocando K, M e B no final, caso seja necessário
 * @param {number} number número para formatar
 * @returns {string} número formatado
 */
function formatNumberWithAbbreviation(number: number) {
    if (number >= 1000000) {
        return (number / 1000000).toFixed(1) + "M"; // Format as millions
    } else if (number >= 1000) {
        return (number / 1000).toFixed(1) + "K"; // Format as thousands
    } else {
        try {
            return number.toString(); // No abbreviation needed
        } catch {
            return undefined;
        }
    }
}