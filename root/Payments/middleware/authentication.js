export default function (req, res, next) {
  const { authorization } = req.headers;
  console.log(authorization, req.headers)
  if (authorization === 'abc') return next();
  console.log('next');
  return res.send({
    err: 401,
    message: 'Authenticate fail',
  });
}
