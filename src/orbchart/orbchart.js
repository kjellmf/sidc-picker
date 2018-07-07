/* eslint-disable import/prefer-default-export */
const DEFAULT_OPTIONS = {};

class OrbChart {
  constructor(rootNode, options = {}) {
    this._options = Object.assign(DEFAULT_OPTIONS, options);
  }
}

export {OrbChart};

