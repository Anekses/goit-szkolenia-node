const calc = (first, second, action) => {
  if (action === "add") {
    return first + second;
  }

  if (action === "multi") {
    return first * second;
  }

  return 0;
};

module.exports = {
  calc,
};
