/* eslint-disable import/prefer-default-export,no-param-reassign */
import ms from "milsymbol";
import {walkTree} from "./utils";

const DEFAULT_OPTIONS = {
  size: 32, // symbol size
  maxLevels: 0
};

function getNodeInfo(node, options) {
  const symb = new ms.Symbol(
    node.sidc,
    {size: options.size},
    {uniqueDesignation: node.name}
  );
  const size = symb.getSize();
  const anchor = symb.getAnchor();
  const octagonAnchor = symb.getOctagonAnchor();
  return {
    size, anchor, octagonAnchor, symb, x: null, y: null
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
    this._computeOrbatInfo(rootNode);
  }

  _getChildren(node) {
    return node.subUnits || [];
  }

  _computeOrbatInfo(rootNode) {
    const levels = [];
    let nodeMap = {};

    walkTree(rootNode, (unit, level, parent) => {
      const nodeInfo = getNodeInfo(unit, this.options);
      const ld = levels[level] || [];
      if (parent) {
        nodeInfo.parent = nodeMap[parent.id];
      }
      nodeMap[unit.id] = nodeInfo;
      ld.push(nodeInfo);
      levels[level] = ld;
    });
    this.levels = levels;
  }

  toSVG(size) {
    this.width = size.width || 600;
    this.height = size.height || 600;
    let code = ` <rect fill="none" stroke="red" x="0" y="0" width="${this.width}" height="${this.height}" />`;
    const nLevels = this.levels.length;
    this.levels.forEach((level, yIdx) => {
      const unitsOnLevel = level.length;
      level.forEach((unit, xIdx) => {
        const x = ((xIdx + 1) * this.width) / (unitsOnLevel + 1);
        const y = this.height * ((yIdx + 1) / (nLevels + 1));
        unit.x = x;
        unit.y = y;
        code += putNodeCenterAt(unit, x, y);
        if (unit.parent) {
          const dx = x - unit.parent.x;
          const dy = y - ((y - unit.parent.y) / 2);
          code += `<path d="M ${x}, ${y - 32} V ${dy} H ${unit.parent.x} V ${unit.parent.y + 32}" stroke="black" fill="none"/>`;
        }
      });
    });
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${this.width}" height="${this.height}">
${code}
</svg>`;
  }
}

export {OrbChart};

