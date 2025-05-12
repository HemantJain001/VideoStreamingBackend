export const asyncHandler = ( requestHandler ) =>{
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((error) => next(error));
    }
};

// // Alternative implementation using async/await
// // This implementation is more readable and easier to understand
// // but it requires the use of async/await syntax in the request handler

// export const asyncHandler = ( fn ) => async (req, res, next) => {
//     try {
//         await fn(req, res, next);
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message || "Internal Server Error",
//         });
//     }
// }