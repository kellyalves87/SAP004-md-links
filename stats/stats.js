const stats = (array) => {
  const setLinks = array.map((item) => item.href);
  const set = new Set(setLinks);
  return "Unique: " + set.size + " All: " + array.length;
};

exports.stats = stats;
