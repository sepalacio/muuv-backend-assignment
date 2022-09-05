const swapProps = (entries) => entries.reduce(
  (acc, [key, value]) => {
    acc[value] = key;
    return acc;
  },
  {},
);

/**
  * Swaps object keys with values
  * @param {Object} object
  * @returns {Object}
*/
const swapObjectProps = (object) => {
  const objectEntries = Object.entries(object);
  const swapObject = swapProps(objectEntries);

  return swapObject;
};

module.exports = swapObjectProps;
