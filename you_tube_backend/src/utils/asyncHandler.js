//  promises wala part

const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(res, req, next).catch((error) => next(error));
  };
};

export { asyncHandler };

// try catch wal part
// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     res.status(err.code || 500).json({
//       success: false,
//       message: err.message,
//     });
//     console.log();
//   }
// };
