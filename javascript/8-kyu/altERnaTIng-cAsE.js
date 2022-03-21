// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase.

String.prototype.toAlternatingCase = function () {
  let str = ''
  for (let i = 0; i < this.length; i++) {
    if (this[i] == this[i].toUpperCase()) {
      str += this[i].toLowerCase()
    }
    else {
      str += this[i].toUpperCase()
    }
  }
  return str
}
