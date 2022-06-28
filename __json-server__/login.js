module.exports = (req, res, next) => {
  if (req.path === '/login' && req.method === 'POST') {
    const { username, pwd } = req.body;
    if (username === 'hmf' && pwd === '123456') {
      res.status(200).json({
        token: 'ewghfccffghj'
      })
    } else {
      res.status(401).json({
        mes: 'fuck'
      })
    }
  }
  next();
}
