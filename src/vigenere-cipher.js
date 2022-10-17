const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(direction = true) {
    this.direction = direction;
  }

showResult(message) {
  return (this.direction ? message : message.split('').reverse().join(''));
}

cryptography(message, key, isDecrypt = false) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
    let messageLength = message.length;
    let keyLength = key.length;

    let result = "";

    message = message.toUpperCase();
    key = key.toUpperCase();

    let keyLetterNumber = 0;
    for (let i = 0; i < messageLength; i++) {
    
    if (message.codePointAt(i) > 64 && message.codePointAt(i) < 91) {
      if (keyLetterNumber === keyLength)
      keyLetterNumber = 0;
      result += (isDecrypt) 
      ? String.fromCodePoint(((message.codePointAt(i) + 26 - (key.codePointAt(keyLetterNumber))) % 26) + 65)
      : String.fromCodePoint(((message.codePointAt(i) + key.codePointAt(keyLetterNumber)) % 26) + 65);
      keyLetterNumber++;
      } else
      result += message[i];
    }
    return this.showResult(result);
  }

  encrypt(message, key) {
    return this.cryptography(message, key, false); 
  }
  decrypt(message, key) {
    return this.cryptography(message, key, true);
  }
}

module.exports = {
  VigenereCipheringMachine
};
