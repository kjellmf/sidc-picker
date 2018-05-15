/**
 *  Symbol Identification Codes (SIDC)
 *
 */

export class Sidc {
  constructor(sic = '10000000000000000000') {
    this.sic = sic;
    this.version = sic.substr(0, 2);
    this.context = sic.substr(2, 1);
    this.standardIdentity = sic.substr(3, 1);
    this.symbolSet = sic.substr(4, 2);
    this.status = sic.substr(6, 1);
    this.hqtfd = sic.substr(7, 1);
    this.amplifier = sic.substr(8, 1);
    this.amplifierDescriptor = sic.substr(9, 1);
    this.entity = sic.substr(10, 2);
    this.entityType = sic.substr(12, 2);
    this.entitySubType = sic.substr(14, 2);
    this.modifierOne = sic.substr(16, 2);
    this.modifierTwo = sic.substr(18, 2);
  }

  toString() {
    return this.version + this.context + this.standardIdentity + this.symbolSet + this.status +
      this.hqtfd + this.amplifier + this.amplifierDescriptor + this.entity + this.entityType +
      this.entitySubType + this.modifierOne + this.modifierTwo;
  }
}

export const SID_INDEX = 3;
