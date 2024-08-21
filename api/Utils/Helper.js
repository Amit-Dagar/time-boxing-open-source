// Wrapper function to handle errors in async functions
exports.tryCatch = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    console.error(error);
    console.error("ERROR: " + error.message);
    next(error);
  }
};
