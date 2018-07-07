const DEFAULT_OPTIONS = {};

class OrbChart {
  constructor(rootNode, options = {}) {
    this.options = Object.assign(DEFAULT_OPTIONS, options);
  }
}

export {OrbChart};

