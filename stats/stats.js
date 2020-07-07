const stats = (array) => {
    const set = new Set(array);
    return {"Unique": set.size,  "All": array.length};
}

exports.stats = stats;