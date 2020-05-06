/**
 * 
 * @param {number} x
 * 
 * @return {string}
 */

export const numberWithCommas = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")