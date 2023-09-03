module.exports = (req, res) => {
  console.log('Execute');
  res.json({ ...req });
}
