// Values based on code from https://github.com/spatialillusions/milsymbol-generator

export const UNIT_SYMBOLSET_VALUE = '10';
export const DISMOUNTED_SYMBOLSET_VALUE = '27';
export const SURFACE_SYMBOLSET_VALUE = '30';
export const SUBSURFACE_SYMBOLSET_VALUE = '35';

export const contextValues = [
  {value: '0', text: 'Reality'},
  {value: '1', text: 'Exercise',},
  {value: '2', text: 'Simulation'},
];

export const sidValues = [
  {value: '0', text: 'Pending'},
  {value: '1', text: 'Unknown',},
  {value: '2', text: 'Assumed Friend'},
  {value: '3', text: 'Friend'},
  {value: '4', text: 'Neutral'},
  {value: '5', text: 'Suspect/Joker'},
  {value: '6', text: 'Hostile/Faker'},
];

export const HQTFDummyValues = [
  {value: '0', text: 'Not Applicable'},
  {value: '1', text: 'Feint/Dummy',},
  {value: '2', text: 'Headquarters'},
  {value: '3', text: 'Feint/Dummy Headquarters'},
  {value: '4', text: 'Task Force'},
  {value: '5', text: 'Feint/Dummy Task Force'},
  {value: '6', text: 'Task Force Headquarters'},
  {value: '7', text: 'Feint/Dummy Task Force Headquarters'}
];

export const statusValues = [
  {value: '0', text: 'Present'},
  {value: '1', text: 'Planned/Anticipated/Suspect'},
  {value: '2', text: 'Present/Fully capable'},
  {value: '3', text: 'Present/Damaged'},
  {value: '4', text: 'Present/Destroyed'},
  {value: '5', text: 'Present/Full to capacity'}
];

export const echelonValues = [
  {value: '00', text: 'Unspecified'},
  {value: '11', text: 'Team/Crew'},
  {value: '12', text: 'Squad'},
  {value: '13', text: 'Section'},
  {value: '14', text: 'Platoon/Detachment'},
  {value: '15', text: 'Company/Battery/Troop'},
  {value: '16', text: 'Battalion/Squadron'},
  {value: '17', text: 'Regiment/Group'},
  {value: '18', text: 'Brigade'},
  {value: '21', text: 'Division'},
  {value: '22', text: 'Corps/MEF'},
  {value: '23', text: 'Army'},
  {value: '24', text: 'Army Group/Front'},
  {value: '25', text: 'Region/Theater'},
  {value: '26', text: 'Command'}
];

export const EQUIPMENT_SYMBOLSET_VALUE = '15';
export const mobilityValues = [
  {value: '00', text: 'Unspecified'},
  {value: '31', text: 'Wheeled limited cross country'},
  {value: '32', text: 'Wheeled cross country'},
  {value: '33', text: 'Tracked'},
  {value: '34', text: 'Wheeled and tracked combination'},
  {value: '35', text: 'Towed'},
  {value: '36', text: 'Railway'},
  {value: '37', text: 'Pack animals'},
  {value: '41', text: 'Over snow (prime mover)'},
  {value: '42', text: 'Sled'},
  {value: '51', text: 'Barge'},
  {value: '52', text: 'Amphibious'}
];

export const leadershipValues = [
  {value: '00', text: 'Unspecified'},
  {value: '71', text: 'Leader'}
];


export const towedArrayValues = [
  {value: '00', text: 'Unspecified'},
  {value: '61', text: 'Short towed array'},
  {value: '62', text: 'Long towed array'}
];
