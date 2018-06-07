import {
  ACTIVITY_SYMBOLSET_VALUE,
  AIR_SYMBOLSET_VALUE,
  CIVILIAN_SYMBOLSET_VALUE, CONTROLMEASURE_SYMBOLSET_VALUE,
  DISMOUNTED_SYMBOLSET_VALUE,
  EQUIPMENT_SYMBOLSET_VALUE,
  INSTALLATION_SYMBOLSET_VALUE,
  MINE_SYMBOLSET_VALUE,
  MISSILE_SYMBOLSET_VALUE,
  SPACE_SYMBOLSET_VALUE,
  SUBSURFACE_SYMBOLSET_VALUE,
  SURFACE_SYMBOLSET_VALUE,
  UNIT_SYMBOLSET_VALUE
} from "./values";

export const AMPLIFIERS = [
  {
    amplifierId: "additionalInformation",
    label: "Additional Information",
    description: "A text modifier for units, equipment, and installations; content is implementation specific.",
    field: "H",
    maxLength: 20
  },
  {
    amplifierId: "altitudeDepth",
    label: "Altitude/depth",
    description: "A text modifier for units, equipment, and installations, that displays either altitude flight level, depth for submerged objects; or height of equipment or structures on the ground.",
    field: "X",
    maxLength: 14
  },
  {
    amplifierId: "combatEffectiveness",
    label: "Combat Effectiveness",
    description: "A text modifier for units and installations that indicates unit effectiveness or installation capability",
    field: "K",
    maxLength: 5
  },
  {
    amplifierId: "commonIdentifier", label: "Common Identifier", description: "Example: \"Hawk\" for Hawk SAM system.",
    field: "AF"
  },
  {
    amplifierId: "direction",
    label: "Direction of Movement",
    description: "A graphic amplifier that identifies the direction of movement or intended movement of an object",
    field: "Q",
  },
  /*
  {
    amplifierId: "direction", label: "Direction", description: "Example: \"Hawk\" for Hawk SAM system.",
    field: "AF"
  }
  */
  {
    amplifierId: "dtg",
    label: "Date-Time Group",
    description: "A text modifier for units, equipment, and installations that displays DTG format: DDHHMMSSZMONYYYY or \"O/O\" for on order",
    field: "W"
  },
  {
    amplifierId: "equipmentTeardownTime",
    label: "Equipment Teardown Time ",
    description: "Equipment teardown time in minutes",
    field: "AE"
  },
  {
    amplifierId: "evaluationRating",
    label: "Evaluation Rating",
    description: "A text amplifier for units, equipment and installations that consists of a single-letter reliability rating and a single digit  credibility rating",
    field: "J"
  },
  {
    amplifierId: "headquartersElement",
    label: "Headquarters Element",
    description: "Indicates what type of element of a headquarters is being represented, such as TOC, MAIN",
    field: "AH"
  },
  {
    amplifierId: "higherFormation",
    label: "Higher Formation",
    description: "A text amplifier for units that indicates number or title of higher echelon command",
    field: "M"
  },
  {
    amplifierId: "hostile",
    label: "Hostile",
    description: "A text modifier for equipment; letters \"ENY\" denote hostile symbols",
    field: "N"
  },
  {
    amplifierId: "iffSif",
    label: "IFF/SIF",
    description: "A text amplifier displaying one or more IFF/SIF Identification modes and codes",
    field: "P"
  },
  {
    amplifierId: "location",
    label: "Location",
    description: "A text amplifier for units, equipment and installations that displays a symbol’s location in degrees, minutes and seconds (or in UTM or other applicable display format)",
    field: "Y"
  },
  {
    amplifierId: "platformType",
    label: "Platform Type",
    description: "Electronic intelligence notation (ELNOT) or communications intelligence notation (CENOT)",
    field: "AD"
  },
  {
    amplifierId: "quantity",
    label: "Quantity",
    description: "A text modifier in an equipment symbol that identifies the number of items present",
    field: "C"
  },
  {
    amplifierId: "reinforcedReduced",
    label: "Reinforced or Reduced",
    description: "A text amplifier in a unit symbol that displays (+) for reinforced, (-) for reduced, (±) reinforced and reduced.",
    field: "F"
  },
  {
    amplifierId: "signatureEquipment",
    label: "Signature Equipment",
    description: "Identifies a detectable electronic signature \"!\" for hostile equipment",
    field: "L"
  },
  {
    amplifierId: "specialHeadquarters",
    label: "Special Headquarters",
    description: " A named command such as SHAPE, PACOM, and joint, multinational, or coalition commands such as CJTF, JTF, MJTF",
    field: "AA"
  },
  // {
  //   amplifierId: "sigint",
  //   label: "Reinforced or Reduced",
  //   description: "A text amplifier in a unit symbol that displays (+) for reinforced, (-) for reduced, (±) reinforced and reduced.",
  //   field: "R2"
  // },
  {
    amplifierId: "speed",
    label: "Speed",
    description: "A text amplifier for units and equipment that displays velocity in nautical miles per hour or kilometres per hour",
    field: "Z"
  },
  {
    amplifierId: "staffComments",
    label: "Staff Comments",
    description: "A text amplifier for units, equipment and installations; content is implementation specific",
    field: "G"
  },
  {
    amplifierId: "type",
    label: "Type",
    description: "A text modifier for equipment that indicates types of equipment",
    field: "V"
  },
  {
    amplifierId: "uniqueDesignation",
    label: "Unique Designation",
    description: "A text amplifier for units, equipment and installations that uniquely identifies a particular symbol or track number",
    field: "T"
  },
];

