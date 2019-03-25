export default function (req, res, next) {
    const { authorization } = req.headers;
    if (authorization === 'abc') return next();
    res.send({
        err: 401,
        message: "Authenticate fail"
    });
}

