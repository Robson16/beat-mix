const presets = require('./presets');

const presetHandler = (method, index, newPresetArray) => {
  if (method !== 'GET' && method !== 'PUT') {
    return [400];
  }

  if (index < 0 || index >= presets.length || !Number.isInteger(index)) {
    return [404];
  }

  if (method === 'GET') {
    return [200, presets[index]];
  }

  if (method === 'PUT') {
    presets[index] = newPresetArray;
    return [200, presets[index]];
  }
}

module.exports = presetHandler;
