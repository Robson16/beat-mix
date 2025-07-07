// Drum Arrays
let kicks = new Array(16).fill(false);
let snares = new Array(16).fill(false);
let hiHats = new Array(16).fill(false);
let rideCymbals = new Array(16).fill(false);

const toggleDrum = (drumType, index) => {
  if (index < 0 || index >= 16) {
    return;
  }

  if (typeof drumType !== 'string') {
    return;
  }

  if (!['kicks', 'snares', 'hiHats', 'rideCymbals'].includes(drumType)) {
    return;
  }

  switch (drumType) {
    case 'kicks':
      kicks[index] = !kicks[index];
      break;
    case 'snares':
      snares[index] = !snares[index];
      break;
    case 'hiHats':
      hiHats[index] = !hiHats[index];
      break;
    case 'rideCymbals':
      rideCymbals[index] = !rideCymbals[index];
      break;
  }
}