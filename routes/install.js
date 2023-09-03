module.exports = (req, res) => {
  console.log('Initialising HubSpot app install');
  res.redirect(process.env.APP_INSTALL_URL);
}
