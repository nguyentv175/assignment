export default function (req, res, next) {
  console.log('authorization');
  next();
}