const AIR_VALUES = {AL: 1, AO: 1, A: 1, G: 1, H: 1, P: 1, T: 1, V: 1, X: 1, Z: 1};
const LAND_VALUES = {
  AA: 1, AB: 1, AC: 1, AD: 1, AE: 1, AF: 1, AL: 1, AO: 1, AR: 1,
  A: 1, B: 1, C: 1, D: 1, F: 1, G: 1, H: 1, J: 1, K: 1, L: 1, M: 1, N: 1,
  P: 1, Q: 1, R: 1, S: 1, T: 1, V: 1, W: 1, X: 1, Y: 1, Z: 1
};

const SEA_VALUES = {
  AL: 1, AO: 1, AQ: 1, AR: 1,
  G: 1, H: 1, T: 1, V: 1, X: 1
};


export const AMPLIFIERS_IN_SYMBOLSET = {
  [AIR_SYMBOLSET_VALUE]: AIR_VALUES,
  [MISSILE_SYMBOLSET_VALUE]: AIR_VALUES,
  [SPACE_SYMBOLSET_VALUE]: {AL: 1, AO: 1, A: 1, G: 1, H: 1, T: 1, V: 1, X: 1, Z: 1},
  [UNIT_SYMBOLSET_VALUE]: LAND_VALUES,
  [CIVILIAN_SYMBOLSET_VALUE]: LAND_VALUES,
  [EQUIPMENT_SYMBOLSET_VALUE]: LAND_VALUES,
  [DISMOUNTED_SYMBOLSET_VALUE]: {
    AB: 1, AC: 1, AF: 1,
    A: 1, D: 1, G: 1, H: 1, J: 1, K: 1, M: 1,
    P: 1, Q: 1, R: 1, T: 1, V: 1, W: 1, X: 1, Y: 1, Z: 1
  },
  [INSTALLATION_SYMBOLSET_VALUE]: LAND_VALUES,
  [SURFACE_SYMBOLSET_VALUE]: SEA_VALUES,
  [SUBSURFACE_SYMBOLSET_VALUE]: SEA_VALUES,
  [MINE_SYMBOLSET_VALUE]: SEA_VALUES,
  [ACTIVITY_SYMBOLSET_VALUE]: {AS: 1, G: 1, H: 1, J: 1, S: 1, W: 1, Y: 1},
  [CONTROLMEASURE_SYMBOLSET_VALUE]: {
    AM: 1, AN: 1, AP: 1, AS: 1,
    A: 1, B: 1, C: 1, H: 1, N: 1, Q: 1, S: 1, T: 1, V: 1, W: 1, X: 1, Y: 1, Z: 1
  }
};
