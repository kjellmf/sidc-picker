export const AMPLIFIERS = [
  {
    amplifierId: "additionalInformation", label: "Additional Information", description: "A text modifier for units, equipment, and installations; content is implementation specific.",
    field: "H", maxLength: 20
  },


  {
    amplifierId: "altitudeDepth", label: "Altitude/depth", description: "A text modifier for units, equipment, and installations, that displays either altitude flight level, depth for submerged objects; or height of equipment or structures on the ground.",
    field: "X", maxLength: 14
  },

  {
    amplifierId: "combatEffectiveness", label: "Combat Effectiveness", description: "A text modifier for units and installations that indicates unit effectiveness or installation capability",
    field: "K", maxLength: 5
  },
  {amplifierId: "commonIdentifier", label:"Common Identifier",	description:"Example: \"Hawk\" for Hawk SAM system.",
  field:"AF"}
]    