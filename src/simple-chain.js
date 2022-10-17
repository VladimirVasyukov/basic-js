const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (typeof(value) === 'undefined') {
      this.chain.push(`(  )`);
    } else {
      this.chain.push(`( ${value} )`);
    }    
    return this;
  },
  removeLink(position) {
    if (this.chain[position -1] === undefined) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      this.chain.splice(position - 1, 1);
    }    
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let end = this.chain.join('~~');
    this.chain = [];
    return end;
  }
};

module.exports = {
  chainMaker
};
