/* eslint-disable import/prefer-default-export */
import ms from "milsymbol";

const DEFAULT_OPTIONS = {
  size: 32
};

function createNodeInfo(node, options) {
  const symb = new ms.Symbol(
    node.sidc,
    {size: options.size}
  );
  const size = symb.getSize();
  const anchor = symb.getAnchor();
  const octagonAnchor = symb.getOctagonAnchor();
  return {
    size, anchor, octagonAnchor, symb
  };
}

function putNodeCenterAt(node, x, y) {
  const dx = x - node.octagonAnchor.x;
  const dy = y - node.octagonAnchor.y;
  return `<g class="orbat-node" transform="translate(${dx}, ${dy})">${node.symb.asSVG()}</g>`;
}


class OrbChart {
  constructor(rootNode, options = {}) {
    this.rootNode = rootNode;
    this.options = Object.assign(DEFAULT_OPTIONS, options);
    this._getOrbatInfo(rootNode);
  }

  _getChildren(node) {
    return node.subUnits || [];
  }

  _getOrbatInfo(rootNode) {
  }

  toSVG(size) {
    this.width = size.width || 600;
    this.height = size.height || 600;
    const n = createNodeInfo(this.rootNode, this.options);
    let code = ` <rect fill="none" stroke="red" x="0" y="0" width="${this.width}" height="${this.height}" />`;
    code += putNodeCenterAt(n, this.width / 2, this.height * (1 / 4));

    code += putNodeCenterAt(n, this.width / 2, this.height / 2);
    code += putNodeCenterAt(n, this.width / 4, this.height / 2);
    code += putNodeCenterAt(n, 3 * (this.width / 4), this.height / 2);

    code += putNodeCenterAt(n, this.width / 2, this.height * (3 / 4));
    code += putNodeCenterAt(n, this.width / 4, this.height * (3 / 4));
    code += putNodeCenterAt(n, 3 * (this.width / 4), this.height * (3 / 4));

    return `<svg xmlns="http://www.w3.org/2000/svg" width="${this.width}" height="${this.height}">
${code}
</svg>`;
  }
}

export {OrbChart};

