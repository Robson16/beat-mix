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

const clear = (drumType) => {
  if (typeof drumType !== 'string') {
    return;
  }

  if (!['kicks', 'snares', 'hiHats', 'rideCymbals'].includes(drumType)) {
    return;
  }

  switch (drumType) {
    case 'kicks':
      kicks.fill(false);
      break;
    case 'snares':
      snares.fill(false);
      break;
    case 'hiHats':
      hiHats.fill(false);
      break;
    case 'rideCymbals':
      rideCymbals.fill(false);
      break;
  }
}

const invert = (drumType) => {
  if (typeof drumType !== 'string') {
    return;
  }

  if (!['kicks', 'snares', 'hiHats', 'rideCymbals'].includes(drumType)) {
    return;
  }

  switch (drumType) {
    case 'kicks':
      kicks = kicks.map((val) => !val);
      break;
    case 'snares':
      snares = snares.map((val) => !val);
      break;
    case 'hiHats':
      hiHats = hiHats.map((val) => !val);
      break;
    case 'rideCymbals':
      rideCymbals = rideCymbals.map((val) => !val);
      break;
  }
}

const getNeighborPads = (x, y, size) => {
  const neighborPads = [];

  if (x < 0 || x >= size || y < 0 || y >= size || size <= 0) {
    return neighborPads;
  }

  if (x - 1 >= 0) {
    neighborPads.push([x - 1, y]); // Left
  }

  if (x + 1 < size) {
    neighborPads.push([x + 1, y]); // Right
  }

  if (y - 1 >= 0) {
    neighborPads.push([x, y - 1]); // Bottom
  }

  if (y + 1 < size) {
    neighborPads.push([x, y + 1]); // Top
  }

  return neighborPads;
}