export default function (req, res, next) {
  console.log('authentication');
  next();
}
